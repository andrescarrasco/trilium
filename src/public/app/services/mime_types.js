import options from "./options.js";

const MIME_TYPES_DICT = [
    { default: true, title: "Plain text", mime: "text/plain" },
    { title: "APL", mime: "text/apl" },
    { title: "PGP", mime: "application/pgp" },
    { title: "ASN.1", mime: "text/x-ttcn-asn" },
    { title: "Asterisk", mime: "text/x-asterisk" },
    { title: "Brainfuck", mime: "text/x-brainfuck" },
    { default: true, title: "C", mime: "text/x-csrc" },
    { default: true, title: "C++", mime: "text/x-c++src" },
    { title: "Cobol", mime: "text/x-cobol" },
    { default: true, title: "C#", mime: "text/x-csharp" },
    { title: "Clojure", mime: "text/x-clojure" },
    { title: "ClojureScript", mime: "text/x-clojurescript" },
    { title: "Closure Stylesheets (GSS)", mime: "text/x-gss" },
    { title: "CMake", mime: "text/x-cmake" },
    { title: "CoffeeScript", mime: "text/coffeescript" },
    { title: "Common Lisp", mime: "text/x-common-lisp" },
    { title: "Cypher", mime: "application/x-cypher-query" },
    { title: "Cython", mime: "text/x-cython" },
    { title: "Crystal", mime: "text/x-crystal" },
    { default: true, title: "CSS", mime: "text/css" },
    { title: "CQL", mime: "text/x-cassandra" },
    { title: "D", mime: "text/x-d" },
    { title: "Dart", mime: "application/dart" },
    { title: "diff", mime: "text/x-diff" },
    { title: "Django", mime: "text/x-django" },
    { title: "Dockerfile", mime: "text/x-dockerfile" },
    { title: "DTD", mime: "application/xml-dtd" },
    { title: "Dylan", mime: "text/x-dylan" },
    { title: "EBNF", mime: "text/x-ebnf" },
    { title: "ECL", mime: "text/x-ecl" },
    { title: "edn", mime: "application/edn" },
    { title: "Eiffel", mime: "text/x-eiffel" },
    { title: "Elm", mime: "text/x-elm" },
    { title: "Embedded Javascript", mime: "application/x-ejs" },
    { title: "Embedded Ruby", mime: "application/x-erb" },
    { title: "Erlang", mime: "text/x-erlang" },
    { title: "Esper", mime: "text/x-esper" },
    { title: "Factor", mime: "text/x-factor" },
    { title: "FCL", mime: "text/x-fcl" },
    { title: "Forth", mime: "text/x-forth" },
    { title: "Fortran", mime: "text/x-fortran" },
    { title: "F#", mime: "text/x-fsharp" },
    { title: "Gas", mime: "text/x-gas" },
    { title: "Gherkin", mime: "text/x-feature" },
    { title: "GitHub Flavored Markdown", mime: "text/x-gfm" },
    { default: true, title: "Go", mime: "text/x-go" },
    { default: true, title: "Groovy", mime: "text/x-groovy" },
    { title: "HAML", mime: "text/x-haml" },
    { default: true, title: "Haskell", mime: "text/x-haskell" },
    { title: "Haskell (Literate)", mime: "text/x-literate-haskell" },
    { title: "Haxe", mime: "text/x-haxe" },
    { title: "HXML", mime: "text/x-hxml" },
    { title: "ASP.NET", mime: "application/x-aspx" },
    { default: true, title: "HTML", mime: "text/html" },
    { default: true, title: "HTTP", mime: "message/http" },
    { title: "IDL", mime: "text/x-idl" },
    { title: "Pug", mime: "text/x-pug" },
    { default: true, title: "Java", mime: "text/x-java" },
    { title: "Java Server Pages", mime: "application/x-jsp" },
    { default: true, title: 'JS frontend', mime: 'application/javascript;env=frontend' },
    { default: true, title: 'JS backend', mime: 'application/javascript;env=backend' },
    { default: true, title: "JSON", mime: "application/json" },
    { title: "JSON-LD", mime: "application/ld+json" },
    { title: "JSX", mime: "text/jsx" },
    { title: "Jinja2", mime: "text/jinja2" },
    { title: "Julia", mime: "text/x-julia" },
    { default: true, title: "Kotlin", mime: "text/x-kotlin" },
    { title: "LESS", mime: "text/x-less" },
    { title: "LiveScript", mime: "text/x-livescript" },
    { title: "Lua", mime: "text/x-lua" },
    { default: true, title: "Markdown", mime: "text/x-markdown" },
    { title: "mIRC", mime: "text/mirc" },
    { title: "MariaDB SQL", mime: "text/x-mariadb" },
    { title: "Mathematica", mime: "text/x-mathematica" },
    { title: "Modelica", mime: "text/x-modelica" },
    { title: "MUMPS", mime: "text/x-mumps" },
    { title: "MS SQL", mime: "text/x-mssql" },
    { title: "mbox", mime: "application/mbox" },
    { title: "MySQL", mime: "text/x-mysql" },
    { title: "Nginx", mime: "text/x-nginx-conf" },
    { title: "NSIS", mime: "text/x-nsis" },
    { title: "NTriples", mime: "application/n-triples" },
    { title: "Objective-C", mime: "text/x-objectivec" },
    { title: "OCaml", mime: "text/x-ocaml" },
    { title: "Octave", mime: "text/x-octave" },
    { title: "Oz", mime: "text/x-oz" },
    { title: "Pascal", mime: "text/x-pascal" },
    { title: "PEG.js", mime: "null" },
    { default: true, title: "Perl", mime: "text/x-perl" },
    { default: true, title: "PHP", mime: "text/x-php" },
    { title: "Pig", mime: "text/x-pig" },
    { title: "PLSQL", mime: "text/x-plsql" },
    { title: "PostgreSQL", mime: "text/x-pgsql" },
    { title: "PowerShell", mime: "application/x-powershell" },
    { title: "Properties files", mime: "text/x-properties" },
    { title: "ProtoBuf", mime: "text/x-protobuf" },
    { default: true, title: "Python", mime: "text/x-python" },
    { title: "Puppet", mime: "text/x-puppet" },
    { title: "Q", mime: "text/x-q" },
    { title: "R", mime: "text/x-rsrc" },
    { title: "reStructuredText", mime: "text/x-rst" },
    { title: "RPM Changes", mime: "text/x-rpm-changes" },
    { title: "RPM Spec", mime: "text/x-rpm-spec" },
    { default: true, title: "Ruby", mime: "text/x-ruby" },
    { title: "Rust", mime: "text/x-rustsrc" },
    { title: "SAS", mime: "text/x-sas" },
    { title: "Sass", mime: "text/x-sass" },
    { title: "Scala", mime: "text/x-scala" },
    { title: "Scheme", mime: "text/x-scheme" },
    { title: "SCSS", mime: "text/x-scss" },
    { default: true, title: "Shell", mime: "text/x-sh" },
    { title: "Sieve", mime: "application/sieve" },
    { title: "Slim", mime: "text/x-slim" },
    { title: "Smalltalk", mime: "text/x-stsrc" },
    { title: "Smarty", mime: "text/x-smarty" },
    { title: "Solr", mime: "text/x-solr" },
    { title: "SML", mime: "text/x-sml" },
    { title: "Soy", mime: "text/x-soy" },
    { title: "SPARQL", mime: "application/sparql-query" },
    { title: "Spreadsheet", mime: "text/x-spreadsheet" },
    { default: true, title: "SQL", mime: "text/x-sql" },
    { title: "SQLite", mime: "text/x-sqlite" },
    { default: true, title: "SQLite (Trilium)", mime: "text/x-sqlite;schema=trilium" },
    { title: "Squirrel", mime: "text/x-squirrel" },
    { title: "Stylus", mime: "text/x-styl" },
    { default: true, title: "Swift", mime: "text/x-swift" },
    { title: "sTeX", mime: "text/x-stex" },
    { title: "LaTeX", mime: "text/x-latex" },
    { title: "SystemVerilog", mime: "text/x-systemverilog" },
    { title: "Tcl", mime: "text/x-tcl" },
    { title: "Textile", mime: "text/x-textile" },
    { title: "TiddlyWiki ", mime: "text/x-tiddlywiki" },
    { title: "Tiki wiki", mime: "text/tiki" },
    { title: "TOML", mime: "text/x-toml" },
    { title: "Tornado", mime: "text/x-tornado" },
    { title: "troff", mime: "text/troff" },
    { title: "TTCN", mime: "text/x-ttcn" },
    { title: "TTCN_CFG", mime: "text/x-ttcn-cfg" },
    { title: "Turtle", mime: "text/turtle" },
    { title: "TypeScript", mime: "application/typescript" },
    { title: "TypeScript-JSX", mime: "text/typescript-jsx" },
    { title: "Twig", mime: "text/x-twig" },
    { title: "Web IDL", mime: "text/x-webidl" },
    { title: "VB.NET", mime: "text/x-vb" },
    { title: "VBScript", mime: "text/vbscript" },
    { title: "Velocity", mime: "text/velocity" },
    { title: "Verilog", mime: "text/x-verilog" },
    { title: "VHDL", mime: "text/x-vhdl" },
    { title: "Vue.js Component", mime: "text/x-vue" },
    { default: true, title: "XML", mime: "text/xml" },
    { title: "XQuery", mime: "application/xquery" },
    { title: "Yacas", mime: "text/x-yacas" },
    { default: true, title: "YAML", mime: "text/x-yaml" },
    { title: "Z80", mime: "text/x-z80" },
    { title: "mscgen", mime: "text/x-mscgen" },
    { title: "xu", mime: "text/x-xu" },
    { title: "msgenny", mime: "text/x-msgenny" }
];

let mimeTypes = null;

function loadMimeTypes() {
    mimeTypes = JSON.parse(JSON.stringify(MIME_TYPES_DICT)); // clone

    const enabledMimeTypes = options.getJson('codeNotesMimeTypes')
        || MIME_TYPES_DICT.filter(mt => mt.default).map(mt => mt.mime);

    for (const mt of mimeTypes) {
        mt.enabled = enabledMimeTypes.includes(mt.mime) || mt.mime === 'text/plain'; // text/plain is always enabled
    }
}

async function getMimeTypes() {
    if (mimeTypes === null) {
        loadMimeTypes();
    }

    return mimeTypes;
}

export default {
    getMimeTypes,
    loadMimeTypes
}