import type { ParsedRepository } from "../parser/types.mts";

export const repository = {
  "version": 2,
  "adapter": "none",
  "languages": [
    {
      "language": "python",
      "parser": "python",
      "found": 29,
      "parsed": 29,
      "skipped": 0
    },
    {
      "language": "unknown",
      "parser": "none",
      "found": 2,
      "parsed": 0,
      "skipped": 2
    }
  ],
  "modules": [
    {
      "path": ".",
      "name": null
    }
  ],
  "files": [
    {
      "path": "__init__.py",
      "language": "python",
      "folder": ".",
      "module": ".",
      "lineCount": 52,
      "contentHash": "76c48b5a0fbe67f62b36351bdfb9d8fee81c4aca25e50e7806098db76b2e10c6",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 19,
      "fanOut": 10
    },
    {
      "path": "artifacts/__init__.py",
      "language": "python",
      "folder": "artifacts",
      "module": ".",
      "lineCount": 16,
      "contentHash": "1aac8c0d749b7e3d2afcb51f529b6f70ce2cdb0a2b3afed4b1ce2a9565472d62",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 4
    },
    {
      "path": "artifacts/artifact_base.py",
      "language": "python",
      "folder": "artifacts",
      "module": ".",
      "lineCount": 68,
      "contentHash": "c8870b887498e01a78c8a9ec65aaaddb09727c880ec73ae71547e3aa4dcdc179",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 0
    },
    {
      "path": "artifacts/artifact_store.py",
      "language": "python",
      "folder": "artifacts",
      "module": ".",
      "lineCount": 50,
      "contentHash": "ffd8a64234f8cc13b21210d10b662c83ba6db8e90576ddf51cea185d23744828",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 0
    },
    {
      "path": "build_dataloader.py",
      "language": "python",
      "folder": ".",
      "module": ".",
      "lineCount": 158,
      "contentHash": "8646ed67041a74b7fdc2af852ef0e10e552ef6d125c2c40672e598599d208108",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 8
    },
    {
      "path": "engine/__init__.py",
      "language": "python",
      "folder": "engine",
      "module": ".",
      "lineCount": 13,
      "contentHash": "e28d6e98cb946992f730f22d3d0731c1cfded8abbafdf5fc3ea9f82bd0fbdcd9",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 14,
      "fanOut": 6
    },
    {
      "path": "engine/dataset_prefetch_engine.py",
      "language": "python",
      "folder": "engine",
      "module": ".",
      "lineCount": 227,
      "contentHash": "1e81da8b4906762c298a29257ade34bc4994265bfcef4d817c188fb170317520",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 3,
      "fanOut": 4
    },
    {
      "path": "engine/dynamic_collator.py",
      "language": "python",
      "folder": "engine",
      "module": ".",
      "lineCount": 146,
      "contentHash": "ee28ac60e439493057e02c933af54ce3e3c8eb3539d9b676ce79f9f068c33774",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 3,
      "fanOut": 0
    },
    {
      "path": "engine/layout/__init__.py",
      "language": "python",
      "folder": "engine/layout",
      "module": ".",
      "lineCount": 14,
      "contentHash": "a3f94c9adde0354dc4a4dbcea9b8cd58a320bcb19dceefe4d4125beee6ff627e",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 5,
      "fanOut": 6
    },
    {
      "path": "engine/layout/dataset_iteration_policy.py",
      "language": "python",
      "folder": "engine/layout",
      "module": ".",
      "lineCount": 47,
      "contentHash": "15d8835df27d1075222d0449117a9fa32ff1c05d550184676c6d834ed808a18c",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 0
    },
    {
      "path": "engine/layout/dataset_layout_source.py",
      "language": "python",
      "folder": "engine/layout",
      "module": ".",
      "lineCount": 209,
      "contentHash": "e3a0fd9ebd5c4f530a4ab01db6f9c632a8aa6a3c79da0f3068c15b953c5434bd",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 8
    },
    {
      "path": "engine/layout/filetype_registry.py",
      "language": "python",
      "folder": "engine/layout",
      "module": ".",
      "lineCount": 126,
      "contentHash": "a578e64bd9c51dd2082905d5e4568276d81fea329450f61111bab5f61ca5837d",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 4
    },
    {
      "path": "engine/layout/npz_codex.py",
      "language": "python",
      "folder": "engine/layout",
      "module": ".",
      "lineCount": 47,
      "contentHash": "99a8187813ef892cf811f7c0ab41ce7a608380a913fd277789e6748c59cc33e2",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 0
    },
    {
      "path": "engine/metadata/__init__.py",
      "language": "python",
      "folder": "engine/metadata",
      "module": ".",
      "lineCount": 9,
      "contentHash": "a23a41706d43627707949e69f3a95a52bfcc745309e869c3290b8b3a9fb8370c",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 3,
      "fanOut": 5
    },
    {
      "path": "engine/metadata/dataset_meta_loader.py",
      "language": "python",
      "folder": "engine/metadata",
      "module": ".",
      "lineCount": 118,
      "contentHash": "be6d5c8705ca9186a84edef2daa5550de186c1fb2169481c7511ad3edf94ce64",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 6
    },
    {
      "path": "engine/metadata/dataset_metadata.py",
      "language": "python",
      "folder": "engine/metadata",
      "module": ".",
      "lineCount": 9,
      "contentHash": "ccdd96d917636a3f4a2ed744f44660659a9c5239e43c9a672bdb3f64337de232",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 0
    },
    {
      "path": "engine/multi_dataset_manager.py",
      "language": "python",
      "folder": "engine",
      "module": ".",
      "lineCount": 324,
      "contentHash": "bf9735b917bf6f4760ecefbf4722b10dc47a28f576a991ea723bcd99c9f0bab3",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 3,
      "fanOut": 0
    },
    {
      "path": "engine/multimodal_dataset.py",
      "language": "python",
      "folder": "engine",
      "module": ".",
      "lineCount": 198,
      "contentHash": "f03dba030d6d6a6a8cf2479d049b597549a0719536a51765a89a29e2bf2fafe1",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 3,
      "fanOut": 11
    },
    {
      "path": "engine/transport/__init__.py",
      "language": "python",
      "folder": "engine/transport",
      "module": ".",
      "lineCount": 15,
      "contentHash": "4b157960c2fe4e95ae87a71209803633d922028bc35d8ab9db6a10b558a48349",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 9,
      "fanOut": 7
    },
    {
      "path": "engine/transport/memory_transport.py",
      "language": "python",
      "folder": "engine/transport",
      "module": ".",
      "lineCount": 68,
      "contentHash": "430f4a67c6c38ed358f2fd2a3ecf23d454ff90d2321891ea9dc4531129e76a05",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 5
    },
    {
      "path": "engine/transport/tar_transport.py",
      "language": "python",
      "folder": "engine/transport",
      "module": ".",
      "lineCount": 520,
      "contentHash": "26964445967acb7046a64153b69ca4d576546b68a1ed4681c8ecd5a415aa2eb6",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 2,
      "fanOut": 5
    },
    {
      "path": "engine/transport/transport_base.py",
      "language": "python",
      "folder": "engine/transport",
      "module": ".",
      "lineCount": 80,
      "contentHash": "02367c8ad5f9e76c437878cd689ac89be7973d7250d053e6c8c856eb57e4feeb",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 6,
      "fanOut": 4
    },
    {
      "path": "engine/transport/transport_manifest.py",
      "language": "python",
      "folder": "engine/transport",
      "module": ".",
      "lineCount": 51,
      "contentHash": "e55cb7ee881462839e019bc30c464a4766d4cb59d98e2684417e9a0f33df73c2",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 4,
      "fanOut": 0
    },
    {
      "path": "runtime_artifact_repository.py",
      "language": "python",
      "folder": ".",
      "module": ".",
      "lineCount": 104,
      "contentHash": "a59137710be9f324f341c6dd1250fc9d0105f25a5982f688059dce95a2319b0e",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 0,
      "fanOut": 0
    },
    {
      "path": "source/__init__.py",
      "language": "python",
      "folder": "source",
      "module": ".",
      "lineCount": 18,
      "contentHash": "fd122a65ab3f5497626ff3ed5e048f91a32a60261842a98155747cf0788aa6de",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 6,
      "fanOut": 4
    },
    {
      "path": "source/datasource_base.py",
      "language": "python",
      "folder": "source",
      "module": ".",
      "lineCount": 251,
      "contentHash": "3f42e411596483a76d3476e8e8e8b63e63bd59924534f4ff5f2cb87d93c4755e",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 4,
      "fanOut": 0
    },
    {
      "path": "source/provider_base.py",
      "language": "python",
      "folder": "source",
      "module": ".",
      "lineCount": 115,
      "contentHash": "5881393528af2c8d0197e72a8d0340ad53e2f2c8c613f53ab43040e499c73322",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 1,
      "fanOut": 3
    },
    {
      "path": "views/__init__.py",
      "language": "python",
      "folder": "views",
      "module": ".",
      "lineCount": 5,
      "contentHash": "1f0f7127622d87288ab1b8d8e68a158a46cace346372c62d85c55d5dc8349328",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 3,
      "fanOut": 3
    },
    {
      "path": "views/dataset_view.py",
      "language": "python",
      "folder": "views",
      "module": ".",
      "lineCount": 98,
      "contentHash": "8e207c6c0fc97678160270f7ecc4f31aab0842f4db05b7ab692b1cc8e8837d1b",
      "isModule": true,
      "isDeclaration": false,
      "role": null,
      "fanIn": 3,
      "fanOut": 3
    }
  ],
  "edges": [
    {
      "source": "__init__.py",
      "target": "__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "__init__.py",
      "target": "build_dataloader.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "__init__.py",
      "target": "engine/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "__init__.py",
      "target": "engine/dataset_prefetch_engine.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "__init__.py",
      "target": "engine/dynamic_collator.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "__init__.py",
      "target": "engine/multi_dataset_manager.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "__init__.py",
      "target": "engine/multimodal_dataset.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "__init__.py",
      "target": "engine/transport/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "__init__.py",
      "target": "views/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "__init__.py",
      "target": "views/dataset_view.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "artifacts/__init__.py",
      "target": "__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "artifacts/__init__.py",
      "target": "artifacts/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "artifacts/__init__.py",
      "target": "artifacts/artifact_base.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "artifacts/__init__.py",
      "target": "artifacts/artifact_store.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "build_dataloader.py",
      "target": "__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "build_dataloader.py",
      "target": "engine/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "build_dataloader.py",
      "target": "engine/dynamic_collator.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "build_dataloader.py",
      "target": "engine/layout/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "build_dataloader.py",
      "target": "engine/layout/dataset_iteration_policy.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "build_dataloader.py",
      "target": "engine/multi_dataset_manager.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "build_dataloader.py",
      "target": "engine/multimodal_dataset.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "build_dataloader.py",
      "target": "source/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/__init__.py",
      "target": "__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/__init__.py",
      "target": "engine/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/__init__.py",
      "target": "engine/dataset_prefetch_engine.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/__init__.py",
      "target": "engine/dynamic_collator.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/__init__.py",
      "target": "engine/multi_dataset_manager.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/__init__.py",
      "target": "engine/multimodal_dataset.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/dataset_prefetch_engine.py",
      "target": "__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/dataset_prefetch_engine.py",
      "target": "engine/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/dataset_prefetch_engine.py",
      "target": "engine/transport/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/dataset_prefetch_engine.py",
      "target": "engine/transport/transport_base.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/layout/__init__.py",
      "target": "__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/layout/__init__.py",
      "target": "engine/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/layout/__init__.py",
      "target": "engine/layout/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/layout/__init__.py",
      "target": "engine/layout/dataset_iteration_policy.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/layout/__init__.py",
      "target": "engine/layout/dataset_layout_source.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/layout/__init__.py",
      "target": "engine/layout/filetype_registry.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/layout/dataset_layout_source.py",
      "target": "__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/layout/dataset_layout_source.py",
      "target": "engine/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/layout/dataset_layout_source.py",
      "target": "engine/layout/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/layout/dataset_layout_source.py",
      "target": "engine/layout/filetype_registry.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/layout/dataset_layout_source.py",
      "target": "engine/transport/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/layout/dataset_layout_source.py",
      "target": "engine/transport/transport_base.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/layout/dataset_layout_source.py",
      "target": "source/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/layout/dataset_layout_source.py",
      "target": "source/datasource_base.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/layout/filetype_registry.py",
      "target": "__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/layout/filetype_registry.py",
      "target": "engine/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/layout/filetype_registry.py",
      "target": "engine/layout/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/layout/filetype_registry.py",
      "target": "engine/layout/npz_codex.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/metadata/__init__.py",
      "target": "__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/metadata/__init__.py",
      "target": "engine/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/metadata/__init__.py",
      "target": "engine/metadata/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/metadata/__init__.py",
      "target": "engine/metadata/dataset_meta_loader.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/metadata/__init__.py",
      "target": "engine/metadata/dataset_metadata.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/metadata/dataset_meta_loader.py",
      "target": "__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/metadata/dataset_meta_loader.py",
      "target": "engine/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/metadata/dataset_meta_loader.py",
      "target": "engine/metadata/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/metadata/dataset_meta_loader.py",
      "target": "engine/metadata/dataset_metadata.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/metadata/dataset_meta_loader.py",
      "target": "engine/transport/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/metadata/dataset_meta_loader.py",
      "target": "engine/transport/transport_base.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/multimodal_dataset.py",
      "target": "__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/multimodal_dataset.py",
      "target": "engine/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/multimodal_dataset.py",
      "target": "engine/dataset_prefetch_engine.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/multimodal_dataset.py",
      "target": "engine/layout/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/multimodal_dataset.py",
      "target": "engine/layout/dataset_layout_source.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/multimodal_dataset.py",
      "target": "engine/metadata/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/multimodal_dataset.py",
      "target": "engine/transport/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/multimodal_dataset.py",
      "target": "engine/transport/tar_transport.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/multimodal_dataset.py",
      "target": "source/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/multimodal_dataset.py",
      "target": "views/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/multimodal_dataset.py",
      "target": "views/dataset_view.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/__init__.py",
      "target": "__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/__init__.py",
      "target": "engine/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/__init__.py",
      "target": "engine/transport/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/__init__.py",
      "target": "engine/transport/memory_transport.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/__init__.py",
      "target": "engine/transport/tar_transport.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/__init__.py",
      "target": "engine/transport/transport_base.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/__init__.py",
      "target": "engine/transport/transport_manifest.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/memory_transport.py",
      "target": "__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/memory_transport.py",
      "target": "engine/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/memory_transport.py",
      "target": "engine/transport/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/memory_transport.py",
      "target": "engine/transport/transport_base.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/memory_transport.py",
      "target": "engine/transport/transport_manifest.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/tar_transport.py",
      "target": "__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/tar_transport.py",
      "target": "engine/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/tar_transport.py",
      "target": "engine/transport/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/tar_transport.py",
      "target": "engine/transport/transport_base.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/tar_transport.py",
      "target": "engine/transport/transport_manifest.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/transport_base.py",
      "target": "__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/transport_base.py",
      "target": "engine/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/transport_base.py",
      "target": "engine/transport/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "engine/transport/transport_base.py",
      "target": "engine/transport/transport_manifest.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "source/__init__.py",
      "target": "__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "source/__init__.py",
      "target": "source/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "source/__init__.py",
      "target": "source/datasource_base.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "source/__init__.py",
      "target": "source/provider_base.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "source/provider_base.py",
      "target": "__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "source/provider_base.py",
      "target": "source/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "source/provider_base.py",
      "target": "source/datasource_base.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "views/__init__.py",
      "target": "__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "views/__init__.py",
      "target": "views/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "views/__init__.py",
      "target": "views/dataset_view.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "views/dataset_view.py",
      "target": "__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "views/dataset_view.py",
      "target": "source/__init__.py",
      "kinds": [
        "import"
      ]
    },
    {
      "source": "views/dataset_view.py",
      "target": "source/datasource_base.py",
      "kinds": [
        "import"
      ]
    }
  ],
  "coverage": {
    "inventory": "git",
    "files": {
      "found": 31,
      "parsed": 29,
      "skipped": 2,
      "details": [
        {
          "path": "docs/multimodal_dataset_system_design_and_reference_impl.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        },
        {
          "path": "docs/README.md",
          "language": "unknown",
          "reason": "Unknown language or non-source file; no parser available"
        }
      ]
    },
    "excludedEntries": [
      {
        "path": "__pycache__/",
        "reason": "Ignored by Git; directory not traversed"
      },
      {
        "path": "artifacts/__pycache__/",
        "reason": "Ignored by Git; directory not traversed"
      },
      {
        "path": "engine/__pycache__/",
        "reason": "Ignored by Git; directory not traversed"
      },
      {
        "path": "engine/layout/__pycache__/",
        "reason": "Ignored by Git; directory not traversed"
      },
      {
        "path": "engine/metadata/__pycache__/",
        "reason": "Ignored by Git; directory not traversed"
      },
      {
        "path": "engine/transport/__pycache__/",
        "reason": "Ignored by Git; directory not traversed"
      },
      {
        "path": "source/__pycache__/",
        "reason": "Ignored by Git; directory not traversed"
      },
      {
        "path": "views/__pycache__/",
        "reason": "Ignored by Git; directory not traversed"
      },
      {
        "path": ".git/",
        "reason": "Version control metadata not traversed"
      }
    ],
    "imports": {
      "found": 225,
      "resolved": 176,
      "external": 48,
      "excluded": 0,
      "unresolved": 1,
      "byKind": {
        "import": {
          "found": 225,
          "resolved": 176,
          "external": 48,
          "excluded": 0,
          "unresolved": 1
        },
        "re-export": {
          "found": 0,
          "resolved": 0,
          "external": 0,
          "excluded": 0,
          "unresolved": 0
        },
        "dynamic-import": {
          "found": 0,
          "resolved": 0,
          "external": 0,
          "excluded": 0,
          "unresolved": 0
        }
      },
      "records": [
        {
          "source": "__init__.py",
          "line": 23,
          "column": 9,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .engine import transport",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 23,
          "column": 9,
          "kind": "import",
          "specifier": ".engine",
          "expression": "from .engine import transport",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 23,
          "column": 9,
          "kind": "import",
          "specifier": "dataset_management.engine.transport",
          "expression": "from .engine import transport",
          "outcome": "resolved",
          "target": "engine/transport/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 26,
          "column": 9,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .build_dataloader import build_dataset",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 26,
          "column": 9,
          "kind": "import",
          "specifier": ".build_dataloader",
          "expression": "from .build_dataloader import build_dataset",
          "outcome": "resolved",
          "target": "build_dataloader.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 29,
          "column": 9,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .build_dataloader import build_dataset_and_loader",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 29,
          "column": 9,
          "kind": "import",
          "specifier": ".build_dataloader",
          "expression": "from .build_dataloader import build_dataset_and_loader",
          "outcome": "resolved",
          "target": "build_dataloader.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 32,
          "column": 9,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .build_dataloader import build_datasets",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 32,
          "column": 9,
          "kind": "import",
          "specifier": ".build_dataloader",
          "expression": "from .build_dataloader import build_datasets",
          "outcome": "resolved",
          "target": "build_dataloader.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 35,
          "column": 9,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .build_dataloader import create_loader",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 35,
          "column": 9,
          "kind": "import",
          "specifier": ".build_dataloader",
          "expression": "from .build_dataloader import create_loader",
          "outcome": "resolved",
          "target": "build_dataloader.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 38,
          "column": 9,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .engine.dataset_prefetch_engine import DatasetPrefetchEngine",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 38,
          "column": 9,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .engine.dataset_prefetch_engine import DatasetPrefetchEngine",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 38,
          "column": 9,
          "kind": "import",
          "specifier": ".engine.dataset_prefetch_engine",
          "expression": "from .engine.dataset_prefetch_engine import DatasetPrefetchEngine",
          "outcome": "resolved",
          "target": "engine/dataset_prefetch_engine.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 41,
          "column": 9,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .views.dataset_view import DatasetView",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 41,
          "column": 9,
          "kind": "import",
          "specifier": "dataset_management.views",
          "expression": "from .views.dataset_view import DatasetView",
          "outcome": "resolved",
          "target": "views/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 41,
          "column": 9,
          "kind": "import",
          "specifier": ".views.dataset_view",
          "expression": "from .views.dataset_view import DatasetView",
          "outcome": "resolved",
          "target": "views/dataset_view.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 44,
          "column": 9,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .engine.dynamic_collator import DynamicCollator",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 44,
          "column": 9,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .engine.dynamic_collator import DynamicCollator",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 44,
          "column": 9,
          "kind": "import",
          "specifier": ".engine.dynamic_collator",
          "expression": "from .engine.dynamic_collator import DynamicCollator",
          "outcome": "resolved",
          "target": "engine/dynamic_collator.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 47,
          "column": 9,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .engine.multimodal_dataset import MultimodalDataset",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 47,
          "column": 9,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .engine.multimodal_dataset import MultimodalDataset",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 47,
          "column": 9,
          "kind": "import",
          "specifier": ".engine.multimodal_dataset",
          "expression": "from .engine.multimodal_dataset import MultimodalDataset",
          "outcome": "resolved",
          "target": "engine/multimodal_dataset.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 50,
          "column": 9,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .engine.multi_dataset_manager import MultiDatasetManager",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 50,
          "column": 9,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .engine.multi_dataset_manager import MultiDatasetManager",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "__init__.py",
          "line": 50,
          "column": 9,
          "kind": "import",
          "specifier": ".engine.multi_dataset_manager",
          "expression": "from .engine.multi_dataset_manager import MultiDatasetManager",
          "outcome": "resolved",
          "target": "engine/multi_dataset_manager.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "artifacts/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .artifact_base import (\n    BaseArtifact,\n    create_artifacts,\n    ARTIFACT_REGISTRY\n)",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "artifacts/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.artifacts",
          "expression": "from .artifact_base import (\n    BaseArtifact,\n    create_artifacts,\n    ARTIFACT_REGISTRY\n)",
          "outcome": "resolved",
          "target": "artifacts/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "artifacts/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": ".artifact_base",
          "expression": "from .artifact_base import (\n    BaseArtifact,\n    create_artifacts,\n    ARTIFACT_REGISTRY\n)",
          "outcome": "resolved",
          "target": "artifacts/artifact_base.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "artifacts/__init__.py",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .artifact_store import ArtifactStore",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "artifacts/__init__.py",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.artifacts",
          "expression": "from .artifact_store import ArtifactStore",
          "outcome": "resolved",
          "target": "artifacts/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "artifacts/__init__.py",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": ".artifact_store",
          "expression": "from .artifact_store import ArtifactStore",
          "outcome": "resolved",
          "target": "artifacts/artifact_store.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "artifacts/artifact_base.py",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "__future__",
          "expression": "from __future__ import annotations",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "artifacts/artifact_base.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "abc",
          "expression": "from abc import ABC, abstractmethod",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "artifacts/artifact_base.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "typing",
          "expression": "from typing import Any",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "build_dataloader.py",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "torch.utils.data",
          "expression": "from torch.utils.data import DataLoader",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "build_dataloader.py",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .engine.dynamic_collator import DynamicCollator",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "build_dataloader.py",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .engine.dynamic_collator import DynamicCollator",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "build_dataloader.py",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": ".engine.dynamic_collator",
          "expression": "from .engine.dynamic_collator import DynamicCollator",
          "outcome": "resolved",
          "target": "engine/dynamic_collator.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "build_dataloader.py",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .engine.multimodal_dataset import MultimodalDataset",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "build_dataloader.py",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .engine.multimodal_dataset import MultimodalDataset",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "build_dataloader.py",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": ".engine.multimodal_dataset",
          "expression": "from .engine.multimodal_dataset import MultimodalDataset",
          "outcome": "resolved",
          "target": "engine/multimodal_dataset.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "build_dataloader.py",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .engine.multi_dataset_manager import MultiDatasetManager",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "build_dataloader.py",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .engine.multi_dataset_manager import MultiDatasetManager",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "build_dataloader.py",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": ".engine.multi_dataset_manager",
          "expression": "from .engine.multi_dataset_manager import MultiDatasetManager",
          "outcome": "resolved",
          "target": "engine/multi_dataset_manager.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "build_dataloader.py",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .engine.layout.dataset_iteration_policy import DatasetIterationPolicy",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "build_dataloader.py",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .engine.layout.dataset_iteration_policy import DatasetIterationPolicy",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "build_dataloader.py",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.layout",
          "expression": "from .engine.layout.dataset_iteration_policy import DatasetIterationPolicy",
          "outcome": "resolved",
          "target": "engine/layout/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "build_dataloader.py",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": ".engine.layout.dataset_iteration_policy",
          "expression": "from .engine.layout.dataset_iteration_policy import DatasetIterationPolicy",
          "outcome": "resolved",
          "target": "engine/layout/dataset_iteration_policy.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "build_dataloader.py",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "runweaver_ml.dataset_management.artifacts",
          "expression": "from runweaver_ml.dataset_management.artifacts import create_artifacts",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "build_dataloader.py",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .source import create_providers",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "build_dataloader.py",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": ".source",
          "expression": "from .source import create_providers",
          "outcome": "resolved",
          "target": "source/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .dataset_prefetch_engine import DatasetPrefetchEngine",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .dataset_prefetch_engine import DatasetPrefetchEngine",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": ".dataset_prefetch_engine",
          "expression": "from .dataset_prefetch_engine import DatasetPrefetchEngine",
          "outcome": "resolved",
          "target": "engine/dataset_prefetch_engine.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/__init__.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .dynamic_collator import DynamicCollator",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/__init__.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .dynamic_collator import DynamicCollator",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/__init__.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": ".dynamic_collator",
          "expression": "from .dynamic_collator import DynamicCollator",
          "outcome": "resolved",
          "target": "engine/dynamic_collator.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/__init__.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .multi_dataset_manager import MultiDatasetManager",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/__init__.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .multi_dataset_manager import MultiDatasetManager",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/__init__.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": ".multi_dataset_manager",
          "expression": "from .multi_dataset_manager import MultiDatasetManager",
          "outcome": "resolved",
          "target": "engine/multi_dataset_manager.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/__init__.py",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .multimodal_dataset import MultimodalDataset",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/__init__.py",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .multimodal_dataset import MultimodalDataset",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/__init__.py",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": ".multimodal_dataset",
          "expression": "from .multimodal_dataset import MultimodalDataset",
          "outcome": "resolved",
          "target": "engine/multimodal_dataset.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/dataset_prefetch_engine.py",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "__future__",
          "expression": "from __future__ import annotations",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/dataset_prefetch_engine.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "queue",
          "expression": "from queue import Empty, Full, Queue",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/dataset_prefetch_engine.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "threading",
          "expression": "from threading import Event, Thread",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/dataset_prefetch_engine.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "typing",
          "expression": "from typing import Iterator",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/dataset_prefetch_engine.py",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .transport.transport_base import DeferredPayload",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/dataset_prefetch_engine.py",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .transport.transport_base import DeferredPayload",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/dataset_prefetch_engine.py",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.transport",
          "expression": "from .transport.transport_base import DeferredPayload",
          "outcome": "resolved",
          "target": "engine/transport/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/dataset_prefetch_engine.py",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": ".transport.transport_base",
          "expression": "from .transport.transport_base import DeferredPayload",
          "outcome": "resolved",
          "target": "engine/transport/transport_base.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/dynamic_collator.py",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "torch",
          "expression": "import torch",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/dynamic_collator.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "numpy",
          "expression": "import numpy as np",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/layout/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .dataset_iteration_policy import DatasetIterationPolicy, ExhaustPolicy, MixMode",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .dataset_iteration_policy import DatasetIterationPolicy, ExhaustPolicy, MixMode",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.layout",
          "expression": "from .dataset_iteration_policy import DatasetIterationPolicy, ExhaustPolicy, MixMode",
          "outcome": "resolved",
          "target": "engine/layout/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": ".dataset_iteration_policy",
          "expression": "from .dataset_iteration_policy import DatasetIterationPolicy, ExhaustPolicy, MixMode",
          "outcome": "resolved",
          "target": "engine/layout/dataset_iteration_policy.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/__init__.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .dataset_layout_source import LayoutOpParams, LayoutSource",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/__init__.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .dataset_layout_source import LayoutOpParams, LayoutSource",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/__init__.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.layout",
          "expression": "from .dataset_layout_source import LayoutOpParams, LayoutSource",
          "outcome": "resolved",
          "target": "engine/layout/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/__init__.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": ".dataset_layout_source",
          "expression": "from .dataset_layout_source import LayoutOpParams, LayoutSource",
          "outcome": "resolved",
          "target": "engine/layout/dataset_layout_source.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/__init__.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .filetype_registry import FILETYPE_LOADERS",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/__init__.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .filetype_registry import FILETYPE_LOADERS",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/__init__.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.layout",
          "expression": "from .filetype_registry import FILETYPE_LOADERS",
          "outcome": "resolved",
          "target": "engine/layout/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/__init__.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": ".filetype_registry",
          "expression": "from .filetype_registry import FILETYPE_LOADERS",
          "outcome": "resolved",
          "target": "engine/layout/filetype_registry.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/dataset_iteration_policy.py",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "dataclasses",
          "expression": "from dataclasses import dataclass",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/layout/dataset_iteration_policy.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "enum",
          "expression": "from enum import Enum, auto",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/layout/dataset_layout_source.py",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "random",
          "expression": "import random",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/layout/dataset_layout_source.py",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "itertools",
          "expression": "from itertools import groupby",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/layout/dataset_layout_source.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "dataclasses",
          "expression": "from dataclasses import dataclass",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/layout/dataset_layout_source.py",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from ...source.datasource_base import IteratableRootBase",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/dataset_layout_source.py",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.source",
          "expression": "from ...source.datasource_base import IteratableRootBase",
          "outcome": "resolved",
          "target": "source/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/dataset_layout_source.py",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "...source.datasource_base",
          "expression": "from ...source.datasource_base import IteratableRootBase",
          "outcome": "resolved",
          "target": "source/datasource_base.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/dataset_layout_source.py",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .filetype_registry import FILETYPE_LOADERS",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/dataset_layout_source.py",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .filetype_registry import FILETYPE_LOADERS",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/dataset_layout_source.py",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.layout",
          "expression": "from .filetype_registry import FILETYPE_LOADERS",
          "outcome": "resolved",
          "target": "engine/layout/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/dataset_layout_source.py",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": ".filetype_registry",
          "expression": "from .filetype_registry import FILETYPE_LOADERS",
          "outcome": "resolved",
          "target": "engine/layout/filetype_registry.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/dataset_layout_source.py",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from ..transport.transport_base import (\n    DeferredPayload\n)",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/dataset_layout_source.py",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from ..transport.transport_base import (\n    DeferredPayload\n)",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/dataset_layout_source.py",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.transport",
          "expression": "from ..transport.transport_base import (\n    DeferredPayload\n)",
          "outcome": "resolved",
          "target": "engine/transport/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/dataset_layout_source.py",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "..transport.transport_base",
          "expression": "from ..transport.transport_base import (\n    DeferredPayload\n)",
          "outcome": "resolved",
          "target": "engine/transport/transport_base.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/filetype_registry.py",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "io",
          "expression": "import io",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/layout/filetype_registry.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "math",
          "expression": "import math",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/layout/filetype_registry.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "warnings",
          "expression": "import warnings",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/layout/filetype_registry.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "numpy",
          "expression": "import numpy as np",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/layout/filetype_registry.py",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "scipy.io",
          "expression": "from scipy.io import wavfile",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/layout/filetype_registry.py",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "scipy.io.wavfile",
          "expression": "from scipy.io.wavfile import WavFileWarning",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/layout/filetype_registry.py",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "scipy.signal",
          "expression": "from scipy.signal import resample_poly",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/layout/filetype_registry.py",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from.npz_codex import decode_nested_npz",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/filetype_registry.py",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from.npz_codex import decode_nested_npz",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/filetype_registry.py",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.layout",
          "expression": "from.npz_codex import decode_nested_npz",
          "outcome": "resolved",
          "target": "engine/layout/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/filetype_registry.py",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": ".npz_codex",
          "expression": "from.npz_codex import decode_nested_npz",
          "outcome": "resolved",
          "target": "engine/layout/npz_codex.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/layout/npz_codex.py",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "__future__",
          "expression": "from __future__ import annotations",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/layout/npz_codex.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "collections.abc",
          "expression": "from collections.abc import Mapping",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/layout/npz_codex.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "numpy",
          "expression": "import numpy as np",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/metadata/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .dataset_metadata import DatasetMetadata",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/metadata/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .dataset_metadata import DatasetMetadata",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/metadata/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.metadata",
          "expression": "from .dataset_metadata import DatasetMetadata",
          "outcome": "resolved",
          "target": "engine/metadata/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/metadata/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": ".dataset_metadata",
          "expression": "from .dataset_metadata import DatasetMetadata",
          "outcome": "resolved",
          "target": "engine/metadata/dataset_metadata.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/metadata/__init__.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .dataset_meta_loader import MetadataLoader",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/metadata/__init__.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .dataset_meta_loader import MetadataLoader",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/metadata/__init__.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.metadata",
          "expression": "from .dataset_meta_loader import MetadataLoader",
          "outcome": "resolved",
          "target": "engine/metadata/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/metadata/__init__.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": ".dataset_meta_loader",
          "expression": "from .dataset_meta_loader import MetadataLoader",
          "outcome": "resolved",
          "target": "engine/metadata/dataset_meta_loader.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/metadata/dataset_meta_loader.py",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "json",
          "expression": "import json",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/metadata/dataset_meta_loader.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .dataset_metadata import DatasetMetadata",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/metadata/dataset_meta_loader.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .dataset_metadata import DatasetMetadata",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/metadata/dataset_meta_loader.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.metadata",
          "expression": "from .dataset_metadata import DatasetMetadata",
          "outcome": "resolved",
          "target": "engine/metadata/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/metadata/dataset_meta_loader.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": ".dataset_metadata",
          "expression": "from .dataset_metadata import DatasetMetadata",
          "outcome": "resolved",
          "target": "engine/metadata/dataset_metadata.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/metadata/dataset_meta_loader.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from ..transport.transport_base import DeferredPayload",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/metadata/dataset_meta_loader.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from ..transport.transport_base import DeferredPayload",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/metadata/dataset_meta_loader.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.transport",
          "expression": "from ..transport.transport_base import DeferredPayload",
          "outcome": "resolved",
          "target": "engine/transport/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/metadata/dataset_meta_loader.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "..transport.transport_base",
          "expression": "from ..transport.transport_base import DeferredPayload",
          "outcome": "resolved",
          "target": "engine/transport/transport_base.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/metadata/dataset_metadata.py",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "dataclasses",
          "expression": "from dataclasses import dataclass",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/multi_dataset_manager.py",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "torch",
          "expression": "import torch",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/multi_dataset_manager.py",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "torch.utils.data",
          "expression": "from torch.utils.data import IterableDataset",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/multi_dataset_manager.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "time",
          "expression": "from time import perf_counter",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/multi_dataset_manager.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": ".layout.dataset_iteration_policy.*",
          "expression": "from .layout.dataset_iteration_policy import *",
          "outcome": "unresolved",
          "target": null,
          "reason": "Star import names are not resolved statically"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "collections.abc",
          "expression": "from collections.abc import Mapping",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "pathlib",
          "expression": "from pathlib import Path",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "torch",
          "expression": "import torch",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .layout.dataset_layout_source import (\n    LayoutSource, LayoutOpParams)",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .layout.dataset_layout_source import (\n    LayoutSource, LayoutOpParams)",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.layout",
          "expression": "from .layout.dataset_layout_source import (\n    LayoutSource, LayoutOpParams)",
          "outcome": "resolved",
          "target": "engine/layout/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": ".layout.dataset_layout_source",
          "expression": "from .layout.dataset_layout_source import (\n    LayoutSource, LayoutOpParams)",
          "outcome": "resolved",
          "target": "engine/layout/dataset_layout_source.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .transport.tar_transport import TarTransport",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .transport.tar_transport import TarTransport",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.transport",
          "expression": "from .transport.tar_transport import TarTransport",
          "outcome": "resolved",
          "target": "engine/transport/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": ".transport.tar_transport",
          "expression": "from .transport.tar_transport import TarTransport",
          "outcome": "resolved",
          "target": "engine/transport/tar_transport.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .dataset_prefetch_engine import DatasetPrefetchEngine",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .dataset_prefetch_engine import DatasetPrefetchEngine",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": ".dataset_prefetch_engine",
          "expression": "from .dataset_prefetch_engine import DatasetPrefetchEngine",
          "outcome": "resolved",
          "target": "engine/dataset_prefetch_engine.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from ..views.dataset_view import DatasetView",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.views",
          "expression": "from ..views.dataset_view import DatasetView",
          "outcome": "resolved",
          "target": "views/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 11,
          "column": 1,
          "kind": "import",
          "specifier": "..views.dataset_view",
          "expression": "from ..views.dataset_view import DatasetView",
          "outcome": "resolved",
          "target": "views/dataset_view.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from ..source import MiddlewareSourceBase",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "..source",
          "expression": "from ..source import MiddlewareSourceBase",
          "outcome": "resolved",
          "target": "source/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 14,
          "column": 1,
          "kind": "import",
          "specifier": "runweaver_ml.dataset_management.artifacts",
          "expression": "from runweaver_ml.dataset_management.artifacts import (\n    ArtifactStore\n)",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 18,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .metadata import (\n    MetadataLoader, DatasetMetadata\n)",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 18,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .metadata import (\n    MetadataLoader, DatasetMetadata\n)",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/multimodal_dataset.py",
          "line": 18,
          "column": 1,
          "kind": "import",
          "specifier": ".metadata",
          "expression": "from .metadata import (\n    MetadataLoader, DatasetMetadata\n)",
          "outcome": "resolved",
          "target": "engine/metadata/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .tar_transport import TarTransport",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .tar_transport import TarTransport",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.transport",
          "expression": "from .tar_transport import TarTransport",
          "outcome": "resolved",
          "target": "engine/transport/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": ".tar_transport",
          "expression": "from .tar_transport import TarTransport",
          "outcome": "resolved",
          "target": "engine/transport/tar_transport.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/__init__.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .memory_transport import MemoryTransport",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/__init__.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .memory_transport import MemoryTransport",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/__init__.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.transport",
          "expression": "from .memory_transport import MemoryTransport",
          "outcome": "resolved",
          "target": "engine/transport/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/__init__.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": ".memory_transport",
          "expression": "from .memory_transport import MemoryTransport",
          "outcome": "resolved",
          "target": "engine/transport/memory_transport.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/__init__.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .transport_base import DeferredPayload, TransportBase",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/__init__.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .transport_base import DeferredPayload, TransportBase",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/__init__.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.transport",
          "expression": "from .transport_base import DeferredPayload, TransportBase",
          "outcome": "resolved",
          "target": "engine/transport/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/__init__.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": ".transport_base",
          "expression": "from .transport_base import DeferredPayload, TransportBase",
          "outcome": "resolved",
          "target": "engine/transport/transport_base.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/__init__.py",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .transport_manifest import FragmentSource, TransportManifest",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/__init__.py",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .transport_manifest import FragmentSource, TransportManifest",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/__init__.py",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.transport",
          "expression": "from .transport_manifest import FragmentSource, TransportManifest",
          "outcome": "resolved",
          "target": "engine/transport/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/__init__.py",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": ".transport_manifest",
          "expression": "from .transport_manifest import FragmentSource, TransportManifest",
          "outcome": "resolved",
          "target": "engine/transport/transport_manifest.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/memory_transport.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "random",
          "expression": "import random",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/transport/memory_transport.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .transport_base import TransportBase",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/memory_transport.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .transport_base import TransportBase",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/memory_transport.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.transport",
          "expression": "from .transport_base import TransportBase",
          "outcome": "resolved",
          "target": "engine/transport/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/memory_transport.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": ".transport_base",
          "expression": "from .transport_base import TransportBase",
          "outcome": "resolved",
          "target": "engine/transport/transport_base.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/memory_transport.py",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .transport_manifest import TransportManifest",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/memory_transport.py",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .transport_manifest import TransportManifest",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/memory_transport.py",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.transport",
          "expression": "from .transport_manifest import TransportManifest",
          "outcome": "resolved",
          "target": "engine/transport/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/memory_transport.py",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": ".transport_manifest",
          "expression": "from .transport_manifest import TransportManifest",
          "outcome": "resolved",
          "target": "engine/transport/transport_manifest.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/tar_transport.py",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "contextlib",
          "expression": "from contextlib import closing",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/transport/tar_transport.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "threading",
          "expression": "from threading import Lock",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/transport/tar_transport.py",
          "line": 4,
          "column": 1,
          "kind": "import",
          "specifier": "weakref",
          "expression": "from weakref import finalize",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/transport/tar_transport.py",
          "line": 6,
          "column": 1,
          "kind": "import",
          "specifier": "tarfile",
          "expression": "import tarfile",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/transport/tar_transport.py",
          "line": 7,
          "column": 1,
          "kind": "import",
          "specifier": "random",
          "expression": "import random",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/transport/tar_transport.py",
          "line": 8,
          "column": 1,
          "kind": "import",
          "specifier": "webdataset",
          "expression": "import  webdataset as wds",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/transport/tar_transport.py",
          "line": 10,
          "column": 1,
          "kind": "import",
          "specifier": "pathlib",
          "expression": "from pathlib import Path",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/transport/tar_transport.py",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .transport_base import (\n    TransportBase, DeferredPayload\n)",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/tar_transport.py",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .transport_base import (\n    TransportBase, DeferredPayload\n)",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/tar_transport.py",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.transport",
          "expression": "from .transport_base import (\n    TransportBase, DeferredPayload\n)",
          "outcome": "resolved",
          "target": "engine/transport/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/tar_transport.py",
          "line": 12,
          "column": 1,
          "kind": "import",
          "specifier": ".transport_base",
          "expression": "from .transport_base import (\n    TransportBase, DeferredPayload\n)",
          "outcome": "resolved",
          "target": "engine/transport/transport_base.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/tar_transport.py",
          "line": 15,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .transport_manifest import (\n    TransportManifest, FragmentSource\n)",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/tar_transport.py",
          "line": 15,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .transport_manifest import (\n    TransportManifest, FragmentSource\n)",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/tar_transport.py",
          "line": 15,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.transport",
          "expression": "from .transport_manifest import (\n    TransportManifest, FragmentSource\n)",
          "outcome": "resolved",
          "target": "engine/transport/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/tar_transport.py",
          "line": 15,
          "column": 1,
          "kind": "import",
          "specifier": ".transport_manifest",
          "expression": "from .transport_manifest import (\n    TransportManifest, FragmentSource\n)",
          "outcome": "resolved",
          "target": "engine/transport/transport_manifest.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/transport_base.py",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "abc",
          "expression": "from abc import ABC, abstractmethod",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "engine/transport/transport_base.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .transport_manifest import TransportManifest",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/transport_base.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine",
          "expression": "from .transport_manifest import TransportManifest",
          "outcome": "resolved",
          "target": "engine/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/transport_base.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.engine.transport",
          "expression": "from .transport_manifest import TransportManifest",
          "outcome": "resolved",
          "target": "engine/transport/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/transport_base.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": ".transport_manifest",
          "expression": "from .transport_manifest import TransportManifest",
          "outcome": "resolved",
          "target": "engine/transport/transport_manifest.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "engine/transport/transport_manifest.py",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "dataclasses",
          "expression": "from dataclasses import dataclass, field",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "source/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .datasource_base import (\n    MiddlewareSourceBase,\n    IteratableRootBase,\n    NegotiableBase\n)",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "source/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.source",
          "expression": "from .datasource_base import (\n    MiddlewareSourceBase,\n    IteratableRootBase,\n    NegotiableBase\n)",
          "outcome": "resolved",
          "target": "source/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "source/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": ".datasource_base",
          "expression": "from .datasource_base import (\n    MiddlewareSourceBase,\n    IteratableRootBase,\n    NegotiableBase\n)",
          "outcome": "resolved",
          "target": "source/datasource_base.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "source/__init__.py",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .provider_base import PROVIDER_REGISTRY, ProviderBase, create_providers",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "source/__init__.py",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.source",
          "expression": "from .provider_base import PROVIDER_REGISTRY, ProviderBase, create_providers",
          "outcome": "resolved",
          "target": "source/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "source/__init__.py",
          "line": 9,
          "column": 1,
          "kind": "import",
          "specifier": ".provider_base",
          "expression": "from .provider_base import PROVIDER_REGISTRY, ProviderBase, create_providers",
          "outcome": "resolved",
          "target": "source/provider_base.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "source/datasource_base.py",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "abc",
          "expression": "from abc import ABC, abstractmethod",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "source/provider_base.py",
          "line": 1,
          "column": 1,
          "kind": "import",
          "specifier": "abc",
          "expression": "from abc import abstractmethod",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "source/provider_base.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "typing",
          "expression": "from typing import Iterable",
          "outcome": "external",
          "target": null,
          "reason": "No unique repository module; standard library, installed, missing or namespace module is external"
        },
        {
          "source": "source/provider_base.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .datasource_base import MiddlewareSourceBase",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "source/provider_base.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.source",
          "expression": "from .datasource_base import MiddlewareSourceBase",
          "outcome": "resolved",
          "target": "source/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "source/provider_base.py",
          "line": 5,
          "column": 1,
          "kind": "import",
          "specifier": ".datasource_base",
          "expression": "from .datasource_base import MiddlewareSourceBase",
          "outcome": "resolved",
          "target": "source/datasource_base.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "views/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from .dataset_view import DatasetView",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "views/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.views",
          "expression": "from .dataset_view import DatasetView",
          "outcome": "resolved",
          "target": "views/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "views/__init__.py",
          "line": 3,
          "column": 1,
          "kind": "import",
          "specifier": ".dataset_view",
          "expression": "from .dataset_view import DatasetView",
          "outcome": "resolved",
          "target": "views/dataset_view.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "views/dataset_view.py",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management",
          "expression": "from ..source.datasource_base import  MiddlewareSourceBase",
          "outcome": "resolved",
          "target": "__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "views/dataset_view.py",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "dataset_management.source",
          "expression": "from ..source.datasource_base import  MiddlewareSourceBase",
          "outcome": "resolved",
          "target": "source/__init__.py",
          "reason": "Resolved Python module to repository file"
        },
        {
          "source": "views/dataset_view.py",
          "line": 2,
          "column": 1,
          "kind": "import",
          "specifier": "..source.datasource_base",
          "expression": "from ..source.datasource_base import  MiddlewareSourceBase",
          "outcome": "resolved",
          "target": "source/datasource_base.py",
          "reason": "Resolved Python module to repository file"
        }
      ]
    },
    "configurations": [
      {
        "path": ".",
        "messages": [
          "Source-file detection: python: 29 source files. Selected parser: python"
        ]
      }
    ]
  }
} satisfies ParsedRepository;
