"use strict";

import {MimeTypes} from "../index.js";

QUnit.module("MimeTypes");

assertEqual("application/atom+xml", MimeTypes.Application.AtomXml);
assertEqual("application/atomcat+xml", MimeTypes.Application.AtomcatXml);
assertEqual("application/ecmascript", MimeTypes.Application.Ecmascript);
assertEqual("application/java-archive", MimeTypes.Application.JavaArchive);
assertEqual("application/javascript", MimeTypes.Application.Javascript);
assertEqual("application/json", MimeTypes.Application.Json);
assertEqual("application/mp4", MimeTypes.Application.Mp4);
assertEqual("application/octet-stream", MimeTypes.Application.OctetStream);
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
assertEqual("application/x-font-off", MimeTypes.Application.XFontOff);
assertEqual("application/x-pkcs12", MimeTypes.Application.XPkcs12);
assertEqual("application/x-shockwave-flash", MimeTypes.Application.XShockwaveFlash);
assertEqual("application/x-silverlight-app", MimeTypes.Application.XSilverlightApp);
assertEqual("application/xhtml+xml", MimeTypes.Application.XhtmlXml);
assertEqual("application/xml", MimeTypes.Application.Xml);
assertEqual("application/xml-dtd", MimeTypes.Application.XmlDtd);
assertEqual("application/xslt+xml", MimeTypes.Application.XsltXml);
assertEqual("application/x-www-form-urlencoded", MimeTypes.Application.XWwwFormUrlencoded);
assertEqual("application/zip", MimeTypes.Application.Zip);

assertEqual("audio/midi", MimeTypes.Audio.Midi);
assertEqual("audio/mp4", MimeTypes.Audio.Mp4);
assertEqual("audio/mpeg", MimeTypes.Audio.Mpeg);
assertEqual("audio/ogg", MimeTypes.Audio.Ogg);
assertEqual("audio/wav", MimeTypes.Audio.Wav);
assertEqual("audio/webm", MimeTypes.Audio.Webm);
assertEqual("audio/x-aac", MimeTypes.Audio.XAac);
assertEqual("audio/x-aiff", MimeTypes.Audio.XAiff);
assertEqual("audio/x-mpegurl", MimeTypes.Audio.XMpegurl);
assertEqual("audio/x-ms-wma", MimeTypes.Audio.XMsWma);
assertEqual("audio/x-wav", MimeTypes.Audio.XWav);

assertEqual("font/collection", MimeTypes.Font.Collection);
assertEqual("font/otf", MimeTypes.Font.Otf);
assertEqual("font/sfnt", MimeTypes.Font.Sfnt);
assertEqual("font/ttf", MimeTypes.Font.Ttf);
assertEqual("font/woff", MimeTypes.Font.Woff);
assertEqual("font/woff2", MimeTypes.Font.Woff2);

assertEqual("image/bmp", MimeTypes.Image.Bmp);
assertEqual("image/gif", MimeTypes.Image.Gif);
assertEqual("image/jpeg", MimeTypes.Image.Jpeg);
assertEqual("image/png", MimeTypes.Image.Png);
assertEqual("image/svg+xml", MimeTypes.Image.SvgXml);
assertEqual("image/tiff", MimeTypes.Image.Tiff);
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
