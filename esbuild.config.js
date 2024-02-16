const esbuild = require("esbuild");
(async () => {
    await esbuild.build({
        entryPoints: ["./src/main.ts"],
        bundle: true,
        minify: true,
        sourcemap: false,
        outdir: "./dist",
        platform: "node",
    })
})()
