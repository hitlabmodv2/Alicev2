{ pkgs }: {
  deps = [
    pkgs.nodejs-20_x
    pkgs.ffmpeg
    pkgs.yarn
    pkgs.git
    pkgs.python3
    pkgs.pkg-config
    pkgs.gcc
    pkgs.make
    pkgs.libvips
    pkgs.libpng
    pkgs.libjpeg
    pkgs.zlib
    pkgs.cairo
    pkgs.pango
    pkgs.glib
    pkgs.gdk-pixbuf
  ];
}
