"use strict";

import {describe, test, expect} from "bun:test";
import {MimeTypes} from "../index.js";

describe("MimeTypes.Application", () => {
    test("application/atom+xml", () => expect(MimeTypes.Application.AtomXml).toBe("application/atom+xml"));
    test("application/atomcat+xml", () => expect(MimeTypes.Application.AtomcatXml).toBe("application/atomcat+xml"));
    test("application/ecmascript", () => expect(MimeTypes.Application.Ecmascript).toBe("application/ecmascript"));
    test("application/epub+zip", () => expect(MimeTypes.Application.EpubZip).toBe("application/epub+zip"));
    test("application/gzip", () => expect(MimeTypes.Application.Gzip).toBe("application/gzip"));
    test("application/java-archive", () => expect(MimeTypes.Application.JavaArchive).toBe("application/java-archive"));
    test("application/javascript", () => expect(MimeTypes.Application.Javascript).toBe("application/javascript"));
    test("application/json", () => expect(MimeTypes.Application.Json).toBe("application/json"));
    test("application/ld+json", () => expect(MimeTypes.Application.LdJson).toBe("application/ld+json"));
    test("application/mp4", () => expect(MimeTypes.Application.Mp4).toBe("application/mp4"));
    test("application/msword", () => expect(MimeTypes.Application.Msword).toBe("application/msword"));
    test("application/octet-stream", () => expect(MimeTypes.Application.OctetStream).toBe("application/octet-stream"));
    test("application/ogg", () => expect(MimeTypes.Application.Ogg).toBe("application/ogg"));
    test("application/pdf", () => expect(MimeTypes.Application.Pdf).toBe("application/pdf"));
    test("application/pkcs10", () => expect(MimeTypes.Application.Pkcs10).toBe("application/pkcs10"));
    test("application/pkcs7-mime", () => expect(MimeTypes.Application.Pkcs7Mime).toBe("application/pkcs7-mime"));
    test("application/pkcs7-signature", () => expect(MimeTypes.Application.Pkcs7Signature).toBe("application/pkcs7-signature"));
    test("application/pkcs8", () => expect(MimeTypes.Application.Pkcs8).toBe("application/pkcs8"));
    test("application/postscript", () => expect(MimeTypes.Application.Postscript).toBe("application/postscript"));
    test("application/rdf+xml", () => expect(MimeTypes.Application.RdfXml).toBe("application/rdf+xml"));
    test("application/rss+xml", () => expect(MimeTypes.Application.RssXml).toBe("application/rss+xml"));
    test("application/rtf", () => expect(MimeTypes.Application.Rtf).toBe("application/rtf"));
    test("application/smil+xml", () => expect(MimeTypes.Application.SmilXml).toBe("application/smil+xml"));
    test("application/vnd.amazon.ebook", () => expect(MimeTypes.Application.VndAmazonEbook).toBe("application/vnd.amazon.ebook"));
    test("application/vnd.apple.installer+xml", () => expect(MimeTypes.Application.VndAppleInstallerXml).toBe("application/vnd.apple.installer+xml"));
    test("application/vnd.mozilla.xul+xml", () => expect(MimeTypes.Application.VndMozillaXulXml).toBe("application/vnd.mozilla.xul+xml"));
    test("application/vnd.ms-excel", () => expect(MimeTypes.Application.VndMsExcel).toBe("application/vnd.ms-excel"));
    test("application/vnd.ms-fontobject", () => expect(MimeTypes.Application.VndMsFontobject).toBe("application/vnd.ms-fontobject"));
    test("application/vnd.ms-powerpoint", () => expect(MimeTypes.Application.VndMsPowerpoint).toBe("application/vnd.ms-powerpoint"));
    test("application/vnd.oasis.opendocument.presentation", () => expect(MimeTypes.Application.VndOasisOpendocumentPresentation).toBe("application/vnd.oasis.opendocument.presentation"));
    test("application/vnd.oasis.opendocument.spreadsheet", () => expect(MimeTypes.Application.VndOasisOpendocumentSpreadsheet).toBe("application/vnd.oasis.opendocument.spreadsheet"));
    test("application/vnd.oasis.opendocument.text", () => expect(MimeTypes.Application.VndOasisOpendocumentText).toBe("application/vnd.oasis.opendocument.text"));
    test("application/vnd.openxmlformats-officedocument.presentationml.presentation", () => expect(MimeTypes.Application.VndOpenxmlformatsOfficedocumentPresentationmlPresentation).toBe("application/vnd.openxmlformats-officedocument.presentationml.presentation"));
    test("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", () => expect(MimeTypes.Application.VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet).toBe("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"));
    test("application/vnd.openxmlformats-officedocument.wordprocessingml.document", () => expect(MimeTypes.Application.VndOpenxmlformatsOfficedocumentWordprocessingmlDocument).toBe("application/vnd.openxmlformats-officedocument.wordprocessingml.document"));
    test("application/vnd.rar", () => expect(MimeTypes.Application.VndRar).toBe("application/vnd.rar"));
    test("application/vnd.visio", () => expect(MimeTypes.Application.VndVisio).toBe("application/vnd.visio"));
    test("application/x-7z-compressed", () => expect(MimeTypes.Application.X7zCompressed).toBe("application/x-7z-compressed"));
    test("application/x-abiword", () => expect(MimeTypes.Application.XAbiword).toBe("application/x-abiword"));
    test("application/x-bzip", () => expect(MimeTypes.Application.XBzip).toBe("application/x-bzip"));
    test("application/x-bzip2", () => expect(MimeTypes.Application.XBzip2).toBe("application/x-bzip2"));
    test("application/x-cdf", () => expect(MimeTypes.Application.XCdf).toBe("application/x-cdf"));
    test("application/x-csh", () => expect(MimeTypes.Application.XCsh).toBe("application/x-csh"));
    test("application/x-font-off", () => expect(MimeTypes.Application.XFontOff).toBe("application/x-font-off"));
    test("application/x-freearc", () => expect(MimeTypes.Application.XFreearc).toBe("application/x-freearc"));
    test("application/xhtml+xml", () => expect(MimeTypes.Application.XhtmlXml).toBe("application/xhtml+xml"));
    test("application/x-httpd-php", () => expect(MimeTypes.Application.XHttpdPhp).toBe("application/x-httpd-php"));
    test("application/xml", () => expect(MimeTypes.Application.Xml).toBe("application/xml"));
    test("application/xml-dtd", () => expect(MimeTypes.Application.XmlDtd).toBe("application/xml-dtd"));
    test("application/x-pkcs12", () => expect(MimeTypes.Application.XPkcs12).toBe("application/x-pkcs12"));
    test("application/x-shockwave-flash", () => expect(MimeTypes.Application.XShockwaveFlash).toBe("application/x-shockwave-flash"));
    test("application/x-sh", () => expect(MimeTypes.Application.XSh).toBe("application/x-sh"));
    test("application/x-silverlight-app", () => expect(MimeTypes.Application.XSilverlightApp).toBe("application/x-silverlight-app"));
    test("application/xslt+xml", () => expect(MimeTypes.Application.XsltXml).toBe("application/xslt+xml"));
    test("application/x-tar", () => expect(MimeTypes.Application.XTar).toBe("application/x-tar"));
    test("application/x-www-form-urlencoded", () => expect(MimeTypes.Application.XWwwFormUrlencoded).toBe("application/x-www-form-urlencoded"));
    test("application/zip", () => expect(MimeTypes.Application.Zip).toBe("application/zip"));
});

