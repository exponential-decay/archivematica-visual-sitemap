# Archivematica Visual Sitemap Generator

A tool to walkthrough the various Archivematica screens and generate a visual
sitemap, or index. The tool may for example be used to analyze the space
available in the system for custom pages and features to be added, e.g. for
appraisal and selection. It may also prove useful in the training of user's in
the system's capabilities. Given an overview of every page in the system like
this, there may also be some end-user testing benefits as well, e.g. if a page
does not seem to be displayed correctly.

## Result

The output is a visual index of Archivematica: [Archivematica Sitemap Reference](sitemap-reference.md)

If GitHub doesn't render this correctly, you can see a [HTM preview](https://htmlpreview.github.io/?https://raw.githubusercontent.com/exponential-decay/archivematica-visual-sitemap/master/sitemap-preview.htm) of it which has
restricted functionality, but might still be a good reference.

## Format

Currently the script outputs [Markdown](http://fileformats.archiveteam.org/wiki/Markdown)
using [Base64](https://www.base64-image.de/) encoded embedded images. This removes
the need for dependencies, but results in a slightly larger file. The amount of
wrapping required for markdown is small and so it can be untangled again in future
pretty easily. We might for example want to output JSON containing the embedded
images to be parsed into a more generic encoder for this type of sitemap data.

Because the current format is markdown; specific sections can be bookmarked when
viewed in a markdown viewer. See this [Validation Script](sitemap-reference.md#fpr-policy-tool-command) as a good example.

## HTTPreserve

The tool extends httpreserve's [PhantomJSScreenshot](https://github.com/httpreserve/PhantomJSScreenshot) to enable login to Archivematica.

Make sure PhantomJSScreenshot has been downloaded and is available on your system.

Copy `httpreserve.js` from this repository to `/usr/js/httpreserve.js` so that
[PhantomJSScreenshot](https://github.com/httpreserve/PhantomJSScreenshot) can
see it and call it.

Credit to the rendering solution goes to this thread here: https://gist.github.com/ecin/2473860#gistcomment-979537 and the additional timeout to here: https://stackoverflow.com/a/14749015

## TODO

* **Page load times** Some pages are a bit laggy when loading and so the set
timeout in the JavaScript invariably turns out to not be long enough. Have a look a the Archivematica source for pages, such as those in the FPR, and see what is taking the time.

* **User friendly setup** See if someone else is able to setup this tool, and
possibly do so one one of the QA servers where the content will be richer.

* **Sub-page descriptions** Add descriptions to the various smaller sub-pages
as these all might be useful as well.

* **More FPR Examples** There are a number of sub-pages associated with the FPR.
I have selected some of the ones I felt most interesting. More content is
always good.

* **Improve the JS** The httpreserve.js component is a little hard-coded. Pull
out authentication variables and make the format and quality easier to configure.
PhantomJSScreenshot also has a part to play in image quality so some refactoring
there might also be useful.

## License

[GPLv3](LICENSE)
