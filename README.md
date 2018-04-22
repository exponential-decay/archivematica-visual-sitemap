# Archivematica Visual Sitemap Generator

A tool to walkthrough the various Archivematica screens and generate a visual
sitemap or index. The tool may for example be used to analyse the space
available in the system for custom pages and features to be added, e.g. for
appraisal and selection. It may also prove useful in the training of user's in
the system's capabilities.

## HTTPreserve

The tool extends httpreserve's [phantomjsscreenshot](https://github.com/httpreserve/phantomjsscreenshot) to enable login to Archivematica.

Make sure phantomjsscreensot has been downloaded and is available on your system.

Copy httpreserve.js from this repository to `/usr/js/httpreserve.js` so that
phantomjsscreenshot can see it and call it.

Credit to the rendering solution goes to this thread here: https://gist.github.com/ecin/2473860#gistcomment-979537 and the additional timeout to here: https://stackoverflow.com/a/14749015

## License

GPLv3