describe("MimeTypes.Audio", () => {
    test("audio/midi", () => expect(MimeTypes.Audio.Midi).toBe("audio/midi"));
    test("audio/mp4", () => expect(MimeTypes.Audio.Mp4).toBe("audio/mp4"));
    test("audio/mpeg", () => expect(MimeTypes.Audio.Mpeg).toBe("audio/mpeg"));
    test("audio/ogg", () => expect(MimeTypes.Audio.Ogg).toBe("audio/ogg"));
    test("audio/opus", () => expect(MimeTypes.Audio.Opus).toBe("audio/opus"));
    test("audio/3gpp", () => expect(MimeTypes.Audio.Threegpp).toBe("audio/3gpp"));
    test("audio/3gpp2", () => expect(MimeTypes.Audio.Threegpp2).toBe("audio/3gpp2"));
    test("audio/wav", () => expect(MimeTypes.Audio.Wav).toBe("audio/wav"));
    test("audio/webm", () => expect(MimeTypes.Audio.Webm).toBe("audio/webm"));
    test("audio/x-aac", () => expect(MimeTypes.Audio.XAac).toBe("audio/x-aac"));
    test("audio/x-aiff", () => expect(MimeTypes.Audio.XAiff).toBe("audio/x-aiff"));
    test("audio/x-midi", () => expect(MimeTypes.Audio.XMidi).toBe("audio/x-midi"));
    test("audio/x-mpegurl", () => expect(MimeTypes.Audio.XMpegurl).toBe("audio/x-mpegurl"));
    test("audio/x-ms-wma", () => expect(MimeTypes.Audio.XMsWma).toBe("audio/x-ms-wma"));
    test("audio/x-wav", () => expect(MimeTypes.Audio.XWav).toBe("audio/x-wav"));
});

