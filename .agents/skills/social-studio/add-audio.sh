#!/bin/sh
# Usage: sh add-audio.sh <video.mp4> <track> [start_seconds]
# Puts <track> (from the site's style-kit/audio/) under a rendered reel, in place.
# Trims to the video length from start_seconds, 0.3 s fade in, 1.5 s fade out,
# loudness -16 LUFS, AAC 48 kHz 128 kbps stereo (Instagram Reels spec). Video stream is copied.
# Re-running on the same video replaces the audio.
set -e
v="$1"; a="$2"; ss="${3:-0}"
[ -f "$v" ] && [ -f "$a" ] || { echo "usage: add-audio.sh <video.mp4> <track> [start_seconds]" >&2; exit 1; }
d=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$v")
fo=$(echo "$d - 1.5" | bc)
tmp="${v%.mp4}.audio-tmp.mp4"
ffmpeg -v error -y -i "$v" -ss "$ss" -i "$a" -map 0:v:0 -map 1:a:0 -c:v copy \
  -af "afade=t=in:d=0.3,afade=t=out:st=$fo:d=1.5,loudnorm=I=-16:TP=-1.5:LRA=11" \
  -c:a aac -ar 48000 -ac 2 -b:a 128k -t "$d" -movflags +faststart "$tmp"
mv "$tmp" "$v"
