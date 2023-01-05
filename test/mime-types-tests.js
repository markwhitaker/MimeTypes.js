"use strict";

import {MimeTypes} from "../index.js";

QUnit.module("MimeTypes");

assertEqual("application/atom+xml", MimeTypes.Application.AtomXml);
assertEqual("application/atomcat+xml", MimeTypes.Application.AtomcatXml);
assertEqual("application/ecmascript", MimeTypes.Application.Ecmascript);
assertEqual("application/epub+zip", MimeTypes.Application.EpubZip);
assertEqual("application/gzip", MimeTypes.Application.Gzip);
assertEqual("application/java-archive", MimeTypes.Application.JavaArchive);
assertEqual("application/javascript", MimeTypes.Application.Javascript);
assertEqual("application/json", MimeTypes.Application.Json);
assertEqual("application/ld+json", MimeTypes.Application.LdJson);
assertEqual("application/mp4", MimeTypes.Application.Mp4);
assertEqual("application/msword", MimeTypes.Application.Msword);
assertEqual("application/octet-stream", MimeTypes.Application.OctetStream);
assertEqual("application/ogg", MimeTypes.Application.Ogg);
assertEqual("application/pdf", MimeTypes.Application.Pdf);
assertEqual("application/pkcs10", MimeTypes.Application.Pkcs10);
assertEqual("application/pkcs7-mime", MimeTypes.Application.Pkcs7Mime);
assertEqual("application/pkcs7-signature", MimeTypes.Application.Pkcs7Signature);
assertEqual("application/pkcs8", MimeTypes.Application.Pkcs8);
assertEqual("application/postscript", MimeTypes.Application.Postscript);
assertEqual("application/rdf+xml", MimeTypes.Application.RdfXml);
assertEqual("application/rss+xml", MimeTypes.Application.RssXml);
assertEqual("application/rtf", MimeTypes.Application.Rtf);
assertEqual("application/smil+xml", MimeTypes.Application.SmilXml);
assertEqual("application/vnd.amazon.ebook", MimeTypes.Application.VndAmazonEbook);
assertEqual("application/vnd.apple.installer+xml", MimeTypes.Application.VndAppleInstallerXml);
assertEqual("application/vnd.mozilla.xul+xml", MimeTypes.Application.VndMozillaXulXml);
assertEqual("application/vnd.ms-excel", MimeTypes.Application.VndMsExcel);
assertEqual("application/vnd.ms-fontobject", MimeTypes.Application.VndMsFontobject);
assertEqual("application/vnd.ms-powerpoint", MimeTypes.Application.VndMsPowerpoint);
assertEqual("application/vnd.oasis.opendocument.presentation", MimeTypes.Application.VndOasisOpendocumentPresentation);
assertEqual("application/vnd.oasis.opendocument.spreadsheet", MimeTypes.Application.VndOasisOpendocumentSpreadsheet);
assertEqual("application/vnd.oasis.opendocument.text", MimeTypes.Application.VndOasisOpendocumentText);
assertEqual("application/vnd.openxmlformats-officedocument.presentationml.presentation", MimeTypes.Application.VndOpenxmlformatsOfficedocumentPresentationmlPresentation);
assertEqual("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", MimeTypes.Application.VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet);
assertEqual("application/vnd.openxmlformats-officedocument.wordprocessingml.document", MimeTypes.Application.VndOpenxmlformatsOfficedocumentWordprocessingmlDocument);
assertEqual("application/vnd.rar", MimeTypes.Application.VndRar);
assertEqual("application/vnd.visio", MimeTypes.Application.VndVisio);
assertEqual("application/x-7z-compressed", MimeTypes.Application.X7zCompressed);
assertEqual("application/x-abiword", MimeTypes.Application.XAbiword);
assertEqual("application/x-bzip", MimeTypes.Application.XBzip);
assertEqual("application/x-bzip2", MimeTypes.Application.XBzip2);
assertEqual("application/x-cdf", MimeTypes.Application.XCdf);
assertEqual("application/x-csh", MimeTypes.Application.XCsh);
assertEqual("application/x-font-off", MimeTypes.Application.XFontOff);
assertEqual("application/x-freearc", MimeTypes.Application.XFreearc);
assertEqual("application/xhtml+xml", MimeTypes.Application.XhtmlXml);
assertEqual("application/x-httpd-php", MimeTypes.Application.XHttpdPhp);
assertEqual("application/xml", MimeTypes.Application.Xml);
assertEqual("application/xml-dtd", MimeTypes.Application.XmlDtd);
assertEqual("application/x-pkcs12", MimeTypes.Application.XPkcs12);
assertEqual("application/x-shockwave-flash", MimeTypes.Application.XShockwaveFlash);
assertEqual("application/x-sh", MimeTypes.Application.XSh);
assertEqual("application/x-silverlight-app", MimeTypes.Application.XSilverlightApp);
assertEqual("application/xslt+xml", MimeTypes.Application.XsltXml);
assertEqual("application/x-tar", MimeTypes.Application.XTar);
assertEqual("application/x-www-form-urlencoded", MimeTypes.Application.XWwwFormUrlencoded);
assertEqual("application/zip", MimeTypes.Application.Zip);

