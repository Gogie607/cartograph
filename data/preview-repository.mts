import type { ParsedRepository } from "../parser/types.mts";

export const repository = {
  "version": 2,
  "adapter": "none",
  "languages": [
    {
      "language": "javascript",
      "parser": "typescript",
      "found": 24,
      "parsed": 24,
      "skipped": 0
    },
    {
      "language": "typescript",
      "parser": "typescript",
      "found": 177,
      "parsed": 177,
      "skipped": 0
    },
    {
      "language": "unknown",
      "parser": "none",
      "found": 74,
      "parsed": 0,
      "skipped": 74
    }
  ],
  "modules": [
    {
      "path": ".",
      "name": "h3"
    },
    {
      "path": "examples",
      "name": "h3-examples"
    },
    {
      "path": "playground",
      "name": "h3-playground"
    }
  ],
  "files": [
    {
      "path": "bin/h3.mjs",
      "language": "javascript",
      "folder": "bin",
      "module": ".",
      "lineCount": 44,
      "contentHash": "075d991701995a9337d299f7b4b5a7f939b8cc55955f58fd5f2f29d1294286cb",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "build.config.ts",
      "language": "typescript",
      "folder": ".",
      "module": ".",
      "lineCount": 56,
      "contentHash": "f9f02bf6a0df3153656ea2f6cfceba7e5c4c08524932653778bf8f0be78d87c5",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/auth.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 9,
      "contentHash": "ed7cf3a08a8bd0d4c532f75121fea6dfddc36b34347a6ee39bde433228b65fd0",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/body.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 13,
      "contentHash": "fcc873cbc227cdc36f9ca172ed7adf948c31d4a0b424c2f0054f752af35abfef",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/cookies.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 17,
      "contentHash": "d9a65c8c7d873b6caefe0890dc5a2769588d45aed94e10bc2b1155ed19b4ecd6",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/cors.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 13,
      "contentHash": "b6256bf63109060973954f0bc8fbdcc8ef989b9f524040c31b525a8956c7c709",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/errors.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 30,
      "contentHash": "d5391608fa18911e9485dd5f6a63b2319395f52b3a31177134c9b4ca6aff0f14",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/handler-fetch.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 19,
      "contentHash": "4fa0e027ddeb6fde80613cefede63c2cb538721acf61e299ae60e33bfad966a5",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/handler-obj.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 22,
      "contentHash": "e608cad4349e491d3a6f4aa0668324ef3cbcc26dc7ada05c5f3c3ad2cc40c94b",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/headers.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 17,
      "contentHash": "57f3b7d3e9377ba9b061237ce31aec5058fdee6b174df154f003b62ed46c147a",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/middleware.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 30,
      "contentHash": "3ca123b6c2333dc50535e3c8041ae1db1a2c11e04c8f024008492d8758bca6e9",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/nested-app.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 7,
      "contentHash": "eb98c30dc802de96a0306689c750dca0106915b6e905a48bf6b33d0899d3cdc6",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/plugin.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 13,
      "contentHash": "0c08d17d6bfea6e6864fdf116d8b50192a6118328a60e7de4066868bfd08dd98",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/query-params.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 9,
      "contentHash": "f8c0581ddf55856ba07538f1a8390be32d96c061ce8fafaa224ca4410a6c194c",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/query.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 189,
      "contentHash": "2f57d00b818c73c0d0a11fac993eaca911f1413daaeccf27a1d4bcd3abf8d0f0",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/redirect.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 14,
      "contentHash": "8b129bee5c1b59224cb80a4377021c31742a651ffd11f92e3a95d4da1cddb506",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/response-types.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 18,
      "contentHash": "43ba8105fd10a5ede7c36c2d4daf3bdc26a6a2e6546459cb5fab6ecc6f49f553",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/router.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 13,
      "contentHash": "ca671e2e62acec04976c769d95af1f07608b18f27774f5d9e0c0e27adcd51193",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/server-sent-events.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 22,
      "contentHash": "b29ac6ea91bf98d9efadc197e966237f759e7abc59c050f111c4a556c6b490df",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/status.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 27,
      "contentHash": "bf35c1804026cb1168afb65a02d2baecb8a6e725756a06503eaca41ffa999be2",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/url-params.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 16,
      "contentHash": "7b79eff4b9af0023ad2377b85d7c2095c35c192fe6b66ea41e3bc11116705a82",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/vite.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 17,
      "contentHash": "d65837953837377ad62693213f47886062ac7f570fea3cb8ab84a40499570786",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "examples/websocket.mjs",
      "language": "javascript",
      "folder": "examples",
      "module": "examples",
      "lineCount": 82,
      "contentHash": "52e32a17ed521d1cb1e44fec8e6a4f9d90c3fb7f375ec582aac68af4bf129c3f",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "playground/server.mjs",
      "language": "javascript",
      "folder": "playground",
      "module": "playground",
      "lineCount": 9,
      "contentHash": "7b2b1e5a0c2dde29c8db45c7abb87d0d705e88b6160f38bcaec8ca1ba4b85028",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "src/_deprecated.ts",
      "language": "typescript",
      "folder": "src",
      "module": ".",
      "lineCount": 318,
      "contentHash": "472a4b9eb71f2a32871fece29eb57b67e18fb96916bb22a2c87b77458c9669a0",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 14
    },
    {
      "path": "src/_entries/_common.ts",
      "language": "typescript",
      "folder": "src/_entries",
      "module": ".",
      "lineCount": 10,
      "contentHash": "4ff02735671ed6035f0782506cae968cbe345fca4658d1a34b3fd60b0c6dfa98",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 6,
      "fanOut": 1
    },
    {
      "path": "src/_entries/bun.ts",
      "language": "typescript",
      "folder": "src/_entries",
      "module": ".",
      "lineCount": 15,
      "contentHash": "1a9c0c0f355b8b9f542f7e1f6139ab20f9b193c93330d9ffeeaec7dfc9e9bd63",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 3
    },
    {
      "path": "src/_entries/cloudflare.ts",
      "language": "typescript",
      "folder": "src/_entries",
      "module": ".",
      "lineCount": 16,
      "contentHash": "d00977c38c55c99afc29e07584cb5ade15c94feb5f34b4374a98a178fee262a2",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 3
    },
    {
      "path": "src/_entries/deno.ts",
      "language": "typescript",
      "folder": "src/_entries",
      "module": ".",
      "lineCount": 15,
      "contentHash": "962d9d6107f1bb16f0b9988abe116fb15dfff9e5fb1a5e1fe68302ac33867518",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 3
    },
    {
      "path": "src/_entries/generic.ts",
      "language": "typescript",
      "folder": "src/_entries",
      "module": ".",
      "lineCount": 15,
      "contentHash": "d08dfc9b861da8b9c42c95e36393eb6989e0a26ac1350d6e6afdc3e11e581196",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 3
    },
    {
      "path": "src/_entries/node.ts",
      "language": "typescript",
      "folder": "src/_entries",
      "module": ".",
      "lineCount": 25,
      "contentHash": "675a5b0c130fa1439819253e3c8597ace58f77428fb2f37d4e39b9a184eb26b6",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 4
    },
    {
      "path": "src/_entries/service-worker.ts",
      "language": "typescript",
      "folder": "src/_entries",
      "module": ".",
      "lineCount": 15,
      "contentHash": "7b4fb119bc8495af6dec0b149a48d6bd1381ebd86ca7e38a3d0c3ddff1332db9",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 3
    },
    {
      "path": "src/adapters.ts",
      "language": "typescript",
      "folder": "src",
      "module": ".",
      "lineCount": 155,
      "contentHash": "121213b263397ef8731a8381500f56e88af0195e69963cb0ec002f8b58368a1b",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 4,
      "fanOut": 6
    },
    {
      "path": "src/error.ts",
      "language": "typescript",
      "folder": "src",
      "module": ".",
      "lineCount": 237,
      "contentHash": "97477b0c434ba93173b9e9cdbeb5b8014e2625be95830b73c391d387743c8024",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 21,
      "fanOut": 1
    },
    {
      "path": "src/event.ts",
      "language": "typescript",
      "folder": "src",
      "module": ".",
      "lineCount": 208,
      "contentHash": "c1d0d2ea8dc73b1773de695a8a7db4869a2b816d534a71ad55bfd9f2669f2e08",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 40,
      "fanOut": 5
    },
    {
      "path": "src/h3.ts",
      "language": "typescript",
      "folder": "src",
      "module": ".",
      "lineCount": 304,
      "contentHash": "0a0e64f00ca2b33955dfb62b4daf43311a05d1520b036bcccf8b96d2b18631e0",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 23,
      "fanOut": 11
    },
    {
      "path": "src/handler.ts",
      "language": "typescript",
      "folder": "src",
      "module": ".",
      "lineCount": 184,
      "contentHash": "dc4a7617a815299a99ff7c89f53718e10be3fa122a073547ce2415dbdc5f32bc",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 10,
      "fanOut": 7
    },
    {
      "path": "src/index.ts",
      "language": "typescript",
      "folder": "src",
      "module": ".",
      "lineCount": 259,
      "contentHash": "64c3a9eadbe06de4dd0366e9b85a6b482b0172505eba0d6ee630f620a463c8f5",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 52,
      "fanOut": 35
    },
    {
      "path": "src/middleware.ts",
      "language": "typescript",
      "folder": "src",
      "module": ".",
      "lineCount": 193,
      "contentHash": "3d8112565d3afa91b31e7a5983f8929bf1ad1e3878fbdbba432804a70ae2a048",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 7,
      "fanOut": 7
    },
    {
      "path": "src/plugin.ts",
      "language": "typescript",
      "folder": "src",
      "module": ".",
      "lineCount": 9,
      "contentHash": "5bf009a04260787c3ace9c3e79bbfc4fc2a8e8ad0288a511c950e3be69630120",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 5,
      "fanOut": 1
    },
    {
      "path": "src/response.ts",
      "language": "typescript",
      "folder": "src",
      "module": ".",
      "lineCount": 380,
      "contentHash": "edab576a0e89ebe964394de5985c618ef31ee280898059df3c2fa70063d123b5",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 16,
      "fanOut": 6
    },
    {
      "path": "src/rules/cache.ts",
      "language": "typescript",
      "folder": "src/rules",
      "module": ".",
      "lineCount": 353,
      "contentHash": "a8068fd3c236eac8bbd125e133f6d6173c40349dc43e9fe5d986ca0adacbb410",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 4,
      "fanOut": 8
    },
    {
      "path": "src/rules/compiler.ts",
      "language": "typescript",
      "folder": "src/rules",
      "module": ".",
      "lineCount": 18,
      "contentHash": "43f2b482f911e25e61880d1a7f93f760bc957623e7f166323772ba58ee026639",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 9,
      "fanOut": 3
    },
    {
      "path": "src/rules/compiler/codegen.ts",
      "language": "typescript",
      "folder": "src/rules/compiler",
      "module": ".",
      "lineCount": 180,
      "contentHash": "cbc23686d22a2e5dce4251b8da35e7ab8fcca60c22568134e81b47b3c2548309",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 4
    },
    {
      "path": "src/rules/compiler/compile.ts",
      "language": "typescript",
      "folder": "src/rules/compiler",
      "module": ".",
      "lineCount": 223,
      "contentHash": "65a0869e60cbea472a8b15146d732a401671ec1fd5f4c586d7069857e547c1de",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 9
    },
    {
      "path": "src/rules/compiler/options.ts",
      "language": "typescript",
      "folder": "src/rules/compiler",
      "module": ".",
      "lineCount": 68,
      "contentHash": "584b2c74c9d9801bf70b7bb8c12b7fda1930e8bdfe1b0da5aade099c0a882798",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 3,
      "fanOut": 2
    },
    {
      "path": "src/rules/compiler/runtime-rules.ts",
      "language": "typescript",
      "folder": "src/rules/compiler",
      "module": ".",
      "lineCount": 50,
      "contentHash": "fc67d4b884dfc92111324b20ece64b2c0a971f121269674b511f10a95476800e",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 4,
      "fanOut": 0
    },
    {
      "path": "src/rules/handlers/_at-target.ts",
      "language": "typescript",
      "folder": "src/rules/handlers",
      "module": ".",
      "lineCount": 108,
      "contentHash": "30bebb4ef453df2dab3eb8f2770f3bea40296d590d0ce171663cd156a852158c",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 4
    },
    {
      "path": "src/rules/handlers/_splat.ts",
      "language": "typescript",
      "folder": "src/rules/handlers",
      "module": ".",
      "lineCount": 97,
      "contentHash": "7f9195aa65f37f1a7d3975ae7d2606b3956ec3aead8de7596dc88598d76db340",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 0
    },
    {
      "path": "src/rules/handlers/_utils.ts",
      "language": "typescript",
      "folder": "src/rules/handlers",
      "module": ".",
      "lineCount": 307,
      "contentHash": "c8d45346ea925f37de40d05833b091a4523a1ed8b712fd40a8bba41e25014007",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 5,
      "fanOut": 6
    },
    {
      "path": "src/rules/handlers/cache.ts",
      "language": "typescript",
      "folder": "src/rules/handlers",
      "module": ".",
      "lineCount": 162,
      "contentHash": "0f3f63f2e51658922c41d373cd923b0343c8e4cbf943b0a0ba1d3ea2991d08db",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 3,
      "fanOut": 4
    },
    {
      "path": "src/rules/handlers/cors.ts",
      "language": "typescript",
      "folder": "src/rules/handlers",
      "module": ".",
      "lineCount": 46,
      "contentHash": "cf5721cfb662306fffbcdb0951d924427fcac8e3eaeda97a2b76c8f3aa0fe223",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 2
    },
    {
      "path": "src/rules/handlers/headers.ts",
      "language": "typescript",
      "folder": "src/rules/handlers",
      "module": ".",
      "lineCount": 27,
      "contentHash": "368dfdda876910d471418eaa130c680d7a7cb4656ee87c8f02ef853ad9bf687a",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 1
    },
    {
      "path": "src/rules/handlers/index.ts",
      "language": "typescript",
      "folder": "src/rules/handlers",
      "module": ".",
      "lineCount": 17,
      "contentHash": "ff451ae6ed3732775d0f74a5d3435e95d75ed3ecd2f90905355601c4ae223014",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 6,
      "fanOut": 4
    },
    {
      "path": "src/rules/handlers/redirect.ts",
      "language": "typescript",
      "folder": "src/rules/handlers",
      "module": ".",
      "lineCount": 33,
      "contentHash": "7a4d4e8cb8c6bb39f71fb227491a13e5845ca9ac122d42f4fc55eae41979928e",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 4
    },
    {
      "path": "src/rules/index.ts",
      "language": "typescript",
      "folder": "src/rules",
      "module": ".",
      "lineCount": 55,
      "contentHash": "0f008a219e8e55e0169cd437db0a7f1d1fa9c507389eea58186b1a7ccbc71ab4",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 10
    },
    {
      "path": "src/rules/internal/key.ts",
      "language": "typescript",
      "folder": "src/rules/internal",
      "module": ".",
      "lineCount": 100,
      "contentHash": "c1ea56279db57ac825fa9b7455350d9054c6c7a5ee33fedc7310589a110f8be4",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 6,
      "fanOut": 1
    },
    {
      "path": "src/rules/internal/premerge.ts",
      "language": "typescript",
      "folder": "src/rules/internal",
      "module": ".",
      "lineCount": 207,
      "contentHash": "5b774fae290d10516036426180979fe17842c3e357d7d1c875a03ea95a2cb231",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 4,
      "fanOut": 1
    },
    {
      "path": "src/rules/internal/resets.ts",
      "language": "typescript",
      "folder": "src/rules/internal",
      "module": ".",
      "lineCount": 52,
      "contentHash": "9f5fdabd98fbb864e9a8876d25e56d42a8e5d2ce263620a1b18a7f77e2898c34",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 2
    },
    {
      "path": "src/rules/internal/scope.ts",
      "language": "typescript",
      "folder": "src/rules/internal",
      "module": ".",
      "lineCount": 291,
      "contentHash": "78b317c6a77e8efec2ba68f5ee55ebbf850b116bb787e0ae33cdaaf74487f8b9",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 6,
      "fanOut": 2
    },
    {
      "path": "src/rules/match.ts",
      "language": "typescript",
      "folder": "src/rules",
      "module": ".",
      "lineCount": 663,
      "contentHash": "6b6d8990dde40dd5a564b096af932a8af0e71ade84df77d3b90af528c56f895d",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 12,
      "fanOut": 7
    },
    {
      "path": "src/rules/merge.ts",
      "language": "typescript",
      "folder": "src/rules",
      "module": ".",
      "lineCount": 244,
      "contentHash": "db527748cc926106c4f8b521af4ca2a2c8c5e903e995262b695996d5ccf5fd40",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 11,
      "fanOut": 3
    },
    {
      "path": "src/rules/middleware.ts",
      "language": "typescript",
      "folder": "src/rules",
      "module": ".",
      "lineCount": 101,
      "contentHash": "5bead98209ea9cbaf768105a10c98b448078aae003ab795cbe611dc1c4378f13",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 10,
      "fanOut": 8
    },
    {
      "path": "src/rules/normalize.ts",
      "language": "typescript",
      "folder": "src/rules",
      "module": ".",
      "lineCount": 205,
      "contentHash": "c424240713c341fe51a2bfee636a958d63ae58b4684e1a343304db4d40d97a07",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 13,
      "fanOut": 4
    },
    {
      "path": "src/rules/proxy.ts",
      "language": "typescript",
      "folder": "src/rules",
      "module": ".",
      "lineCount": 29,
      "contentHash": "60a548c809449507aae3ceaf65e8646b927382f7e88d435b81eb966f05a2ba74",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 4,
      "fanOut": 3
    },
    {
      "path": "src/rules/types.ts",
      "language": "typescript",
      "folder": "src/rules",
      "module": ".",
      "lineCount": 218,
      "contentHash": "74c1f0e8dd8a18039211cce138c92f2350a88160a5435f4b21929eefc48205e8",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 31,
      "fanOut": 4
    },
    {
      "path": "src/tracing.ts",
      "language": "typescript",
      "folder": "src",
      "module": ".",
      "lineCount": 188,
      "contentHash": "efd6a885b0639506dc1ae2af0841e4c1e0dd42cec302dcbbc8fe7b0b32858dd0",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 5
    },
    {
      "path": "src/types/_utils.ts",
      "language": "typescript",
      "folder": "src/types",
      "module": ".",
      "lineCount": 1,
      "contentHash": "b19459dd6e3c28c0cb6920c7a6ffa863a585cd59c042e83d8c8ea7812a9f6d74",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 3,
      "fanOut": 0
    },
    {
      "path": "src/types/context.ts",
      "language": "typescript",
      "folder": "src/types",
      "module": ".",
      "lineCount": 38,
      "contentHash": "aed9ffabbf5d871b7e04fc5346a038e3b85fc0e28a260ea8f05fe58292ec113a",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 9,
      "fanOut": 3
    },
    {
      "path": "src/types/h3.ts",
      "language": "typescript",
      "folder": "src/types",
      "module": ".",
      "lineCount": 229,
      "contentHash": "cee9ccfa12a0ca8b54f8b81f18779da705a0a404994c51d5faa4ab3235a0e43b",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 10,
      "fanOut": 7
    },
    {
      "path": "src/types/handler.ts",
      "language": "typescript",
      "folder": "src/types",
      "module": ".",
      "lineCount": 96,
      "contentHash": "e6c952d5501e831fa78cfc30886057275d8451291e30925f682b6dac9769f8e6",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 21,
      "fanOut": 4
    },
    {
      "path": "src/types/route-rules.ts",
      "language": "typescript",
      "folder": "src/types",
      "module": ".",
      "lineCount": 104,
      "contentHash": "81a03ac98ba6e3bd797ff872c5fcda0a3e8cf7d9a3bfdfa7c64452b566534d91",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 4,
      "fanOut": 2
    },
    {
      "path": "src/utils/auth.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 147,
      "contentHash": "26492bdeacb55b71099995446407cc44c64e4816e0e9a08b8f74d76efeb13eee",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 2
    },
    {
      "path": "src/utils/base.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 46,
      "contentHash": "5d8d8921fdc108c008d5090f4d534a1cce7b2cbe91830049627e3274b33bd8cd",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 4,
      "fanOut": 4
    },
    {
      "path": "src/utils/body.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 249,
      "contentHash": "1dc9fcbc6f38f5e1a98e86f780c99db29bc9df1b0e28bd0ec68d331298982005",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 6
    },
    {
      "path": "src/utils/cache.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 81,
      "contentHash": "8d3b3eb0b0ba695466c5febf537aefdf070345b033228dc5e32fbac20d69f0d9",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 2
    },
    {
      "path": "src/utils/cookie.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 353,
      "contentHash": "90cc4c108a8b1012665efe2b31dc3eb391f6b1c2823004b802efcbb51659e32e",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 5,
      "fanOut": 4
    },
    {
      "path": "src/utils/cors.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 197,
      "contentHash": "a8d7cc669e970d89e5f6d6a86944a829918fff1f437d8d65ab81acd109a48f9a",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 8,
      "fanOut": 4
    },
    {
      "path": "src/utils/event-stream.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 295,
      "contentHash": "e361bf39f0a697048c86a32721e205d846cc7abaf30eaaad5f0cb5297f8fa445",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 4,
      "fanOut": 4
    },
    {
      "path": "src/utils/event.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 57,
      "contentHash": "d15fdbd0fee6736b1456dd9c5e864b4a33bce72b6945fe5bae49d4f4bae4cff3",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 4,
      "fanOut": 2
    },
    {
      "path": "src/utils/fingerprint.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 84,
      "contentHash": "6044a6e729fc58fcc68d735716e8443e345d77ded02c561ea312ba1f2a54e08e",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 2
    },
    {
      "path": "src/utils/internal/auth.ts",
      "language": "typescript",
      "folder": "src/utils/internal",
      "module": ".",
      "lineCount": 32,
      "contentHash": "22add0b762ee0e98d05a3d88c6a3fabf11b0461a5970d97c3917cac7f1c83a7c",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 0
    },
    {
      "path": "src/utils/internal/body.ts",
      "language": "typescript",
      "folder": "src/utils/internal",
      "module": ".",
      "lineCount": 27,
      "contentHash": "b03a7a97e9cf7c92ec0800f61c54b8b187313cce973d554d914a6192bfef256c",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 2
    },
    {
      "path": "src/utils/internal/cache.ts",
      "language": "typescript",
      "folder": "src/utils/internal",
      "module": ".",
      "lineCount": 77,
      "contentHash": "a933a4d4dc24b820b901e99cf02e41e392102e8e7b53441f42d2d09791a54a67",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 0
    },
    {
      "path": "src/utils/internal/cors.ts",
      "language": "typescript",
      "folder": "src/utils/internal",
      "module": ".",
      "lineCount": 232,
      "contentHash": "398e7601f6d43cbc0f7344c4dfc974ce7eb38855a80d0f2d6583d7b84591ce9a",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 3,
      "fanOut": 2
    },
    {
      "path": "src/utils/internal/dispose.ts",
      "language": "typescript",
      "folder": "src/utils/internal",
      "module": ".",
      "lineCount": 179,
      "contentHash": "2ed21d9f5fdbd934210b8c71133d77e421d15742587692d5e862cb95147ac285",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 3,
      "fanOut": 1
    },
    {
      "path": "src/utils/internal/encoding.ts",
      "language": "typescript",
      "folder": "src/utils/internal",
      "module": ".",
      "lineCount": 69,
      "contentHash": "ea0a4560577a5522f1e5fbac2d83e9150b29a232adc240a4ca7dfdb090ab8876",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 4,
      "fanOut": 0
    },
    {
      "path": "src/utils/internal/event-stream.ts",
      "language": "typescript",
      "folder": "src/utils/internal",
      "module": ".",
      "lineCount": 68,
      "contentHash": "c1081c283f896e74944c685a81523d12d9f5b7c063de1e4f336502d664414ef7",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 2
    },
    {
      "path": "src/utils/internal/iron-crypto.ts",
      "language": "typescript",
      "folder": "src/utils/internal",
      "module": ".",
      "lineCount": 429,
      "contentHash": "36bd5f05c103a73b966826ad2fd458d0852311dadbb5d1d98e0f8107521e23fe",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 3,
      "fanOut": 1
    },
    {
      "path": "src/utils/internal/iterable.ts",
      "language": "typescript",
      "folder": "src/utils/internal",
      "module": ".",
      "lineCount": 56,
      "contentHash": "38cddd4593c39282847630e01ab308e80923381c68bb353862c0f38803f128eb",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 3,
      "fanOut": 1
    },
    {
      "path": "src/utils/internal/mime.ts",
      "language": "typescript",
      "folder": "src/utils/internal",
      "module": ".",
      "lineCount": 47,
      "contentHash": "e24df0c3c7e8ce20064017e0a2fcf41e8c1429789eac3065e74f7a9258cb95b3",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 0
    },
    {
      "path": "src/utils/internal/obj.ts",
      "language": "typescript",
      "folder": "src/utils/internal",
      "module": ".",
      "lineCount": 1,
      "contentHash": "190e5fcf3e5ee097530184d19bbec5d7a5573bfa9b16503d0c5586f476496cb8",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 9,
      "fanOut": 0
    },
    {
      "path": "src/utils/internal/object.ts",
      "language": "typescript",
      "folder": "src/utils/internal",
      "module": ".",
      "lineCount": 49,
      "contentHash": "bfd2ee6f6defc0784b5dd901526fceb9bf75f74a3ea926505d79202ee33d96ad",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 1
    },
    {
      "path": "src/utils/internal/path.ts",
      "language": "typescript",
      "folder": "src/utils/internal",
      "module": ".",
      "lineCount": 349,
      "contentHash": "f3d775265f21d69979f2ea1f6b858773b4bdbab259ded60e46d94e051eeb730d",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 16,
      "fanOut": 0
    },
    {
      "path": "src/utils/internal/proxy.ts",
      "language": "typescript",
      "folder": "src/utils/internal",
      "module": ".",
      "lineCount": 261,
      "contentHash": "e66b5739bc0433f2ea48dc1c79a2862afdcb5d4341f342e171130bad0885e87c",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 1
    },
    {
      "path": "src/utils/internal/query.ts",
      "language": "typescript",
      "folder": "src/utils/internal",
      "module": ".",
      "lineCount": 138,
      "contentHash": "470c9677e0c99ce0807027354db72d0d83d68009111d846430da1bb513b3ab9f",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 1
    },
    {
      "path": "src/utils/internal/route.ts",
      "language": "typescript",
      "folder": "src/utils/internal",
      "module": ".",
      "lineCount": 84,
      "contentHash": "a56c96866726585f3d749c8ad1e3f46f7a3be37e3dee0aa3bb5cc418e1cbb7b6",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 0
    },
    {
      "path": "src/utils/internal/session.ts",
      "language": "typescript",
      "folder": "src/utils/internal",
      "module": ".",
      "lineCount": 18,
      "contentHash": "4c81e58b282857cfcb56c6b16d222fd5a31f1aa8d987a3a7c041b0b0b7de033b",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 1
    },
    {
      "path": "src/utils/internal/standard-schema.ts",
      "language": "typescript",
      "folder": "src/utils/internal",
      "module": ".",
      "lineCount": 68,
      "contentHash": "78db025b69b562d534ff567f020ea55f6e0a38c21fe790d00b3187fd053ceb9b",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 6,
      "fanOut": 0
    },
    {
      "path": "src/utils/internal/validate.ts",
      "language": "typescript",
      "folder": "src/utils/internal",
      "module": ".",
      "lineCount": 233,
      "contentHash": "537a05f4adc242fbf4c484e0ec38c2803ab4bf8a76fd352ebc7e06cb2d5462c8",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 7,
      "fanOut": 3
    },
    {
      "path": "src/utils/json-rpc.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 575,
      "contentHash": "b350314c7d0dc9f0e592bc0148ab5d505f8f5064902a897b8d9958dde13fed7b",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 7
    },
    {
      "path": "src/utils/middleware.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 82,
      "contentHash": "83da4246d36c4967abeb36201e4dd58895312165ed17ce93549b0b3df39b3bec",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 6
    },
    {
      "path": "src/utils/path.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 245,
      "contentHash": "48b01eb28951bb7e65eaa2a97731e5b74201ffa66b782696d0d0b283fa22ef5a",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 6,
      "fanOut": 1
    },
    {
      "path": "src/utils/proxy.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 591,
      "contentHash": "3a0d89f91e0c516a3e3f731c25d362e9935256e2d334f8e80ec5f2e490863149",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 5,
      "fanOut": 5
    },
    {
      "path": "src/utils/query.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 181,
      "contentHash": "9a043f6f80ef546303ef93b365046414b60ab0fadf76fb78c4253d9ac8d5e537",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 2
    },
    {
      "path": "src/utils/request.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 613,
      "contentHash": "e137451b935d29ef19643fc271a066f85c4c662d6e2de47586f80fd58856cd42",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 6,
      "fanOut": 11
    },
    {
      "path": "src/utils/response.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 367,
      "contentHash": "1aa2a8b57f9d1d4c46b42bdd3d7a6411e1817d60961a85e659441a601372ad58",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 4,
      "fanOut": 4
    },
    {
      "path": "src/utils/route.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 153,
      "contentHash": "64345cadf5ca01678e3ba5783d8751d6d7a55e951293cd993a28c4ade4be153f",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 3,
      "fanOut": 7
    },
    {
      "path": "src/utils/sanitize.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 32,
      "contentHash": "751bbbb88b6558536d505f886df04bca5fb7f8eb68a530941263657d35f1be72",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 5,
      "fanOut": 0
    },
    {
      "path": "src/utils/session.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 464,
      "contentHash": "a8f5f4178e5a61fa74aab5bafbb3676b0aff5f1b7ceae0a3f051ecfbd59e9845",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 4,
      "fanOut": 7
    },
    {
      "path": "src/utils/static.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 351,
      "contentHash": "47d7cea3c4f853aa79065887869899a751c2ee315bca65e1492b0688f3200488",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 7
    },
    {
      "path": "src/utils/timing.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 77,
      "contentHash": "b3c1b4089dd9d99d0cd6ff5ff275678bf0165c61409d729c2bcceedfcfed0350",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 2
    },
    {
      "path": "src/utils/ws.ts",
      "language": "typescript",
      "folder": "src/utils",
      "module": ".",
      "lineCount": 160,
      "contentHash": "798f7b075433434074cea44211425881e8f43453ce51398e107d329f883f1c05",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 3
    },
    {
      "path": "test/_setup.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 214,
      "contentHash": "74260d5dbc423c46b023ed2f2d5224f183da0e5ff42379547f67f88ca58c0243",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 27,
      "fanOut": 3
    },
    {
      "path": "test/app.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 608,
      "contentHash": "eb82b8ecec9f7c3554f80660e80afcd1e57fc5e08b7f6e4f4f4f7cd67e5cc418",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 8
    },
    {
      "path": "test/auth.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 338,
      "contentHash": "2b7b0a0dd99328d23426a2f6b0fe8cbc37375fe549e04e0953a8777399a8817a",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/bench/_bundler.ts",
      "language": "typescript",
      "folder": "test/bench",
      "module": ".",
      "lineCount": 212,
      "contentHash": "23e5727f9f302d6a63aabee5e94ae528dd00027a3a993ac90be0fcfdc2e88ef6",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 0
    },
    {
      "path": "test/bench/_rules-fixtures.ts",
      "language": "typescript",
      "folder": "test/bench",
      "module": ".",
      "lineCount": 174,
      "contentHash": "99bfaeaa7a8104951de56dcf4c1d30ec58a4cdbf44fb325dd9e495a572cedd0c",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 2
    },
    {
      "path": "test/bench/bench.impl.ts",
      "language": "typescript",
      "folder": "test/bench",
      "module": ".",
      "lineCount": 131,
      "contentHash": "fbb05eb00e455c4dc18b7546c286baec0c699e1bc89ad0e8188258f9287b119b",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 2
    },
    {
      "path": "test/bench/bench.test.ts",
      "language": "typescript",
      "folder": "test/bench",
      "module": ".",
      "lineCount": 26,
      "contentHash": "4bfbd959c1c542d6726b6d006db6a2693f5e67a766acb14c2c1913279288cf05",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/bench/bench.ts",
      "language": "typescript",
      "folder": "test/bench",
      "module": ".",
      "lineCount": 24,
      "contentHash": "e706e5fce97dd642ce2e79beac7f7209a5c01fc32d1351afc18839a59c68f5f0",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/bench/bundle-inspect.ts",
      "language": "typescript",
      "folder": "test/bench",
      "module": ".",
      "lineCount": 100,
      "contentHash": "59cc1bb4558b2bde9d8bb2f5b4dbed31e65784a4ce686306fe8466ae899bc96a",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/bench/bundle.test.ts",
      "language": "typescript",
      "folder": "test/bench",
      "module": ".",
      "lineCount": 87,
      "contentHash": "ab3dc9f190aa523f7124093d9a6f183cd854305d5a9f95c2630df1966eef9d50",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "test/bench/input.ts",
      "language": "typescript",
      "folder": "test/bench",
      "module": ".",
      "lineCount": 46,
      "contentHash": "9adac1d6f139ccccf1fa492816b5a6ce04def6ae57a81d1382914b7463c5ad09",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 0
    },
    {
      "path": "test/bench/path.ts",
      "language": "typescript",
      "folder": "test/bench",
      "module": ".",
      "lineCount": 137,
      "contentHash": "b1a0135b5f4b3eb2a29a7a875390be0980306c21bded014ab1c84137e36123ca",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/bench/request-proxy.ts",
      "language": "typescript",
      "folder": "test/bench",
      "module": ".",
      "lineCount": 52,
      "contentHash": "0117339cdda63fb12aa76ff0b2cc34f7b781893c6f3d424690e2e3f206f074b5",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/bench/rules-bundle-inspect.ts",
      "language": "typescript",
      "folder": "test/bench",
      "module": ".",
      "lineCount": 582,
      "contentHash": "7a938e32d48a0fffbd6d61fce8796e0ae8841140eeb2597a9fb2e0d65042397e",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 3
    },
    {
      "path": "test/bench/session.ts",
      "language": "typescript",
      "folder": "test/bench",
      "module": ".",
      "lineCount": 65,
      "contentHash": "7318de74d1c3a965c665511e031785b46b0ac3bec93d00ddd65cd8f80490d191",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/body-limit.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 221,
      "contentHash": "3bfefdf4a259375601427ee0fddae726ea37ef256e748838a545978dcfa7e0c4",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/body.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 525,
      "contentHash": "ed2b8e82f0a538e7ccd3f2b451d9fcac757ac76c0331a7e8af150dbb15044a9c",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/cookies.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 780,
      "contentHash": "b42b34e56fdf0fdd46924ea8c7703784bc4fffb7f922f1ddbd6084b2d961af55",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/dispose.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 271,
      "contentHash": "6bc019c95ea4c1621178675bb1c3ef063b7506a2117b7afb8a9d55c2e42612f8",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/dist.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 61,
      "contentHash": "459d1fa828b2082e5e354719529cfba1088517824b18393d795c0e90cf4abcad",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "test/errors.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 459,
      "contentHash": "84b21b9173847759598b2c6905a50a68134498e2c70fa1eddacc774e7eff218a",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/event.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 120,
      "contentHash": "5fd03a52ade74b1c229b12ec432a505a25d9e01428d6cff2c8851b1a222382a4",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/handler.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 428,
      "contentHash": "9985eb9cebff7d3c2980c174c1b5c12fffe087d3e8f0ad0e1498786832393ae7",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 3
    },
    {
      "path": "test/happydom.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 45,
      "contentHash": "6ded3595d9512d6ef3ffe2a05056deac4d6980b96ea91559f84aac1b3ae32b2e",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/hooks.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 128,
      "contentHash": "549a47604af15949e5d96c5ce8408745463cdc739a54ba6d60fd4ca141ace0b6",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/integrations.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 166,
      "contentHash": "9bd710f8a14716f1803590175858d4bb1d3bcfa55bae9d19868d64bfaf7176ef",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 3
    },
    {
      "path": "test/iterable.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 164,
      "contentHash": "99d09438529951ff56951e816bc28bc5bcc5ff3186a5f63833d6b4ab327c10f9",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/json-rpc-ws.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 466,
      "contentHash": "0b2ae0d32850e3070209774cb1dc5eae6d23601e1181b3577b4c8e6e712061ae",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/json-rpc.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 1085,
      "contentHash": "dbdd9ca1a9b3f112ede902e1df944cd674bf9af30189ea295682b81c5a0cb8fc",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/lazy.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 40,
      "contentHash": "3f276ecf105dd860e28b75644a53362bfe57340db2ee2425a16a04dbf6b2aa6b",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/middleware.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 387,
      "contentHash": "ad5da100867e0da22b1650be4f5cffbf736427c9222ce6a325ab494a7c18ac6f",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 5
    },
    {
      "path": "test/mount.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 397,
      "contentHash": "e3930fb738bcc562d4f87268732d75a3f6e3389fb2220ec4f7af21451598c4a6",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 4
    },
    {
      "path": "test/proxy.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 1535,
      "contentHash": "74ffd5198e814ee678fb1c822d10424b706794f403209f2f350b4f6e7b0ce022",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 3
    },
    {
      "path": "test/query.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 231,
      "contentHash": "6889fbe3d8e922e0168b5c23b1580a53b327130e72f3bc69c26b38c664791990",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/route.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 93,
      "contentHash": "dc0d079103d045c80d1114083d7adbfcec11d91e3305906245d473ec6431af37",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/router.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 507,
      "contentHash": "fd90e033e343c33308683b58abc34f4eb460a0b5ecf258e0854a40ac6f728605",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/rules/_augment.ts",
      "language": "typescript",
      "folder": "test/rules",
      "module": ".",
      "lineCount": 48,
      "contentHash": "feb729d37e788b1c25744b0b5f4b5ae03cd580bd108c55212c977c758015feb4",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 0
    },
    {
      "path": "test/rules/_fixture.ts",
      "language": "typescript",
      "folder": "test/rules",
      "module": ".",
      "lineCount": 142,
      "contentHash": "6e6a5ba80c917e58738b44b62a2a9cbd8e0d73796931cd03a0370f238d23bb1e",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 4,
      "fanOut": 5
    },
    {
      "path": "test/rules/cache.test.ts",
      "language": "typescript",
      "folder": "test/rules",
      "module": ".",
      "lineCount": 1113,
      "contentHash": "afaac18a5b1db51cf6293a692af5141ff357146a6885467972cf82ca69b1f993",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 5
    },
    {
      "path": "test/rules/compiler.test-d.ts",
      "language": "typescript",
      "folder": "test/rules",
      "module": ".",
      "lineCount": 39,
      "contentHash": "c387b74baa784a30f77f0669f5fe755306ae5d5df498239b7a77504550112d8c",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/rules/compiler.test.ts",
      "language": "typescript",
      "folder": "test/rules",
      "module": ".",
      "lineCount": 756,
      "contentHash": "fa441af40682511745db255222e705a4323b900c01b0c1d7ff0215750f2ac8dd",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 9
    },
    {
      "path": "test/rules/encoding.test.ts",
      "language": "typescript",
      "folder": "test/rules",
      "module": ".",
      "lineCount": 1324,
      "contentHash": "8f734d4a6e216c4197a0aec9f990f5a93711d3dde8bcb69fc868cdfa59997298",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 13
    },
    {
      "path": "test/rules/match.test.ts",
      "language": "typescript",
      "folder": "test/rules",
      "module": ".",
      "lineCount": 480,
      "contentHash": "918ff9a40c9d55f3d17bbb912d064433475c772a0bdf231c3b1a264ca6539952",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 7
    },
    {
      "path": "test/rules/memoize.test.ts",
      "language": "typescript",
      "folder": "test/rules",
      "module": ".",
      "lineCount": 234,
      "contentHash": "d044e83855c6d1911fb66f852f8af2196998c57a24abe2a4576a26bc0e398e09",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 5
    },
    {
      "path": "test/rules/merge.test.ts",
      "language": "typescript",
      "folder": "test/rules",
      "module": ".",
      "lineCount": 869,
      "contentHash": "b584b8a2d7ed8abb33d967178ed7b8a9d7c5a0a61a72c126b97002794bff0a2f",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 8
    },
    {
      "path": "test/rules/middleware.test.ts",
      "language": "typescript",
      "folder": "test/rules",
      "module": ".",
      "lineCount": 312,
      "contentHash": "ccffe3c507e321d686429b3b96ddc25d7efbd8d003a2da1cdc9fc5ccc3f6b5b6",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 4
    },
    {
      "path": "test/rules/normalize.test.ts",
      "language": "typescript",
      "folder": "test/rules",
      "module": ".",
      "lineCount": 551,
      "contentHash": "14f9679e3e4c2328148d4c76adedbfca886f93ae3b619a421899e9e5d11f89f6",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 6
    },
    {
      "path": "test/rules/premerge.test.ts",
      "language": "typescript",
      "folder": "test/rules",
      "module": ".",
      "lineCount": 301,
      "contentHash": "eb1a5954eb8f1554c1010e44bd42d912c22d8ce6f2a3071092c80abeb26fe977",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 6
    },
    {
      "path": "test/rules/rules.test.ts",
      "language": "typescript",
      "folder": "test/rules",
      "module": ".",
      "lineCount": 1176,
      "contentHash": "fb4a60cbb73472280dbee24c36a1b16cbfe11dc7cb801987b4c1483c444c69c1",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 7
    },
    {
      "path": "test/rules/scope.test.ts",
      "language": "typescript",
      "folder": "test/rules",
      "module": ".",
      "lineCount": 568,
      "contentHash": "f90ec10f09f9268945cf04386f79f86b67b24d84dc44fbe60884f6a199f1c32e",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 4
    },
    {
      "path": "test/rules/treeshake.test.ts",
      "language": "typescript",
      "folder": "test/rules",
      "module": ".",
      "lineCount": 261,
      "contentHash": "c91d57e93456d51e17ff254e5aa28c59e41b16fd1e73dab70663d9ea01f25fc3",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/rules/types.test-d.ts",
      "language": "typescript",
      "folder": "test/rules",
      "module": ".",
      "lineCount": 195,
      "contentHash": "a8af45e530e0cd262d5f2f5f5c9ca032febb3348cc87c288587b00bf7890b89d",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 5
    },
    {
      "path": "test/security.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 561,
      "contentHash": "3746acae31f71ace7c84737d60c6ca92c8da7c871cce8f52b6fb24aa417b7377",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/session.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 777,
      "contentHash": "fb87de872bfccea216f5a9576742e4050f0c43b58c5d4671a6e45dd64652f9aa",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 4
    },
    {
      "path": "test/sse.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 243,
      "contentHash": "09356edca6de71db4fa1ebbc8a0258558ff66f417f1fa32355627f9da77cd7a1",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/static.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 678,
      "contentHash": "9e2bfeae8107e357681414d460f963074fb74813d4aa55aeb515a2dcbf1973ce",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/status.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 165,
      "contentHash": "9005805efc2d939c9c78d99a57397d7cc62c6c2f70f29ede90b8cedc68dc707c",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/stream.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 139,
      "contentHash": "aad17fbf781f77286ccd4a2f82cfe13745a5f248d2ec7a4f331e05b9b42556cf",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/tracing.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 1264,
      "contentHash": "5d20cf823b909e34baf2916c60eb404920ae4a06794e12d33eb70b90b4cdc97c",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 5
    },
    {
      "path": "test/unit/auth.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 177,
      "contentHash": "a3ed88bf818572e3e2738d537839720f84b615a099d64a895fe00fb0434e4bff",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/unit/body-limit.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 135,
      "contentHash": "c04c289a113348bdb8b6ef9066cd54eb4ca883b0a1dbebecb55745547587008a",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/unit/cli.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 64,
      "contentHash": "5244194dac4f5f2ccabd3096e25be28877f7189351b08b3a6839a7609ba59f35",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "test/unit/cookie-perf.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 58,
      "contentHash": "c30238143fbd0b4e800a1fd212431114ce269d25954762dd2e265cb6e5c9be17",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/unit/cookie-validation.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 74,
      "contentHash": "e331037e24416634fdab2ea81dab488c8a7864d43dd0f0bcc652ebbf7b7a24b8",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/unit/cors.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 1014,
      "contentHash": "6cb37005073e8a058751071db1ac5cc66be21f7df310b0039f1e6e59c106e316",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 3
    },
    {
      "path": "test/unit/encoding.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 111,
      "contentHash": "ce04f25abdf692e4d9df25133edce1199758f1b2ad0f4edfca28845c91ccf6f9",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/unit/event.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 177,
      "contentHash": "2697755017e3e1ce2bcb9a72ca37b42fe194ec8b280c7d47bc0c66ee78169e18",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 3
    },
    {
      "path": "test/unit/h3.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 12,
      "contentHash": "840b1d56ab26ac2166b094017f37eb5e33165ff5b526b054dbd4b457163e3218",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/unit/iron-crypto.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 341,
      "contentHash": "37806b1b0fcedf1451dc4f48b18b6729e1b6d2bde520824f06c0703ebe864084",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/unit/iterable.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 32,
      "contentHash": "d458dd3e540d27001238cfd033281a4359348ed222de734350365de600a0af8b",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/unit/meta.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 20,
      "contentHash": "0d5913c4281099be78d9d76b8218d8aecadd59058e6404a45e758fdebc454997",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/unit/middleware.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 150,
      "contentHash": "7051b9168e74594da1d31f5ccd92ee207fdc8595b1f2a2c779622a0dbd1cfb6f",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 3
    },
    {
      "path": "test/unit/mime.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 31,
      "contentHash": "93fb1a4df64d8d0a7cf131522fc22e5118ee20d806db732f2e439f463482e194",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/unit/package.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 159,
      "contentHash": "f8bb9a035077c32095c2cc115671d5b9577c47cb2403b9d72d2012173834a4bc",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/unit/path.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 372,
      "contentHash": "e3fa12be585584e3d0d9a2f5bb6eab9c45f5c552817299c8d20748763011f0f5",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/unit/proxy.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 58,
      "contentHash": "6fff5a33dbf837c8c2879e2f6886bb7fc8bb3ef2661bd414241fe6f28634ace3",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/unit/query.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 222,
      "contentHash": "bfba8a7677462d328603e1a9a83f6630e097e324cb0934f2a4708a6f05f7047b",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/unit/request.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 204,
      "contentHash": "9146a9c2a70732df371a0d9713d6ccee33a9afab49ba0f240d4f424b8d382ae6",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/unit/route-matcher.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 140,
      "contentHash": "0501eb2d76649b07cb026777fc0ccbde7fda1a910905e81284769b1e92844c8c",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/unit/route-normalize.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 168,
      "contentHash": "acb04abc4117f1f624bcf187ceb7bd18cde2f89d69f1fa6d7ea4c451675d33b2",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 4
    },
    {
      "path": "test/unit/sanitize.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 41,
      "contentHash": "6ddb5d47bff3e385bc58ff19628c05f76d76769dd8e5fd59f86ea01b0b54bcf8",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/unit/sse.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 377,
      "contentHash": "c1747694f54b81fb826af5ed6e42f1662757d9c28a0901d98a8ba00077c9f3e0",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 3
    },
    {
      "path": "test/unit/timing.test.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 112,
      "contentHash": "adba57acb72b8ba0148025ffc8d59f0b79b1ae3682fb1d6bdfe9a7d871973e41",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 1
    },
    {
      "path": "test/unit/types.test-d.ts",
      "language": "typescript",
      "folder": "test/unit",
      "module": ".",
      "lineCount": 543,
      "contentHash": "5d91cc05ae0b6d2745087804b30f8f270b564a56167a040f886b05fa8fa0f199",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/utils.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 1065,
      "contentHash": "5d1bdbdb6a6e801cf92d6c6c5d7bfb703101c1ffb146fcad119eb6499624ecec",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "test/validate.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 406,
      "contentHash": "a08fb3676935a9ffefd0aac9746d0b3fbdb8057fd62556281d119e66d5a1e2fb",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 3
    },
    {
      "path": "test/ws.test.ts",
      "language": "typescript",
      "folder": "test",
      "module": ".",
      "lineCount": 205,
      "contentHash": "3b89e76e100836941cfb0da20e5b415e91498bdd86f1f5a1e446b0c9516513e4",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 2
    },
    {
      "path": "vitest.config.mjs",
      "language": "javascript",
      "folder": ".",
      "module": ".",
      "lineCount": 18,
      "contentHash": "492677be525f100df55966f949bed97f60c7949d30e9c2d9061afc44a2e395a9",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    }
  ],
  "edges": [
    {
      "source": "src/_deprecated.ts",
      "target": "src/adapters.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_deprecated.ts",
      "target": "src/error.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_deprecated.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_deprecated.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_deprecated.ts",
      "target": "src/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_deprecated.ts",
      "target": "src/response.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_deprecated.ts",
      "target": "src/types/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_deprecated.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_deprecated.ts",
      "target": "src/utils/base.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_deprecated.ts",
      "target": "src/utils/event-stream.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_deprecated.ts",
      "target": "src/utils/internal/iterable.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_deprecated.ts",
      "target": "src/utils/proxy.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_deprecated.ts",
      "target": "src/utils/response.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_deprecated.ts",
      "target": "src/utils/sanitize.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_entries/_common.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_entries/bun.ts",
      "target": "src/_entries/_common.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_entries/bun.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_entries/bun.ts",
      "target": "src/index.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/_entries/cloudflare.ts",
      "target": "src/_entries/_common.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_entries/cloudflare.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_entries/cloudflare.ts",
      "target": "src/index.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/_entries/deno.ts",
      "target": "src/_entries/_common.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_entries/deno.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_entries/deno.ts",
      "target": "src/index.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/_entries/generic.ts",
      "target": "src/_entries/_common.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_entries/generic.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_entries/generic.ts",
      "target": "src/index.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/_entries/node.ts",
      "target": "src/_entries/_common.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_entries/node.ts",
      "target": "src/adapters.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_entries/node.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_entries/node.ts",
      "target": "src/index.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/_entries/service-worker.ts",
      "target": "src/_entries/_common.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_entries/service-worker.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/_entries/service-worker.ts",
      "target": "src/index.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/adapters.ts",
      "target": "src/error.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/adapters.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/adapters.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/adapters.ts",
      "target": "src/response.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/adapters.ts",
      "target": "src/types/context.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/adapters.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/error.ts",
      "target": "src/utils/sanitize.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/event.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/event.ts",
      "target": "src/types/context.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/event.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/event.ts",
      "target": "src/utils/internal/obj.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/event.ts",
      "target": "src/utils/internal/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/h3.ts",
      "target": "src/error.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/h3.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/h3.ts",
      "target": "src/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/h3.ts",
      "target": "src/middleware.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/h3.ts",
      "target": "src/plugin.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/h3.ts",
      "target": "src/response.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/h3.ts",
      "target": "src/types/context.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/h3.ts",
      "target": "src/types/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/h3.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/h3.ts",
      "target": "src/utils/internal/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/h3.ts",
      "target": "src/utils/request.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/handler.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/handler.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/handler.ts",
      "target": "src/middleware.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/handler.ts",
      "target": "src/response.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/handler.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/handler.ts",
      "target": "src/utils/internal/standard-schema.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/handler.ts",
      "target": "src/utils/internal/validate.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/_deprecated.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/adapters.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/error.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/event.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/h3.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/handler.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/middleware.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/plugin.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/response.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/types/context.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/types/h3.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/types/route-rules.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/auth.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/base.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/body.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/cache.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/cookie.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/cors.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/event-stream.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/event.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/fingerprint.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/json-rpc.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/middleware.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/path.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/proxy.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/query.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/request.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/response.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/route.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/sanitize.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/session.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/static.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/timing.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/index.ts",
      "target": "src/utils/ws.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/middleware.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/middleware.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/middleware.ts",
      "target": "src/response.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/middleware.ts",
      "target": "src/types/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/middleware.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/middleware.ts",
      "target": "src/utils/internal/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/middleware.ts",
      "target": "src/utils/internal/route.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/plugin.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/response.ts",
      "target": "src/error.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/response.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/response.ts",
      "target": "src/types/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/response.ts",
      "target": "src/utils/internal/dispose.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/response.ts",
      "target": "src/utils/internal/object.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/response.ts",
      "target": "src/utils/sanitize.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/cache.ts",
      "target": "src/error.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/cache.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/cache.ts",
      "target": "src/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/cache.ts",
      "target": "src/response.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/cache.ts",
      "target": "src/rules/handlers/cache.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/cache.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/cache.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/cache.ts",
      "target": "src/utils/cache.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/compiler.ts",
      "target": "src/rules/compiler/compile.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/rules/compiler.ts",
      "target": "src/rules/compiler/options.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/rules/compiler.ts",
      "target": "src/rules/compiler/runtime-rules.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/rules/compiler/codegen.ts",
      "target": "src/rules/compiler/options.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/compiler/codegen.ts",
      "target": "src/rules/compiler/runtime-rules.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/compiler/codegen.ts",
      "target": "src/rules/internal/premerge.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/compiler/codegen.ts",
      "target": "src/rules/merge.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/compiler/compile.ts",
      "target": "src/rules/compiler/codegen.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/compiler/compile.ts",
      "target": "src/rules/compiler/options.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/compiler/compile.ts",
      "target": "src/rules/compiler/runtime-rules.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/compiler/compile.ts",
      "target": "src/rules/internal/key.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/compiler/compile.ts",
      "target": "src/rules/internal/premerge.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/compiler/compile.ts",
      "target": "src/rules/match.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/compiler/compile.ts",
      "target": "src/rules/merge.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/compiler/compile.ts",
      "target": "src/rules/normalize.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/compiler/compile.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/compiler/options.ts",
      "target": "src/rules/compiler/runtime-rules.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/compiler/options.ts",
      "target": "src/rules/match.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/_at-target.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/_at-target.ts",
      "target": "src/rules/internal/scope.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/_at-target.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/_at-target.ts",
      "target": "src/utils/internal/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/_utils.ts",
      "target": "src/error.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/_utils.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/_utils.ts",
      "target": "src/rules/handlers/_splat.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/_utils.ts",
      "target": "src/rules/internal/scope.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/_utils.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/_utils.ts",
      "target": "src/utils/internal/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/cache.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/cache.ts",
      "target": "src/response.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/cache.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/cache.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/cors.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/cors.ts",
      "target": "src/utils/cors.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/headers.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/index.ts",
      "target": "src/rules/handlers/cors.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/index.ts",
      "target": "src/rules/handlers/headers.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/index.ts",
      "target": "src/rules/handlers/redirect.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/index.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/redirect.ts",
      "target": "src/rules/handlers/_at-target.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/redirect.ts",
      "target": "src/rules/handlers/_utils.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/redirect.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/handlers/redirect.ts",
      "target": "src/utils/response.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/index.ts",
      "target": "src/rules/handlers/cache.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/rules/index.ts",
      "target": "src/rules/handlers/cors.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/rules/index.ts",
      "target": "src/rules/handlers/headers.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/rules/index.ts",
      "target": "src/rules/handlers/index.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/rules/index.ts",
      "target": "src/rules/handlers/redirect.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/rules/index.ts",
      "target": "src/rules/match.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/rules/index.ts",
      "target": "src/rules/merge.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/rules/index.ts",
      "target": "src/rules/middleware.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/rules/index.ts",
      "target": "src/rules/normalize.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/rules/index.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "re-export"
      ]
    },
    {
      "source": "src/rules/internal/key.ts",
      "target": "src/utils/internal/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/internal/premerge.ts",
      "target": "src/rules/merge.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/internal/resets.ts",
      "target": "src/rules/merge.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/internal/resets.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/internal/scope.ts",
      "target": "src/utils/internal/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/internal/scope.ts",
      "target": "src/utils/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/match.ts",
      "target": "src/rules/handlers/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/match.ts",
      "target": "src/rules/internal/key.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/match.ts",
      "target": "src/rules/internal/premerge.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/match.ts",
      "target": "src/rules/internal/scope.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/match.ts",
      "target": "src/rules/merge.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/match.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/match.ts",
      "target": "src/utils/internal/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/merge.ts",
      "target": "src/rules/internal/premerge.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/merge.ts",
      "target": "src/rules/internal/resets.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/merge.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/middleware.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/middleware.ts",
      "target": "src/middleware.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/middleware.ts",
      "target": "src/rules/internal/key.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/middleware.ts",
      "target": "src/rules/match.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/middleware.ts",
      "target": "src/rules/normalize.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/middleware.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/middleware.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/middleware.ts",
      "target": "src/utils/cors.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/normalize.ts",
      "target": "src/rules/handlers/_splat.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/normalize.ts",
      "target": "src/rules/internal/key.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/normalize.ts",
      "target": "src/rules/merge.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/normalize.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/proxy.ts",
      "target": "src/rules/handlers/_utils.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/proxy.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/proxy.ts",
      "target": "src/utils/proxy.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/types.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/types.ts",
      "target": "src/types/route-rules.ts",
      "kinds": [
        "import",
        "re-export"
      ]
    },
    {
      "source": "src/rules/types.ts",
      "target": "src/utils/cors.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/rules/types.ts",
      "target": "src/utils/proxy.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/tracing.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/tracing.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/tracing.ts",
      "target": "src/plugin.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/tracing.ts",
      "target": "src/types/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/tracing.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/types/context.ts",
      "target": "src/types/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/types/context.ts",
      "target": "src/types/route-rules.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/types/context.ts",
      "target": "src/utils/session.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/types/h3.ts",
      "target": "src/error.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/types/h3.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/types/h3.ts",
      "target": "src/middleware.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/types/h3.ts",
      "target": "src/plugin.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/types/h3.ts",
      "target": "src/types/_utils.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/types/h3.ts",
      "target": "src/types/context.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/types/h3.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/types/handler.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/types/handler.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/types/handler.ts",
      "target": "src/types/_utils.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/types/handler.ts",
      "target": "src/types/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/types/route-rules.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/types/route-rules.ts",
      "target": "src/utils/cors.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/auth.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/auth.ts",
      "target": "src/utils/internal/auth.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/base.ts",
      "target": "src/error.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/base.ts",
      "target": "src/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/base.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/base.ts",
      "target": "src/utils/internal/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/body.ts",
      "target": "src/error.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/body.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/body.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/body.ts",
      "target": "src/utils/internal/body.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/body.ts",
      "target": "src/utils/internal/standard-schema.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/body.ts",
      "target": "src/utils/internal/validate.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/cache.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/cache.ts",
      "target": "src/utils/internal/cache.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/cookie.ts",
      "target": "src/error.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/cookie.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/cookie.ts",
      "target": "src/utils/internal/standard-schema.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/cookie.ts",
      "target": "src/utils/internal/validate.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/cors.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/cors.ts",
      "target": "src/response.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/cors.ts",
      "target": "src/utils/internal/cors.ts",
      "kinds": [
        "import",
        "re-export"
      ]
    },
    {
      "source": "src/utils/cors.ts",
      "target": "src/utils/response.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/event-stream.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/event-stream.ts",
      "target": "src/response.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/event-stream.ts",
      "target": "src/utils/internal/dispose.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/event-stream.ts",
      "target": "src/utils/internal/event-stream.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/event.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/event.ts",
      "target": "src/types/context.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/fingerprint.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/fingerprint.ts",
      "target": "src/utils/request.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/internal/body.ts",
      "target": "src/utils/internal/obj.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/internal/body.ts",
      "target": "src/utils/internal/object.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/internal/cors.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/internal/cors.ts",
      "target": "src/utils/cors.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/internal/dispose.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/internal/event-stream.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/internal/event-stream.ts",
      "target": "src/utils/event-stream.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/internal/iron-crypto.ts",
      "target": "src/utils/internal/encoding.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/internal/iterable.ts",
      "target": "src/utils/internal/encoding.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/internal/object.ts",
      "target": "src/utils/internal/obj.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/internal/proxy.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/internal/query.ts",
      "target": "src/utils/internal/obj.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/internal/session.ts",
      "target": "src/utils/session.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/internal/validate.ts",
      "target": "src/error.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/internal/validate.ts",
      "target": "src/utils/internal/obj.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/internal/validate.ts",
      "target": "src/utils/internal/standard-schema.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/json-rpc.ts",
      "target": "src/error.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/json-rpc.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/json-rpc.ts",
      "target": "src/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/json-rpc.ts",
      "target": "src/response.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/json-rpc.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/json-rpc.ts",
      "target": "src/utils/internal/cors.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/json-rpc.ts",
      "target": "src/utils/ws.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/middleware.ts",
      "target": "src/error.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/middleware.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/middleware.ts",
      "target": "src/response.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/middleware.ts",
      "target": "src/types/_utils.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/middleware.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/middleware.ts",
      "target": "src/utils/body.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/path.ts",
      "target": "src/utils/internal/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/proxy.ts",
      "target": "src/error.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/proxy.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/proxy.ts",
      "target": "src/response.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/proxy.ts",
      "target": "src/utils/internal/obj.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/proxy.ts",
      "target": "src/utils/internal/proxy.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/query.ts",
      "target": "src/error.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/query.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/request.ts",
      "target": "src/error.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/request.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/request.ts",
      "target": "src/types/context.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/request.ts",
      "target": "src/types/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/request.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/request.ts",
      "target": "src/utils/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/request.ts",
      "target": "src/utils/internal/obj.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/request.ts",
      "target": "src/utils/internal/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/request.ts",
      "target": "src/utils/internal/query.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/request.ts",
      "target": "src/utils/internal/standard-schema.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/request.ts",
      "target": "src/utils/internal/validate.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/response.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/response.ts",
      "target": "src/response.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/response.ts",
      "target": "src/utils/internal/dispose.ts",
      "kinds": [
        "import",
        "re-export"
      ]
    },
    {
      "source": "src/utils/response.ts",
      "target": "src/utils/internal/iterable.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/route.ts",
      "target": "src/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/route.ts",
      "target": "src/plugin.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/route.ts",
      "target": "src/types/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/route.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/route.ts",
      "target": "src/utils/internal/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/route.ts",
      "target": "src/utils/internal/standard-schema.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/route.ts",
      "target": "src/utils/internal/validate.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/session.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/session.ts",
      "target": "src/types/context.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/session.ts",
      "target": "src/utils/cookie.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/session.ts",
      "target": "src/utils/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/session.ts",
      "target": "src/utils/internal/iron-crypto.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/session.ts",
      "target": "src/utils/internal/obj.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/session.ts",
      "target": "src/utils/internal/session.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/static.ts",
      "target": "src/error.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/static.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/static.ts",
      "target": "src/response.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/static.ts",
      "target": "src/utils/internal/cache.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/static.ts",
      "target": "src/utils/internal/mime.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/static.ts",
      "target": "src/utils/internal/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/static.ts",
      "target": "src/utils/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/timing.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/timing.ts",
      "target": "src/types/context.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/ws.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/ws.ts",
      "target": "src/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "src/utils/ws.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/_setup.ts",
      "target": "src/_entries/node.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/_setup.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/_setup.ts",
      "target": "src/tracing.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/app.test.ts",
      "target": "src/adapters.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/app.test.ts",
      "target": "src/error.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/app.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/app.test.ts",
      "target": "src/utils/base.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/app.test.ts",
      "target": "src/utils/cookie.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/app.test.ts",
      "target": "src/utils/cors.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/app.test.ts",
      "target": "src/utils/middleware.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/app.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/auth.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/auth.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/bench/_rules-fixtures.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/bench/_rules-fixtures.ts",
      "target": "test/rules/_augment.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/bench/bench.impl.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/bench/bench.impl.ts",
      "target": "src/utils/internal/obj.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/bench/bench.test.ts",
      "target": "test/bench/bench.impl.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/bench/bench.test.ts",
      "target": "test/bench/input.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/bench/bench.ts",
      "target": "test/bench/bench.impl.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/bench/bench.ts",
      "target": "test/bench/input.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/bench/bundle-inspect.ts",
      "target": "test/bench/_bundler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/bench/path.ts",
      "target": "src/utils/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/bench/request-proxy.ts",
      "target": "src/utils/request.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/bench/rules-bundle-inspect.ts",
      "target": "src/rules/compiler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/bench/rules-bundle-inspect.ts",
      "target": "test/bench/_bundler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/bench/rules-bundle-inspect.ts",
      "target": "test/bench/_rules-fixtures.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/bench/session.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/body-limit.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/body-limit.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/body.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/body.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/cookies.test.ts",
      "target": "src/utils/cookie.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/cookies.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/dispose.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/dispose.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/errors.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/errors.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/event.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/event.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/handler.test.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/handler.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/handler.test.ts",
      "target": "src/utils/internal/validate.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/happydom.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "dynamic-import"
      ]
    },
    {
      "source": "test/hooks.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/hooks.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/integrations.test.ts",
      "target": "src/_entries/node.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/integrations.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/integrations.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/iterable.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/iterable.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/json-rpc-ws.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/json-rpc.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/json-rpc.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/lazy.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/lazy.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/middleware.test.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/middleware.test.ts",
      "target": "src/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/middleware.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/middleware.test.ts",
      "target": "src/middleware.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/middleware.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/mount.test.ts",
      "target": "src/error.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/mount.test.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/mount.test.ts",
      "target": "src/utils/base.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/mount.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/proxy.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/proxy.test.ts",
      "target": "src/utils/proxy.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/proxy.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/query.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/query.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/route.test.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/route.test.ts",
      "target": "src/utils/route.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/router.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/router.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/_fixture.ts",
      "target": "src/rules/cache.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/_fixture.ts",
      "target": "src/rules/handlers/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/_fixture.ts",
      "target": "src/rules/match.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/_fixture.ts",
      "target": "src/rules/proxy.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/_fixture.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/cache.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/cache.test.ts",
      "target": "src/rules/cache.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/cache.test.ts",
      "target": "src/rules/handlers/cache.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/cache.test.ts",
      "target": "src/rules/middleware.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/cache.test.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/compiler.test-d.ts",
      "target": "src/rules/compiler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/compiler.test-d.ts",
      "target": "src/rules/normalize.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/compiler.test.ts",
      "target": "src/rules/cache.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/compiler.test.ts",
      "target": "src/rules/compiler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/compiler.test.ts",
      "target": "src/rules/handlers/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/compiler.test.ts",
      "target": "src/rules/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/compiler.test.ts",
      "target": "src/rules/match.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/compiler.test.ts",
      "target": "src/rules/normalize.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/compiler.test.ts",
      "target": "src/rules/proxy.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/compiler.test.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/compiler.test.ts",
      "target": "test/rules/_fixture.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/encoding.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/encoding.test.ts",
      "target": "src/rules/compiler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/encoding.test.ts",
      "target": "src/rules/handlers/_utils.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/encoding.test.ts",
      "target": "src/rules/handlers/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/encoding.test.ts",
      "target": "src/rules/internal/key.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/encoding.test.ts",
      "target": "src/rules/internal/scope.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/encoding.test.ts",
      "target": "src/rules/match.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/encoding.test.ts",
      "target": "src/rules/merge.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/encoding.test.ts",
      "target": "src/rules/middleware.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/encoding.test.ts",
      "target": "src/rules/normalize.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/encoding.test.ts",
      "target": "src/rules/proxy.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/encoding.test.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/encoding.test.ts",
      "target": "src/utils/internal/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/match.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/match.test.ts",
      "target": "src/rules/compiler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/match.test.ts",
      "target": "src/rules/match.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/match.test.ts",
      "target": "src/rules/merge.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/match.test.ts",
      "target": "src/rules/middleware.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/match.test.ts",
      "target": "src/rules/normalize.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/match.test.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/memoize.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/memoize.test.ts",
      "target": "src/rules/match.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/memoize.test.ts",
      "target": "src/rules/merge.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/memoize.test.ts",
      "target": "src/rules/normalize.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/memoize.test.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/merge.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/merge.test.ts",
      "target": "src/rules/compiler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/merge.test.ts",
      "target": "src/rules/match.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/merge.test.ts",
      "target": "src/rules/merge.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/merge.test.ts",
      "target": "src/rules/middleware.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/merge.test.ts",
      "target": "src/rules/normalize.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/merge.test.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/merge.test.ts",
      "target": "test/rules/_fixture.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/middleware.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/middleware.test.ts",
      "target": "src/rules/cache.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/middleware.test.ts",
      "target": "src/rules/middleware.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/middleware.test.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/normalize.test.ts",
      "target": "src/rules/internal/key.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/normalize.test.ts",
      "target": "src/rules/middleware.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/normalize.test.ts",
      "target": "src/rules/normalize.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/normalize.test.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/normalize.test.ts",
      "target": "src/utils/cors.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/normalize.test.ts",
      "target": "test/rules/_fixture.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/premerge.test.ts",
      "target": "src/rules/compiler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/premerge.test.ts",
      "target": "src/rules/handlers/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/premerge.test.ts",
      "target": "src/rules/match.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/premerge.test.ts",
      "target": "src/rules/normalize.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/premerge.test.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/premerge.test.ts",
      "target": "test/rules/_fixture.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/rules.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/rules.test.ts",
      "target": "src/rules/handlers/_utils.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/rules.test.ts",
      "target": "src/rules/internal/scope.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/rules.test.ts",
      "target": "src/rules/match.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/rules.test.ts",
      "target": "src/rules/middleware.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/rules.test.ts",
      "target": "src/rules/proxy.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/rules.test.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/scope.test.ts",
      "target": "src/rules/handlers/_utils.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/scope.test.ts",
      "target": "src/rules/internal/scope.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/scope.test.ts",
      "target": "src/rules/normalize.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/scope.test.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/treeshake.test.ts",
      "target": "src/rules/compiler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/types.test-d.ts",
      "target": "src/rules/compiler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/types.test-d.ts",
      "target": "src/rules/middleware.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/types.test-d.ts",
      "target": "src/rules/normalize.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/types.test-d.ts",
      "target": "src/rules/types.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/rules/types.test-d.ts",
      "target": "src/types/route-rules.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/security.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/security.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/session.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/session.test.ts",
      "target": "src/utils/internal/iron-crypto.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/session.test.ts",
      "target": "src/utils/session.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/session.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/sse.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/sse.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/static.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/static.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/status.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/status.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/stream.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/tracing.test.ts",
      "target": "src/error.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/tracing.test.ts",
      "target": "src/event.ts",
      "kinds": [
        "dynamic-import"
      ]
    },
    {
      "source": "test/tracing.test.ts",
      "target": "src/h3.ts",
      "kinds": [
        "dynamic-import",
        "import"
      ]
    },
    {
      "source": "test/tracing.test.ts",
      "target": "src/tracing.ts",
      "kinds": [
        "dynamic-import",
        "import"
      ]
    },
    {
      "source": "test/tracing.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/auth.test.ts",
      "target": "src/utils/internal/auth.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/body-limit.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/cookie-perf.test.ts",
      "target": "src/event.ts",
      "kinds": [
        "dynamic-import"
      ]
    },
    {
      "source": "test/unit/cookie-perf.test.ts",
      "target": "src/utils/cookie.ts",
      "kinds": [
        "dynamic-import"
      ]
    },
    {
      "source": "test/unit/cookie-validation.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/cors.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/cors.test.ts",
      "target": "src/response.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/cors.test.ts",
      "target": "src/utils/internal/cors.ts",
      "kinds": [
        "dynamic-import",
        "import"
      ]
    },
    {
      "source": "test/unit/encoding.test.ts",
      "target": "src/utils/internal/encoding.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/event.test.ts",
      "target": "src/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/event.test.ts",
      "target": "src/utils/internal/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/event.test.ts",
      "target": "src/utils/request.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/h3.test.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/iron-crypto.test.ts",
      "target": "src/utils/internal/encoding.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/iron-crypto.test.ts",
      "target": "src/utils/internal/iron-crypto.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/iterable.test.ts",
      "target": "src/utils/internal/iterable.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/meta.test.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/meta.test.ts",
      "target": "src/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/middleware.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/middleware.test.ts",
      "target": "src/middleware.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/middleware.test.ts",
      "target": "src/types/handler.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/mime.test.ts",
      "target": "src/utils/internal/mime.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/package.test.ts",
      "target": "src/_entries/generic.ts",
      "kinds": [
        "dynamic-import"
      ]
    },
    {
      "source": "test/unit/path.test.ts",
      "target": "src/utils/internal/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/path.test.ts",
      "target": "src/utils/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/proxy.test.ts",
      "target": "src/utils/internal/proxy.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/query.test.ts",
      "target": "src/utils/internal/query.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/request.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/request.test.ts",
      "target": "src/utils/request.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/route-matcher.test.ts",
      "target": "src/utils/internal/route.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/route-normalize.test.ts",
      "target": "src/h3.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/route-normalize.test.ts",
      "target": "src/utils/event.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/route-normalize.test.ts",
      "target": "src/utils/path.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/route-normalize.test.ts",
      "target": "src/utils/route.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/sanitize.test.ts",
      "target": "src/utils/sanitize.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/sse.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/sse.test.ts",
      "target": "src/utils/event-stream.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/sse.test.ts",
      "target": "src/utils/internal/event-stream.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/timing.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/types.test-d.ts",
      "target": "src/_deprecated.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/unit/types.test-d.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/utils.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/utils.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/validate.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/validate.test.ts",
      "target": "src/utils/internal/validate.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/validate.test.ts",
      "target": "test/_setup.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/ws.test.ts",
      "target": "src/index.ts",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "test/ws.test.ts",
      "target": "src/rules/middleware.ts",
      "kinds": [
        "import"
      ]
    }
  ],
  "coverage": {
    "inventory": "git",
    "files": {
      "found": 275,
      "parsed": 201,
      "skipped": 74,
      "details": [
        {
          "path": ".config/automd.yaml",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": ".github/banner.svg",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": ".github/codecov.yml",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": ".github/CODEOWNERS",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": ".github/workflows/autofix.yml",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": ".github/workflows/ci.yml",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": ".github/workflows/publish.yml",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": ".gitignore",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": ".oxfmtrc.json",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": ".oxlintrc.json",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "AGENTS.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "CHANGELOG.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "CLAUDE.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/.config/docs.yaml",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/.docs/public/favicon.ico",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/.docs/public/icon.png",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/.docs/public/icon.svg",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/.gitignore",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/.partials/beta.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/1.guide/.navigation.yml",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/1.guide/0.index.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/1.guide/1.basics/.navigation.yml",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/1.guide/1.basics/1.lifecycle.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/1.guide/1.basics/2.routing.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/1.guide/1.basics/3.middleware.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/1.guide/1.basics/4.handler.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/1.guide/1.basics/5.response.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/1.guide/1.basics/6.error.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/1.guide/1.basics/7.nested-apps.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/1.guide/2.rules.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/1.guide/900.api/.navigation.yml",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/1.guide/900.api/1.h3.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/1.guide/900.api/2.h3event.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/1.guide/901.advanced/.navigation.yml",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/1.guide/901.advanced/1.plugins.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/1.guide/901.advanced/2.websocket.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/1.guide/901.advanced/9.nightly.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/2.utils/0.index.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/2.utils/1.request.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/2.utils/2.response.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/2.utils/3.cookie.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/2.utils/4.security.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/2.utils/5.proxy.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/2.utils/6.mcp.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/2.utils/9.more.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/2.utils/99.community.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/4.examples/0.index.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/4.examples/handle-cookie.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/4.examples/handle-query.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/4.examples/handle-session.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/4.examples/serve-static-assets.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/4.examples/stream-response.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/4.examples/validate-data.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/5.migration/0.index.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/99.blog/1.v1.8.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/99.blog/2.v2-beta.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/99.blog/3.v2.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/99.blog/index.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/package.json",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/pnpm-lock.yaml",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/pnpm-workspace.yaml",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "examples/package.json",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "LICENSE",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "MIGRATION.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "package.json",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "playground/package.json",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "pnpm-lock.yaml",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "pnpm-workspace.yaml",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "README.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "renovate.json",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "test/assets/dummy.pdf",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "test/assets/sample.json",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "tsconfig.json",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "typos.toml",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        }
      ]
    },
    "excludedEntries": [
      {
        "path": ".git/",
        "reason": "Version control metadata not traversed"
      }
    ],
    "imports": {
      "found": 869,
      "resolved": 645,
      "external": 192,
      "excluded": 7,
      "unresolved": 25,
      "byKind": {
        "import": {
          "found": 765,
          "resolved": 548,
          "external": 188,
          "excluded": 7,
          "unresolved": 22
        },
        "re-export": {
          "found": 67,
          "resolved": 64,
          "external": 3,
          "excluded": 0,
          "unresolved": 0
        },
        "dynamic-import": {
          "found": 37,
          "resolved": 33,
          "external": 1,
          "excluded": 0,
          "unresolved": 3
        }
      },
      "records": [
        {
          "source": "bin/h3.mjs",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "node:child_process",
          "expression": "\"node:child_process\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "bin/h3.mjs",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "srvx/cli",
          "expression": "\"srvx/cli\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "bin/h3.mjs",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../package.json",
          "expression": "\"../package.json\"",
          "outcome": "excluded",
          "target": "package.json",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "source": "build.config.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "obuild/config",
          "expression": "\"obuild/config\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "build.config.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "oxc-parser",
          "expression": "\"oxc-parser\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "build.config.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "magic-string",
          "expression": "\"magic-string\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "examples/auth.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "h3",
          "expression": "\"h3\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "examples/body.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "h3",
          "expression": "\"h3\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "examples/cookies.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "h3",
          "expression": "\"h3\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "examples/cors.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "h3",
          "expression": "\"h3\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "examples/errors.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "h3",
          "expression": "\"h3\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "examples/handler-fetch.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "h3",
          "expression": "\"h3\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "examples/handler-obj.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "h3",
          "expression": "\"h3\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "examples/headers.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "h3",
          "expression": "\"h3\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "examples/middleware.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "h3",
          "expression": "\"h3\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "examples/nested-app.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "h3",
          "expression": "\"h3\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "examples/plugin.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "h3",
          "expression": "\"h3\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "examples/query-params.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "h3",
          "expression": "\"h3\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "examples/query.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../dist/_entries/node.mjs",
          "expression": "\"../dist/_entries/node.mjs\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "TypeScript could not resolve this local path to a file (missing target or incompatible module resolution)"
        },
        {
          "source": "examples/redirect.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "h3",
          "expression": "\"h3\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "examples/response-types.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "h3",
          "expression": "\"h3\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "examples/router.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "h3",
          "expression": "\"h3\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "examples/server-sent-events.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "h3",
          "expression": "\"h3\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "examples/status.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "h3",
          "expression": "\"h3\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "examples/url-params.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "h3",
          "expression": "\"h3\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "examples/vite.mjs",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "h3/node",
          "expression": "\"h3/node\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "examples/vite.mjs",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "vite",
          "expression": "\"vite\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "examples/websocket.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "h3",
          "expression": "\"h3\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "examples/websocket.mjs",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "crossws/server",
          "expression": "\"crossws/server\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "playground/server.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "h3",
          "expression": "\"h3\"",
          "outcome": "unresolved",
          "target": null,
          "reason": "Repository package has no TypeScript-resolvable entry (workspace link or built output may be absent)"
        },
        {
          "source": "src/_deprecated.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "./utils/response.ts",
          "expression": "\"./utils/response.ts\"",
          "outcome": "resolved",
          "target": "src/utils/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_deprecated.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./adapters.ts",
          "expression": "\"./adapters.ts\"",
          "outcome": "resolved",
          "target": "src/adapters.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_deprecated.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./handler.ts",
          "expression": "\"./handler.ts\"",
          "outcome": "resolved",
          "target": "src/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_deprecated.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./utils/proxy.ts",
          "expression": "\"./utils/proxy.ts\"",
          "outcome": "resolved",
          "target": "src/utils/proxy.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_deprecated.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "./h3.ts",
          "expression": "\"./h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_deprecated.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "./utils/base.ts",
          "expression": "\"./utils/base.ts\"",
          "outcome": "resolved",
          "target": "src/utils/base.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_deprecated.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "./utils/sanitize.ts",
          "expression": "\"./utils/sanitize.ts\"",
          "outcome": "resolved",
          "target": "src/utils/sanitize.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_deprecated.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "./utils/proxy.ts",
          "expression": "\"./utils/proxy.ts\"",
          "outcome": "resolved",
          "target": "src/utils/proxy.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_deprecated.ts",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "./adapters.ts",
          "expression": "\"./adapters.ts\"",
          "outcome": "resolved",
          "target": "src/adapters.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_deprecated.ts",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "./event.ts",
          "expression": "\"./event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_deprecated.ts",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "./types/handler.ts",
          "expression": "\"./types/handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_deprecated.ts",
          "line": 13,
          "column": 1,
          "kind": "import",
          "specifier": "./types/h3.ts",
          "expression": "\"./types/h3.ts\"",
          "outcome": "resolved",
          "target": "src/types/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_deprecated.ts",
          "line": 14,
          "column": 1,
          "kind": "import",
          "specifier": "./utils/internal/iterable.ts",
          "expression": "\"./utils/internal/iterable.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/iterable.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_deprecated.ts",
          "line": 15,
          "column": 1,
          "kind": "import",
          "specifier": "./error.ts",
          "expression": "\"./error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_deprecated.ts",
          "line": 16,
          "column": 1,
          "kind": "import",
          "specifier": "./response.ts",
          "expression": "\"./response.ts\"",
          "outcome": "resolved",
          "target": "src/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_deprecated.ts",
          "line": 17,
          "column": 1,
          "kind": "import",
          "specifier": "./utils/event-stream.ts",
          "expression": "\"./utils/event-stream.ts\"",
          "outcome": "resolved",
          "target": "src/utils/event-stream.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_entries/_common.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../h3.ts",
          "expression": "\"../h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_entries/bun.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/_entries/bun.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../h3.ts",
          "expression": "\"../h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_entries/bun.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "srvx/bun",
          "expression": "\"srvx/bun\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/_entries/bun.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./_common.ts",
          "expression": "\"./_common.ts\"",
          "outcome": "resolved",
          "target": "src/_entries/_common.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_entries/bun.ts",
          "line": 7,
          "column": 1,
          "kind": "re-export",
          "specifier": "../index.ts",
          "expression": "\"../index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_entries/cloudflare.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/_entries/cloudflare.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../h3.ts",
          "expression": "\"../h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_entries/cloudflare.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "srvx/cloudflare",
          "expression": "\"srvx/cloudflare\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/_entries/cloudflare.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./_common.ts",
          "expression": "\"./_common.ts\"",
          "outcome": "resolved",
          "target": "src/_entries/_common.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_entries/cloudflare.ts",
          "line": 7,
          "column": 1,
          "kind": "re-export",
          "specifier": "../index.ts",
          "expression": "\"../index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_entries/deno.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/_entries/deno.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../h3.ts",
          "expression": "\"../h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_entries/deno.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "srvx/deno",
          "expression": "\"srvx/deno\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/_entries/deno.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./_common.ts",
          "expression": "\"./_common.ts\"",
          "outcome": "resolved",
          "target": "src/_entries/_common.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_entries/deno.ts",
          "line": 7,
          "column": 1,
          "kind": "re-export",
          "specifier": "../index.ts",
          "expression": "\"../index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_entries/generic.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/_entries/generic.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../h3.ts",
          "expression": "\"../h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_entries/generic.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "srvx/generic",
          "expression": "\"srvx/generic\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/_entries/generic.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./_common.ts",
          "expression": "\"./_common.ts\"",
          "outcome": "resolved",
          "target": "src/_entries/_common.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_entries/generic.ts",
          "line": 7,
          "column": 1,
          "kind": "re-export",
          "specifier": "../index.ts",
          "expression": "\"../index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_entries/node.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/_entries/node.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../h3.ts",
          "expression": "\"../h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_entries/node.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../adapters.ts",
          "expression": "\"../adapters.ts\"",
          "outcome": "resolved",
          "target": "src/adapters.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_entries/node.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "srvx/node",
          "expression": "\"srvx/node\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/_entries/node.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "./_common.ts",
          "expression": "\"./_common.ts\"",
          "outcome": "resolved",
          "target": "src/_entries/_common.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_entries/node.ts",
          "line": 10,
          "column": 1,
          "kind": "re-export",
          "specifier": "../index.ts",
          "expression": "\"../index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_entries/service-worker.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/_entries/service-worker.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../h3.ts",
          "expression": "\"../h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_entries/service-worker.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "srvx/service-worker",
          "expression": "\"srvx/service-worker\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/_entries/service-worker.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./_common.ts",
          "expression": "\"./_common.ts\"",
          "outcome": "resolved",
          "target": "src/_entries/_common.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/_entries/service-worker.ts",
          "line": 7,
          "column": 1,
          "kind": "re-export",
          "specifier": "../index.ts",
          "expression": "\"../index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/adapters.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "./error.ts",
          "expression": "\"./error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/adapters.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./response.ts",
          "expression": "\"./response.ts\"",
          "outcome": "resolved",
          "target": "src/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/adapters.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/adapters.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "./h3.ts",
          "expression": "\"./h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/adapters.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "./event.ts",
          "expression": "\"./event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/adapters.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "./types/context.ts",
          "expression": "\"./types/context.ts\"",
          "outcome": "resolved",
          "target": "src/types/context.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/adapters.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "./types/handler.ts",
          "expression": "\"./types/handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/error.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "./utils/sanitize.ts",
          "expression": "\"./utils/sanitize.ts\"",
          "outcome": "resolved",
          "target": "src/utils/sanitize.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/event.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/event.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./types/context.ts",
          "expression": "\"./types/context.ts\"",
          "outcome": "resolved",
          "target": "src/types/context.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/event.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./utils/internal/obj.ts",
          "expression": "\"./utils/internal/obj.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/obj.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/event.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "./utils/internal/path.ts",
          "expression": "\"./utils/internal/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/event.ts",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/event.ts",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "./types/handler.ts",
          "expression": "\"./types/handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/event.ts",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "./h3.ts",
          "expression": "\"./h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/h3.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "rou3",
          "expression": "\"rou3\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/h3.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./event.ts",
          "expression": "\"./event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/h3.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./error.ts",
          "expression": "\"./error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/h3.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./response.ts",
          "expression": "\"./response.ts\"",
          "outcome": "resolved",
          "target": "src/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/h3.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "./middleware.ts",
          "expression": "\"./middleware.ts\"",
          "outcome": "resolved",
          "target": "src/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/h3.ts",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "./middleware.ts",
          "expression": "\"./middleware.ts\"",
          "outcome": "resolved",
          "target": "src/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/h3.ts",
          "line": 13,
          "column": 1,
          "kind": "import",
          "specifier": "./utils/request.ts",
          "expression": "\"./utils/request.ts\"",
          "outcome": "resolved",
          "target": "src/utils/request.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/h3.ts",
          "line": 14,
          "column": 1,
          "kind": "import",
          "specifier": "./utils/internal/path.ts",
          "expression": "\"./utils/internal/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/h3.ts",
          "line": 16,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/h3.ts",
          "line": 17,
          "column": 1,
          "kind": "import",
          "specifier": "./types/h3.ts",
          "expression": "\"./types/h3.ts\"",
          "outcome": "resolved",
          "target": "src/types/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/h3.ts",
          "line": 18,
          "column": 1,
          "kind": "import",
          "specifier": "./plugin.ts",
          "expression": "\"./plugin.ts\"",
          "outcome": "resolved",
          "target": "src/plugin.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/h3.ts",
          "line": 19,
          "column": 1,
          "kind": "import",
          "specifier": "./types/context.ts",
          "expression": "\"./types/context.ts\"",
          "outcome": "resolved",
          "target": "src/types/context.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/h3.ts",
          "line": 20,
          "column": 1,
          "kind": "import",
          "specifier": "./types/handler.ts",
          "expression": "\"./types/handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/h3.ts",
          "line": 27,
          "column": 1,
          "kind": "import",
          "specifier": "./types/h3.ts",
          "expression": "\"./types/h3.ts\"",
          "outcome": "resolved",
          "target": "src/types/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/h3.ts",
          "line": 36,
          "column": 1,
          "kind": "import",
          "specifier": "./utils/request.ts",
          "expression": "\"./utils/request.ts\"",
          "outcome": "resolved",
          "target": "src/utils/request.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/h3.ts",
          "line": 37,
          "column": 1,
          "kind": "import",
          "specifier": "./handler.ts",
          "expression": "\"./handler.ts\"",
          "outcome": "resolved",
          "target": "src/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/handler.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/handler.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./event.ts",
          "expression": "\"./event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/handler.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./middleware.ts",
          "expression": "\"./middleware.ts\"",
          "outcome": "resolved",
          "target": "src/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/handler.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./response.ts",
          "expression": "\"./response.ts\"",
          "outcome": "resolved",
          "target": "src/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/handler.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "./types/handler.ts",
          "expression": "\"./types/handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/handler.ts",
          "line": 17,
          "column": 1,
          "kind": "import",
          "specifier": "./utils/internal/standard-schema.ts",
          "expression": "\"./utils/internal/standard-schema.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/standard-schema.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/handler.ts",
          "line": 18,
          "column": 1,
          "kind": "import",
          "specifier": "./h3.ts",
          "expression": "\"./h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/handler.ts",
          "line": 19,
          "column": 1,
          "kind": "import",
          "specifier": "./utils/internal/validate.ts",
          "expression": "\"./utils/internal/validate.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/validate.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 3,
          "column": 1,
          "kind": "re-export",
          "specifier": "./types/h3.ts",
          "expression": "\"./types/h3.ts\"",
          "outcome": "resolved",
          "target": "src/types/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 17,
          "column": 1,
          "kind": "re-export",
          "specifier": "./h3.ts",
          "expression": "\"./h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 21,
          "column": 1,
          "kind": "re-export",
          "specifier": "./plugin.ts",
          "expression": "\"./plugin.ts\"",
          "outcome": "resolved",
          "target": "src/plugin.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 22,
          "column": 1,
          "kind": "re-export",
          "specifier": "./plugin.ts",
          "expression": "\"./plugin.ts\"",
          "outcome": "resolved",
          "target": "src/plugin.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 26,
          "column": 1,
          "kind": "re-export",
          "specifier": "./types/context.ts",
          "expression": "\"./types/context.ts\"",
          "outcome": "resolved",
          "target": "src/types/context.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 27,
          "column": 1,
          "kind": "re-export",
          "specifier": "./event.ts",
          "expression": "\"./event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 28,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/event.ts",
          "expression": "\"./utils/event.ts\"",
          "outcome": "resolved",
          "target": "src/utils/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 32,
          "column": 1,
          "kind": "re-export",
          "specifier": "./types/handler.ts",
          "expression": "\"./types/handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 48,
          "column": 1,
          "kind": "re-export",
          "specifier": "fetchdts",
          "expression": "\"fetchdts\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/index.ts",
          "line": 50,
          "column": 1,
          "kind": "re-export",
          "specifier": "./handler.ts",
          "expression": "\"./handler.ts\"",
          "outcome": "resolved",
          "target": "src/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 58,
          "column": 1,
          "kind": "re-export",
          "specifier": "./middleware.ts",
          "expression": "\"./middleware.ts\"",
          "outcome": "resolved",
          "target": "src/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 68,
          "column": 1,
          "kind": "re-export",
          "specifier": "./response.ts",
          "expression": "\"./response.ts\"",
          "outcome": "resolved",
          "target": "src/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 72,
          "column": 1,
          "kind": "re-export",
          "specifier": "./error.ts",
          "expression": "\"./error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 76,
          "column": 1,
          "kind": "re-export",
          "specifier": "./adapters.ts",
          "expression": "\"./adapters.ts\"",
          "outcome": "resolved",
          "target": "src/adapters.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 90,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/route.ts",
          "expression": "\"./utils/route.ts\"",
          "outcome": "resolved",
          "target": "src/utils/route.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 91,
          "column": 1,
          "kind": "re-export",
          "specifier": "./types/route-rules.ts",
          "expression": "\"./types/route-rules.ts\"",
          "outcome": "resolved",
          "target": "src/types/route-rules.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 95,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/request.ts",
          "expression": "\"./utils/request.ts\"",
          "outcome": "resolved",
          "target": "src/utils/request.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 114,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/response.ts",
          "expression": "\"./utils/response.ts\"",
          "outcome": "resolved",
          "target": "src/utils/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 125,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/response.ts",
          "expression": "\"./utils/response.ts\"",
          "outcome": "resolved",
          "target": "src/utils/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 129,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/query.ts",
          "expression": "\"./utils/query.ts\"",
          "outcome": "resolved",
          "target": "src/utils/query.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 133,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/middleware.ts",
          "expression": "\"./utils/middleware.ts\"",
          "outcome": "resolved",
          "target": "src/utils/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 137,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/proxy.ts",
          "expression": "\"./utils/proxy.ts\"",
          "outcome": "resolved",
          "target": "src/utils/proxy.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 147,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/body.ts",
          "expression": "\"./utils/body.ts\"",
          "outcome": "resolved",
          "target": "src/utils/body.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 151,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/cookie.ts",
          "expression": "\"./utils/cookie.ts\"",
          "outcome": "resolved",
          "target": "src/utils/cookie.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 164,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/event-stream.ts",
          "expression": "\"./utils/event-stream.ts\"",
          "outcome": "resolved",
          "target": "src/utils/event-stream.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 172,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/timing.ts",
          "expression": "\"./utils/timing.ts\"",
          "outcome": "resolved",
          "target": "src/utils/timing.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 176,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/sanitize.ts",
          "expression": "\"./utils/sanitize.ts\"",
          "outcome": "resolved",
          "target": "src/utils/sanitize.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 180,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/cache.ts",
          "expression": "\"./utils/cache.ts\"",
          "outcome": "resolved",
          "target": "src/utils/cache.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 184,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/path.ts",
          "expression": "\"./utils/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 193,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/static.ts",
          "expression": "\"./utils/static.ts\"",
          "outcome": "resolved",
          "target": "src/utils/static.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 197,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/base.ts",
          "expression": "\"./utils/base.ts\"",
          "outcome": "resolved",
          "target": "src/utils/base.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 201,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/session.ts",
          "expression": "\"./utils/session.ts\"",
          "outcome": "resolved",
          "target": "src/utils/session.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 216,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/cors.ts",
          "expression": "\"./utils/cors.ts\"",
          "outcome": "resolved",
          "target": "src/utils/cors.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 227,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/auth.ts",
          "expression": "\"./utils/auth.ts\"",
          "outcome": "resolved",
          "target": "src/utils/auth.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 231,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/fingerprint.ts",
          "expression": "\"./utils/fingerprint.ts\"",
          "outcome": "resolved",
          "target": "src/utils/fingerprint.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 235,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/ws.ts",
          "expression": "\"./utils/ws.ts\"",
          "outcome": "resolved",
          "target": "src/utils/ws.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 246,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/json-rpc.ts",
          "expression": "\"./utils/json-rpc.ts\"",
          "outcome": "resolved",
          "target": "src/utils/json-rpc.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 248,
          "column": 1,
          "kind": "re-export",
          "specifier": "./utils/json-rpc.ts",
          "expression": "\"./utils/json-rpc.ts\"",
          "outcome": "resolved",
          "target": "src/utils/json-rpc.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/index.ts",
          "line": 259,
          "column": 1,
          "kind": "re-export",
          "specifier": "./_deprecated.ts",
          "expression": "\"./_deprecated.ts\"",
          "outcome": "resolved",
          "target": "src/_deprecated.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/middleware.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "./response.ts",
          "expression": "\"./response.ts\"",
          "outcome": "resolved",
          "target": "src/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/middleware.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./utils/internal/path.ts",
          "expression": "\"./utils/internal/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/middleware.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./utils/internal/route.ts",
          "expression": "\"./utils/internal/route.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/route.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/middleware.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "./event.ts",
          "expression": "\"./event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/middleware.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "./types/h3.ts",
          "expression": "\"./types/h3.ts\"",
          "outcome": "resolved",
          "target": "src/types/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/middleware.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "./types/handler.ts",
          "expression": "\"./types/handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/middleware.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "./h3.ts",
          "expression": "\"./h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/plugin.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "./h3.ts",
          "expression": "\"./h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/response.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/response.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./error.ts",
          "expression": "\"./error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/response.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./utils/internal/object.ts",
          "expression": "\"./utils/internal/object.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/object.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/response.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./utils/sanitize.ts",
          "expression": "\"./utils/sanitize.ts\"",
          "outcome": "resolved",
          "target": "src/utils/sanitize.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/response.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "./utils/internal/dispose.ts",
          "expression": "\"./utils/internal/dispose.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/dispose.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/response.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "./types/h3.ts",
          "expression": "\"./types/h3.ts\"",
          "outcome": "resolved",
          "target": "src/types/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/response.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "./event.ts",
          "expression": "\"./event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/cache.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../handler.ts",
          "expression": "\"../handler.ts\"",
          "outcome": "resolved",
          "target": "src/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/cache.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../error.ts",
          "expression": "\"../error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/cache.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../response.ts",
          "expression": "\"../response.ts\"",
          "outcome": "resolved",
          "target": "src/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/cache.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../utils/cache.ts",
          "expression": "\"../utils/cache.ts\"",
          "outcome": "resolved",
          "target": "src/utils/cache.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/cache.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/cache.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "../types/handler.ts",
          "expression": "\"../types/handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/cache.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/rules/cache.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "ocache",
          "expression": "\"ocache\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/rules/cache.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "ocache",
          "expression": "\"ocache\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/rules/cache.ts",
          "line": 15,
          "column": 1,
          "kind": "import",
          "specifier": "./handlers/cache.ts",
          "expression": "\"./handlers/cache.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/cache.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/cache.ts",
          "line": 16,
          "column": 1,
          "kind": "import",
          "specifier": "./types.ts",
          "expression": "\"./types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/compiler.ts",
          "line": 1,
          "column": 1,
          "kind": "re-export",
          "specifier": "./compiler/compile.ts",
          "expression": "\"./compiler/compile.ts\"",
          "outcome": "resolved",
          "target": "src/rules/compiler/compile.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/compiler.ts",
          "line": 7,
          "column": 1,
          "kind": "re-export",
          "specifier": "./compiler/options.ts",
          "expression": "\"./compiler/options.ts\"",
          "outcome": "resolved",
          "target": "src/rules/compiler/options.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/compiler.ts",
          "line": 14,
          "column": 1,
          "kind": "re-export",
          "specifier": "./compiler/runtime-rules.ts",
          "expression": "\"./compiler/runtime-rules.ts\"",
          "outcome": "resolved",
          "target": "src/rules/compiler/runtime-rules.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/compiler/codegen.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "rou3",
          "expression": "\"rou3\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/rules/compiler/codegen.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../merge.ts",
          "expression": "\"../merge.ts\"",
          "outcome": "resolved",
          "target": "src/rules/merge.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/compiler/codegen.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../internal/premerge.ts",
          "expression": "\"../internal/premerge.ts\"",
          "outcome": "resolved",
          "target": "src/rules/internal/premerge.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/compiler/codegen.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./options.ts",
          "expression": "\"./options.ts\"",
          "outcome": "resolved",
          "target": "src/rules/compiler/options.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/compiler/codegen.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "./runtime-rules.ts",
          "expression": "\"./runtime-rules.ts\"",
          "outcome": "resolved",
          "target": "src/rules/compiler/runtime-rules.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/compiler/compile.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "rou3",
          "expression": "\"rou3\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/rules/compiler/compile.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "rou3/compiler",
          "expression": "\"rou3/compiler\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/rules/compiler/compile.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../match.ts",
          "expression": "\"../match.ts\"",
          "outcome": "resolved",
          "target": "src/rules/match.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/compiler/compile.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../merge.ts",
          "expression": "\"../merge.ts\"",
          "outcome": "resolved",
          "target": "src/rules/merge.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/compiler/compile.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "../normalize.ts",
          "expression": "\"../normalize.ts\"",
          "outcome": "resolved",
          "target": "src/rules/normalize.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/compiler/compile.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "../internal/key.ts",
          "expression": "\"../internal/key.ts\"",
          "outcome": "resolved",
          "target": "src/rules/internal/key.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/compiler/compile.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "../internal/premerge.ts",
          "expression": "\"../internal/premerge.ts\"",
          "outcome": "resolved",
          "target": "src/rules/internal/premerge.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/compiler/compile.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "../types.ts",
          "expression": "\"../types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/compiler/compile.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "./codegen.ts",
          "expression": "\"./codegen.ts\"",
          "outcome": "resolved",
          "target": "src/rules/compiler/codegen.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/compiler/compile.ts",
          "line": 16,
          "column": 1,
          "kind": "import",
          "specifier": "./options.ts",
          "expression": "\"./options.ts\"",
          "outcome": "resolved",
          "target": "src/rules/compiler/options.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/compiler/compile.ts",
          "line": 22,
          "column": 1,
          "kind": "import",
          "specifier": "./runtime-rules.ts",
          "expression": "\"./runtime-rules.ts\"",
          "outcome": "resolved",
          "target": "src/rules/compiler/runtime-rules.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/compiler/options.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../match.ts",
          "expression": "\"../match.ts\"",
          "outcome": "resolved",
          "target": "src/rules/match.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/compiler/options.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./runtime-rules.ts",
          "expression": "\"./runtime-rules.ts\"",
          "outcome": "resolved",
          "target": "src/rules/compiler/runtime-rules.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/_at-target.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../../event.ts",
          "expression": "\"../../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/_at-target.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../utils/internal/path.ts",
          "expression": "\"../../utils/internal/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/_at-target.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../internal/scope.ts",
          "expression": "\"../internal/scope.ts\"",
          "outcome": "resolved",
          "target": "src/rules/internal/scope.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/_at-target.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../types.ts",
          "expression": "\"../types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/_utils.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../../error.ts",
          "expression": "\"../../error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/_utils.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../event.ts",
          "expression": "\"../../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/_utils.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../../utils/internal/path.ts",
          "expression": "\"../../utils/internal/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/_utils.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../internal/scope.ts",
          "expression": "\"../internal/scope.ts\"",
          "outcome": "resolved",
          "target": "src/rules/internal/scope.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/_utils.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "../types.ts",
          "expression": "\"../types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/_utils.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "./_splat.ts",
          "expression": "\"./_splat.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/_splat.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/cache.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../../response.ts",
          "expression": "\"../../response.ts\"",
          "outcome": "resolved",
          "target": "src/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/cache.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../event.ts",
          "expression": "\"../../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/cache.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../../types/handler.ts",
          "expression": "\"../../types/handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/cache.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../types.ts",
          "expression": "\"../types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/cors.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../../utils/cors.ts",
          "expression": "\"../../utils/cors.ts\"",
          "outcome": "resolved",
          "target": "src/utils/cors.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/cors.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../utils/cors.ts",
          "expression": "\"../../utils/cors.ts\"",
          "outcome": "resolved",
          "target": "src/utils/cors.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/cors.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../types.ts",
          "expression": "\"../types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/headers.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../types.ts",
          "expression": "\"../types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/index.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../types.ts",
          "expression": "\"../types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/index.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./cors.ts",
          "expression": "\"./cors.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/cors.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/index.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./headers.ts",
          "expression": "\"./headers.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/headers.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/index.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./redirect.ts",
          "expression": "\"./redirect.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/redirect.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/redirect.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../../utils/response.ts",
          "expression": "\"../../utils/response.ts\"",
          "outcome": "resolved",
          "target": "src/utils/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/redirect.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../types.ts",
          "expression": "\"../types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/redirect.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./_at-target.ts",
          "expression": "\"./_at-target.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/_at-target.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/handlers/redirect.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./_utils.ts",
          "expression": "\"./_utils.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/_utils.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/index.ts",
          "line": 6,
          "column": 1,
          "kind": "re-export",
          "specifier": "./middleware.ts",
          "expression": "\"./middleware.ts\"",
          "outcome": "resolved",
          "target": "src/rules/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/index.ts",
          "line": 7,
          "column": 1,
          "kind": "re-export",
          "specifier": "./middleware.ts",
          "expression": "\"./middleware.ts\"",
          "outcome": "resolved",
          "target": "src/rules/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/index.ts",
          "line": 9,
          "column": 1,
          "kind": "re-export",
          "specifier": "./match.ts",
          "expression": "\"./match.ts\"",
          "outcome": "resolved",
          "target": "src/rules/match.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/index.ts",
          "line": 15,
          "column": 1,
          "kind": "re-export",
          "specifier": "./match.ts",
          "expression": "\"./match.ts\"",
          "outcome": "resolved",
          "target": "src/rules/match.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/index.ts",
          "line": 22,
          "column": 1,
          "kind": "re-export",
          "specifier": "./normalize.ts",
          "expression": "\"./normalize.ts\"",
          "outcome": "resolved",
          "target": "src/rules/normalize.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/index.ts",
          "line": 24,
          "column": 1,
          "kind": "re-export",
          "specifier": "./merge.ts",
          "expression": "\"./merge.ts\"",
          "outcome": "resolved",
          "target": "src/rules/merge.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/index.ts",
          "line": 25,
          "column": 1,
          "kind": "re-export",
          "specifier": "./merge.ts",
          "expression": "\"./merge.ts\"",
          "outcome": "resolved",
          "target": "src/rules/merge.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/index.ts",
          "line": 27,
          "column": 1,
          "kind": "re-export",
          "specifier": "./handlers/index.ts",
          "expression": "\"./handlers/index.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/index.ts",
          "line": 28,
          "column": 1,
          "kind": "re-export",
          "specifier": "./handlers/headers.ts",
          "expression": "\"./handlers/headers.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/headers.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/index.ts",
          "line": 29,
          "column": 1,
          "kind": "re-export",
          "specifier": "./handlers/redirect.ts",
          "expression": "\"./handlers/redirect.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/redirect.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/index.ts",
          "line": 30,
          "column": 1,
          "kind": "re-export",
          "specifier": "./handlers/cors.ts",
          "expression": "\"./handlers/cors.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/cors.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/index.ts",
          "line": 34,
          "column": 1,
          "kind": "re-export",
          "specifier": "./handlers/cache.ts",
          "expression": "\"./handlers/cache.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/cache.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/index.ts",
          "line": 35,
          "column": 1,
          "kind": "re-export",
          "specifier": "./handlers/cache.ts",
          "expression": "\"./handlers/cache.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/cache.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/index.ts",
          "line": 37,
          "column": 1,
          "kind": "re-export",
          "specifier": "./types.ts",
          "expression": "\"./types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/internal/key.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../../utils/internal/path.ts",
          "expression": "\"../../utils/internal/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/internal/premerge.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "rou3",
          "expression": "\"rou3\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/rules/internal/premerge.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../merge.ts",
          "expression": "\"../merge.ts\"",
          "outcome": "resolved",
          "target": "src/rules/merge.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/internal/premerge.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../merge.ts",
          "expression": "\"../merge.ts\"",
          "outcome": "resolved",
          "target": "src/rules/merge.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/internal/resets.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../merge.ts",
          "expression": "\"../merge.ts\"",
          "outcome": "resolved",
          "target": "src/rules/merge.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/internal/resets.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../types.ts",
          "expression": "\"../types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/internal/scope.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../../utils/path.ts",
          "expression": "\"../../utils/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/internal/scope.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../utils/internal/path.ts",
          "expression": "\"../../utils/internal/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/match.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "rou3",
          "expression": "\"rou3\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/rules/match.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "rou3",
          "expression": "\"rou3\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/rules/match.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/key.ts",
          "expression": "\"./internal/key.ts\"",
          "outcome": "resolved",
          "target": "src/rules/internal/key.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/match.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../utils/internal/path.ts",
          "expression": "\"../utils/internal/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/match.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "./merge.ts",
          "expression": "\"./merge.ts\"",
          "outcome": "resolved",
          "target": "src/rules/merge.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/match.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "./merge.ts",
          "expression": "\"./merge.ts\"",
          "outcome": "resolved",
          "target": "src/rules/merge.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/match.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/premerge.ts",
          "expression": "\"./internal/premerge.ts\"",
          "outcome": "resolved",
          "target": "src/rules/internal/premerge.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/match.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/premerge.ts",
          "expression": "\"./internal/premerge.ts\"",
          "outcome": "resolved",
          "target": "src/rules/internal/premerge.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/match.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "./handlers/index.ts",
          "expression": "\"./handlers/index.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/match.ts",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/scope.ts",
          "expression": "\"./internal/scope.ts\"",
          "outcome": "resolved",
          "target": "src/rules/internal/scope.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/match.ts",
          "line": 17,
          "column": 1,
          "kind": "import",
          "specifier": "./types.ts",
          "expression": "\"./types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/merge.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/premerge.ts",
          "expression": "\"./internal/premerge.ts\"",
          "outcome": "resolved",
          "target": "src/rules/internal/premerge.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/merge.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/resets.ts",
          "expression": "\"./internal/resets.ts\"",
          "outcome": "resolved",
          "target": "src/rules/internal/resets.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/merge.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/resets.ts",
          "expression": "\"./internal/resets.ts\"",
          "outcome": "resolved",
          "target": "src/rules/internal/resets.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/merge.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./types.ts",
          "expression": "\"./types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/middleware.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../middleware.ts",
          "expression": "\"../middleware.ts\"",
          "outcome": "resolved",
          "target": "src/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/middleware.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../utils/cors.ts",
          "expression": "\"../utils/cors.ts\"",
          "outcome": "resolved",
          "target": "src/utils/cors.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/middleware.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/middleware.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../types/handler.ts",
          "expression": "\"../types/handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/middleware.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "./match.ts",
          "expression": "\"./match.ts\"",
          "outcome": "resolved",
          "target": "src/rules/match.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/middleware.ts",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "./match.ts",
          "expression": "\"./match.ts\"",
          "outcome": "resolved",
          "target": "src/rules/match.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/middleware.ts",
          "line": 15,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/key.ts",
          "expression": "\"./internal/key.ts\"",
          "outcome": "resolved",
          "target": "src/rules/internal/key.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/middleware.ts",
          "line": 16,
          "column": 1,
          "kind": "import",
          "specifier": "./normalize.ts",
          "expression": "\"./normalize.ts\"",
          "outcome": "resolved",
          "target": "src/rules/normalize.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/middleware.ts",
          "line": 17,
          "column": 1,
          "kind": "import",
          "specifier": "./types.ts",
          "expression": "\"./types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/normalize.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/key.ts",
          "expression": "\"./internal/key.ts\"",
          "outcome": "resolved",
          "target": "src/rules/internal/key.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/normalize.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "./handlers/_splat.ts",
          "expression": "\"./handlers/_splat.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/_splat.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/normalize.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "./merge.ts",
          "expression": "\"./merge.ts\"",
          "outcome": "resolved",
          "target": "src/rules/merge.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/normalize.ts",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "./types.ts",
          "expression": "\"./types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/proxy.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "../utils/proxy.ts",
          "expression": "\"../utils/proxy.ts\"",
          "outcome": "resolved",
          "target": "src/utils/proxy.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/proxy.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "./types.ts",
          "expression": "\"./types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/proxy.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "./handlers/_utils.ts",
          "expression": "\"./handlers/_utils.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/_utils.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/types.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../types/handler.ts",
          "expression": "\"../types/handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/types.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../types/route-rules.ts",
          "expression": "\"../types/route-rules.ts\"",
          "outcome": "resolved",
          "target": "src/types/route-rules.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/types.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../utils/cors.ts",
          "expression": "\"../utils/cors.ts\"",
          "outcome": "resolved",
          "target": "src/utils/cors.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/types.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../utils/proxy.ts",
          "expression": "\"../utils/proxy.ts\"",
          "outcome": "resolved",
          "target": "src/utils/proxy.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/rules/types.ts",
          "line": 7,
          "column": 1,
          "kind": "re-export",
          "specifier": "../types/route-rules.ts",
          "expression": "\"../types/route-rules.ts\"",
          "outcome": "resolved",
          "target": "src/types/route-rules.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/tracing.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "./event.ts",
          "expression": "\"./event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/tracing.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./h3.ts",
          "expression": "\"./h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/tracing.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./plugin.ts",
          "expression": "\"./plugin.ts\"",
          "outcome": "resolved",
          "target": "src/plugin.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/tracing.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./types/h3.ts",
          "expression": "\"./types/h3.ts\"",
          "outcome": "resolved",
          "target": "src/types/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/tracing.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "./types/handler.ts",
          "expression": "\"./types/handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/types/context.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../utils/session.ts",
          "expression": "\"../utils/session.ts\"",
          "outcome": "resolved",
          "target": "src/utils/session.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/types/context.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./h3.ts",
          "expression": "\"./h3.ts\"",
          "outcome": "resolved",
          "target": "src/types/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/types/context.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./route-rules.ts",
          "expression": "\"./route-rules.ts\"",
          "outcome": "resolved",
          "target": "src/types/route-rules.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/types/context.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/types/h3.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "./context.ts",
          "expression": "\"./context.ts\"",
          "outcome": "resolved",
          "target": "src/types/context.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/types/h3.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./handler.ts",
          "expression": "\"./handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/types/h3.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../error.ts",
          "expression": "\"../error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/types/h3.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./_utils.ts",
          "expression": "\"./_utils.ts\"",
          "outcome": "resolved",
          "target": "src/types/_utils.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/types/h3.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/types/h3.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/types/h3.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "../plugin.ts",
          "expression": "\"../plugin.ts\"",
          "outcome": "resolved",
          "target": "src/plugin.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/types/h3.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "../middleware.ts",
          "expression": "\"../middleware.ts\"",
          "outcome": "resolved",
          "target": "src/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/types/handler.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/types/handler.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "fetchdts",
          "expression": "\"fetchdts\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/types/handler.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/types/handler.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./_utils.ts",
          "expression": "\"./_utils.ts\"",
          "outcome": "resolved",
          "target": "src/types/_utils.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/types/handler.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "./h3.ts",
          "expression": "\"./h3.ts\"",
          "outcome": "resolved",
          "target": "src/types/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/types/handler.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "../h3.ts",
          "expression": "\"../h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/types/route-rules.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../rules/types.ts",
          "expression": "\"../rules/types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/types/route-rules.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../utils/cors.ts",
          "expression": "\"../utils/cors.ts\"",
          "outcome": "resolved",
          "target": "src/utils/cors.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/auth.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../index.ts",
          "expression": "\"../index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/auth.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../index.ts",
          "expression": "\"../index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/auth.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/auth.ts",
          "expression": "\"./internal/auth.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/auth.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/base.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../types/handler.ts",
          "expression": "\"../types/handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/base.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "../handler.ts",
          "expression": "\"../handler.ts\"",
          "outcome": "resolved",
          "target": "src/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/base.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "../error.ts",
          "expression": "\"../error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/base.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/path.ts",
          "expression": "\"./internal/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/body.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../error.ts",
          "expression": "\"../error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/body.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/validate.ts",
          "expression": "\"./internal/validate.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/validate.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/body.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/body.ts",
          "expression": "\"./internal/body.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/body.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/body.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "srvx/body-limit",
          "expression": "\"srvx/body-limit\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/utils/body.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/utils/body.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/body.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "../types/handler.ts",
          "expression": "\"../types/handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/body.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/validate.ts",
          "expression": "\"./internal/validate.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/validate.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/body.ts",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/standard-schema.ts",
          "expression": "\"./internal/standard-schema.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/standard-schema.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/cache.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/cache.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/cache.ts",
          "expression": "\"./internal/cache.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/cache.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/cookie.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "cookie-es",
          "expression": "\"cookie-es\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/utils/cookie.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/cookie.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "cookie-es",
          "expression": "\"cookie-es\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/utils/cookie.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/validate.ts",
          "expression": "\"./internal/validate.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/validate.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/cookie.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/standard-schema.ts",
          "expression": "\"./internal/standard-schema.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/standard-schema.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/cookie.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/validate.ts",
          "expression": "\"./internal/validate.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/validate.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/cookie.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "../error.ts",
          "expression": "\"../error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/cookie.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "../error.ts",
          "expression": "\"../error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/cors.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/cors.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./response.ts",
          "expression": "\"./response.ts\"",
          "outcome": "resolved",
          "target": "src/utils/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/cors.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/cors.ts",
          "expression": "\"./internal/cors.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/cors.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/cors.ts",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "../response.ts",
          "expression": "\"../response.ts\"",
          "outcome": "resolved",
          "target": "src/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/cors.ts",
          "line": 14,
          "column": 1,
          "kind": "re-export",
          "specifier": "./internal/cors.ts",
          "expression": "\"./internal/cors.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/cors.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/event-stream.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/event-stream.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../response.ts",
          "expression": "\"../response.ts\"",
          "outcome": "resolved",
          "target": "src/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/event-stream.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/dispose.ts",
          "expression": "\"./internal/dispose.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/dispose.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/event-stream.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/event-stream.ts",
          "expression": "\"./internal/event-stream.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/event-stream.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/event.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/event.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../types/context.ts",
          "expression": "\"../types/context.ts\"",
          "outcome": "resolved",
          "target": "src/types/context.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/event.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/utils/fingerprint.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/fingerprint.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./request.ts",
          "expression": "\"./request.ts\"",
          "outcome": "resolved",
          "target": "src/utils/request.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/internal/body.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "./obj.ts",
          "expression": "\"./obj.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/obj.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/internal/body.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./object.ts",
          "expression": "\"./object.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/object.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/internal/cors.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../../event.ts",
          "expression": "\"../../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/internal/cors.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../cors.ts",
          "expression": "\"../cors.ts\"",
          "outcome": "resolved",
          "target": "src/utils/cors.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/internal/dispose.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/utils/internal/dispose.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../../event.ts",
          "expression": "\"../../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/internal/event-stream.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../../event.ts",
          "expression": "\"../../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/internal/event-stream.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../event-stream.ts",
          "expression": "\"../event-stream.ts\"",
          "outcome": "resolved",
          "target": "src/utils/event-stream.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/internal/iron-crypto.ts",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "./encoding.ts",
          "expression": "\"./encoding.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/encoding.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/internal/iterable.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "./encoding.ts",
          "expression": "\"./encoding.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/encoding.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/internal/obj.ts",
          "line": 1,
          "column": 1,
          "kind": "re-export",
          "specifier": "rou3",
          "expression": "\"rou3\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/utils/internal/object.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "./obj.ts",
          "expression": "\"./obj.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/obj.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/internal/proxy.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../../event.ts",
          "expression": "\"../../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/internal/query.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "./obj.ts",
          "expression": "\"./obj.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/obj.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/internal/route.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "rou3",
          "expression": "\"rou3\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/utils/internal/session.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../session.ts",
          "expression": "\"../session.ts\"",
          "outcome": "resolved",
          "target": "src/utils/session.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/internal/validate.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../../error.ts",
          "expression": "\"../../error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/internal/validate.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/utils/internal/validate.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./standard-schema.ts",
          "expression": "\"./standard-schema.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/standard-schema.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/internal/validate.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "./obj.ts",
          "expression": "\"./obj.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/obj.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/json-rpc.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../types/handler.ts",
          "expression": "\"../types/handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/json-rpc.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "crossws",
          "expression": "\"crossws\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/utils/json-rpc.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/json-rpc.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../handler.ts",
          "expression": "\"../handler.ts\"",
          "outcome": "resolved",
          "target": "src/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/json-rpc.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "./ws.ts",
          "expression": "\"./ws.ts\"",
          "outcome": "resolved",
          "target": "src/utils/ws.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/json-rpc.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/cors.ts",
          "expression": "\"./internal/cors.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/cors.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/json-rpc.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "../error.ts",
          "expression": "\"../error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/json-rpc.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "../response.ts",
          "expression": "\"../response.ts\"",
          "outcome": "resolved",
          "target": "src/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/middleware.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../error.ts",
          "expression": "\"../error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/middleware.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../response.ts",
          "expression": "\"../response.ts\"",
          "outcome": "resolved",
          "target": "src/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/middleware.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../types/_utils.ts",
          "expression": "\"../types/_utils.ts\"",
          "outcome": "resolved",
          "target": "src/types/_utils.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/middleware.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/middleware.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "../types/handler.ts",
          "expression": "\"../types/handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/middleware.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "./body.ts",
          "expression": "\"./body.ts\"",
          "outcome": "resolved",
          "target": "src/utils/body.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/path.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/path.ts",
          "expression": "\"./internal/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/proxy.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/proxy.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../error.ts",
          "expression": "\"../error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/proxy.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/proxy.ts",
          "expression": "\"./internal/proxy.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/proxy.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/proxy.ts",
          "line": 15,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/obj.ts",
          "expression": "\"./internal/obj.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/obj.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/proxy.ts",
          "line": 16,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/utils/proxy.ts",
          "line": 17,
          "column": 1,
          "kind": "import",
          "specifier": "../response.ts",
          "expression": "\"../response.ts\"",
          "outcome": "resolved",
          "target": "src/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/query.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../error.ts",
          "expression": "\"../error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/query.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/request.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../error.ts",
          "expression": "\"../error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/request.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/path.ts",
          "expression": "\"./internal/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/request.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/obj.ts",
          "expression": "\"./internal/obj.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/obj.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/request.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/query.ts",
          "expression": "\"./internal/query.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/query.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/request.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/validate.ts",
          "expression": "\"./internal/validate.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/validate.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/request.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "./event.ts",
          "expression": "\"./event.ts\"",
          "outcome": "resolved",
          "target": "src/utils/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/request.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/standard-schema.ts",
          "expression": "\"./internal/standard-schema.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/standard-schema.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/request.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/validate.ts",
          "expression": "\"./internal/validate.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/validate.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/request.ts",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/request.ts",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "../types/handler.ts",
          "expression": "\"../types/handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/request.ts",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "../types/h3.ts",
          "expression": "\"../types/h3.ts\"",
          "outcome": "resolved",
          "target": "src/types/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/request.ts",
          "line": 13,
          "column": 1,
          "kind": "import",
          "specifier": "../types/context.ts",
          "expression": "\"../types/context.ts\"",
          "outcome": "resolved",
          "target": "src/types/context.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/request.ts",
          "line": 14,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/utils/response.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/response.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../response.ts",
          "expression": "\"../response.ts\"",
          "outcome": "resolved",
          "target": "src/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/response.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/iterable.ts",
          "expression": "\"./internal/iterable.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/iterable.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/response.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/dispose.ts",
          "expression": "\"./internal/dispose.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/dispose.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/response.ts",
          "line": 11,
          "column": 1,
          "kind": "re-export",
          "specifier": "./internal/dispose.ts",
          "expression": "\"./internal/dispose.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/dispose.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/route.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../types/h3.ts",
          "expression": "\"../types/h3.ts\"",
          "outcome": "resolved",
          "target": "src/types/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/route.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../types/handler.ts",
          "expression": "\"../types/handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/route.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../types/h3.ts",
          "expression": "\"../types/h3.ts\"",
          "outcome": "resolved",
          "target": "src/types/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/route.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../plugin.ts",
          "expression": "\"../plugin.ts\"",
          "outcome": "resolved",
          "target": "src/plugin.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/route.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/standard-schema.ts",
          "expression": "\"./internal/standard-schema.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/standard-schema.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/route.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/validate.ts",
          "expression": "\"./internal/validate.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/validate.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/route.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "rou3",
          "expression": "\"rou3\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/utils/route.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "../handler.ts",
          "expression": "\"../handler.ts\"",
          "outcome": "resolved",
          "target": "src/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/route.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/path.ts",
          "expression": "\"./internal/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/session.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/iron-crypto.ts",
          "expression": "\"./internal/iron-crypto.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/iron-crypto.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/session.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./cookie.ts",
          "expression": "\"./cookie.ts\"",
          "outcome": "resolved",
          "target": "src/utils/cookie.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/session.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/session.ts",
          "expression": "\"./internal/session.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/session.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/session.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/obj.ts",
          "expression": "\"./internal/obj.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/obj.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/session.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/session.ts",
          "expression": "\"./internal/session.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/session.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/session.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/session.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "cookie-es",
          "expression": "\"cookie-es\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/utils/session.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/iron-crypto.ts",
          "expression": "\"./internal/iron-crypto.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/iron-crypto.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/session.ts",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "../types/context.ts",
          "expression": "\"../types/context.ts\"",
          "outcome": "resolved",
          "target": "src/types/context.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/session.ts",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "./event.ts",
          "expression": "\"./event.ts\"",
          "outcome": "resolved",
          "target": "src/utils/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/static.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/static.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../error.ts",
          "expression": "\"../error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/static.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/path.ts",
          "expression": "\"./internal/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/static.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./path.ts",
          "expression": "\"./path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/static.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/mime.ts",
          "expression": "\"./internal/mime.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/mime.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/static.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "./internal/cache.ts",
          "expression": "\"./internal/cache.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/cache.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/static.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "../response.ts",
          "expression": "\"../response.ts\"",
          "outcome": "resolved",
          "target": "src/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/timing.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/timing.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../types/context.ts",
          "expression": "\"../types/context.ts\"",
          "outcome": "resolved",
          "target": "src/types/context.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/ws.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../handler.ts",
          "expression": "\"../handler.ts\"",
          "outcome": "resolved",
          "target": "src/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/ws.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "crossws",
          "expression": "\"crossws\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "src/utils/ws.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../event.ts",
          "expression": "\"../event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/ws.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "../types/handler.ts",
          "expression": "\"../types/handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "src/utils/ws.ts",
          "line": 7,
          "column": 1,
          "kind": "re-export",
          "specifier": "crossws",
          "expression": "\"crossws\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/_setup.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/_setup.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/_setup.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../src/tracing.ts",
          "expression": "\"../src/tracing.ts\"",
          "outcome": "resolved",
          "target": "src/tracing.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/_setup.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "node:http",
          "expression": "\"node:http\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/_setup.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "get-port-please",
          "expression": "\"get-port-please\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/_setup.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/_setup.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/_setup.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "../src/_entries/node.ts",
          "expression": "\"../src/_entries/node.ts\"",
          "outcome": "resolved",
          "target": "src/_entries/node.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/app.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/app.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "node:stream",
          "expression": "\"node:stream\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/app.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../src/adapters.ts",
          "expression": "\"../src/adapters.ts\"",
          "outcome": "resolved",
          "target": "src/adapters.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/app.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../src/utils/base.ts",
          "expression": "\"../src/utils/base.ts\"",
          "outcome": "resolved",
          "target": "src/utils/base.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/app.test.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "../src/error.ts",
          "expression": "\"../src/error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/app.test.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "../src/utils/middleware.ts",
          "expression": "\"../src/utils/middleware.ts\"",
          "outcome": "resolved",
          "target": "src/utils/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/app.test.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/app.test.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "../src/utils/cookie.ts",
          "expression": "\"../src/utils/cookie.ts\"",
          "outcome": "resolved",
          "target": "src/utils/cookie.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/app.test.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "../src/utils/cors.ts",
          "expression": "\"../src/utils/cors.ts\"",
          "outcome": "resolved",
          "target": "src/utils/cors.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/app.test.ts",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/auth.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/auth.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/bench/_bundler.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "node:module",
          "expression": "\"node:module\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/bench/_bundler.ts",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "node:fs/promises",
          "expression": "\"node:fs/promises\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/bench/_bundler.ts",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "node:path",
          "expression": "\"node:path\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/bench/_bundler.ts",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "node:url",
          "expression": "\"node:url\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/bench/_bundler.ts",
          "line": 13,
          "column": 1,
          "kind": "import",
          "specifier": "node:zlib",
          "expression": "\"node:zlib\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/bench/_bundler.ts",
          "line": 117,
          "column": 20,
          "kind": "dynamic-import",
          "specifier": null,
          "expression": "specifier",
          "outcome": "unresolved",
          "target": null,
          "reason": "Dynamic import is not a literal string; target cannot be determined statically"
        },
        {
          "source": "test/bench/_bundler.ts",
          "line": 163,
          "column": 27,
          "kind": "dynamic-import",
          "specifier": "esbuild",
          "expression": "\"esbuild\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/bench/_rules-fixtures.ts",
          "line": 14,
          "column": 1,
          "kind": "import",
          "specifier": "../rules/_augment.ts",
          "expression": "\"../rules/_augment.ts\"",
          "outcome": "resolved",
          "target": "test/rules/_augment.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/bench/_rules-fixtures.ts",
          "line": 15,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/types.ts",
          "expression": "\"../../src/rules/types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/bench/bench.impl.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "rou3/compiler",
          "expression": "\"rou3/compiler\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/bench/bench.impl.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/bench/bench.impl.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/internal/obj.ts",
          "expression": "\"../../src/utils/internal/obj.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/obj.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/bench/bench.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/bench/bench.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./input.ts",
          "expression": "\"./input.ts\"",
          "outcome": "resolved",
          "target": "test/bench/input.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/bench/bench.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./bench.impl.ts",
          "expression": "\"./bench.impl.ts\"",
          "outcome": "resolved",
          "target": "test/bench/bench.impl.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/bench/bench.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "mitata",
          "expression": "\"mitata\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/bench/bench.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./input.ts",
          "expression": "\"./input.ts\"",
          "outcome": "resolved",
          "target": "test/bench/input.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/bench/bench.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./bench.impl.ts",
          "expression": "\"./bench.impl.ts\"",
          "outcome": "resolved",
          "target": "test/bench/bench.impl.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/bench/bundle-inspect.ts",
          "line": 22,
          "column": 1,
          "kind": "import",
          "specifier": "node:fs/promises",
          "expression": "\"node:fs/promises\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/bench/bundle-inspect.ts",
          "line": 23,
          "column": 1,
          "kind": "import",
          "specifier": "node:os",
          "expression": "\"node:os\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/bench/bundle-inspect.ts",
          "line": 24,
          "column": 1,
          "kind": "import",
          "specifier": "node:path",
          "expression": "\"node:path\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/bench/bundle-inspect.ts",
          "line": 25,
          "column": 1,
          "kind": "import",
          "specifier": "node:url",
          "expression": "\"node:url\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/bench/bundle-inspect.ts",
          "line": 26,
          "column": 1,
          "kind": "import",
          "specifier": "./_bundler.ts",
          "expression": "\"./_bundler.ts\"",
          "outcome": "resolved",
          "target": "test/bench/_bundler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/bench/bundle.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/bench/bundle.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "esbuild",
          "expression": "\"esbuild\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/bench/bundle.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "node:url",
          "expression": "\"node:url\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/bench/bundle.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "node:zlib",
          "expression": "\"node:zlib\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/bench/path.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "mitata",
          "expression": "\"mitata\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/bench/path.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/path.ts",
          "expression": "\"../../src/utils/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/bench/request-proxy.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "mitata",
          "expression": "\"mitata\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/bench/request-proxy.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/request.ts",
          "expression": "\"../../src/utils/request.ts\"",
          "outcome": "resolved",
          "target": "src/utils/request.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/bench/rules-bundle-inspect.ts",
          "line": 37,
          "column": 1,
          "kind": "import",
          "specifier": "node:fs/promises",
          "expression": "\"node:fs/promises\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/bench/rules-bundle-inspect.ts",
          "line": 38,
          "column": 1,
          "kind": "import",
          "specifier": "node:os",
          "expression": "\"node:os\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/bench/rules-bundle-inspect.ts",
          "line": 39,
          "column": 1,
          "kind": "import",
          "specifier": "node:path",
          "expression": "\"node:path\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/bench/rules-bundle-inspect.ts",
          "line": 40,
          "column": 1,
          "kind": "import",
          "specifier": "node:url",
          "expression": "\"node:url\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/bench/rules-bundle-inspect.ts",
          "line": 41,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/compiler.ts",
          "expression": "\"../../src/rules/compiler.ts\"",
          "outcome": "resolved",
          "target": "src/rules/compiler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/bench/rules-bundle-inspect.ts",
          "line": 42,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/compiler.ts",
          "expression": "\"../../src/rules/compiler.ts\"",
          "outcome": "resolved",
          "target": "src/rules/compiler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/bench/rules-bundle-inspect.ts",
          "line": 43,
          "column": 1,
          "kind": "import",
          "specifier": "./_bundler.ts",
          "expression": "\"./_bundler.ts\"",
          "outcome": "resolved",
          "target": "test/bench/_bundler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/bench/rules-bundle-inspect.ts",
          "line": 44,
          "column": 1,
          "kind": "import",
          "specifier": "./_bundler.ts",
          "expression": "\"./_bundler.ts\"",
          "outcome": "resolved",
          "target": "test/bench/_bundler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/bench/rules-bundle-inspect.ts",
          "line": 45,
          "column": 1,
          "kind": "import",
          "specifier": "./_rules-fixtures.ts",
          "expression": "\"./_rules-fixtures.ts\"",
          "outcome": "resolved",
          "target": "test/bench/_rules-fixtures.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/bench/rules-bundle-inspect.ts",
          "line": 46,
          "column": 1,
          "kind": "import",
          "specifier": "./_rules-fixtures.ts",
          "expression": "\"./_rules-fixtures.ts\"",
          "outcome": "resolved",
          "target": "test/bench/_rules-fixtures.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/bench/rules-bundle-inspect.ts",
          "line": 321,
          "column": 17,
          "kind": "dynamic-import",
          "specifier": null,
          "expression": "pathToFileURL(variant.bundlePath).href",
          "outcome": "unresolved",
          "target": null,
          "reason": "Dynamic import is not a literal string; target cannot be determined statically"
        },
        {
          "source": "test/bench/session.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "mitata",
          "expression": "\"mitata\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/bench/session.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/body-limit.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "zod/v4",
          "expression": "\"zod/v4\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/body-limit.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/body-limit.test.ts",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "srvx/body-limit",
          "expression": "\"srvx/body-limit\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/body-limit.test.ts",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/body-limit.test.ts",
          "line": 14,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/body-limit.test.ts",
          "line": 15,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/body.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "node:fs",
          "expression": "\"node:fs\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/body.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "node:fs/promises",
          "expression": "\"node:fs/promises\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/body.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/body.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/cookies.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../src/utils/cookie.ts",
          "expression": "\"../src/utils/cookie.ts\"",
          "outcome": "resolved",
          "target": "src/utils/cookie.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/cookies.test.ts",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/dispose.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/dispose.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/dispose.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/dist.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/dist.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "node:fs",
          "expression": "\"node:fs\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/dist.test.ts",
          "line": 22,
          "column": 15,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "excluded",
          "target": null,
          "reason": "Type-query import() syntax is outside this phase"
        },
        {
          "source": "test/dist.test.ts",
          "line": 23,
          "column": 22,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "excluded",
          "target": null,
          "reason": "Type-query import() syntax is outside this phase"
        },
        {
          "source": "test/dist.test.ts",
          "line": 26,
          "column": 36,
          "kind": "dynamic-import",
          "specifier": null,
          "expression": "new URL(`${entry}.mjs`, distDir).href",
          "outcome": "unresolved",
          "target": null,
          "reason": "Dynamic import is not a literal string; target cannot be determined statically"
        },
        {
          "source": "test/errors.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/errors.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "node:vm",
          "expression": "\"node:vm\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/errors.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/errors.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/event.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/event.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/event.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/handler.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/handler.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/handler.test.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "../src/utils/internal/validate.ts",
          "expression": "\"../src/utils/internal/validate.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/validate.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/handler.test.ts",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "../src/event.ts",
          "expression": "\"../src/event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/handler.test.ts",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "zod/v4",
          "expression": "\"zod/v4\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/happydom.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/happydom.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "@happy-dom/global-registrator",
          "expression": "\"@happy-dom/global-registrator\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/happydom.test.ts",
          "line": 6,
          "column": 11,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "excluded",
          "target": null,
          "reason": "Type-query import() syntax is outside this phase"
        },
        {
          "source": "test/happydom.test.ts",
          "line": 21,
          "column": 16,
          "kind": "dynamic-import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/hooks.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/hooks.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/hooks.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/integrations.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "express",
          "expression": "\"express\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/integrations.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "connect",
          "expression": "\"connect\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/integrations.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "react",
          "expression": "\"react\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/integrations.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "react-dom/server",
          "expression": "\"react-dom/server\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/integrations.test.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "hono",
          "expression": "\"hono\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/integrations.test.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "elysia",
          "expression": "\"elysia\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/integrations.test.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/integrations.test.ts",
          "line": 14,
          "column": 1,
          "kind": "import",
          "specifier": "../src/_entries/node.ts",
          "expression": "\"../src/_entries/node.ts\"",
          "outcome": "resolved",
          "target": "src/_entries/node.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/integrations.test.ts",
          "line": 16,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/iterable.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "node:stream/web",
          "expression": "\"node:stream/web\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/iterable.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/iterable.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/iterable.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/json-rpc-ws.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/json-rpc-ws.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/json-rpc-ws.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "crossws",
          "expression": "\"crossws\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/json-rpc.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/json-rpc.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/lazy.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/lazy.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/lazy.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/middleware.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/middleware.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/middleware.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../src/h3.ts",
          "expression": "\"../src/h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/middleware.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../src/handler.ts",
          "expression": "\"../src/handler.ts\"",
          "outcome": "resolved",
          "target": "src/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/middleware.test.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "hono",
          "expression": "\"hono\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/middleware.test.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "../src/middleware.ts",
          "expression": "\"../src/middleware.ts\"",
          "outcome": "resolved",
          "target": "src/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/middleware.test.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/mount.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../src/h3.ts",
          "expression": "\"../src/h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/mount.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../src/utils/base.ts",
          "expression": "\"../src/utils/base.ts\"",
          "outcome": "resolved",
          "target": "src/utils/base.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/mount.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../src/error.ts",
          "expression": "\"../src/error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/mount.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/proxy.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "node:fs/promises",
          "expression": "\"node:fs/promises\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/proxy.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/proxy.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/proxy.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../src/utils/proxy.ts",
          "expression": "\"../src/utils/proxy.ts\"",
          "outcome": "resolved",
          "target": "src/utils/proxy.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/proxy.test.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/query.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/query.test.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/route.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/route.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../src/utils/route.ts",
          "expression": "\"../src/utils/route.ts\"",
          "outcome": "resolved",
          "target": "src/utils/route.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/route.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../src/h3.ts",
          "expression": "\"../src/h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/route.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "zod",
          "expression": "\"zod\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/router.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/router.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/router.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/_fixture.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/cache.ts",
          "expression": "\"../../src/rules/cache.ts\"",
          "outcome": "resolved",
          "target": "src/rules/cache.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/_fixture.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/proxy.ts",
          "expression": "\"../../src/rules/proxy.ts\"",
          "outcome": "resolved",
          "target": "src/rules/proxy.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/_fixture.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/match.ts",
          "expression": "\"../../src/rules/match.ts\"",
          "outcome": "resolved",
          "target": "src/rules/match.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/_fixture.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/handlers/index.ts",
          "expression": "\"../../src/rules/handlers/index.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/_fixture.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/types.ts",
          "expression": "\"../../src/rules/types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/cache.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/cache.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/cache.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/rules/cache.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/middleware.ts",
          "expression": "\"../../src/rules/middleware.ts\"",
          "outcome": "resolved",
          "target": "src/rules/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/cache.test.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/types.ts",
          "expression": "\"../../src/rules/types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/cache.test.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/handlers/cache.ts",
          "expression": "\"../../src/rules/handlers/cache.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/cache.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/cache.test.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/cache.ts",
          "expression": "\"../../src/rules/cache.ts\"",
          "outcome": "resolved",
          "target": "src/rules/cache.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/cache.test.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/cache.ts",
          "expression": "\"../../src/rules/cache.ts\"",
          "outcome": "resolved",
          "target": "src/rules/cache.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/compiler.test-d.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/compiler.ts",
          "expression": "\"../../src/rules/compiler.ts\"",
          "outcome": "resolved",
          "target": "src/rules/compiler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/compiler.test-d.ts",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/normalize.ts",
          "expression": "\"../../src/rules/normalize.ts\"",
          "outcome": "resolved",
          "target": "src/rules/normalize.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/compiler.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/rules/compiler.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/compiler.ts",
          "expression": "\"../../src/rules/compiler.ts\"",
          "outcome": "resolved",
          "target": "src/rules/compiler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/compiler.test.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/compiler.ts",
          "expression": "\"../../src/rules/compiler.ts\"",
          "outcome": "resolved",
          "target": "src/rules/compiler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/compiler.test.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/index.ts",
          "expression": "\"../../src/rules/index.ts\"",
          "outcome": "resolved",
          "target": "src/rules/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/compiler.test.ts",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/match.ts",
          "expression": "\"../../src/rules/match.ts\"",
          "outcome": "resolved",
          "target": "src/rules/match.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/compiler.test.ts",
          "line": 15,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/match.ts",
          "expression": "\"../../src/rules/match.ts\"",
          "outcome": "resolved",
          "target": "src/rules/match.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/compiler.test.ts",
          "line": 16,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/normalize.ts",
          "expression": "\"../../src/rules/normalize.ts\"",
          "outcome": "resolved",
          "target": "src/rules/normalize.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/compiler.test.ts",
          "line": 17,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/cache.ts",
          "expression": "\"../../src/rules/cache.ts\"",
          "outcome": "resolved",
          "target": "src/rules/cache.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/compiler.test.ts",
          "line": 18,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/proxy.ts",
          "expression": "\"../../src/rules/proxy.ts\"",
          "outcome": "resolved",
          "target": "src/rules/proxy.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/compiler.test.ts",
          "line": 19,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/handlers/index.ts",
          "expression": "\"../../src/rules/handlers/index.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/compiler.test.ts",
          "line": 20,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/types.ts",
          "expression": "\"../../src/rules/types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/compiler.test.ts",
          "line": 21,
          "column": 1,
          "kind": "import",
          "specifier": "./_fixture.ts",
          "expression": "\"./_fixture.ts\"",
          "outcome": "resolved",
          "target": "test/rules/_fixture.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/encoding.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/rules/encoding.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/encoding.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/middleware.ts",
          "expression": "\"../../src/rules/middleware.ts\"",
          "outcome": "resolved",
          "target": "src/rules/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/encoding.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/proxy.ts",
          "expression": "\"../../src/rules/proxy.ts\"",
          "outcome": "resolved",
          "target": "src/rules/proxy.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/encoding.test.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/match.ts",
          "expression": "\"../../src/rules/match.ts\"",
          "outcome": "resolved",
          "target": "src/rules/match.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/encoding.test.ts",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/match.ts",
          "expression": "\"../../src/rules/match.ts\"",
          "outcome": "resolved",
          "target": "src/rules/match.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/encoding.test.ts",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/merge.ts",
          "expression": "\"../../src/rules/merge.ts\"",
          "outcome": "resolved",
          "target": "src/rules/merge.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/encoding.test.ts",
          "line": 13,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/normalize.ts",
          "expression": "\"../../src/rules/normalize.ts\"",
          "outcome": "resolved",
          "target": "src/rules/normalize.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/encoding.test.ts",
          "line": 14,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/internal/key.ts",
          "expression": "\"../../src/rules/internal/key.ts\"",
          "outcome": "resolved",
          "target": "src/rules/internal/key.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/encoding.test.ts",
          "line": 15,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/internal/scope.ts",
          "expression": "\"../../src/rules/internal/scope.ts\"",
          "outcome": "resolved",
          "target": "src/rules/internal/scope.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/encoding.test.ts",
          "line": 16,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/handlers/_utils.ts",
          "expression": "\"../../src/rules/handlers/_utils.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/_utils.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/encoding.test.ts",
          "line": 17,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/handlers/_utils.ts",
          "expression": "\"../../src/rules/handlers/_utils.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/_utils.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/encoding.test.ts",
          "line": 18,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/internal/path.ts",
          "expression": "\"../../src/utils/internal/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/encoding.test.ts",
          "line": 19,
          "column": 1,
          "kind": "import",
          "specifier": "rou3",
          "expression": "\"rou3\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/rules/encoding.test.ts",
          "line": 20,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/compiler.ts",
          "expression": "\"../../src/rules/compiler.ts\"",
          "outcome": "resolved",
          "target": "src/rules/compiler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/encoding.test.ts",
          "line": 21,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/handlers/index.ts",
          "expression": "\"../../src/rules/handlers/index.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/encoding.test.ts",
          "line": 22,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/match.ts",
          "expression": "\"../../src/rules/match.ts\"",
          "outcome": "resolved",
          "target": "src/rules/match.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/encoding.test.ts",
          "line": 23,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/types.ts",
          "expression": "\"../../src/rules/types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/encoding.test.ts",
          "line": 35,
          "column": 39,
          "kind": "import",
          "specifier": "../../src/utils/internal/path.ts",
          "expression": "\"../../src/utils/internal/path.ts\"",
          "outcome": "excluded",
          "target": null,
          "reason": "Type-query import() syntax is outside this phase"
        },
        {
          "source": "test/rules/match.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "rou3",
          "expression": "\"rou3\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/rules/match.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/rules/match.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/match.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/compiler.ts",
          "expression": "\"../../src/rules/compiler.ts\"",
          "outcome": "resolved",
          "target": "src/rules/compiler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/match.test.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/match.ts",
          "expression": "\"../../src/rules/match.ts\"",
          "outcome": "resolved",
          "target": "src/rules/match.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/match.test.ts",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/match.ts",
          "expression": "\"../../src/rules/match.ts\"",
          "outcome": "resolved",
          "target": "src/rules/match.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/match.test.ts",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/merge.ts",
          "expression": "\"../../src/rules/merge.ts\"",
          "outcome": "resolved",
          "target": "src/rules/merge.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/match.test.ts",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/middleware.ts",
          "expression": "\"../../src/rules/middleware.ts\"",
          "outcome": "resolved",
          "target": "src/rules/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/match.test.ts",
          "line": 13,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/normalize.ts",
          "expression": "\"../../src/rules/normalize.ts\"",
          "outcome": "resolved",
          "target": "src/rules/normalize.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/match.test.ts",
          "line": 14,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/types.ts",
          "expression": "\"../../src/rules/types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/memoize.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/memoize.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/rules/memoize.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/match.ts",
          "expression": "\"../../src/rules/match.ts\"",
          "outcome": "resolved",
          "target": "src/rules/match.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/memoize.test.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/merge.ts",
          "expression": "\"../../src/rules/merge.ts\"",
          "outcome": "resolved",
          "target": "src/rules/merge.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/memoize.test.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/normalize.ts",
          "expression": "\"../../src/rules/normalize.ts\"",
          "outcome": "resolved",
          "target": "src/rules/normalize.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/memoize.test.ts",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/types.ts",
          "expression": "\"../../src/rules/types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/merge.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/rules/merge.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/merge.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/compiler.ts",
          "expression": "\"../../src/rules/compiler.ts\"",
          "outcome": "resolved",
          "target": "src/rules/compiler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/merge.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/match.ts",
          "expression": "\"../../src/rules/match.ts\"",
          "outcome": "resolved",
          "target": "src/rules/match.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/merge.test.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/match.ts",
          "expression": "\"../../src/rules/match.ts\"",
          "outcome": "resolved",
          "target": "src/rules/match.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/merge.test.ts",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/merge.ts",
          "expression": "\"../../src/rules/merge.ts\"",
          "outcome": "resolved",
          "target": "src/rules/merge.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/merge.test.ts",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/middleware.ts",
          "expression": "\"../../src/rules/middleware.ts\"",
          "outcome": "resolved",
          "target": "src/rules/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/merge.test.ts",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/merge.ts",
          "expression": "\"../../src/rules/merge.ts\"",
          "outcome": "resolved",
          "target": "src/rules/merge.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/merge.test.ts",
          "line": 13,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/normalize.ts",
          "expression": "\"../../src/rules/normalize.ts\"",
          "outcome": "resolved",
          "target": "src/rules/normalize.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/merge.test.ts",
          "line": 14,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/types.ts",
          "expression": "\"../../src/rules/types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/merge.test.ts",
          "line": 15,
          "column": 1,
          "kind": "import",
          "specifier": "./_fixture.ts",
          "expression": "\"./_fixture.ts\"",
          "outcome": "resolved",
          "target": "test/rules/_fixture.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/middleware.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/middleware.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/middleware.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/rules/middleware.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/middleware.ts",
          "expression": "\"../../src/rules/middleware.ts\"",
          "outcome": "resolved",
          "target": "src/rules/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/middleware.test.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/middleware.ts",
          "expression": "\"../../src/rules/middleware.ts\"",
          "outcome": "resolved",
          "target": "src/rules/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/middleware.test.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/types.ts",
          "expression": "\"../../src/rules/types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/middleware.test.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/cache.ts",
          "expression": "\"../../src/rules/cache.ts\"",
          "outcome": "resolved",
          "target": "src/rules/cache.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/normalize.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/rules/normalize.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/internal/key.ts",
          "expression": "\"../../src/rules/internal/key.ts\"",
          "outcome": "resolved",
          "target": "src/rules/internal/key.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/normalize.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/middleware.ts",
          "expression": "\"../../src/rules/middleware.ts\"",
          "outcome": "resolved",
          "target": "src/rules/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/normalize.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/normalize.ts",
          "expression": "\"../../src/rules/normalize.ts\"",
          "outcome": "resolved",
          "target": "src/rules/normalize.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/normalize.test.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/types.ts",
          "expression": "\"../../src/rules/types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/normalize.test.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/cors.ts",
          "expression": "\"../../src/utils/cors.ts\"",
          "outcome": "resolved",
          "target": "src/utils/cors.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/normalize.test.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "./_fixture.ts",
          "expression": "\"./_fixture.ts\"",
          "outcome": "resolved",
          "target": "test/rules/_fixture.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/premerge.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "rou3",
          "expression": "\"rou3\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/rules/premerge.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/rules/premerge.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/compiler.ts",
          "expression": "\"../../src/rules/compiler.ts\"",
          "outcome": "resolved",
          "target": "src/rules/compiler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/premerge.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/match.ts",
          "expression": "\"../../src/rules/match.ts\"",
          "outcome": "resolved",
          "target": "src/rules/match.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/premerge.test.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/match.ts",
          "expression": "\"../../src/rules/match.ts\"",
          "outcome": "resolved",
          "target": "src/rules/match.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/premerge.test.ts",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/normalize.ts",
          "expression": "\"../../src/rules/normalize.ts\"",
          "outcome": "resolved",
          "target": "src/rules/normalize.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/premerge.test.ts",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/handlers/index.ts",
          "expression": "\"../../src/rules/handlers/index.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/premerge.test.ts",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/types.ts",
          "expression": "\"../../src/rules/types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/premerge.test.ts",
          "line": 13,
          "column": 1,
          "kind": "import",
          "specifier": "./_fixture.ts",
          "expression": "\"./_fixture.ts\"",
          "outcome": "resolved",
          "target": "test/rules/_fixture.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/rules.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/rules.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/rules/rules.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/middleware.ts",
          "expression": "\"../../src/rules/middleware.ts\"",
          "outcome": "resolved",
          "target": "src/rules/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/rules.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/internal/scope.ts",
          "expression": "\"../../src/rules/internal/scope.ts\"",
          "outcome": "resolved",
          "target": "src/rules/internal/scope.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/rules.test.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/proxy.ts",
          "expression": "\"../../src/rules/proxy.ts\"",
          "outcome": "resolved",
          "target": "src/rules/proxy.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/rules.test.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/handlers/_utils.ts",
          "expression": "\"../../src/rules/handlers/_utils.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/_utils.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/rules.test.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/handlers/_utils.ts",
          "expression": "\"../../src/rules/handlers/_utils.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/_utils.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/rules.test.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/types.ts",
          "expression": "\"../../src/rules/types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/rules.test.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/match.ts",
          "expression": "\"../../src/rules/match.ts\"",
          "outcome": "resolved",
          "target": "src/rules/match.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/scope.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/rules/scope.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/handlers/_utils.ts",
          "expression": "\"../../src/rules/handlers/_utils.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/_utils.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/scope.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/handlers/_utils.ts",
          "expression": "\"../../src/rules/handlers/_utils.ts\"",
          "outcome": "resolved",
          "target": "src/rules/handlers/_utils.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/scope.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/internal/scope.ts",
          "expression": "\"../../src/rules/internal/scope.ts\"",
          "outcome": "resolved",
          "target": "src/rules/internal/scope.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/scope.test.ts",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/normalize.ts",
          "expression": "\"../../src/rules/normalize.ts\"",
          "outcome": "resolved",
          "target": "src/rules/normalize.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/scope.test.ts",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/types.ts",
          "expression": "\"../../src/rules/types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/treeshake.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "node:path",
          "expression": "\"node:path\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/rules/treeshake.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "node:url",
          "expression": "\"node:url\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/rules/treeshake.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "esbuild",
          "expression": "\"esbuild\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/rules/treeshake.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "esbuild",
          "expression": "\"esbuild\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/rules/treeshake.test.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/rules/treeshake.test.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/compiler.ts",
          "expression": "\"../../src/rules/compiler.ts\"",
          "outcome": "resolved",
          "target": "src/rules/compiler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/types.test-d.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/rules/types.test-d.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "ocache",
          "expression": "\"ocache\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/rules/types.test-d.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/compiler.ts",
          "expression": "\"../../src/rules/compiler.ts\"",
          "outcome": "resolved",
          "target": "src/rules/compiler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/types.test-d.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/normalize.ts",
          "expression": "\"../../src/rules/normalize.ts\"",
          "outcome": "resolved",
          "target": "src/rules/normalize.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/types.test-d.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/middleware.ts",
          "expression": "\"../../src/rules/middleware.ts\"",
          "outcome": "resolved",
          "target": "src/rules/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/types.test-d.ts",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/types/route-rules.ts",
          "expression": "\"../../src/types/route-rules.ts\"",
          "outcome": "resolved",
          "target": "src/types/route-rules.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/rules/types.test-d.ts",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/rules/types.ts",
          "expression": "\"../../src/rules/types.ts\"",
          "outcome": "resolved",
          "target": "src/rules/types.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/security.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/security.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/security.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/session.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../src/utils/session.ts",
          "expression": "\"../src/utils/session.ts\"",
          "outcome": "resolved",
          "target": "src/utils/session.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/session.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/session.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/session.test.ts",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "../src/utils/internal/iron-crypto.ts",
          "expression": "\"../src/utils/internal/iron-crypto.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/iron-crypto.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/session.test.ts",
          "line": 13,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/sse.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/sse.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/sse.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/static.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/static.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/static.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/status.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/status.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/stream.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "node:stream",
          "expression": "\"node:stream\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/stream.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "node:diagnostics_channel",
          "expression": "\"node:diagnostics_channel\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../src/h3.ts",
          "expression": "\"../src/h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "../src/tracing.ts",
          "expression": "\"../src/tracing.ts\"",
          "outcome": "resolved",
          "target": "src/tracing.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "../src/error.ts",
          "expression": "\"../src/error.ts\"",
          "outcome": "resolved",
          "target": "src/error.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 784,
          "column": 30,
          "kind": "dynamic-import",
          "specifier": "../src/h3.ts",
          "expression": "\"../src/h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 785,
          "column": 37,
          "kind": "dynamic-import",
          "specifier": "../src/tracing.ts",
          "expression": "\"../src/tracing.ts\"",
          "outcome": "resolved",
          "target": "src/tracing.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 786,
          "column": 31,
          "kind": "dynamic-import",
          "specifier": "../src/event.ts",
          "expression": "\"../src/event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 836,
          "column": 30,
          "kind": "dynamic-import",
          "specifier": "../src/h3.ts",
          "expression": "\"../src/h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 837,
          "column": 37,
          "kind": "dynamic-import",
          "specifier": "../src/tracing.ts",
          "expression": "\"../src/tracing.ts\"",
          "outcome": "resolved",
          "target": "src/tracing.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 838,
          "column": 31,
          "kind": "dynamic-import",
          "specifier": "../src/event.ts",
          "expression": "\"../src/event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 900,
          "column": 30,
          "kind": "dynamic-import",
          "specifier": "../src/h3.ts",
          "expression": "\"../src/h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 901,
          "column": 37,
          "kind": "dynamic-import",
          "specifier": "../src/tracing.ts",
          "expression": "\"../src/tracing.ts\"",
          "outcome": "resolved",
          "target": "src/tracing.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 902,
          "column": 31,
          "kind": "dynamic-import",
          "specifier": "../src/event.ts",
          "expression": "\"../src/event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 958,
          "column": 30,
          "kind": "dynamic-import",
          "specifier": "../src/h3.ts",
          "expression": "\"../src/h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 959,
          "column": 37,
          "kind": "dynamic-import",
          "specifier": "../src/tracing.ts",
          "expression": "\"../src/tracing.ts\"",
          "outcome": "resolved",
          "target": "src/tracing.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 960,
          "column": 31,
          "kind": "dynamic-import",
          "specifier": "../src/event.ts",
          "expression": "\"../src/event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 1012,
          "column": 30,
          "kind": "dynamic-import",
          "specifier": "../src/h3.ts",
          "expression": "\"../src/h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 1013,
          "column": 37,
          "kind": "dynamic-import",
          "specifier": "../src/tracing.ts",
          "expression": "\"../src/tracing.ts\"",
          "outcome": "resolved",
          "target": "src/tracing.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 1014,
          "column": 31,
          "kind": "dynamic-import",
          "specifier": "../src/event.ts",
          "expression": "\"../src/event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 1070,
          "column": 30,
          "kind": "dynamic-import",
          "specifier": "../src/h3.ts",
          "expression": "\"../src/h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 1071,
          "column": 37,
          "kind": "dynamic-import",
          "specifier": "../src/tracing.ts",
          "expression": "\"../src/tracing.ts\"",
          "outcome": "resolved",
          "target": "src/tracing.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 1072,
          "column": 31,
          "kind": "dynamic-import",
          "specifier": "../src/event.ts",
          "expression": "\"../src/event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 1130,
          "column": 30,
          "kind": "dynamic-import",
          "specifier": "../src/h3.ts",
          "expression": "\"../src/h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 1131,
          "column": 37,
          "kind": "dynamic-import",
          "specifier": "../src/tracing.ts",
          "expression": "\"../src/tracing.ts\"",
          "outcome": "resolved",
          "target": "src/tracing.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 1132,
          "column": 31,
          "kind": "dynamic-import",
          "specifier": "../src/event.ts",
          "expression": "\"../src/event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 1192,
          "column": 30,
          "kind": "dynamic-import",
          "specifier": "../src/h3.ts",
          "expression": "\"../src/h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 1193,
          "column": 46,
          "kind": "dynamic-import",
          "specifier": "../src/tracing.ts",
          "expression": "\"../src/tracing.ts\"",
          "outcome": "resolved",
          "target": "src/tracing.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 1194,
          "column": 31,
          "kind": "dynamic-import",
          "specifier": "../src/event.ts",
          "expression": "\"../src/event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 1221,
          "column": 46,
          "kind": "dynamic-import",
          "specifier": "../src/tracing.ts",
          "expression": "\"../src/tracing.ts\"",
          "outcome": "resolved",
          "target": "src/tracing.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 1233,
          "column": 30,
          "kind": "dynamic-import",
          "specifier": "../src/h3.ts",
          "expression": "\"../src/h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 1234,
          "column": 46,
          "kind": "dynamic-import",
          "specifier": "../src/tracing.ts",
          "expression": "\"../src/tracing.ts\"",
          "outcome": "resolved",
          "target": "src/tracing.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/tracing.test.ts",
          "line": 1235,
          "column": 31,
          "kind": "dynamic-import",
          "specifier": "../src/event.ts",
          "expression": "\"../src/event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/auth.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/auth.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/internal/auth.ts",
          "expression": "\"../../src/utils/internal/auth.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/auth.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/body-limit.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/body-limit.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/cli.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/cli.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "node:child_process",
          "expression": "\"node:child_process\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/unit/cli.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "node:fs",
          "expression": "\"node:fs\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/unit/cli.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "node:os",
          "expression": "\"node:os\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/unit/cli.test.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "node:path",
          "expression": "\"node:path\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/unit/cli.test.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "node:url",
          "expression": "\"node:url\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/unit/cookie-perf.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/cookie-perf.test.ts",
          "line": 7,
          "column": 39,
          "kind": "import",
          "specifier": "cookie-es",
          "expression": "\"cookie-es\"",
          "outcome": "excluded",
          "target": null,
          "reason": "Type-query import() syntax is outside this phase"
        },
        {
          "source": "test/unit/cookie-perf.test.ts",
          "line": 15,
          "column": 54,
          "kind": "dynamic-import",
          "specifier": "../../src/utils/cookie.ts",
          "expression": "\"../../src/utils/cookie.ts\"",
          "outcome": "resolved",
          "target": "src/utils/cookie.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/cookie-perf.test.ts",
          "line": 16,
          "column": 27,
          "kind": "dynamic-import",
          "specifier": "../../src/event.ts",
          "expression": "\"../../src/event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/cookie-validation.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/cookie-validation.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/cookie-validation.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "zod/v4",
          "expression": "\"zod/v4\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/cors.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/cors.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/cors.test.ts",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/response.ts",
          "expression": "\"../../src/response.ts\"",
          "outcome": "resolved",
          "target": "src/response.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/cors.test.ts",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/internal/cors.ts",
          "expression": "\"../../src/utils/internal/cors.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/cors.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/cors.test.ts",
          "line": 22,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/cors.test.ts",
          "line": 77,
          "column": 32,
          "kind": "import",
          "specifier": "../../src/utils/internal/cors.ts",
          "expression": "\"../../src/utils/internal/cors.ts\"",
          "outcome": "excluded",
          "target": null,
          "reason": "Type-query import() syntax is outside this phase"
        },
        {
          "source": "test/unit/cors.test.ts",
          "line": 80,
          "column": 41,
          "kind": "dynamic-import",
          "specifier": "../../src/utils/internal/cors.ts",
          "expression": "\"../../src/utils/internal/cors.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/cors.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/encoding.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/encoding.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/internal/encoding.ts",
          "expression": "\"../../src/utils/internal/encoding.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/encoding.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/event.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/event.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/event.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/event.ts",
          "expression": "\"../../src/event.ts\"",
          "outcome": "resolved",
          "target": "src/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/event.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/request.ts",
          "expression": "\"../../src/utils/request.ts\"",
          "outcome": "resolved",
          "target": "src/utils/request.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/event.test.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/internal/path.ts",
          "expression": "\"../../src/utils/internal/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/h3.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/h3.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/h3.ts",
          "expression": "\"../../src/h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/iron-crypto.test.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/iron-crypto.test.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "node:crypto",
          "expression": "\"node:crypto\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/unit/iron-crypto.test.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/internal/iron-crypto.ts",
          "expression": "\"../../src/utils/internal/iron-crypto.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/iron-crypto.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/iron-crypto.test.ts",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/internal/encoding.ts",
          "expression": "\"../../src/utils/internal/encoding.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/encoding.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/iterable.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/iterable.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/internal/iterable.ts",
          "expression": "\"../../src/utils/internal/iterable.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/iterable.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/meta.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/meta.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/h3.ts",
          "expression": "\"../../src/h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/meta.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/handler.ts",
          "expression": "\"../../src/handler.ts\"",
          "outcome": "resolved",
          "target": "src/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/middleware.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/middleware.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/middleware.ts",
          "expression": "\"../../src/middleware.ts\"",
          "outcome": "resolved",
          "target": "src/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/middleware.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/middleware.test.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/types/handler.ts",
          "expression": "\"../../src/types/handler.ts\"",
          "outcome": "resolved",
          "target": "src/types/handler.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/mime.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/mime.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/internal/mime.ts",
          "expression": "\"../../src/utils/internal/mime.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/mime.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/package.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/package.test.ts",
          "line": 5,
          "column": 43,
          "kind": "dynamic-import",
          "specifier": "../../src/_entries/generic.ts",
          "expression": "\"../../src/_entries/generic.ts\"",
          "outcome": "resolved",
          "target": "src/_entries/generic.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/path.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/path.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/path.ts",
          "expression": "\"../../src/utils/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/path.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/internal/path.ts",
          "expression": "\"../../src/utils/internal/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/proxy.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/proxy.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/internal/proxy.ts",
          "expression": "\"../../src/utils/internal/proxy.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/proxy.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/query.test.ts",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/query.test.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "node:vm",
          "expression": "\"node:vm\"",
          "outcome": "external",
          "target": null,
          "reason": "Node.js built-in module"
        },
        {
          "source": "test/unit/query.test.ts",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/internal/query.ts",
          "expression": "\"../../src/utils/internal/query.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/query.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/request.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/request.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/request.ts",
          "expression": "\"../../src/utils/request.ts\"",
          "outcome": "resolved",
          "target": "src/utils/request.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/request.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/request.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/route-matcher.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/route-matcher.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "rou3",
          "expression": "\"rou3\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/route-matcher.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/internal/route.ts",
          "expression": "\"../../src/utils/internal/route.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/route.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/route-normalize.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/route-normalize.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "rou3",
          "expression": "\"rou3\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/route-normalize.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/h3.ts",
          "expression": "\"../../src/h3.ts\"",
          "outcome": "resolved",
          "target": "src/h3.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/route-normalize.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/event.ts",
          "expression": "\"../../src/utils/event.ts\"",
          "outcome": "resolved",
          "target": "src/utils/event.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/route-normalize.test.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/route.ts",
          "expression": "\"../../src/utils/route.ts\"",
          "outcome": "resolved",
          "target": "src/utils/route.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/route-normalize.test.ts",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/path.ts",
          "expression": "\"../../src/utils/path.ts\"",
          "outcome": "resolved",
          "target": "src/utils/path.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/sanitize.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/sanitize.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/sanitize.ts",
          "expression": "\"../../src/utils/sanitize.ts\"",
          "outcome": "resolved",
          "target": "src/utils/sanitize.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/sse.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/sse.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/event-stream.ts",
          "expression": "\"../../src/utils/event-stream.ts\"",
          "outcome": "resolved",
          "target": "src/utils/event-stream.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/sse.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/utils/internal/event-stream.ts",
          "expression": "\"../../src/utils/internal/event-stream.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/event-stream.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/sse.test.ts",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/timing.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/timing.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/types.test-d.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/types.test-d.ts",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/types.test-d.ts",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/unit/types.test-d.ts",
          "line": 13,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/index.ts",
          "expression": "\"../../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/types.test-d.ts",
          "line": 27,
          "column": 1,
          "kind": "import",
          "specifier": "../../src/_deprecated.ts",
          "expression": "\"../../src/_deprecated.ts\"",
          "outcome": "resolved",
          "target": "src/_deprecated.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/unit/types.test-d.ts",
          "line": 33,
          "column": 1,
          "kind": "import",
          "specifier": "zod",
          "expression": "\"zod\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/utils.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/utils.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/utils.test.ts",
          "line": 18,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/validate.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "../src/utils/internal/validate.ts",
          "expression": "\"../src/utils/internal/validate.ts\"",
          "outcome": "resolved",
          "target": "src/utils/internal/validate.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/validate.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/validate.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "zod/v4",
          "expression": "\"zod/v4\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/validate.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/validate.test.ts",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "./_setup.ts",
          "expression": "\"./_setup.ts\"",
          "outcome": "resolved",
          "target": "test/_setup.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/ws.test.ts",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest",
          "expression": "\"vitest\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "test/ws.test.ts",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "../src/index.ts",
          "expression": "\"../src/index.ts\"",
          "outcome": "resolved",
          "target": "src/index.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/ws.test.ts",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "../src/rules/middleware.ts",
          "expression": "\"../src/rules/middleware.ts\"",
          "outcome": "resolved",
          "target": "src/rules/middleware.ts",
          "reason": "TypeScript resolved to a parsed repository file"
        },
        {
          "source": "test/ws.test.ts",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "srvx",
          "expression": "\"srvx\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        },
        {
          "source": "vitest.config.mjs",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "vitest/config",
          "expression": "\"vitest/config\"",
          "outcome": "external",
          "target": null,
          "reason": "Declared package dependency; no local file resolved (dependency may not be installed)"
        }
      ]
    },
    "configurations": [
      {
        "path": "tsconfig.json",
        "messages": []
      }
    ]
  }
} satisfies ParsedRepository;