describe("MimeTypes.Font", () => {
    test("font/collection", () => expect(MimeTypes.Font.Collection).toBe("font/collection"));
    test("font/otf", () => expect(MimeTypes.Font.Otf).toBe("font/otf"));
    test("font/sfnt", () => expect(MimeTypes.Font.Sfnt).toBe("font/sfnt"));
    test("font/ttf", () => expect(MimeTypes.Font.Ttf).toBe("font/ttf"));
    test("font/woff", () => expect(MimeTypes.Font.Woff).toBe("font/woff"));
    test("font/woff2", () => expect(MimeTypes.Font.Woff2).toBe("font/woff2"));
});

describe("MimeTypes.Image", () => {
    test("image/avif", () => expect(MimeTypes.Image.Avif).toBe("image/avif"));
    test("image/bmp", () => expect(MimeTypes.Image.Bmp).toBe("image/bmp"));
    test("image/gif", () => expect(MimeTypes.Image.Gif).toBe("image/gif"));
    test("image/jpeg", () => expect(MimeTypes.Image.Jpeg).toBe("image/jpeg"));
    test("image/png", () => expect(MimeTypes.Image.Png).toBe("image/png"));
    test("image/svg+xml", () => expect(MimeTypes.Image.SvgXml).toBe("image/svg+xml"));
    test("image/tiff", () => expect(MimeTypes.Image.Tiff).toBe("image/tiff"));
    test("image/vnd.microsoft.icon", () => expect(MimeTypes.Image.VndMicrosoftIcon).toBe("image/vnd.microsoft.icon"));
    test("image/webp", () => expect(MimeTypes.Image.Webp).toBe("image/webp"));
});

describe("MimeTypes.Multipart", () => {
    test("multipart/byteranges", () => expect(MimeTypes.Multipart.Byteranges).toBe("multipart/byteranges"));
    test("multipart/encrypted", () => expect(MimeTypes.Multipart.Encrypted).toBe("multipart/encrypted"));
    test("multipart/form-data", () => expect(MimeTypes.Multipart.FormData).toBe("multipart/form-data"));
    test("multipart/related", () => expect(MimeTypes.Multipart.Related).toBe("multipart/related"));
});

describe("MimeTypes.Text", () => {
    test("text/calendar", () => expect(MimeTypes.Text.Calendar).toBe("text/calendar"));
    test("text/css", () => expect(MimeTypes.Text.Css).toBe("text/css"));
    test("text/csv", () => expect(MimeTypes.Text.Csv).toBe("text/csv"));
    test("text/html", () => expect(MimeTypes.Text.Html).toBe("text/html"));
    test("text/javascript", () => expect(MimeTypes.Text.Javascript).toBe("text/javascript"));
    test("text/plain", () => expect(MimeTypes.Text.Plain).toBe("text/plain"));
    test("text/richtext", () => expect(MimeTypes.Text.Richtext).toBe("text/richtext"));
    test("text/sgml", () => expect(MimeTypes.Text.Sgml).toBe("text/sgml"));
    test("text/xml", () => expect(MimeTypes.Text.Xml).toBe("text/xml"));
    test("text/yaml", () => expect(MimeTypes.Text.Yaml).toBe("text/yaml"));
});

describe("MimeTypes.Video", () => {
    test("video/h264", () => expect(MimeTypes.Video.H264).toBe("video/h264"));
    test("video/mp2t", () => expect(MimeTypes.Video.Mp2t).toBe("video/mp2t"));
    test("video/mp4", () => expect(MimeTypes.Video.Mp4).toBe("video/mp4"));
    test("video/mpeg", () => expect(MimeTypes.Video.Mpeg).toBe("video/mpeg"));
    test("video/ogg", () => expect(MimeTypes.Video.Ogg).toBe("video/ogg"));
    test("video/quicktime", () => expect(MimeTypes.Video.Quicktime).toBe("video/quicktime"));
    test("video/3gpp", () => expect(MimeTypes.Video.ThreeGpp).toBe("video/3gpp"));
    test("video/3gpp2", () => expect(MimeTypes.Video.ThreeGpp2).toBe("video/3gpp2"));
    test("video/webm", () => expect(MimeTypes.Video.Webm).toBe("video/webm"));
    test("video/x-msvideo", () => expect(MimeTypes.Video.XMsvideo).toBe("video/x-msvideo"));
});