assertEqual("audio/midi", MimeTypes.Audio.Midi);
assertEqual("audio/mp4", MimeTypes.Audio.Mp4);
assertEqual("audio/mpeg", MimeTypes.Audio.Mpeg);
assertEqual("audio/ogg", MimeTypes.Audio.Ogg);
assertEqual("audio/opus", MimeTypes.Audio.Opus);
assertEqual("audio/3gpp", MimeTypes.Audio.Threegpp);
assertEqual("audio/3gpp2", MimeTypes.Audio.Threegpp2);
assertEqual("audio/wav", MimeTypes.Audio.Wav);
assertEqual("audio/webm", MimeTypes.Audio.Webm);
assertEqual("audio/x-aac", MimeTypes.Audio.XAac);
assertEqual("audio/x-aiff", MimeTypes.Audio.XAiff);
assertEqual("audio/x-midi", MimeTypes.Audio.XMidi);
assertEqual("audio/x-mpegurl", MimeTypes.Audio.XMpegurl);
assertEqual("audio/x-ms-wma", MimeTypes.Audio.XMsWma);
assertEqual("audio/x-wav", MimeTypes.Audio.XWav);

assertEqual("font/collection", MimeTypes.Font.Collection);
assertEqual("font/otf", MimeTypes.Font.Otf);
assertEqual("font/sfnt", MimeTypes.Font.Sfnt);
assertEqual("font/ttf", MimeTypes.Font.Ttf);
assertEqual("font/woff", MimeTypes.Font.Woff);
assertEqual("font/woff2", MimeTypes.Font.Woff2);

assertEqual("image/avif", MimeTypes.Image.Avif);
assertEqual("image/bmp", MimeTypes.Image.Bmp);
assertEqual("image/gif", MimeTypes.Image.Gif);
assertEqual("image/jpeg", MimeTypes.Image.Jpeg);
assertEqual("image/png", MimeTypes.Image.Png);
assertEqual("image/svg+xml", MimeTypes.Image.SvgXml);
assertEqual("image/tiff", MimeTypes.Image.Tiff);
assertEqual("image/vnd.microsoft.icon", MimeTypes.Image.VndMicrosoftIcon);
assertEqual("image/webp", MimeTypes.Image.Webp);

assertEqual("multipart/byteranges", MimeTypes.Multipart.Byteranges);
assertEqual("multipart/encrypted", MimeTypes.Multipart.Encrypted);
assertEqual("multipart/form-data", MimeTypes.Multipart.FormData);
assertEqual("multipart/related", MimeTypes.Multipart.Related);

assertEqual("text/css", MimeTypes.Text.Css);
assertEqual("text/csv", MimeTypes.Text.Csv);
assertEqual("text/html", MimeTypes.Text.Html);
assertEqual("text/javascript", MimeTypes.Text.Javascript);
assertEqual("text/plain", MimeTypes.Text.Plain);
assertEqual("text/richtext", MimeTypes.Text.Richtext);
assertEqual("text/sgml", MimeTypes.Text.Sgml);
assertEqual("text/xml", MimeTypes.Text.Xml);
assertEqual("text/yaml", MimeTypes.Text.Yaml);

assertEqual("video/h264", MimeTypes.Video.H264);
assertEqual("video/mp4", MimeTypes.Video.Mp4);
assertEqual("video/mpeg", MimeTypes.Video.Mpeg);
assertEqual("video/ogg", MimeTypes.Video.Ogg);
assertEqual("video/quicktime", MimeTypes.Video.Quicktime);
assertEqual("video/3gpp", MimeTypes.Video.ThreeGpp);
assertEqual("video/webm", MimeTypes.Video.Webm);

function assertEqual(expected, actual) {
    QUnit.test("Test " + expected, (assert) => assert.equal(expected, actual));
}
