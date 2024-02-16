const esbuild = require("esbuild");
(async () => {
    await esbuild.build({
        entryPoints: ["./src/main.ts"],
        bundle: true,
        minify: false,
        sourcemap: false,
        outdir: "./dist",
        platform: "node",
    })
})()
