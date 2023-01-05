const MimeTypes = Object.freeze({
    Application: (prefix => Object.freeze({
        AtomXml: prefix + "atom+xml",
        AtomcatXml: prefix + "atomcat+xml",
        Ecmascript: prefix + "ecmascript",
        EpubZip: prefix + "epub+zip",
        Gzip: prefix + "gzip",
        JavaArchive: prefix + "java-archive",
        Javascript: prefix + "javascript",
        Json: prefix + "json",
        LdJson: prefix + "ld+json",
        Mp4: prefix + "mp4",
        Msword: prefix + "msword",
        OctetStream: prefix + "octet-stream",
        Ogg: prefix + "ogg",
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
        VndAmazonEbook: prefix + "vnd.amazon.ebook",
        VndAppleInstallerXml: prefix + "vnd.apple.installer+xml",
        VndMozillaXulXml: prefix + "vnd.mozilla.xul+xml",
        VndMsExcel: prefix + "vnd.ms-excel",
        VndMsFontobject: prefix + "vnd.ms-fontobject",
        VndMsPowerpoint: prefix + "vnd.ms-powerpoint",
        VndOasisOpendocumentPresentation: prefix + "vnd.oasis.opendocument.presentation",
        VndOasisOpendocumentSpreadsheet: prefix + "vnd.oasis.opendocument.spreadsheet",
        VndOasisOpendocumentText: prefix + "vnd.oasis.opendocument.text",
        VndOpenxmlformatsOfficedocumentPresentationmlPresentation: prefix + "vnd.openxmlformats-officedocument.presentationml.presentation",
        VndOpenxmlformatsOfficedocumentSpreadsheetmlSheet: prefix + "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        VndOpenxmlformatsOfficedocumentWordprocessingmlDocument: prefix + "vnd.openxmlformats-officedocument.wordprocessingml.document",
        VndRar: prefix + "vnd.rar",
        VndVisio: prefix + "vnd.visio",
        X7zCompressed: prefix + "x-7z-compressed",
        XAbiword: prefix + "x-abiword",
        XBzip: prefix + "x-bzip",
        XBzip2: prefix + "x-bzip2",
        XCdf: prefix + "x-cdf",
        XCsh: prefix + "x-csh",
        XFontOff: prefix + "x-font-off",
        XFreearc: prefix + "x-freearc",
        XhtmlXml: prefix + "xhtml+xml",
        XHttpdPhp: prefix + "x-httpd-php",
        Xml: prefix + "xml",
        XmlDtd: prefix + "xml-dtd",
        XPkcs12: prefix + "x-pkcs12",
        XSh: prefix + "x-sh",
        XShockwaveFlash: prefix + "x-shockwave-flash",
        XSilverlightApp: prefix + "x-silverlight-app",
        XsltXml: prefix + "xslt+xml",
        XTar: prefix + "x-tar",
        XWwwFormUrlencoded: prefix + "x-www-form-urlencoded",
        Zip: prefix + "zip"
    }))("application/"),

    Audio: (prefix => Object.freeze({
        Midi: prefix + "midi",
        Mp4: prefix + "mp4",
        Mpeg: prefix + "mpeg",
        Ogg: prefix + "ogg",
        Opus: prefix + "opus",
        Threegpp: prefix + "3gpp",
        Threegpp2: prefix + "3gpp2",
        Wav: prefix + "wav",
        Webm: prefix + "webm",
        XAac: prefix + "x-aac",
        XAiff: prefix + "x-aiff",
        XMidi: prefix + "x-midi",
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