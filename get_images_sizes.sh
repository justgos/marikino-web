#!/bin/bash
echo "Raster"
for fname in ./public/img/raster/*; do identify -format "{ path: '%f', size: [ %w, %h ] },\n" $fname; done
echo ""

echo "Vector"
for fname in ./public/img/vector/*; do identify -format "{ path: '%f', size: [ %w, %h ] },\n" $fname; done
echo ""

echo "Sketch"
for fname in ./public/img/sketch/*; do identify -format "{ path: '%f', size: [ %w, %h ] },\n" $fname; done
echo ""
