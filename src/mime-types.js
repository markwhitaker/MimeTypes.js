"use strict";

const MimeTypes = Object.freeze({
    Application: (prefix => Object.freeze({
        AtomXml: prefix + "atom+xml",
        AtomcatXml: prefix + "atomcat+xml",
        Ecmascript: prefix + "ecmascript",
        JavaArchive: prefix + "java-archive",
        Javascript: prefix + "javascript",
        Json: prefix + "json",
        Mp4: prefix + "mp4",
        OctetStream: prefix + "octet-stream",
        Pdf: prefix + "pdf",
        Pkcs10: prefix + "pkcs10",
        Pkcs7Mime: prefix + "pkcs7-mime",
        Pkcs7Signature: prefix + "pkcs7-signature",
        Pkcs8: prefix + "pkcs8",
        Postscript: prefix + "postscript",
        RdfXml: prefix + "rdf+xml",
        RssXml: prefix + "rss+xml",
        Rtf: prefix + "rtf",
        SmilXml: prefix + "smil+xml",
        XFontOff: prefix + "x-font-off",
        XPkcs12: prefix + "x-pkcs12",
        XShockwaveFlash: prefix + "x-shockwave-flash",
        XSilverlightApp: prefix + "x-silverlight-app",
        XhtmlXml: prefix + "xhtml+xml",
        Xml: prefix + "xml",
        XmlDtd: prefix + "xml-dtd",
        XsltXml: prefix + "xslt+xml",
        XWwwFormUrlencoded: prefix + "x-www-form-urlencoded",
        Zip: prefix + "zip"
    }))("application/"),

    Audio: (prefix => Object.freeze({
        Midi: prefix + "midi",
        Mp4: prefix + "mp4",
        Mpeg: prefix + "mpeg",
        Ogg: prefix + "ogg",
        Wav: prefix + "wav",
        Webm: prefix + "webm",
        XAac: prefix + "x-aac",
        XAiff: prefix + "x-aiff",
        XMpegurl: prefix + "x-mpegurl",
        XMsWma: prefix + "x-ms-wma",
        XWav: prefix + "x-wav"
    }))("audio/"),

    Font: (prefix => Object.freeze({
        Collection: prefix + "collection",
        Otf: prefix + "otf",
        Sfnt: prefix + "sfnt",
        Ttf: prefix + "ttf",
        Woff: prefix + "woff",
        Woff2: prefix + "woff2"
    }))("font/"),

    Image: (prefix => Object.freeze({
        Bmp: prefix + "bmp",
        Gif: prefix + "gif",
        Jpeg: prefix + "jpeg",
        Png: prefix + "png",
        SvgXml: prefix + "svg+xml",
        Tiff: prefix + "tiff",
        Webp: prefix + "webp"
    }))("image/"),

    Multipart: (prefix => Object.freeze({
        Byteranges: prefix + "byteranges",
        Encrypted: prefix + "encrypted",
        FormData: prefix + "form-data",
        Related: prefix + "related"
    }))("multipart/"),

    Text: (prefix => Object.freeze({
        Css: prefix + "css",
        Csv: prefix + "csv",
        Html: prefix + "html",
        Javascript: prefix + "javascript",
        Plain: prefix + "plain",
        Richtext: prefix + "richtext",
        Sgml: prefix + "sgml",
        Xml: prefix + "xml",
        Yaml: prefix + "yaml"
    }))("text/"),

    Video: (prefix => Object.freeze({
        H264: prefix + "h264",
        Mp4: prefix + "mp4",
        Mpeg: prefix + "mpeg",
        Ogg: prefix + "ogg",
        Quicktime: prefix + "quicktime",
        ThreeGpp: prefix + "3gpp",
        Webm: prefix + "webm"
    }))("video/")
});

export default MimeTypes;