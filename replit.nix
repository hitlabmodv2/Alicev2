
{ pkgs }: {
  deps = [
    pkgs.nodejs-20_x
    pkgs.nodePackages.npm
    pkgs.python3
    pkgs.cairo
    pkgs.pango
    pkgs.libjpeg
    pkgs.giflib
    pkgs.librsvg
    pkgs.pixman
    pkgs.libuuid
    pkgs.util-linux
    pkgs.pkg-config
    pkgs.gcc
    pkgs.gnumake
    pkgs.glib
    pkgs.zlib
    pkgs.ffmpeg
    pkgs.imagemagick
  ];
  env = {
    LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
      pkgs.libuuid
      pkgs.util-linux
      pkgs.zlib
      pkgs.cairo
      pkgs.pango
      pkgs.libjpeg
      pkgs.giflib
      pkgs.librsvg
      pkgs.pixman
      pkgs.glib
    ];
    PYTHON = "${pkgs.python3}/bin/python";
  };
}
{ pkgs }: {
  deps = [
    pkgs.nodejs-20_x
    pkgs.nodePackages.npm
    pkgs.python3
    pkgs.python3Packages.pip
    pkgs.cairo
    pkgs.pango
    pkgs.libjpeg
    pkgs.giflib
    pkgs.librsvg
    pkgs.pixman
    pkgs.libuuid
    pkgs.util-linux
    pkgs.pkg-config
    pkgs.gcc
    pkgs.gnumake
    pkgs.glib
    pkgs.zlib
    pkgs.ffmpeg
    pkgs.imagemagick
    pkgs.vips
    pkgs.libwebp
    pkgs.chromium
    pkgs.puppeteer-core
  ];
  env = {
    LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
      pkgs.libuuid
      pkgs.util-linux
      pkgs.zlib
      pkgs.cairo
      pkgs.pango
      pkgs.libjpeg
      pkgs.giflib
      pkgs.librsvg
      pkgs.pixman
      pkgs.glib
      pkgs.vips
      pkgs.libwebp
    ];
    PYTHON = "${pkgs.python3}/bin/python";
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD = "true";
    PUPPETEER_EXECUTABLE_PATH = "${pkgs.chromium}/bin/chromium";
  };
}
