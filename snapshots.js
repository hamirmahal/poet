module.exports = {
  "__version": "6.5.0",
  "toc-editor Webview Tests": {
    "drag-n-drop": {
      "allows dnd from uneditable to editable": {
        "1": [
          {
            "type": "TocModificationKind.Move",
            "nodeToken": "page-token-m00003",
            "newParentToken": "subbook-token-subcollection",
            "newChildIndex": 0,
            "bookIndex": 0,
            "newToc": [
              {
                "type": "TocNodeKind.Subbook",
                "title": "subcollection",
                "token": "subbook-token-subcollection",
                "expanded": true,
                "children": [
                  {
                    "type": "TocNodeKind.Page",
                    "token": "page-token-m00003",
                    "title": "Module 3",
                    "subtitle": "m00003",
                    "fileId": "m00003",
                    "absPath": "/fake-path/to/page/m00003"
                  },
                  {
                    "type": "TocNodeKind.Page",
                    "token": "page-token-m00001",
                    "title": "Introduction",
                    "subtitle": "m00001",
                    "fileId": "m00001",
                    "absPath": "/fake-path/to/page/m00001"
                  }
                ]
              },
              {
                "type": "TocNodeKind.Page",
                "token": "page-token-m00002",
                "title": "Appendix",
                "subtitle": "m00002",
                "fileId": "m00002",
                "absPath": "/fake-path/to/page/m00002"
              }
            ]
          }
        ]
      },
      "allows dnd from editable to editable": {
        "1": [
          {
            "type": "TocModificationKind.Move",
            "nodeToken": "page-token-m00002",
            "newParentToken": "subbook-token-subcollection",
            "newChildIndex": 0,
            "bookIndex": 0,
            "newToc": [
              {
                "type": "TocNodeKind.Subbook",
                "title": "subcollection",
                "token": "subbook-token-subcollection",
                "expanded": true,
                "children": [
                  {
                    "type": "TocNodeKind.Page",
                    "token": "page-token-m00002",
                    "title": "Appendix",
                    "subtitle": "m00002",
                    "fileId": "m00002",
                    "absPath": "/fake-path/to/page/m00002"
                  },
                  {
                    "type": "TocNodeKind.Page",
                    "token": "page-token-m00001",
                    "title": "Introduction",
                    "subtitle": "m00001",
                    "fileId": "m00001",
                    "absPath": "/fake-path/to/page/m00001"
                  }
                ]
              }
            ]
          }
        ]
      },
      "deletes elements when dnd from editable to uneditable": {
        "1": [
          {
            "type": "TocModificationKind.Remove",
            "nodeToken": "page-token-m00002",
            "bookIndex": 0,
            "newToc": [
              {
                "type": "TocNodeKind.Subbook",
                "title": "subcollection",
                "token": "subbook-token-subcollection",
                "expanded": true,
                "children": [
                  {
                    "type": "TocNodeKind.Page",
                    "token": "page-token-m00001",
                    "title": "Introduction",
                    "subtitle": "m00001",
                    "fileId": "m00001",
                    "absPath": "/fake-path/to/page/m00001"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    "controls": {
      "can tell the extension to create Page": {
        "1": [
          {
            "type": "PAGE_CREATE",
            "bookIndex": 0
          }
        ]
      },
      "can tell the extension to create Subbook": {
        "1": [
          {
            "type": "SUBBOOK_CREATE",
            "slug": "test",
            "bookIndex": 0
          },
          {
            "type": "SUBBOOK_CREATE",
            "slug": "test-2",
            "bookIndex": 0
          }
        ]
      },
      "can tell the extension to rename Page": {
        "1": [
          {
            "type": "TocModificationKind.PageRename",
            "newTitle": "Introductionabc",
            "nodeToken": "page-token-m00001",
            "node": {
              "type": "TocNodeKind.Page",
              "token": "page-token-m00001",
              "title": "Introductionabc",
              "subtitle": "m00001",
              "fileId": "m00001",
              "absPath": "/fake-path/to/page/m00001"
            },
            "bookIndex": 0,
            "newToc": [
              {
                "type": "TocNodeKind.Subbook",
                "title": "subcollection",
                "token": "subbook-token-subcollection",
                "expanded": true,
                "children": [
                  {
                    "type": "TocNodeKind.Page",
                    "token": "page-token-m00001",
                    "title": "Introductionabc",
                    "subtitle": "m00001",
                    "fileId": "m00001",
                    "absPath": "/fake-path/to/page/m00001"
                  },
                  {
                    "type": "TocNodeKind.Page",
                    "token": "page-token-m00002",
                    "title": "Appending To Lists",
                    "subtitle": "m00002",
                    "fileId": "m00002",
                    "absPath": "/fake-path/to/page/m00002"
                  }
                ]
              },
              {
                "type": "TocNodeKind.Page",
                "token": "page-token-m00003",
                "title": "Appendix",
                "subtitle": "m00003",
                "fileId": "m00003",
                "absPath": "/fake-path/to/page/m00003"
              }
            ]
          }
        ]
      },
      "can tell the extension to rename Subbook": {
        "1": [
          {
            "type": "TocModificationKind.SubbookRename",
            "newTitle": "subcollectionabc",
            "nodeToken": "subbook-token-subcollection",
            "node": {
              "type": "TocNodeKind.Subbook",
              "title": "subcollectionabc",
              "token": "subbook-token-subcollection",
              "expanded": true,
              "children": [
                {
                  "type": "TocNodeKind.Page",
                  "token": "page-token-m00001",
                  "title": "Introduction",
                  "subtitle": "m00001",
                  "fileId": "m00001",
                  "absPath": "/fake-path/to/page/m00001"
                },
                {
                  "type": "TocNodeKind.Page",
                  "token": "page-token-m00002",
                  "title": "Appending To Lists",
                  "subtitle": "m00002",
                  "fileId": "m00002",
                  "absPath": "/fake-path/to/page/m00002"
                }
              ]
            },
            "bookIndex": 0,
            "newToc": [
              {
                "type": "TocNodeKind.Subbook",
                "title": "subcollectionabc",
                "token": "subbook-token-subcollection",
                "expanded": true,
                "children": [
                  {
                    "type": "TocNodeKind.Page",
                    "token": "page-token-m00001",
                    "title": "Introduction",
                    "subtitle": "m00001",
                    "fileId": "m00001",
                    "absPath": "/fake-path/to/page/m00001"
                  },
                  {
                    "type": "TocNodeKind.Page",
                    "token": "page-token-m00002",
                    "title": "Appending To Lists",
                    "subtitle": "m00002",
                    "fileId": "m00002",
                    "absPath": "/fake-path/to/page/m00002"
                  }
                ]
              },
              {
                "type": "TocNodeKind.Page",
                "token": "page-token-m00003",
                "title": "Appendix",
                "subtitle": "m00003",
                "fileId": "m00003",
                "absPath": "/fake-path/to/page/m00003"
              }
            ]
          }
        ]
      }
    }
  }
}