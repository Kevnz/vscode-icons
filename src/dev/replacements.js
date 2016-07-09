module.exports = { js: 't.prototype.iconClass = function (s) {if (s.isDirectory) return "folder-icon";var fileclass = "-file-icon file-icon";var dot = s.name.lastIndexOf(".");var e = s.name.substring(dot + 1).toLowerCase();var exts = ["as","htaccess","app","asp","ahk","babelrc","bin","o","a","exe","obj","lib","dll","pyc","bowerrc","bower","c","h","cpp","hpp","cc","cxx","cake","cfm","cfc","lucee","clojure","cjm","coffee","env","ini","makefile","cs","cshtml","css","feature","d","dockerfile","editorconfig","ex","exs","eex","erl","hrl","emakefile","emakerfile","eslintrc","eslintignore","favicon","woff","woff2","ttf","otf","eot","pfa","pfb","sfd","fs","fsx","fsi","gitattributes","gitignore","gitmodules","go","gradle","gruntfile","gulpfile","haml","hbs","handlebars","has","hs","lhs","lit","gf","hxml","htm","html","jpeg","jpg","gif","png","bmp","ionic","jade","pug","java","js","jsp","jl","log","less","license","bil","lsl","lua","md","m","fig","mat","mex","mexn","mexrs6","mn","mum","mx","mx3","rwd","slx","slddc","smv","tikz","xvc","xvc","mustache","mst","nim","nims","cfg","json","nvmrc","npmignore","cma","cmi","ml","mly","ocamlmakefile","perl","php","php1","php2","php3","php4","php5","php6","phps","phpsa","phpt","procfile","ps1","psm1","psd1","epp","py","r","jsx","tsx","robot","rb","gemfile","gemfile","rs","sass","scala","scss","bat","sh","cmd","bash","zsh","fish","sql","tpl","stylelintrc","stylelint.config","styl","svg","swift","tcl","texi","txt","textile","twig","ts",".d.ts","vbhtml","vue","vscodeignore","launch","jsconfig","tsconfig","xml","axml","xaml","yml","yaml","zip","rar","7z","tar","gz","bzip2","xz","bz2"];var specialExt = ["json","ico","js","project","lock","ts"];function sn(ext){var res = ext.replace(/\\./g,"_");if(/^\\d/.test(res)) res = "n" + res;return res + fileclass;}if (specialExt.indexOf(e) >= 0) {var special = ["bower","favicon","gruntfile","gulpfile","ionic","gemfile","stylelint.config",".d.ts","vscodeignore","launch","jsconfig","tsconfig"];var f = s.name.substring(0, dot).toLowerCase();for(var kk=0, len=special.length; kk<len; kk++) {var sp = special[kk];if(sp===f) return sn(sp);var r = new RegExp(sp.replace(/\\./g,"\\\\.") + "$");if(r.test(s.name.toLowerCase())) return sn(sp);}}if(exts.indexOf(e) >= 0) {return sn(e);}else{return "default" + fileclass;}}', css: '.monaco-tree-row .content .sub-content .explorer-item.folder-icon {padding-left: 22px;background: url(parts/files/browser/media/icons/Folder_inverse.svg) 1px 4px no-repeat;}.monaco-tree-row.expanded .content .sub-content .explorer-item.folder-icon { padding-left: 22px;background: url(parts/files/browser/media/icons/Folder_opened.svg) 1px 4px no-repeat;background-size: 16px;}.explorer-item.default-file-icon {padding-left:22px;adding-left:22px;background:url(parts/files/browser/media/icons/File.svg) 1px 3px no-repeat;background-size: 16px;}.explorer-item.file-icon {padding-left:22px;background-size: 16px !important;} .explorer-item.as-file-icon { background: url(parts/files/browser/media/icons/file_type_actionscript@2x.png) 1px 4px no-repeat;}  .explorer-item.htaccess-file-icon { background: url(parts/files/browser/media/icons/file_type_apache@2x.png) 1px 4px no-repeat;} .explorer-item.app-file-icon { background: url(parts/files/browser/media/icons/file_type_applescript@2x.png) 1px 4px no-repeat;} .explorer-item.asp-file-icon { background: url(parts/files/browser/media/icons/file_type_asp@2x.png) 1px 4px no-repeat;} .explorer-item.ahk-file-icon { background: url(parts/files/browser/media/icons/file_type_autohotkey@2x.png) 1px 4px no-repeat;} .explorer-item.babelrc-file-icon { background: url(parts/files/browser/media/icons/file_type_babel@2x.png) 1px 4px no-repeat;} .explorer-item.bin-file-icon { background: url(parts/files/browser/media/icons/file_type_binary@2x.png) 1px 4px no-repeat;}.explorer-item.o-file-icon { background: url(parts/files/browser/media/icons/file_type_binary@2x.png) 1px 4px no-repeat;}.explorer-item.a-file-icon { background: url(parts/files/browser/media/icons/file_type_binary@2x.png) 1px 4px no-repeat;}.explorer-item.exe-file-icon { background: url(parts/files/browser/media/icons/file_type_binary@2x.png) 1px 4px no-repeat;}.explorer-item.obj-file-icon { background: url(parts/files/browser/media/icons/file_type_binary@2x.png) 1px 4px no-repeat;}.explorer-item.lib-file-icon { background: url(parts/files/browser/media/icons/file_type_binary@2x.png) 1px 4px no-repeat;}.explorer-item.dll-file-icon { background: url(parts/files/browser/media/icons/file_type_binary@2x.png) 1px 4px no-repeat;}.explorer-item.pyc-file-icon { background: url(parts/files/browser/media/icons/file_type_binary@2x.png) 1px 4px no-repeat;}  .explorer-item.bowerrc-file-icon { background: url(parts/files/browser/media/icons/file_type_bower@2x.png) 1px 4px no-repeat;} .explorer-item.bower-file-icon { background: url(parts/files/browser/media/icons/file_type_bower@2x.png) 1px 4px no-repeat;} .explorer-item.c-file-icon { background: url(parts/files/browser/media/icons/file_type_c@2x.png) 1px 4px no-repeat;} .explorer-item.h-file-icon { background: url(parts/files/browser/media/icons/file_type_cheader@2x.png) 1px 4px no-repeat;} .explorer-item.cpp-file-icon { background: url(parts/files/browser/media/icons/file_type_c++@2x.png) 1px 4px no-repeat;}.explorer-item.hpp-file-icon { background: url(parts/files/browser/media/icons/file_type_c++@2x.png) 1px 4px no-repeat;}.explorer-item.cc-file-icon { background: url(parts/files/browser/media/icons/file_type_c++@2x.png) 1px 4px no-repeat;}.explorer-item.cxx-file-icon { background: url(parts/files/browser/media/icons/file_type_c++@2x.png) 1px 4px no-repeat;} .explorer-item.cake-file-icon { background: url(parts/files/browser/media/icons/file_type_cake@2x.png) 1px 4px no-repeat;} .explorer-item.cfm-file-icon { background: url(parts/files/browser/media/icons/file_type_cfm@2x.png) 1px 4px no-repeat;}.explorer-item.cfc-file-icon { background: url(parts/files/browser/media/icons/file_type_cfm@2x.png) 1px 4px no-repeat;}.explorer-item.lucee-file-icon { background: url(parts/files/browser/media/icons/file_type_cfm@2x.png) 1px 4px no-repeat;} .explorer-item.clojure-file-icon { background: url(parts/files/browser/media/icons/file_type_clojure@2x.png) 1px 4px no-repeat;}.explorer-item.cjm-file-icon { background: url(parts/files/browser/media/icons/file_type_clojure@2x.png) 1px 4px no-repeat;} .explorer-item.coffee-file-icon { background: url(parts/files/browser/media/icons/file_type_coffescript@2x.png) 1px 4px no-repeat;} .explorer-item.env-file-icon { background: url(parts/files/browser/media/icons/file_type_config@2x.png) 1px 4px no-repeat;}.explorer-item.ini-file-icon { background: url(parts/files/browser/media/icons/file_type_config@2x.png) 1px 4px no-repeat;}.explorer-item.makefile-file-icon { background: url(parts/files/browser/media/icons/file_type_config@2x.png) 1px 4px no-repeat;}  .explorer-item.cs-file-icon { background: url(parts/files/browser/media/icons/file_type_cs@2x.png) 1px 4px no-repeat;} .explorer-item.cshtml-file-icon { background: url(parts/files/browser/media/icons/file_type_cshtml@2x.png) 1px 4px no-repeat;} .explorer-item.css-file-icon { background: url(parts/files/browser/media/icons/file_type_css@2x.png) 1px 4px no-repeat;} .explorer-item.feature-file-icon { background: url(parts/files/browser/media/icons/file_type_cucumber@2x.png) 1px 4px no-repeat;} .explorer-item.d-file-icon { background: url(parts/files/browser/media/icons/file_type_dlang@2x.png) 1px 4px no-repeat;} .explorer-item.dockerfile-file-icon { background: url(parts/files/browser/media/icons/file_type_docker@2x.png) 1px 4px no-repeat;} .explorer-item.editorconfig-file-icon { background: url(parts/files/browser/media/icons/file_type_editorconfig@2x.png) 1px 4px no-repeat;} .explorer-item.ex-file-icon { background: url(parts/files/browser/media/icons/file_type_elixir@2x.png) 1px 4px no-repeat;}.explorer-item.exs-file-icon { background: url(parts/files/browser/media/icons/file_type_elixir@2x.png) 1px 4px no-repeat;}.explorer-item.eex-file-icon { background: url(parts/files/browser/media/icons/file_type_elixir@2x.png) 1px 4px no-repeat;} .explorer-item.erl-file-icon { background: url(parts/files/browser/media/icons/file_type_erlang@2x.png) 1px 4px no-repeat;}.explorer-item.hrl-file-icon { background: url(parts/files/browser/media/icons/file_type_erlang@2x.png) 1px 4px no-repeat;}.explorer-item.emakefile-file-icon { background: url(parts/files/browser/media/icons/file_type_erlang@2x.png) 1px 4px no-repeat;}.explorer-item.emakerfile-file-icon { background: url(parts/files/browser/media/icons/file_type_erlang@2x.png) 1px 4px no-repeat;} .explorer-item.eslintrc-file-icon { background: url(parts/files/browser/media/icons/file_type_eslint@2x.png) 1px 4px no-repeat;}.explorer-item.eslintignore-file-icon { background: url(parts/files/browser/media/icons/file_type_eslint@2x.png) 1px 4px no-repeat;} .explorer-item.favicon-file-icon { background: url(parts/files/browser/media/icons/file_type_favicon@2x.png) 1px 4px no-repeat;} .explorer-item.woff-file-icon { background: url(parts/files/browser/media/icons/file_type_font@2x.png) 1px 4px no-repeat;}.explorer-item.woff2-file-icon { background: url(parts/files/browser/media/icons/file_type_font@2x.png) 1px 4px no-repeat;}.explorer-item.ttf-file-icon { background: url(parts/files/browser/media/icons/file_type_font@2x.png) 1px 4px no-repeat;}.explorer-item.otf-file-icon { background: url(parts/files/browser/media/icons/file_type_font@2x.png) 1px 4px no-repeat;}.explorer-item.eot-file-icon { background: url(parts/files/browser/media/icons/file_type_font@2x.png) 1px 4px no-repeat;}.explorer-item.pfa-file-icon { background: url(parts/files/browser/media/icons/file_type_font@2x.png) 1px 4px no-repeat;}.explorer-item.pfb-file-icon { background: url(parts/files/browser/media/icons/file_type_font@2x.png) 1px 4px no-repeat;}.explorer-item.sfd-file-icon { background: url(parts/files/browser/media/icons/file_type_font@2x.png) 1px 4px no-repeat;} .explorer-item.fs-file-icon { background: url(parts/files/browser/media/icons/file_type_fsharp@2x.png) 1px 4px no-repeat;}.explorer-item.fsx-file-icon { background: url(parts/files/browser/media/icons/file_type_fsharp@2x.png) 1px 4px no-repeat;}.explorer-item.fsi-file-icon { background: url(parts/files/browser/media/icons/file_type_fsharp@2x.png) 1px 4px no-repeat;} .explorer-item.gitattributes-file-icon { background: url(parts/files/browser/media/icons/file_type_git@2x.png) 1px 4px no-repeat;}.explorer-item.gitignore-file-icon { background: url(parts/files/browser/media/icons/file_type_git@2x.png) 1px 4px no-repeat;}.explorer-item.gitmodules-file-icon { background: url(parts/files/browser/media/icons/file_type_git@2x.png) 1px 4px no-repeat;} .explorer-item.go-file-icon { background: url(parts/files/browser/media/icons/file_type_go@2x.png) 1px 4px no-repeat;} .explorer-item.gradle-file-icon { background: url(parts/files/browser/media/icons/file_type_gradle@2x.png) 1px 4px no-repeat;}   .explorer-item.gruntfile-file-icon { background: url(parts/files/browser/media/icons/file_type_gruntfile@2x.png) 1px 4px no-repeat;} .explorer-item.gulpfile-file-icon { background: url(parts/files/browser/media/icons/file_type_gulpfile@2x.png) 1px 4px no-repeat;} .explorer-item.haml-file-icon { background: url(parts/files/browser/media/icons/file_type_haml@2x.png) 1px 4px no-repeat;} .explorer-item.hbs-file-icon { background: url(parts/files/browser/media/icons/file_type_handlebars@2x.png) 1px 4px no-repeat;}.explorer-item.handlebars-file-icon { background: url(parts/files/browser/media/icons/file_type_handlebars@2x.png) 1px 4px no-repeat;} .explorer-item.has-file-icon { background: url(parts/files/browser/media/icons/file_type_haskell@2x.png) 1px 4px no-repeat;}.explorer-item.hs-file-icon { background: url(parts/files/browser/media/icons/file_type_haskell@2x.png) 1px 4px no-repeat;}.explorer-item.lhs-file-icon { background: url(parts/files/browser/media/icons/file_type_haskell@2x.png) 1px 4px no-repeat;}.explorer-item.lit-file-icon { background: url(parts/files/browser/media/icons/file_type_haskell@2x.png) 1px 4px no-repeat;}.explorer-item.gf-file-icon { background: url(parts/files/browser/media/icons/file_type_haskell@2x.png) 1px 4px no-repeat;} .explorer-item.hxml-file-icon { background: url(parts/files/browser/media/icons/file_type_haxe@2x.png) 1px 4px no-repeat;} .explorer-item.htm-file-icon { background: url(parts/files/browser/media/icons/file_type_html@2x.png) 1px 4px no-repeat;}.explorer-item.html-file-icon { background: url(parts/files/browser/media/icons/file_type_html@2x.png) 1px 4px no-repeat;} .explorer-item.jpeg-file-icon { background: url(parts/files/browser/media/icons/file_type_image@2x.png) 1px 4px no-repeat;}.explorer-item.jpg-file-icon { background: url(parts/files/browser/media/icons/file_type_image@2x.png) 1px 4px no-repeat;}.explorer-item.gif-file-icon { background: url(parts/files/browser/media/icons/file_type_image@2x.png) 1px 4px no-repeat;}.explorer-item.png-file-icon { background: url(parts/files/browser/media/icons/file_type_image@2x.png) 1px 4px no-repeat;}.explorer-item.bmp-file-icon { background: url(parts/files/browser/media/icons/file_type_image@2x.png) 1px 4px no-repeat;} .explorer-item.ionic-file-icon { background: url(parts/files/browser/media/icons/file_type_ionic@2x.png) 1px 4px no-repeat;} .explorer-item.jade-file-icon { background: url(parts/files/browser/media/icons/file_type_jade@2x.png) 1px 4px no-repeat;}.explorer-item.pug-file-icon { background: url(parts/files/browser/media/icons/file_type_jade@2x.png) 1px 4px no-repeat;} .explorer-item.java-file-icon { background: url(parts/files/browser/media/icons/file_type_java@2x.png) 1px 4px no-repeat;} .explorer-item.js-file-icon { background: url(parts/files/browser/media/icons/file_type_js@2x.png) 1px 4px no-repeat;} .explorer-item.jsp-file-icon { background: url(parts/files/browser/media/icons/file_type_jsp@2x.png) 1px 4px no-repeat;} .explorer-item.jl-file-icon { background: url(parts/files/browser/media/icons/file_type_julia@2x.png) 1px 4px no-repeat;} .explorer-item.log-file-icon { background: url(parts/files/browser/media/icons/file_type_log@2x.png) 1px 4px no-repeat;} .explorer-item.less-file-icon { background: url(parts/files/browser/media/icons/file_type_less@2x.png) 1px 4px no-repeat;} .explorer-item.license-file-icon { background: url(parts/files/browser/media/icons/file_type_license@2x.png) 1px 4px no-repeat;} .explorer-item.bil-file-icon { background: url(parts/files/browser/media/icons/file_type_lisp@2x.png) 1px 4px no-repeat;} .explorer-item.lsl-file-icon { background: url(parts/files/browser/media/icons/file_type_lsl@2x.png) 1px 4px no-repeat;} .explorer-item.lua-file-icon { background: url(parts/files/browser/media/icons/file_type_lua@2x.png) 1px 4px no-repeat;} .explorer-item.md-file-icon { background: url(parts/files/browser/media/icons/file_type_markdown@2x.png) 1px 4px no-repeat;}  .explorer-item.m-file-icon { background: url(parts/files/browser/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.fig-file-icon { background: url(parts/files/browser/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.mat-file-icon { background: url(parts/files/browser/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.mex-file-icon { background: url(parts/files/browser/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.mexn-file-icon { background: url(parts/files/browser/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.mexrs6-file-icon { background: url(parts/files/browser/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.mn-file-icon { background: url(parts/files/browser/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.mum-file-icon { background: url(parts/files/browser/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.mx-file-icon { background: url(parts/files/browser/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.mx3-file-icon { background: url(parts/files/browser/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.rwd-file-icon { background: url(parts/files/browser/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.slx-file-icon { background: url(parts/files/browser/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.slddc-file-icon { background: url(parts/files/browser/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.smv-file-icon { background: url(parts/files/browser/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.tikz-file-icon { background: url(parts/files/browser/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.xvc-file-icon { background: url(parts/files/browser/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.xvc-file-icon { background: url(parts/files/browser/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;} .explorer-item.mustache-file-icon { background: url(parts/files/browser/media/icons/file_type_mustache@2x.png) 1px 4px no-repeat;}.explorer-item.mst-file-icon { background: url(parts/files/browser/media/icons/file_type_mustache@2x.png) 1px 4px no-repeat;} .explorer-item.nim-file-icon { background: url(parts/files/browser/media/icons/file_type_nim@2x.png) 1px 4px no-repeat;}.explorer-item.nims-file-icon { background: url(parts/files/browser/media/icons/file_type_nim@2x.png) 1px 4px no-repeat;}.explorer-item.cfg-file-icon { background: url(parts/files/browser/media/icons/file_type_nim@2x.png) 1px 4px no-repeat;} .explorer-item.json-file-icon { background: url(parts/files/browser/media/icons/file_type_node@2x.png) 1px 4px no-repeat;} .explorer-item.nvmrc-file-icon { background: url(parts/files/browser/media/icons/file_type_node2@2x.png) 1px 4px no-repeat;} .explorer-item.npmignore-file-icon { background: url(parts/files/browser/media/icons/file_type_npm@2x.png) 1px 4px no-repeat;} .explorer-item.cma-file-icon { background: url(parts/files/browser/media/icons/file_type_ocaml@2x.png) 1px 4px no-repeat;}.explorer-item.cmi-file-icon { background: url(parts/files/browser/media/icons/file_type_ocaml@2x.png) 1px 4px no-repeat;}.explorer-item.ml-file-icon { background: url(parts/files/browser/media/icons/file_type_ocaml@2x.png) 1px 4px no-repeat;}.explorer-item.mly-file-icon { background: url(parts/files/browser/media/icons/file_type_ocaml@2x.png) 1px 4px no-repeat;}.explorer-item.ocamlmakefile-file-icon { background: url(parts/files/browser/media/icons/file_type_ocaml@2x.png) 1px 4px no-repeat;} .explorer-item.perl-file-icon { background: url(parts/files/browser/media/icons/file_type_perl@2x.png) 1px 4px no-repeat;} .explorer-item.php-file-icon { background: url(parts/files/browser/media/icons/file_type_php@2x.png) 1px 4px no-repeat;}.explorer-item.php1-file-icon { background: url(parts/files/browser/media/icons/file_type_php@2x.png) 1px 4px no-repeat;}.explorer-item.php2-file-icon { background: url(parts/files/browser/media/icons/file_type_php@2x.png) 1px 4px no-repeat;}.explorer-item.php3-file-icon { background: url(parts/files/browser/media/icons/file_type_php@2x.png) 1px 4px no-repeat;}.explorer-item.php4-file-icon { background: url(parts/files/browser/media/icons/file_type_php@2x.png) 1px 4px no-repeat;}.explorer-item.php5-file-icon { background: url(parts/files/browser/media/icons/file_type_php@2x.png) 1px 4px no-repeat;}.explorer-item.php6-file-icon { background: url(parts/files/browser/media/icons/file_type_php@2x.png) 1px 4px no-repeat;}.explorer-item.phps-file-icon { background: url(parts/files/browser/media/icons/file_type_php@2x.png) 1px 4px no-repeat;}.explorer-item.phpsa-file-icon { background: url(parts/files/browser/media/icons/file_type_php@2x.png) 1px 4px no-repeat;}.explorer-item.phpt-file-icon { background: url(parts/files/browser/media/icons/file_type_php@2x.png) 1px 4px no-repeat;} .explorer-item.procfile-file-icon { background: url(parts/files/browser/media/icons/file_type_procfile@2x.png) 1px 4px no-repeat;} .explorer-item.ps1-file-icon { background: url(parts/files/browser/media/icons/file_type_powershell@2x.png) 1px 4px no-repeat;}.explorer-item.psm1-file-icon { background: url(parts/files/browser/media/icons/file_type_powershell@2x.png) 1px 4px no-repeat;}.explorer-item.psd1-file-icon { background: url(parts/files/browser/media/icons/file_type_powershell@2x.png) 1px 4px no-repeat;} .explorer-item.epp-file-icon { background: url(parts/files/browser/media/icons/file_type_puppet@2x.png) 1px 4px no-repeat;} .explorer-item.py-file-icon { background: url(parts/files/browser/media/icons/file_type_python@2x.png) 1px 4px no-repeat;} .explorer-item.r-file-icon { background: url(parts/files/browser/media/icons/file_type_r@2x.png) 1px 4px no-repeat;}  .explorer-item.jsx-file-icon { background: url(parts/files/browser/media/icons/file_type_reactjs@2x.png) 1px 4px no-repeat;} .explorer-item.tsx-file-icon { background: url(parts/files/browser/media/icons/file_type_reactts@2x.png) 1px 4px no-repeat;} .explorer-item.robot-file-icon { background: url(parts/files/browser/media/icons/file_type_robotframework@2x.png) 1px 4px no-repeat;} .explorer-item.rb-file-icon { background: url(parts/files/browser/media/icons/file_type_ruby@2x.png) 1px 4px no-repeat;}.explorer-item.gemfile-file-icon { background: url(parts/files/browser/media/icons/file_type_ruby@2x.png) 1px 4px no-repeat;} .explorer-item.gemfile-file-icon { background: url(parts/files/browser/media/icons/file_type_ruby@2x.png) 1px 4px no-repeat;} .explorer-item.rs-file-icon { background: url(parts/files/browser/media/icons/file_type_rust@2x.png) 1px 4px no-repeat;} .explorer-item.sass-file-icon { background: url(parts/files/browser/media/icons/file_type_sass@2x.png) 1px 4px no-repeat;} .explorer-item.scala-file-icon { background: url(parts/files/browser/media/icons/file_type_scala@2x.png) 1px 4px no-repeat;} .explorer-item.scss-file-icon { background: url(parts/files/browser/media/icons/file_type_scss@2x.png) 1px 4px no-repeat;}  .explorer-item.bat-file-icon { background: url(parts/files/browser/media/icons/file_type_shell@2x.png) 1px 4px no-repeat;}.explorer-item.sh-file-icon { background: url(parts/files/browser/media/icons/file_type_shell@2x.png) 1px 4px no-repeat;}.explorer-item.cmd-file-icon { background: url(parts/files/browser/media/icons/file_type_shell@2x.png) 1px 4px no-repeat;}.explorer-item.bash-file-icon { background: url(parts/files/browser/media/icons/file_type_shell@2x.png) 1px 4px no-repeat;}.explorer-item.zsh-file-icon { background: url(parts/files/browser/media/icons/file_type_shell@2x.png) 1px 4px no-repeat;}.explorer-item.fish-file-icon { background: url(parts/files/browser/media/icons/file_type_shell@2x.png) 1px 4px no-repeat;}   .explorer-item.sql-file-icon { background: url(parts/files/browser/media/icons/file_type_sql@2x.png) 1px 4px no-repeat;} .explorer-item.tpl-file-icon { background: url(parts/files/browser/media/icons/file_type_smarty@2x.png) 1px 4px no-repeat;} .explorer-item.stylelintrc-file-icon { background: url(parts/files/browser/media/icons/file_type_stylelint@2x.png) 1px 4px no-repeat;} .explorer-item.stylelint_config-file-icon { background: url(parts/files/browser/media/icons/file_type_stylelint@2x.png) 1px 4px no-repeat;} .explorer-item.styl-file-icon { background: url(parts/files/browser/media/icons/file_type_stylus@2x.png) 1px 4px no-repeat;} .explorer-item.svg-file-icon { background: url(parts/files/browser/media/icons/file_type_svg@2x.png) 1px 4px no-repeat;} .explorer-item.swift-file-icon { background: url(parts/files/browser/media/icons/file_type_swift@2x.png) 1px 4px no-repeat;} .explorer-item.tcl-file-icon { background: url(parts/files/browser/media/icons/file_type_tcl@2x.png) 1px 4px no-repeat;} .explorer-item.texi-file-icon { background: url(parts/files/browser/media/icons/file_type_tex@2x.png) 1px 4px no-repeat;} .explorer-item.txt-file-icon { background: url(parts/files/browser/media/icons/file_type_text@2x.png) 1px 4px no-repeat;} .explorer-item.textile-file-icon { background: url(parts/files/browser/media/icons/file_type_textile@2x.png) 1px 4px no-repeat;} .explorer-item.twig-file-icon { background: url(parts/files/browser/media/icons/file_type_twig@2x.png) 1px 4px no-repeat;} .explorer-item.ts-file-icon { background: url(parts/files/browser/media/icons/file_type_typescript@2x.png) 1px 4px no-repeat;} .explorer-item._d_ts-file-icon { background: url(parts/files/browser/media/icons/file_type_typescriptdef@2x.png) 1px 4px no-repeat;} .explorer-item.vbhtml-file-icon { background: url(parts/files/browser/media/icons/file_type_vbhtml@2x.png) 1px 4px no-repeat;} .explorer-item.vue-file-icon { background: url(parts/files/browser/media/icons/file_type_vue@2x.png) 1px 4px no-repeat;} .explorer-item.vscodeignore-file-icon { background: url(parts/files/browser/media/icons/file_type_vscode@2x.png) 1px 4px no-repeat;}.explorer-item.launch-file-icon { background: url(parts/files/browser/media/icons/file_type_vscode@2x.png) 1px 4px no-repeat;}.explorer-item.jsconfig-file-icon { background: url(parts/files/browser/media/icons/file_type_vscode@2x.png) 1px 4px no-repeat;}.explorer-item.tsconfig-file-icon { background: url(parts/files/browser/media/icons/file_type_vscode@2x.png) 1px 4px no-repeat;} .explorer-item.xml-file-icon { background: url(parts/files/browser/media/icons/file_type_xml@2x.png) 1px 4px no-repeat;}.explorer-item.axml-file-icon { background: url(parts/files/browser/media/icons/file_type_xml@2x.png) 1px 4px no-repeat;}.explorer-item.xaml-file-icon { background: url(parts/files/browser/media/icons/file_type_xml@2x.png) 1px 4px no-repeat;} .explorer-item.yml-file-icon { background: url(parts/files/browser/media/icons/file_type_yaml@2x.png) 1px 4px no-repeat;}.explorer-item.yaml-file-icon { background: url(parts/files/browser/media/icons/file_type_yaml@2x.png) 1px 4px no-repeat;} .explorer-item.zip-file-icon { background: url(parts/files/browser/media/icons/file_type_zip@2x.png) 1px 4px no-repeat;}.explorer-item.rar-file-icon { background: url(parts/files/browser/media/icons/file_type_zip@2x.png) 1px 4px no-repeat;}.explorer-item.n7z-file-icon { background: url(parts/files/browser/media/icons/file_type_zip@2x.png) 1px 4px no-repeat;}.explorer-item.tar-file-icon { background: url(parts/files/browser/media/icons/file_type_zip@2x.png) 1px 4px no-repeat;}.explorer-item.gz-file-icon { background: url(parts/files/browser/media/icons/file_type_zip@2x.png) 1px 4px no-repeat;}.explorer-item.bzip2-file-icon { background: url(parts/files/browser/media/icons/file_type_zip@2x.png) 1px 4px no-repeat;}.explorer-item.xz-file-icon { background: url(parts/files/browser/media/icons/file_type_zip@2x.png) 1px 4px no-repeat;}.explorer-item.bz2-file-icon { background: url(parts/files/browser/media/icons/file_type_zip@2x.png) 1px 4px no-repeat;}' };