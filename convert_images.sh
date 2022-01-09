#!/bin/bash
echo "Raster"
for fname in ./public/img/raster/*; do convert -resize 'x1024' -quality 80 "${fname}" "${fname%.*}.jpg"; done
echo ""

echo "Vector"
for fname in ./public/img/vector/*; do convert -resize 'x1024' -quality 80 "${fname}" "${fname%.*}.jpg"; done
echo ""

echo "Sketch"
for fname in ./public/img/sketch/*; do convert -resize 'x1024' -quality 80 "${fname}" "${fname%.*}.jpg"; done
echo ""
