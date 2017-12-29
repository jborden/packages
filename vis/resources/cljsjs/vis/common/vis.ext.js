// Please use https://github.com/jmmk/javascript-externs-generator
// to generate the externs

var vis = {
  "DOMutil": {
    "cleanupElements": function () {},
    "drawBar": function () {},
    "drawPoint": function () {},
    "getDOMElement": function () {},
    "getSVGElement": function () {},
    "prepareElements": function () {},
    "resetElements": function () {}
  },
  "DataSet": function () {},
  "DataView": function () {},
  "Graph2d": function () {},
  "Graph3d": {
    "STYLE": {
      "BAR": {},
      "BARCOLOR": {},
      "BARSIZE": {},
      "DOT": {},
      "DOTCOLOR": {},
      "DOTLINE": {},
      "DOTSIZE": {},
      "GRID": {},
      "LINE": {},
      "SURFACE": {}
    }
  },
  "Hammer": {
    "AttrRecognizer": function () {},
    "DIRECTION_ALL": {},
    "DIRECTION_DOWN": {},
    "DIRECTION_HORIZONTAL": {},
    "DIRECTION_LEFT": {},
    "DIRECTION_NONE": {},
    "DIRECTION_RIGHT": {},
    "DIRECTION_UP": {},
    "DIRECTION_VERTICAL": {},
    "INPUT_CANCEL": {},
    "INPUT_END": {},
    "INPUT_MOVE": {},
    "INPUT_START": {},
    "Input": function () {},
    "Manager": function () {},
    "MouseInput": function () {},
    "Pan": function () {},
    "Pinch": function () {},
    "PointerEventInput": function () {},
    "Press": function () {},
    "Recognizer": function () {},
    "Rotate": function () {},
    "STATE_BEGAN": {},
    "STATE_CANCELLED": {},
    "STATE_CHANGED": {},
    "STATE_ENDED": {},
    "STATE_FAILED": {},
    "STATE_POSSIBLE": {},
    "STATE_RECOGNIZED": {},
    "SingleTouchInput": function () {},
    "Swipe": function () {},
    "Tap": function () {},
    "TouchAction": function () {},
    "TouchInput": function () {},
    "TouchMouseInput": function () {},
    "VERSION": {},
    "assign": function () {},
    "bindFn": function () {},
    "defaults": {
      "cssProps": {
        "contentZooming": {},
        "tapHighlightColor": {},
        "touchCallout": {},
        "touchSelect": {},
        "userDrag": {},
        "userSelect": {}
      },
      "domEvents": {},
      "enable": {},
      "inputClass": {},
      "inputTarget": {},
      "preset": {},
      "touchAction": {}
    },
    "each": function () {},
    "extend": function () {},
    "inherit": function () {},
    "merge": function () {},
    "off": function () {},
    "on": function () {},
    "prefixed": function () {}
  },
  "Network": function () {},
  "Queue": {
    "extend": function () {}
  },
  "Timeline": function () {},
  "graph3d": {
    "Camera": function () {},
    "Filter": function () {},
    "Point2d": function () {},
    "Point3d": {
      "add": function () {},
      "avg": function () {},
      "crossProduct": function () {},
      "subtract": function () {}
    },
    "Slider": function () {},
    "StepNumber": {
      "calculatePrettyStep": function () {}
    }
  },
  "keycharm": function () {},
  "moment": {
    "ISO_8601": function () {},
    "RFC_2822": function () {},
    "calendarFormat": function () {},
    "createFromInputFallback": function () {},
    "defaultFormat": {},
    "defaultFormatUtc": {},
    "defineLocale": function () {},
    "deprecationHandler": {},
    "duration": {
      "fn": {
        "_bubble": function () {},
        "abs": function () {},
        "add": function () {},
        "as": function () {},
        "asDays": function () {},
        "asHours": function () {},
        "asMilliseconds": function () {},
        "asMinutes": function () {},
        "asMonths": function () {},
        "asSeconds": function () {},
        "asWeeks": function () {},
        "asYears": function () {},
        "days": function () {},
        "get": function () {},
        "hours": function () {},
        "humanize": function () {},
        "isValid": function () {},
        "lang": function () {},
        "locale": function () {},
        "localeData": function () {},
        "milliseconds": function () {},
        "minutes": function () {},
        "months": function () {},
        "seconds": function () {},
        "subtract": function () {},
        "toISOString": function () {},
        "toIsoString": function () {},
        "toJSON": function () {},
        "toString": function () {},
        "valueOf": function () {},
        "weeks": function () {},
        "years": function () {}
      },
      "invalid": function () {}
    },
    "fn": {
      "add": function () {},
      "calendar": function () {},
      "clone": function () {},
      "creationData": function () {},
      "date": function () {},
      "dates": function () {},
      "day": function () {},
      "dayOfYear": function () {},
      "days": function () {},
      "daysInMonth": function () {},
      "diff": function () {},
      "endOf": function () {},
      "format": function () {},
      "from": function () {},
      "fromNow": function () {},
      "get": function () {},
      "hasAlignedHourOffset": function () {},
      "hour": function () {},
      "hours": function () {},
      "inspect": function () {},
      "invalidAt": function () {},
      "isAfter": function () {},
      "isBefore": function () {},
      "isBetween": function () {},
      "isDST": function () {},
      "isDSTShifted": function () {},
      "isLeapYear": function () {},
      "isLocal": function () {},
      "isSame": function () {},
      "isSameOrAfter": function () {},
      "isSameOrBefore": function () {},
      "isUTC": function () {},
      "isUtc": function () {},
      "isUtcOffset": function () {},
      "isValid": function () {},
      "isoWeek": function () {},
      "isoWeekYear": function () {},
      "isoWeekday": function () {},
      "isoWeeks": function () {},
      "isoWeeksInYear": function () {},
      "lang": function () {},
      "local": function () {},
      "locale": function () {},
      "localeData": function () {},
      "max": function () {},
      "millisecond": function () {},
      "milliseconds": function () {},
      "min": function () {},
      "minute": function () {},
      "minutes": function () {},
      "month": function () {},
      "months": function () {},
      "parseZone": function () {},
      "parsingFlags": function () {},
      "quarter": function () {},
      "quarters": function () {},
      "second": function () {},
      "seconds": function () {},
      "set": function () {},
      "startOf": function () {},
      "subtract": function () {},
      "to": function () {},
      "toArray": function () {},
      "toDate": function () {},
      "toISOString": function () {},
      "toJSON": function () {},
      "toNow": function () {},
      "toObject": function () {},
      "toString": function () {},
      "unix": function () {},
      "utc": function () {},
      "utcOffset": function () {},
      "valueOf": function () {},
      "week": function () {},
      "weekYear": function () {},
      "weekday": function () {},
      "weeks": function () {},
      "weeksInYear": function () {},
      "year": function () {},
      "years": function () {},
      "zone": function () {},
      "zoneAbbr": function () {},
      "zoneName": function () {}
    },
    "invalid": function () {},
    "isDate": function () {},
    "isDuration": function () {},
    "isMoment": function () {},
    "lang": function () {},
    "langData": function () {},
    "locale": function () {},
    "localeData": function () {},
    "locales": function () {},
    "max": function () {},
    "min": function () {},
    "momentProperties": {},
    "months": function () {},
    "monthsShort": function () {},
    "normalizeUnits": function () {},
    "now": function () {},
    "parseTwoDigitYear": function () {},
    "parseZone": function () {},
    "relativeTimeRounding": function () {},
    "relativeTimeThreshold": function () {},
    "suppressDeprecationWarnings": {},
    "unix": function () {},
    "updateLocale": function () {},
    "updateOffset": function () {},
    "utc": function () {},
    "version": {},
    "weekdays": function () {},
    "weekdaysMin": function () {},
    "weekdaysShort": function () {}
  },
  "network": {
    "Images": {
      "default": function () {}
    },
    "allOptions": {
      "allOptions": {
        "__type__": {
          "object": {}
        },
        "autoResize": {
          "boolean": {}
        },
        "clickToUse": {
          "boolean": {}
        },
        "configure": {
          "__type__": {
            "array": {},
            "boolean": {},
            "function": {},
            "object": {},
            "string": {}
          },
          "container": {
            "dom": {}
          },
          "enabled": {
            "boolean": {}
          },
          "filter": {
            "array": {},
            "boolean": {},
            "function": {},
            "string": {}
          },
          "showButton": {
            "boolean": {}
          }
        },
        "edges": {
          "__type__": {
            "object": {}
          },
          "arrowStrikethrough": {
            "boolean": {}
          },
          "arrows": {
            "__type__": {
              "object": {},
              "string": {}
            },
            "from": {
              "__type__": {
                "boolean": {},
                "object": {}
              },
              "enabled": {
                "boolean": {}
              },
              "scaleFactor": {
                "number": {}
              },
              "type": {
                "string": {}
              }
            },
            "middle": {
              "__type__": {
                "boolean": {},
                "object": {}
              },
              "enabled": {
                "boolean": {}
              },
              "scaleFactor": {
                "number": {}
              },
              "type": {
                "string": {}
              }
            },
            "to": {
              "__type__": {
                "boolean": {},
                "object": {}
              },
              "enabled": {
                "boolean": {}
              },
              "scaleFactor": {
                "number": {}
              },
              "type": {
                "string": {}
              }
            }
          },
          "chosen": {
            "__type__": {
              "boolean": {},
              "object": {}
            },
            "edge": {
              "boolean": {},
              "function": {}
            },
            "label": {
              "boolean": {},
              "function": {}
            }
          },
          "color": {
            "__type__": {
              "object": {},
              "string": {}
            },
            "color": {
              "string": {}
            },
            "highlight": {
              "string": {}
            },
            "hover": {
              "string": {}
            },
            "inherit": {
              "boolean": {},
              "string": {}
            },
            "opacity": {
              "number": {}
            }
          },
          "dashes": {
            "array": {},
            "boolean": {}
          },
          "font": {
            "__type__": {
              "object": {},
              "string": {}
            },
            "align": {
              "string": {}
            },
            "background": {
              "string": {}
            },
            "bold": {
              "__type__": {
                "object": {},
                "string": {}
              },
              "color": {
                "string": {}
              },
              "face": {
                "string": {}
              },
              "mod": {
                "string": {}
              },
              "size": {
                "number": {}
              },
              "vadjust": {
                "number": {}
              }
            },
            "boldital": {
              "__type__": {
                "object": {},
                "string": {}
              },
              "color": {
                "string": {}
              },
              "face": {
                "string": {}
              },
              "mod": {
                "string": {}
              },
              "size": {
                "number": {}
              },
              "vadjust": {
                "number": {}
              }
            },
            "color": {
              "string": {}
            },
            "face": {
              "string": {}
            },
            "ital": {
              "__type__": {
                "object": {},
                "string": {}
              },
              "color": {
                "string": {}
              },
              "face": {
                "string": {}
              },
              "mod": {
                "string": {}
              },
              "size": {
                "number": {}
              },
              "vadjust": {
                "number": {}
              }
            },
            "mono": {
              "__type__": {
                "object": {},
                "string": {}
              },
              "color": {
                "string": {}
              },
              "face": {
                "string": {}
              },
              "mod": {
                "string": {}
              },
              "size": {
                "number": {}
              },
              "vadjust": {
                "number": {}
              }
            },
            "multi": {
              "boolean": {},
              "string": {}
            },
            "size": {
              "number": {}
            },
            "strokeColor": {
              "string": {}
            },
            "strokeWidth": {
              "number": {}
            },
            "vadjust": {
              "number": {}
            }
          },
          "hidden": {
            "boolean": {}
          },
          "hoverWidth": {
            "function": {},
            "number": {}
          },
          "label": {
            "string": {},
            "undefined": {}
          },
          "labelHighlightBold": {
            "boolean": {}
          },
          "length": {
            "number": {},
            "undefined": {}
          },
          "physics": {
            "boolean": {}
          },
          "scaling": {
            "__type__": {
              "object": {}
            },
            "customScalingFunction": {
              "function": {}
            },
            "label": {
              "__type__": {
                "boolean": {},
                "object": {}
              },
              "drawThreshold": {
                "number": {}
              },
              "enabled": {
                "boolean": {}
              },
              "max": {
                "number": {}
              },
              "maxVisible": {
                "number": {}
              },
              "min": {
                "number": {}
              }
            },
            "max": {
              "number": {}
            },
            "min": {
              "number": {}
            }
          },
          "selectionWidth": {
            "function": {},
            "number": {}
          },
          "selfReferenceSize": {
            "number": {}
          },
          "shadow": {
            "__type__": {
              "boolean": {},
              "object": {}
            },
            "color": {
              "string": {}
            },
            "enabled": {
              "boolean": {}
            },
            "size": {
              "number": {}
            },
            "x": {
              "number": {}
            },
            "y": {
              "number": {}
            }
          },
          "smooth": {
            "__type__": {
              "boolean": {},
              "object": {}
            },
            "enabled": {
              "boolean": {}
            },
            "forceDirection": {
              "boolean": {},
              "string": {}
            },
            "roundness": {
              "number": {}
            },
            "type": {
              "string": {}
            }
          },
          "title": {
            "string": {},
            "undefined": {}
          },
          "value": {
            "number": {},
            "undefined": {}
          },
          "width": {
            "number": {}
          },
          "widthConstraint": {
            "__type__": {
              "boolean": {},
              "number": {},
              "object": {}
            },
            "maximum": {
              "number": {}
            }
          }
        },
        "groups": {
          "__any__": {
            "__type__": {
              "object": {}
            },
            "borderWidth": {
              "number": {}
            },
            "borderWidthSelected": {
              "number": {},
              "undefined": {}
            },
            "brokenImage": {
              "string": {},
              "undefined": {}
            },
            "chosen": {
              "__type__": {
                "boolean": {},
                "object": {}
              },
              "label": {
                "boolean": {},
                "function": {}
              },
              "node": {
                "boolean": {},
                "function": {}
              }
            },
            "color": {
              "__type__": {
                "object": {},
                "string": {}
              },
              "background": {
                "string": {}
              },
              "border": {
                "string": {}
              },
              "highlight": {
                "__type__": {
                  "object": {},
                  "string": {}
                },
                "background": {
                  "string": {}
                },
                "border": {
                  "string": {}
                }
              },
              "hover": {
                "__type__": {
                  "object": {},
                  "string": {}
                },
                "background": {
                  "string": {}
                },
                "border": {
                  "string": {}
                }
              }
            },
            "fixed": {
              "__type__": {
                "boolean": {},
                "object": {}
              },
              "x": {
                "boolean": {}
              },
              "y": {
                "boolean": {}
              }
            },
            "font": {
              "__type__": {
                "object": {},
                "string": {}
              },
              "align": {
                "string": {}
              },
              "background": {
                "string": {}
              },
              "bold": {
                "__type__": {
                  "object": {},
                  "string": {}
                },
                "color": {
                  "string": {}
                },
                "face": {
                  "string": {}
                },
                "mod": {
                  "string": {}
                },
                "size": {
                  "number": {}
                },
                "vadjust": {
                  "number": {}
                }
              },
              "boldital": {
                "__type__": {
                  "object": {},
                  "string": {}
                },
                "color": {
                  "string": {}
                },
                "face": {
                  "string": {}
                },
                "mod": {
                  "string": {}
                },
                "size": {
                  "number": {}
                },
                "vadjust": {
                  "number": {}
                }
              },
              "color": {
                "string": {}
              },
              "face": {
                "string": {}
              },
              "ital": {
                "__type__": {
                  "object": {},
                  "string": {}
                },
                "color": {
                  "string": {}
                },
                "face": {
                  "string": {}
                },
                "mod": {
                  "string": {}
                },
                "size": {
                  "number": {}
                },
                "vadjust": {
                  "number": {}
                }
              },
              "mono": {
                "__type__": {
                  "object": {},
                  "string": {}
                },
                "color": {
                  "string": {}
                },
                "face": {
                  "string": {}
                },
                "mod": {
                  "string": {}
                },
                "size": {
                  "number": {}
                },
                "vadjust": {
                  "number": {}
                }
              },
              "multi": {
                "boolean": {},
                "string": {}
              },
              "size": {
                "number": {}
              },
              "strokeColor": {
                "string": {}
              },
              "strokeWidth": {
                "number": {}
              },
              "vadjust": {
                "number": {}
              }
            },
            "group": {
              "number": {},
              "string": {},
              "undefined": {}
            },
            "heightConstraint": {
              "__type__": {
                "boolean": {},
                "number": {},
                "object": {}
              },
              "minimum": {
                "number": {}
              },
              "valign": {
                "string": {}
              }
            },
            "hidden": {
              "boolean": {}
            },
            "icon": {
              "__type__": {
                "object": {}
              },
              "code": {
                "string": {}
              },
              "color": {
                "string": {}
              },
              "face": {
                "string": {}
              },
              "size": {
                "number": {}
              }
            },
            "id": {
              "number": {},
              "string": {}
            },
            "image": {
              "__type__": {
                "object": {},
                "string": {}
              },
              "selected": {
                "string": {},
                "undefined": {}
              },
              "unselected": {
                "string": {},
                "undefined": {}
              }
            },
            "label": {
              "string": {},
              "undefined": {}
            },
            "labelHighlightBold": {
              "boolean": {}
            },
            "level": {
              "number": {},
              "undefined": {}
            },
            "margin": {
              "__type__": {
                "number": {},
                "object": {}
              },
              "bottom": {
                "number": {}
              },
              "left": {
                "number": {}
              },
              "right": {
                "number": {}
              },
              "top": {
                "number": {}
              }
            },
            "mass": {
              "number": {}
            },
            "physics": {
              "boolean": {}
            },
            "scaling": {
              "__type__": {
                "object": {}
              },
              "customScalingFunction": {
                "function": {}
              },
              "label": {
                "__type__": {
                  "boolean": {},
                  "object": {}
                },
                "drawThreshold": {
                  "number": {}
                },
                "enabled": {
                  "boolean": {}
                },
                "max": {
                  "number": {}
                },
                "maxVisible": {
                  "number": {}
                },
                "min": {
                  "number": {}
                }
              },
              "max": {
                "number": {}
              },
              "min": {
                "number": {}
              }
            },
            "shadow": {
              "__type__": {
                "boolean": {},
                "object": {}
              },
              "color": {
                "string": {}
              },
              "enabled": {
                "boolean": {}
              },
              "size": {
                "number": {}
              },
              "x": {
                "number": {}
              },
              "y": {
                "number": {}
              }
            },
            "shape": {
              "string": {}
            },
            "shapeProperties": {
              "__type__": {
                "object": {}
              },
              "borderDashes": {
                "array": {},
                "boolean": {}
              },
              "borderRadius": {
                "number": {}
              },
              "interpolation": {
                "boolean": {}
              },
              "useBorderWithImage": {
                "boolean": {}
              },
              "useImageSize": {
                "boolean": {}
              }
            },
            "size": {
              "number": {}
            },
            "title": {
              "string": {},
              "undefined": {}
            },
            "value": {
              "number": {},
              "undefined": {}
            },
            "widthConstraint": {
              "__type__": {
                "boolean": {},
                "number": {},
                "object": {}
              },
              "maximum": {
                "number": {}
              },
              "minimum": {
                "number": {}
              }
            },
            "x": {
              "number": {}
            },
            "y": {
              "number": {}
            }
          },
          "__type__": {
            "object": {}
          },
          "useDefaultGroups": {
            "boolean": {}
          }
        },
        "height": {
          "string": {}
        },
        "interaction": {
          "__type__": {
            "object": {}
          },
          "dragNodes": {
            "boolean": {}
          },
          "dragView": {
            "boolean": {}
          },
          "hideEdgesOnDrag": {
            "boolean": {}
          },
          "hideNodesOnDrag": {
            "boolean": {}
          },
          "hover": {
            "boolean": {}
          },
          "hoverConnectedEdges": {
            "boolean": {}
          },
          "keyboard": {
            "__type__": {
              "boolean": {},
              "object": {}
            },
            "bindToWindow": {
              "boolean": {}
            },
            "enabled": {
              "boolean": {}
            },
            "speed": {
              "__type__": {
                "object": {}
              },
              "x": {
                "number": {}
              },
              "y": {
                "number": {}
              },
              "zoom": {
                "number": {}
              }
            }
          },
          "multiselect": {
            "boolean": {}
          },
          "navigationButtons": {
            "boolean": {}
          },
          "selectConnectedEdges": {
            "boolean": {}
          },
          "selectable": {
            "boolean": {}
          },
          "tooltipDelay": {
            "number": {}
          },
          "zoomView": {
            "boolean": {}
          }
        },
        "layout": {
          "__type__": {
            "object": {}
          },
          "hierarchical": {
            "__type__": {
              "boolean": {},
              "object": {}
            },
            "blockShifting": {
              "boolean": {}
            },
            "direction": {
              "string": {}
            },
            "edgeMinimization": {
              "boolean": {}
            },
            "enabled": {
              "boolean": {}
            },
            "levelSeparation": {
              "number": {}
            },
            "nodeSpacing": {
              "number": {}
            },
            "parentCentralization": {
              "boolean": {}
            },
            "sortMethod": {
              "string": {}
            },
            "treeSpacing": {
              "number": {}
            }
          },
          "improvedLayout": {
            "boolean": {}
          },
          "randomSeed": {
            "number": {},
            "undefined": {}
          }
        },
        "locale": {
          "string": {}
        },
        "locales": {
          "__any__": {
            "any": {}
          },
          "__type__": {
            "object": {}
          }
        },
        "manipulation": {
          "__type__": {
            "boolean": {},
            "object": {}
          },
          "addEdge": {
            "boolean": {},
            "function": {}
          },
          "addNode": {
            "boolean": {},
            "function": {}
          },
          "controlNodeStyle": {
            "__type__": {
              "object": {}
            },
            "borderWidth": {
              "number": {}
            },
            "borderWidthSelected": {
              "number": {},
              "undefined": {}
            },
            "brokenImage": {
              "string": {},
              "undefined": {}
            },
            "chosen": {
              "__type__": {
                "boolean": {},
                "object": {}
              },
              "label": {
                "boolean": {},
                "function": {}
              },
              "node": {
                "boolean": {},
                "function": {}
              }
            },
            "color": {
              "__type__": {
                "object": {},
                "string": {}
              },
              "background": {
                "string": {}
              },
              "border": {
                "string": {}
              },
              "highlight": {
                "__type__": {
                  "object": {},
                  "string": {}
                },
                "background": {
                  "string": {}
                },
                "border": {
                  "string": {}
                }
              },
              "hover": {
                "__type__": {
                  "object": {},
                  "string": {}
                },
                "background": {
                  "string": {}
                },
                "border": {
                  "string": {}
                }
              }
            },
            "fixed": {
              "__type__": {
                "boolean": {},
                "object": {}
              },
              "x": {
                "boolean": {}
              },
              "y": {
                "boolean": {}
              }
            },
            "font": {
              "__type__": {
                "object": {},
                "string": {}
              },
              "align": {
                "string": {}
              },
              "background": {
                "string": {}
              },
              "bold": {
                "__type__": {
                  "object": {},
                  "string": {}
                },
                "color": {
                  "string": {}
                },
                "face": {
                  "string": {}
                },
                "mod": {
                  "string": {}
                },
                "size": {
                  "number": {}
                },
                "vadjust": {
                  "number": {}
                }
              },
              "boldital": {
                "__type__": {
                  "object": {},
                  "string": {}
                },
                "color": {
                  "string": {}
                },
                "face": {
                  "string": {}
                },
                "mod": {
                  "string": {}
                },
                "size": {
                  "number": {}
                },
                "vadjust": {
                  "number": {}
                }
              },
              "color": {
                "string": {}
              },
              "face": {
                "string": {}
              },
              "ital": {
                "__type__": {
                  "object": {},
                  "string": {}
                },
                "color": {
                  "string": {}
                },
                "face": {
                  "string": {}
                },
                "mod": {
                  "string": {}
                },
                "size": {
                  "number": {}
                },
                "vadjust": {
                  "number": {}
                }
              },
              "mono": {
                "__type__": {
                  "object": {},
                  "string": {}
                },
                "color": {
                  "string": {}
                },
                "face": {
                  "string": {}
                },
                "mod": {
                  "string": {}
                },
                "size": {
                  "number": {}
                },
                "vadjust": {
                  "number": {}
                }
              },
              "multi": {
                "boolean": {},
                "string": {}
              },
              "size": {
                "number": {}
              },
              "strokeColor": {
                "string": {}
              },
              "strokeWidth": {
                "number": {}
              },
              "vadjust": {
                "number": {}
              }
            },
            "group": {
              "number": {},
              "string": {},
              "undefined": {}
            },
            "heightConstraint": {
              "__type__": {
                "boolean": {},
                "number": {},
                "object": {}
              },
              "minimum": {
                "number": {}
              },
              "valign": {
                "string": {}
              }
            },
            "hidden": {
              "boolean": {}
            },
            "icon": {
              "__type__": {
                "object": {}
              },
              "code": {
                "string": {}
              },
              "color": {
                "string": {}
              },
              "face": {
                "string": {}
              },
              "size": {
                "number": {}
              }
            },
            "id": {
              "number": {},
              "string": {}
            },
            "image": {
              "__type__": {
                "object": {},
                "string": {}
              },
              "selected": {
                "string": {},
                "undefined": {}
              },
              "unselected": {
                "string": {},
                "undefined": {}
              }
            },
            "label": {
              "string": {},
              "undefined": {}
            },
            "labelHighlightBold": {
              "boolean": {}
            },
            "level": {
              "number": {},
              "undefined": {}
            },
            "margin": {
              "__type__": {
                "number": {},
                "object": {}
              },
              "bottom": {
                "number": {}
              },
              "left": {
                "number": {}
              },
              "right": {
                "number": {}
              },
              "top": {
                "number": {}
              }
            },
            "mass": {
              "number": {}
            },
            "physics": {
              "boolean": {}
            },
            "scaling": {
              "__type__": {
                "object": {}
              },
              "customScalingFunction": {
                "function": {}
              },
              "label": {
                "__type__": {
                  "boolean": {},
                  "object": {}
                },
                "drawThreshold": {
                  "number": {}
                },
                "enabled": {
                  "boolean": {}
                },
                "max": {
                  "number": {}
                },
                "maxVisible": {
                  "number": {}
                },
                "min": {
                  "number": {}
                }
              },
              "max": {
                "number": {}
              },
              "min": {
                "number": {}
              }
            },
            "shadow": {
              "__type__": {
                "boolean": {},
                "object": {}
              },
              "color": {
                "string": {}
              },
              "enabled": {
                "boolean": {}
              },
              "size": {
                "number": {}
              },
              "x": {
                "number": {}
              },
              "y": {
                "number": {}
              }
            },
            "shape": {
              "string": {}
            },
            "shapeProperties": {
              "__type__": {
                "object": {}
              },
              "borderDashes": {
                "array": {},
                "boolean": {}
              },
              "borderRadius": {
                "number": {}
              },
              "interpolation": {
                "boolean": {}
              },
              "useBorderWithImage": {
                "boolean": {}
              },
              "useImageSize": {
                "boolean": {}
              }
            },
            "size": {
              "number": {}
            },
            "title": {
              "string": {},
              "undefined": {}
            },
            "value": {
              "number": {},
              "undefined": {}
            },
            "widthConstraint": {
              "__type__": {
                "boolean": {},
                "number": {},
                "object": {}
              },
              "maximum": {
                "number": {}
              },
              "minimum": {
                "number": {}
              }
            },
            "x": {
              "number": {}
            },
            "y": {
              "number": {}
            }
          },
          "deleteEdge": {
            "boolean": {},
            "function": {}
          },
          "deleteNode": {
            "boolean": {},
            "function": {}
          },
          "editEdge": {
            "__type__": {
              "boolean": {},
              "function": {},
              "object": {}
            },
            "editWithoutDrag": {
              "function": {}
            }
          },
          "editNode": {
            "function": {}
          },
          "enabled": {
            "boolean": {}
          },
          "initiallyActive": {
            "boolean": {}
          }
        },
        "nodes": {
          "__type__": {
            "object": {}
          },
          "borderWidth": {
            "number": {}
          },
          "borderWidthSelected": {
            "number": {},
            "undefined": {}
          },
          "brokenImage": {
            "string": {},
            "undefined": {}
          },
          "chosen": {
            "__type__": {
              "boolean": {},
              "object": {}
            },
            "label": {
              "boolean": {},
              "function": {}
            },
            "node": {
              "boolean": {},
              "function": {}
            }
          },
          "color": {
            "__type__": {
              "object": {},
              "string": {}
            },
            "background": {
              "string": {}
            },
            "border": {
              "string": {}
            },
            "highlight": {
              "__type__": {
                "object": {},
                "string": {}
              },
              "background": {
                "string": {}
              },
              "border": {
                "string": {}
              }
            },
            "hover": {
              "__type__": {
                "object": {},
                "string": {}
              },
              "background": {
                "string": {}
              },
              "border": {
                "string": {}
              }
            }
          },
          "fixed": {
            "__type__": {
              "boolean": {},
              "object": {}
            },
            "x": {
              "boolean": {}
            },
            "y": {
              "boolean": {}
            }
          },
          "font": {
            "__type__": {
              "object": {},
              "string": {}
            },
            "align": {
              "string": {}
            },
            "background": {
              "string": {}
            },
            "bold": {
              "__type__": {
                "object": {},
                "string": {}
              },
              "color": {
                "string": {}
              },
              "face": {
                "string": {}
              },
              "mod": {
                "string": {}
              },
              "size": {
                "number": {}
              },
              "vadjust": {
                "number": {}
              }
            },
            "boldital": {
              "__type__": {
                "object": {},
                "string": {}
              },
              "color": {
                "string": {}
              },
              "face": {
                "string": {}
              },
              "mod": {
                "string": {}
              },
              "size": {
                "number": {}
              },
              "vadjust": {
                "number": {}
              }
            },
            "color": {
              "string": {}
            },
            "face": {
              "string": {}
            },
            "ital": {
              "__type__": {
                "object": {},
                "string": {}
              },
              "color": {
                "string": {}
              },
              "face": {
                "string": {}
              },
              "mod": {
                "string": {}
              },
              "size": {
                "number": {}
              },
              "vadjust": {
                "number": {}
              }
            },
            "mono": {
              "__type__": {
                "object": {},
                "string": {}
              },
              "color": {
                "string": {}
              },
              "face": {
                "string": {}
              },
              "mod": {
                "string": {}
              },
              "size": {
                "number": {}
              },
              "vadjust": {
                "number": {}
              }
            },
            "multi": {
              "boolean": {},
              "string": {}
            },
            "size": {
              "number": {}
            },
            "strokeColor": {
              "string": {}
            },
            "strokeWidth": {
              "number": {}
            },
            "vadjust": {
              "number": {}
            }
          },
          "group": {
            "number": {},
            "string": {},
            "undefined": {}
          },
          "heightConstraint": {
            "__type__": {
              "boolean": {},
              "number": {},
              "object": {}
            },
            "minimum": {
              "number": {}
            },
            "valign": {
              "string": {}
            }
          },
          "hidden": {
            "boolean": {}
          },
          "icon": {
            "__type__": {
              "object": {}
            },
            "code": {
              "string": {}
            },
            "color": {
              "string": {}
            },
            "face": {
              "string": {}
            },
            "size": {
              "number": {}
            }
          },
          "id": {
            "number": {},
            "string": {}
          },
          "image": {
            "__type__": {
              "object": {},
              "string": {}
            },
            "selected": {
              "string": {},
              "undefined": {}
            },
            "unselected": {
              "string": {},
              "undefined": {}
            }
          },
          "label": {
            "string": {},
            "undefined": {}
          },
          "labelHighlightBold": {
            "boolean": {}
          },
          "level": {
            "number": {},
            "undefined": {}
          },
          "margin": {
            "__type__": {
              "number": {},
              "object": {}
            },
            "bottom": {
              "number": {}
            },
            "left": {
              "number": {}
            },
            "right": {
              "number": {}
            },
            "top": {
              "number": {}
            }
          },
          "mass": {
            "number": {}
          },
          "physics": {
            "boolean": {}
          },
          "scaling": {
            "__type__": {
              "object": {}
            },
            "customScalingFunction": {
              "function": {}
            },
            "label": {
              "__type__": {
                "boolean": {},
                "object": {}
              },
              "drawThreshold": {
                "number": {}
              },
              "enabled": {
                "boolean": {}
              },
              "max": {
                "number": {}
              },
              "maxVisible": {
                "number": {}
              },
              "min": {
                "number": {}
              }
            },
            "max": {
              "number": {}
            },
            "min": {
              "number": {}
            }
          },
          "shadow": {
            "__type__": {
              "boolean": {},
              "object": {}
            },
            "color": {
              "string": {}
            },
            "enabled": {
              "boolean": {}
            },
            "size": {
              "number": {}
            },
            "x": {
              "number": {}
            },
            "y": {
              "number": {}
            }
          },
          "shape": {
            "string": {}
          },
          "shapeProperties": {
            "__type__": {
              "object": {}
            },
            "borderDashes": {
              "array": {},
              "boolean": {}
            },
            "borderRadius": {
              "number": {}
            },
            "interpolation": {
              "boolean": {}
            },
            "useBorderWithImage": {
              "boolean": {}
            },
            "useImageSize": {
              "boolean": {}
            }
          },
          "size": {
            "number": {}
          },
          "title": {
            "string": {},
            "undefined": {}
          },
          "value": {
            "number": {},
            "undefined": {}
          },
          "widthConstraint": {
            "__type__": {
              "boolean": {},
              "number": {},
              "object": {}
            },
            "maximum": {
              "number": {}
            },
            "minimum": {
              "number": {}
            }
          },
          "x": {
            "number": {}
          },
          "y": {
            "number": {}
          }
        },
        "physics": {
          "__type__": {
            "boolean": {},
            "object": {}
          },
          "adaptiveTimestep": {
            "boolean": {}
          },
          "barnesHut": {
            "__type__": {
              "object": {}
            },
            "avoidOverlap": {
              "number": {}
            },
            "centralGravity": {
              "number": {}
            },
            "damping": {
              "number": {}
            },
            "gravitationalConstant": {
              "number": {}
            },
            "springConstant": {
              "number": {}
            },
            "springLength": {
              "number": {}
            }
          },
          "enabled": {
            "boolean": {}
          },
          "forceAtlas2Based": {
            "__type__": {
              "object": {}
            },
            "avoidOverlap": {
              "number": {}
            },
            "centralGravity": {
              "number": {}
            },
            "damping": {
              "number": {}
            },
            "gravitationalConstant": {
              "number": {}
            },
            "springConstant": {
              "number": {}
            },
            "springLength": {
              "number": {}
            }
          },
          "hierarchicalRepulsion": {
            "__type__": {
              "object": {}
            },
            "centralGravity": {
              "number": {}
            },
            "damping": {
              "number": {}
            },
            "nodeDistance": {
              "number": {}
            },
            "springConstant": {
              "number": {}
            },
            "springLength": {
              "number": {}
            }
          },
          "maxVelocity": {
            "number": {}
          },
          "minVelocity": {
            "number": {}
          },
          "repulsion": {
            "__type__": {
              "object": {}
            },
            "centralGravity": {
              "number": {}
            },
            "damping": {
              "number": {}
            },
            "nodeDistance": {
              "number": {}
            },
            "springConstant": {
              "number": {}
            },
            "springLength": {
              "number": {}
            }
          },
          "solver": {
            "string": {}
          },
          "stabilization": {
            "__type__": {
              "boolean": {},
              "object": {}
            },
            "enabled": {
              "boolean": {}
            },
            "fit": {
              "boolean": {}
            },
            "iterations": {
              "number": {}
            },
            "onlyDynamicEdges": {
              "boolean": {}
            },
            "updateInterval": {
              "number": {}
            }
          },
          "timestep": {
            "number": {}
          }
        },
        "width": {
          "string": {}
        }
      },
      "configureOptions": {
        "edges": {
          "arrowStrikethrough": {},
          "arrows": {
            "from": {
              "enabled": {},
              "scaleFactor": {},
              "type": {}
            },
            "middle": {
              "enabled": {},
              "scaleFactor": {},
              "type": {}
            },
            "to": {
              "enabled": {},
              "scaleFactor": {},
              "type": {}
            }
          },
          "color": {
            "color": {},
            "highlight": {},
            "hover": {},
            "inherit": {},
            "opacity": {}
          },
          "dashes": {},
          "font": {
            "align": {},
            "background": {},
            "color": {},
            "face": {},
            "size": {},
            "strokeColor": {},
            "strokeWidth": {}
          },
          "hidden": {},
          "hoverWidth": {},
          "labelHighlightBold": {},
          "physics": {},
          "scaling": {
            "label": {
              "drawThreshold": {},
              "enabled": {},
              "max": {},
              "maxVisible": {},
              "min": {}
            },
            "max": {},
            "min": {}
          },
          "selectionWidth": {},
          "selfReferenceSize": {},
          "shadow": {
            "color": {},
            "enabled": {},
            "size": {},
            "x": {},
            "y": {}
          },
          "smooth": {
            "enabled": {},
            "forceDirection": {},
            "roundness": {},
            "type": {}
          },
          "width": {}
        },
        "interaction": {
          "dragNodes": {},
          "dragView": {},
          "hideEdgesOnDrag": {},
          "hideNodesOnDrag": {},
          "hover": {},
          "hoverConnectedEdges": {},
          "keyboard": {
            "bindToWindow": {},
            "enabled": {},
            "speed": {
              "x": {},
              "y": {},
              "zoom": {}
            }
          },
          "multiselect": {},
          "navigationButtons": {},
          "selectConnectedEdges": {},
          "selectable": {},
          "tooltipDelay": {},
          "zoomView": {}
        },
        "layout": {
          "hierarchical": {
            "blockShifting": {},
            "direction": {},
            "edgeMinimization": {},
            "enabled": {},
            "levelSeparation": {},
            "nodeSpacing": {},
            "parentCentralization": {},
            "sortMethod": {},
            "treeSpacing": {}
          }
        },
        "manipulation": {
          "enabled": {},
          "initiallyActive": {}
        },
        "nodes": {
          "borderWidth": {},
          "borderWidthSelected": {},
          "color": {
            "background": {},
            "border": {},
            "highlight": {
              "background": {},
              "border": {}
            },
            "hover": {
              "background": {},
              "border": {}
            }
          },
          "fixed": {
            "x": {},
            "y": {}
          },
          "font": {
            "background": {},
            "color": {},
            "face": {},
            "size": {},
            "strokeColor": {},
            "strokeWidth": {}
          },
          "hidden": {},
          "labelHighlightBold": {},
          "physics": {},
          "scaling": {
            "label": {
              "drawThreshold": {},
              "enabled": {},
              "max": {},
              "maxVisible": {},
              "min": {}
            },
            "max": {},
            "min": {}
          },
          "shadow": {
            "color": {},
            "enabled": {},
            "size": {},
            "x": {},
            "y": {}
          },
          "shape": {},
          "shapeProperties": {
            "borderDashes": {},
            "borderRadius": {},
            "interpolation": {},
            "useImageSize": {}
          },
          "size": {}
        },
        "physics": {
          "barnesHut": {
            "avoidOverlap": {},
            "centralGravity": {},
            "damping": {},
            "gravitationalConstant": {},
            "springConstant": {},
            "springLength": {}
          },
          "enabled": {},
          "forceAtlas2Based": {
            "avoidOverlap": {},
            "centralGravity": {},
            "damping": {},
            "gravitationalConstant": {},
            "springConstant": {},
            "springLength": {}
          },
          "hierarchicalRepulsion": {
            "centralGravity": {},
            "damping": {},
            "nodeDistance": {},
            "springConstant": {},
            "springLength": {}
          },
          "maxVelocity": {},
          "minVelocity": {},
          "repulsion": {
            "centralGravity": {},
            "damping": {},
            "nodeDistance": {},
            "springConstant": {},
            "springLength": {}
          },
          "solver": {},
          "timestep": {}
        }
      }
    },
    "convertDot": function () {},
    "convertGephi": function () {},
    "dotparser": {
      "DOTToGraph": function () {},
      "parseDOT": function () {}
    },
    "gephiParser": {
      "parseGephi": function () {}
    }
  },
  "timeline": {
    "Core": function () {},
    "DateUtil": {
      "convertHiddenOptions": function () {},
      "correctTimeForHidden": function () {},
      "getAccumulatedHiddenDuration": function () {},
      "getHiddenDurationBefore": function () {},
      "getHiddenDurationBeforeStart": function () {},
      "getHiddenDurationBetween": function () {},
      "isHidden": function () {},
      "printDates": function () {},
      "removeDuplicates": function () {},
      "snapAwayFromHidden": function () {},
      "stepOverHiddenDates": function () {},
      "toScreen": function () {},
      "toTime": function () {},
      "updateHiddenDates": function () {}
    },
    "Range": {
      "conversion": function () {}
    },
    "TimeStep": {
      "FORMAT": {
        "majorLabels": {
          "day": {},
          "hour": {},
          "millisecond": {},
          "minute": {},
          "month": {},
          "second": {},
          "week": {},
          "weekday": {},
          "year": {}
        },
        "minorLabels": {
          "day": {},
          "hour": {},
          "millisecond": {},
          "minute": {},
          "month": {},
          "second": {},
          "week": {},
          "weekday": {},
          "year": {}
        }
      },
      "snap": function () {}
    },
    "components": {
      "BackgroundGroup": function () {},
      "Component": function () {},
      "CurrentTime": function () {},
      "CustomTime": {
        "customTimeFromTarget": function () {}
      },
      "DataAxis": function () {},
      "DataScale": function () {},
      "GraphGroup": function () {},
      "Group": function () {},
      "ItemSet": {
        "_getItemRange": function () {},
        "itemSetFromTarget": function () {},
        "types": {
          "background": function () {},
          "box": function () {},
          "point": function () {},
          "range": function () {}
        }
      },
      "Legend": function () {},
      "LineGraph": function () {},
      "TimeAxis": function () {},
      "items": {
        "BackgroundItem": function () {},
        "BoxItem": function () {},
        "Item": function () {},
        "PointItem": function () {},
        "RangeItem": function () {}
      }
    },
    "stack": {
      "collision": function () {},
      "collisionByTimes": function () {},
      "nostack": function () {},
      "orderByEnd": function () {},
      "orderByStart": function () {},
      "stack": function () {},
      "stackSubgroups": function () {}
    }
  },
  "util": {
    "HSVToHex": function () {},
    "HSVToRGB": function () {},
    "RGBToHSV": function () {},
    "RGBToHex": function () {},
    "addClassName": function () {},
    "addCssText": function () {},
    "addEventListener": function () {},
    "assignAllKeys": function () {},
    "binarySearchCustom": function () {},
    "binarySearchValue": function () {},
    "bridgeObject": function () {},
    "convert": function () {},
    "copyAndExtendArray": function () {},
    "copyArray": function () {},
    "deepExtend": function () {},
    "easingFunctions": {
      "easeInCubic": function () {},
      "easeInOutCubic": function () {},
      "easeInOutQuad": function () {},
      "easeInOutQuart": function () {},
      "easeInOutQuint": function () {},
      "easeInQuad": function () {},
      "easeInQuart": function () {},
      "easeInQuint": function () {},
      "easeOutCubic": function () {},
      "easeOutQuad": function () {},
      "easeOutQuart": function () {},
      "easeOutQuint": function () {},
      "linear": function () {}
    },
    "equalArray": function () {},
    "extend": function () {},
    "fillIfDefined": function () {},
    "forEach": function () {},
    "getAbsoluteLeft": function () {},
    "getAbsoluteRight": function () {},
    "getAbsoluteTop": function () {},
    "getScrollBarWidth": function () {},
    "getTarget": function () {},
    "getType": function () {},
    "giveRange": function () {},
    "hasParent": function () {},
    "hexToHSV": function () {},
    "hexToRGB": function () {},
    "insertSort": function () {},
    "isDate": function () {},
    "isNumber": function () {},
    "isString": function () {},
    "isValidHex": function () {},
    "isValidRGB": function () {},
    "isValidRGBA": function () {},
    "mergeOptions": function () {},
    "option": {
      "asBoolean": function () {},
      "asElement": function () {},
      "asNumber": function () {},
      "asSize": function () {},
      "asString": function () {}
    },
    "overrideOpacity": function () {},
    "parseColor": function () {},
    "preventDefault": function () {},
    "protoExtend": function () {},
    "randomUUID": function () {},
    "recursiveDOMDelete": function () {},
    "removeClassName": function () {},
    "removeCssText": function () {},
    "removeEventListener": function () {},
    "selectiveBridgeObject": function () {},
    "selectiveDeepExtend": function () {},
    "selectiveExtend": function () {},
    "selectiveNotDeepExtend": function () {},
    "throttle": function () {},
    "toArray": function () {},
    "topMost": function () {},
    "updateProperty": function () {}
  }
};
vis.DataSet.prototype = {
  "_addItem": function () {},
  "_filterFields": function () {},
  "_getItem": function () {},
  "_remove": function () {},
  "_sort": function () {},
  "_trigger": function () {},
  "_updateItem": function () {},
  "add": function () {},
  "clear": function () {},
  "distinct": function () {},
  "forEach": function () {},
  "get": function () {},
  "getDataSet": function () {},
  "getIds": function () {},
  "map": function () {},
  "max": function () {},
  "min": function () {},
  "off": function () {},
  "on": function () {},
  "remove": function () {},
  "setOptions": function () {},
  "subscribe": function () {},
  "unsubscribe": function () {},
  "update": function () {}
};
vis.DataView.prototype = {
  "_onEvent": function () {},
  "_trigger": function () {},
  "get": function () {},
  "getDataSet": function () {},
  "getIds": function () {},
  "map": function () {},
  "off": function () {},
  "on": function () {},
  "refresh": function () {},
  "setData": function () {},
  "subscribe": function () {},
  "unsubscribe": function () {}
};
vis.Graph2d.prototype = {
  "_create": function () {},
  "_createConfigurator": function () {},
  "_getScrollTop": function () {},
  "_initAutoResize": function () {},
  "_onDrag": function () {},
  "_onPinch": function () {},
  "_onTouch": function () {},
  "_redraw": function () {},
  "_setDOM": function () {},
  "_setScrollTop": function () {},
  "_startAutoResize": function () {},
  "_stopAutoResize": function () {},
  "_toGlobalScreen": function () {},
  "_toGlobalTime": function () {},
  "_toScreen": function () {},
  "_toTime": function () {},
  "_updateScrollTop": function () {},
  "addCustomTime": function () {},
  "addEventListener": function () {},
  "destroy": function () {},
  "emit": function () {},
  "fit": function () {},
  "getCurrentTime": function () {},
  "getCustomTime": function () {},
  "getDataRange": function () {},
  "getEventProperties": function () {},
  "getLegend": function () {},
  "getVisibleItems": function () {},
  "getWindow": function () {},
  "hasListeners": function () {},
  "isActive": function () {},
  "isGroupVisible": function () {},
  "listeners": function () {},
  "moveTo": function () {},
  "off": function () {},
  "on": function () {},
  "once": function () {},
  "redraw": function () {},
  "removeAllListeners": function () {},
  "removeCustomTime": function () {},
  "removeEventListener": function () {},
  "removeListener": function () {},
  "repaint": function () {},
  "setCurrentTime": function () {},
  "setCustomTime": function () {},
  "setCustomTimeTitle": function () {},
  "setGroups": function () {},
  "setItems": function () {},
  "setOptions": function () {},
  "setWindow": function () {},
  "zoomIn": function () {},
  "zoomOut": function () {}
};
vis.Graph3d.prototype = {
  "_calcRadius": function () {},
  "_calcTranslations": function () {},
  "_checkValueField": function () {},
  "_convert3Dto2D": function () {},
  "_convertPointToTranslation": function () {},
  "_convertTranslationToScreen": function () {},
  "_dataPointFromXY": function () {},
  "_dotSize": function () {},
  "_drawCircle": function () {},
  "_drawGridLine": function () {},
  "_getColorsColor": function () {},
  "_getColorsRegular": function () {},
  "_getColorsSize": function () {},
  "_getContext": function () {},
  "_getDataPoints": function () {},
  "_getLegendWidth": function () {},
  "_getStrokeWidth": function () {},
  "_hideTooltip": function () {},
  "_hsv2rgb": function () {},
  "_initializeData": function () {},
  "_insideTriangle": function () {},
  "_line": function () {},
  "_line3d": function () {},
  "_onClick": function () {},
  "_onMouseDown": function () {},
  "_onMouseMove": function () {},
  "_onMouseUp": function () {},
  "_onTooltip": function () {},
  "_onTouchEnd": function () {},
  "_onTouchMove": function () {},
  "_onTouchStart": function () {},
  "_onWheel": function () {},
  "_polygon": function () {},
  "_readData": function () {},
  "_redrawAxis": function () {},
  "_redrawBar": function () {},
  "_redrawBarColorGraphPoint": function () {},
  "_redrawBarGraphPoint": function () {},
  "_redrawBarSizeGraphPoint": function () {},
  "_redrawClear": function () {},
  "_redrawDataGraph": function () {},
  "_redrawDotColorGraphPoint": function () {},
  "_redrawDotGraphPoint": function () {},
  "_redrawDotLineGraphPoint": function () {},
  "_redrawDotSizeGraphPoint": function () {},
  "_redrawFilter": function () {},
  "_redrawGridGraphPoint": function () {},
  "_redrawInfo": function () {},
  "_redrawLegend": function () {},
  "_redrawLineGraphPoint": function () {},
  "_redrawSlider": function () {},
  "_redrawSurfaceGraphPoint": function () {},
  "_resizeCanvas": function () {},
  "_resizeCenter": function () {},
  "_setScale": function () {},
  "_setSize": function () {},
  "_showTooltip": function () {},
  "_storeMousePosition": function () {},
  "addEventListener": function () {},
  "animationStart": function () {},
  "animationStop": function () {},
  "create": function () {},
  "drawAxisLabelX": function () {},
  "drawAxisLabelY": function () {},
  "drawAxisLabelZ": function () {},
  "emit": function () {},
  "getCameraPosition": function () {},
  "getDataPoints": function () {},
  "hasBars": function () {},
  "hasListeners": function () {},
  "listeners": function () {},
  "off": function () {},
  "on": function () {},
  "once": function () {},
  "redraw": function () {},
  "removeAllListeners": function () {},
  "removeEventListener": function () {},
  "removeListener": function () {},
  "setCameraPosition": function () {},
  "setData": function () {},
  "setOptions": function () {},
  "setPointDrawingMethod": function () {},
  "setSize": function () {}
};
vis.Hammer.AttrRecognizer.prototype = {
  "_super": function () {},
  "attrTest": function () {},
  "canEmit": function () {},
  "canRecognizeWith": function () {},
  "constructor": function () {},
  "defaults": function () {},
  "dropRecognizeWith": function () {},
  "dropRequireFailure": function () {},
  "emit": function () {},
  "getTouchAction": function () {},
  "hasRequireFailures": function () {},
  "process": function () {},
  "recognize": function () {},
  "recognizeWith": function () {},
  "requireFailure": function () {},
  "reset": function () {},
  "set": function () {},
  "tryEmit": function () {}
};
vis.Hammer.Input.prototype = {
  "destroy": function () {},
  "handler": function () {},
  "init": function () {}
};
vis.Hammer.MouseInput.prototype = {
  "_super": function () {},
  "constructor": function () {},
  "destroy": function () {},
  "handler": function () {},
  "init": function () {}
};
vis.Hammer.Pan.prototype = {
  "_super": function () {},
  "attrTest": function () {},
  "canEmit": function () {},
  "canRecognizeWith": function () {},
  "constructor": function () {},
  "defaults": function () {},
  "directionTest": function () {},
  "dropRecognizeWith": function () {},
  "dropRequireFailure": function () {},
  "emit": function () {},
  "getTouchAction": function () {},
  "hasRequireFailures": function () {},
  "process": function () {},
  "recognize": function () {},
  "recognizeWith": function () {},
  "requireFailure": function () {},
  "reset": function () {},
  "set": function () {},
  "tryEmit": function () {}
};
vis.Hammer.Pinch.prototype = {
  "_super": function () {},
  "attrTest": function () {},
  "canEmit": function () {},
  "canRecognizeWith": function () {},
  "constructor": function () {},
  "defaults": function () {},
  "dropRecognizeWith": function () {},
  "dropRequireFailure": function () {},
  "emit": function () {},
  "getTouchAction": function () {},
  "hasRequireFailures": function () {},
  "process": function () {},
  "recognize": function () {},
  "recognizeWith": function () {},
  "requireFailure": function () {},
  "reset": function () {},
  "set": function () {},
  "tryEmit": function () {}
};
vis.Hammer.PointerEventInput.prototype = {
  "_super": function () {},
  "constructor": function () {},
  "destroy": function () {},
  "handler": function () {},
  "init": function () {}
};
vis.Hammer.Press.prototype = {
  "_super": function () {},
  "canEmit": function () {},
  "canRecognizeWith": function () {},
  "constructor": function () {},
  "defaults": function () {},
  "dropRecognizeWith": function () {},
  "dropRequireFailure": function () {},
  "emit": function () {},
  "getTouchAction": function () {},
  "hasRequireFailures": function () {},
  "process": function () {},
  "recognize": function () {},
  "recognizeWith": function () {},
  "requireFailure": function () {},
  "reset": function () {},
  "set": function () {},
  "tryEmit": function () {}
};
vis.Hammer.Recognizer.prototype = {
  "canEmit": function () {},
  "canRecognizeWith": function () {},
  "defaults": function () {},
  "dropRecognizeWith": function () {},
  "dropRequireFailure": function () {},
  "emit": function () {},
  "getTouchAction": function () {},
  "hasRequireFailures": function () {},
  "process": function () {},
  "recognize": function () {},
  "recognizeWith": function () {},
  "requireFailure": function () {},
  "reset": function () {},
  "set": function () {},
  "tryEmit": function () {}
};
vis.Hammer.Rotate.prototype = {
  "_super": function () {},
  "attrTest": function () {},
  "canEmit": function () {},
  "canRecognizeWith": function () {},
  "constructor": function () {},
  "defaults": function () {},
  "dropRecognizeWith": function () {},
  "dropRequireFailure": function () {},
  "emit": function () {},
  "getTouchAction": function () {},
  "hasRequireFailures": function () {},
  "process": function () {},
  "recognize": function () {},
  "recognizeWith": function () {},
  "requireFailure": function () {},
  "reset": function () {},
  "set": function () {},
  "tryEmit": function () {}
};
vis.Hammer.SingleTouchInput.prototype = {
  "_super": function () {},
  "constructor": function () {},
  "destroy": function () {},
  "handler": function () {},
  "init": function () {}
};
vis.Hammer.Swipe.prototype = {
  "_super": function () {},
  "attrTest": function () {},
  "canEmit": function () {},
  "canRecognizeWith": function () {},
  "constructor": function () {},
  "defaults": function () {},
  "dropRecognizeWith": function () {},
  "dropRequireFailure": function () {},
  "emit": function () {},
  "getTouchAction": function () {},
  "hasRequireFailures": function () {},
  "process": function () {},
  "recognize": function () {},
  "recognizeWith": function () {},
  "requireFailure": function () {},
  "reset": function () {},
  "set": function () {},
  "tryEmit": function () {}
};
vis.Hammer.Tap.prototype = {
  "_super": function () {},
  "canEmit": function () {},
  "canRecognizeWith": function () {},
  "constructor": function () {},
  "defaults": function () {},
  "dropRecognizeWith": function () {},
  "dropRequireFailure": function () {},
  "emit": function () {},
  "failTimeout": function () {},
  "getTouchAction": function () {},
  "hasRequireFailures": function () {},
  "process": function () {},
  "recognize": function () {},
  "recognizeWith": function () {},
  "requireFailure": function () {},
  "reset": function () {},
  "set": function () {},
  "tryEmit": function () {}
};
vis.Hammer.TouchAction.prototype = {
  "compute": function () {},
  "preventDefaults": function () {},
  "preventSrc": function () {},
  "set": function () {},
  "update": function () {}
};
vis.Hammer.TouchInput.prototype = {
  "_super": function () {},
  "constructor": function () {},
  "destroy": function () {},
  "handler": function () {},
  "init": function () {}
};
vis.Hammer.TouchMouseInput.prototype = {
  "_super": function () {},
  "constructor": function () {},
  "destroy": function () {},
  "handler": function () {},
  "init": function () {}
};
vis.Network.prototype = {
  "DOMtoCanvas": function () {},
  "_updateValueRange": function () {},
  "_updateVisibleIndices": function () {},
  "addEdgeMode": function () {},
  "addEventListener": function () {},
  "addNodeMode": function () {},
  "bindEventListeners": function () {},
  "canvasToDOM": function () {},
  "cluster": function () {},
  "clusterByConnection": function () {},
  "clusterByHubsize": function () {},
  "clusterOutliers": function () {},
  "deleteSelected": function () {},
  "destroy": function () {},
  "disableEditMode": function () {},
  "editEdgeMode": function () {},
  "editNode": function () {},
  "editNodeMode": function () {},
  "emit": function () {},
  "enableEditMode": function () {},
  "findNode": function () {},
  "fit": function () {},
  "focus": function () {},
  "getBoundingBox": function () {},
  "getConnectedEdges": function () {},
  "getConnectedNodes": function () {},
  "getEdgeAt": function () {},
  "getNodeAt": function () {},
  "getNodesInCluster": function () {},
  "getOptionsFromConfigurator": function () {},
  "getPositions": function () {},
  "getScale": function () {},
  "getSeed": function () {},
  "getSelectedEdges": function () {},
  "getSelectedNodes": function () {},
  "getSelection": function () {},
  "getViewPosition": function () {},
  "hasListeners": function () {},
  "isActive": function () {},
  "isCluster": function () {},
  "listeners": function () {},
  "moveNode": function () {},
  "moveTo": function () {},
  "off": function () {},
  "on": function () {},
  "once": function () {},
  "openCluster": function () {},
  "redraw": function () {},
  "releaseNode": function () {},
  "removeAllListeners": function () {},
  "removeEventListener": function () {},
  "removeListener": function () {},
  "selectEdges": function () {},
  "selectNodes": function () {},
  "setData": function () {},
  "setOptions": function () {},
  "setSelection": function () {},
  "setSize": function () {},
  "stabilize": function () {},
  "startSimulation": function () {},
  "stopSimulation": function () {},
  "storePositions": function () {},
  "unselectAll": function () {}
};
vis.Queue.prototype = {
  "_flushIfNeeded": function () {},
  "destroy": function () {},
  "flush": function () {},
  "queue": function () {},
  "replace": function () {},
  "setOptions": function () {}
};
vis.Timeline.prototype = {
  "_create": function () {},
  "_createConfigurator": function () {},
  "_getScrollTop": function () {},
  "_initAutoResize": function () {},
  "_onDrag": function () {},
  "_onPinch": function () {},
  "_onTouch": function () {},
  "_redraw": function () {},
  "_setDOM": function () {},
  "_setScrollTop": function () {},
  "_startAutoResize": function () {},
  "_stopAutoResize": function () {},
  "_toGlobalScreen": function () {},
  "_toGlobalTime": function () {},
  "_toScreen": function () {},
  "_toTime": function () {},
  "_updateScrollTop": function () {},
  "addCustomTime": function () {},
  "addEventListener": function () {},
  "destroy": function () {},
  "emit": function () {},
  "fit": function () {},
  "focus": function () {},
  "getCurrentTime": function () {},
  "getCustomTime": function () {},
  "getDataRange": function () {},
  "getEventProperties": function () {},
  "getItemRange": function () {},
  "getSelection": function () {},
  "getVisibleItems": function () {},
  "getWindow": function () {},
  "hasListeners": function () {},
  "isActive": function () {},
  "listeners": function () {},
  "moveTo": function () {},
  "off": function () {},
  "on": function () {},
  "once": function () {},
  "redraw": function () {},
  "removeAllListeners": function () {},
  "removeCustomTime": function () {},
  "removeEventListener": function () {},
  "removeListener": function () {},
  "repaint": function () {},
  "setCurrentTime": function () {},
  "setCustomTime": function () {},
  "setCustomTimeTitle": function () {},
  "setData": function () {},
  "setGroups": function () {},
  "setItems": function () {},
  "setOptions": function () {},
  "setSelection": function () {},
  "setWindow": function () {},
  "toggleRollingMode": function () {},
  "zoomIn": function () {},
  "zoomOut": function () {}
};
vis.graph3d.Camera.prototype = {
  "calculateCameraOrientation": function () {},
  "getArmLength": function () {},
  "getArmRotation": function () {},
  "getCameraLocation": function () {},
  "getCameraRotation": function () {},
  "getOffset": function () {},
  "setArmLength": function () {},
  "setArmLocation": function () {},
  "setArmRotation": function () {},
  "setOffset": function () {}
};
vis.graph3d.Filter.prototype = {
  "_getDataPoints": function () {},
  "getColumn": function () {},
  "getLabel": function () {},
  "getLoadedProgress": function () {},
  "getSelectedValue": function () {},
  "getValue": function () {},
  "getValues": function () {},
  "isLoaded": function () {},
  "loadInBackground": function () {},
  "selectValue": function () {},
  "setOnLoadCallback": function () {}
};
vis.graph3d.Point3d.prototype = {
  "length": function () {}
};
vis.graph3d.Slider.prototype = {
  "_onMouseDown": function () {},
  "_onMouseMove": function () {},
  "_onMouseUp": function () {},
  "get": function () {},
  "getIndex": function () {},
  "getPlayInterval": function () {},
  "indexToLeft": function () {},
  "leftToIndex": function () {},
  "next": function () {},
  "onChange": function () {},
  "play": function () {},
  "playNext": function () {},
  "prev": function () {},
  "redraw": function () {},
  "setIndex": function () {},
  "setOnChangeCallback": function () {},
  "setPlayInterval": function () {},
  "setPlayLoop": function () {},
  "setValues": function () {},
  "stop": function () {},
  "togglePlay": function () {}
};
vis.graph3d.StepNumber.prototype = {
  "end": function () {},
  "getCurrent": function () {},
  "getStep": function () {},
  "isNumeric": function () {},
  "next": function () {},
  "setRange": function () {},
  "setStep": function () {},
  "start": function () {}
};
vis.moment.prototype = {
  "add": function () {},
  "calendar": function () {},
  "clone": function () {},
  "creationData": function () {},
  "date": function () {},
  "dates": function () {},
  "day": function () {},
  "dayOfYear": function () {},
  "days": function () {},
  "daysInMonth": function () {},
  "diff": function () {},
  "endOf": function () {},
  "format": function () {},
  "from": function () {},
  "fromNow": function () {},
  "get": function () {},
  "hasAlignedHourOffset": function () {},
  "hour": function () {},
  "hours": function () {},
  "inspect": function () {},
  "invalidAt": function () {},
  "isAfter": function () {},
  "isBefore": function () {},
  "isBetween": function () {},
  "isDST": function () {},
  "isDSTShifted": function () {},
  "isLeapYear": function () {},
  "isLocal": function () {},
  "isSame": function () {},
  "isSameOrAfter": function () {},
  "isSameOrBefore": function () {},
  "isUTC": function () {},
  "isUtc": function () {},
  "isUtcOffset": function () {},
  "isValid": function () {},
  "isoWeek": function () {},
  "isoWeekYear": function () {},
  "isoWeekday": function () {},
  "isoWeeks": function () {},
  "isoWeeksInYear": function () {},
  "lang": function () {},
  "local": function () {},
  "locale": function () {},
  "localeData": function () {},
  "max": function () {},
  "millisecond": function () {},
  "milliseconds": function () {},
  "min": function () {},
  "minute": function () {},
  "minutes": function () {},
  "month": function () {},
  "months": function () {},
  "parseZone": function () {},
  "parsingFlags": function () {},
  "quarter": function () {},
  "quarters": function () {},
  "second": function () {},
  "seconds": function () {},
  "set": function () {},
  "startOf": function () {},
  "subtract": function () {},
  "to": function () {},
  "toArray": function () {},
  "toDate": function () {},
  "toISOString": function () {},
  "toJSON": function () {},
  "toNow": function () {},
  "toObject": function () {},
  "toString": function () {},
  "unix": function () {},
  "utc": function () {},
  "utcOffset": function () {},
  "valueOf": function () {},
  "week": function () {},
  "weekYear": function () {},
  "weekday": function () {},
  "weeks": function () {},
  "weeksInYear": function () {},
  "year": function () {},
  "years": function () {},
  "zone": function () {},
  "zoneAbbr": function () {},
  "zoneName": function () {}
};
vis.timeline.Core.prototype = {
  "_create": function () {},
  "_createConfigurator": function () {},
  "_getScrollTop": function () {},
  "_initAutoResize": function () {},
  "_onDrag": function () {},
  "_onPinch": function () {},
  "_onTouch": function () {},
  "_redraw": function () {},
  "_setDOM": function () {},
  "_setScrollTop": function () {},
  "_startAutoResize": function () {},
  "_stopAutoResize": function () {},
  "_toGlobalScreen": function () {},
  "_toGlobalTime": function () {},
  "_toScreen": function () {},
  "_toTime": function () {},
  "_updateScrollTop": function () {},
  "addCustomTime": function () {},
  "addEventListener": function () {},
  "destroy": function () {},
  "emit": function () {},
  "fit": function () {},
  "getCurrentTime": function () {},
  "getCustomTime": function () {},
  "getDataRange": function () {},
  "getEventProperties": function () {},
  "getVisibleItems": function () {},
  "getWindow": function () {},
  "hasListeners": function () {},
  "isActive": function () {},
  "listeners": function () {},
  "moveTo": function () {},
  "off": function () {},
  "on": function () {},
  "once": function () {},
  "redraw": function () {},
  "removeAllListeners": function () {},
  "removeCustomTime": function () {},
  "removeEventListener": function () {},
  "removeListener": function () {},
  "repaint": function () {},
  "setCurrentTime": function () {},
  "setCustomTime": function () {},
  "setCustomTimeTitle": function () {},
  "setOptions": function () {},
  "setWindow": function () {},
  "zoomIn": function () {},
  "zoomOut": function () {}
};
vis.timeline.Range.prototype = {
  "_applyRange": function () {},
  "_cancelAnimation": function () {},
  "_isInsideRange": function () {},
  "_isResized": function () {},
  "_onDrag": function () {},
  "_onDragEnd": function () {},
  "_onDragStart": function () {},
  "_onMouseWheel": function () {},
  "_onPinch": function () {},
  "_onTouch": function () {},
  "_pointerToDate": function () {},
  "conversion": function () {},
  "destroy": function () {},
  "getMillisecondsPerPixel": function () {},
  "getPointer": function () {},
  "getRange": function () {},
  "move": function () {},
  "moveTo": function () {},
  "options": function () {},
  "props": function () {},
  "redraw": function () {},
  "setOptions": function () {},
  "setRange": function () {},
  "startRolling": function () {},
  "stopRolling": function () {},
  "zoom": function () {}
};
vis.timeline.TimeStep.prototype = {
  "getClassName": function () {},
  "getCurrent": function () {},
  "getLabelMajor": function () {},
  "getLabelMinor": function () {},
  "hasNext": function () {},
  "isMajor": function () {},
  "next": function () {},
  "roundToMinor": function () {},
  "setAutoScale": function () {},
  "setFormat": function () {},
  "setMinimumStep": function () {},
  "setMoment": function () {},
  "setRange": function () {},
  "setScale": function () {},
  "start": function () {}
};
vis.timeline.components.BackgroundGroup.prototype = {
  "_addToSubgroup": function () {},
  "_calculateHeight": function () {},
  "_calculateSubGroupHeights": function () {},
  "_checkIfVisible": function () {},
  "_checkIfVisibleWithReference": function () {},
  "_create": function () {},
  "_isGroupVisible": function () {},
  "_removeFromSubgroup": function () {},
  "_traceVisible": function () {},
  "_updateItemsInRange": function () {},
  "_updateSubgroupsSizes": function () {},
  "add": function () {},
  "changeSubgroup": function () {},
  "getLabelWidth": function () {},
  "hide": function () {},
  "order": function () {},
  "orderSubgroups": function () {},
  "redraw": function () {},
  "remove": function () {},
  "removeFromDataSet": function () {},
  "resetSubgroups": function () {},
  "setData": function () {},
  "show": function () {}
};
vis.timeline.components.Component.prototype = {
  "_isResized": function () {},
  "destroy": function () {},
  "redraw": function () {},
  "setOptions": function () {}
};
vis.timeline.components.CurrentTime.prototype = {
  "_create": function () {},
  "_isResized": function () {},
  "destroy": function () {},
  "getCurrentTime": function () {},
  "options": function () {},
  "props": function () {},
  "redraw": function () {},
  "setCurrentTime": function () {},
  "setOptions": function () {},
  "start": function () {},
  "stop": function () {}
};
vis.timeline.components.CustomTime.prototype = {
  "_create": function () {},
  "_isResized": function () {},
  "_onDrag": function () {},
  "_onDragEnd": function () {},
  "_onDragStart": function () {},
  "destroy": function () {},
  "getCustomTime": function () {},
  "hide": function () {},
  "options": function () {},
  "props": function () {},
  "redraw": function () {},
  "setCustomTime": function () {},
  "setCustomTitle": function () {},
  "setOptions": function () {}
};
vis.timeline.components.DataAxis.prototype = {
  "_calculateCharSize": function () {},
  "_cleanupIcons": function () {},
  "_create": function () {},
  "_isResized": function () {},
  "_redrawGroupIcons": function () {},
  "_redrawLabel": function () {},
  "_redrawLabels": function () {},
  "_redrawLine": function () {},
  "_redrawTitle": function () {},
  "addGroup": function () {},
  "convertValue": function () {},
  "destroy": function () {},
  "hide": function () {},
  "options": function () {},
  "props": function () {},
  "redraw": function () {},
  "removeGroup": function () {},
  "screenToValue": function () {},
  "setOptions": function () {},
  "setRange": function () {},
  "show": function () {},
  "updateGroup": function () {}
};
vis.timeline.components.DataScale.prototype = {
  "convertValue": function () {},
  "determineScale": function () {},
  "followScale": function () {},
  "formatValue": function () {},
  "getFirstMajor": function () {},
  "getLines": function () {},
  "getStep": function () {},
  "is_major": function () {},
  "screenToValue": function () {},
  "setCharHeight": function () {},
  "setHeight": function () {}
};
vis.timeline.components.GraphGroup.prototype = {
  "getItems": function () {},
  "getLegend": function () {},
  "getYRange": function () {},
  "setItems": function () {},
  "setOptions": function () {},
  "setZeroPosition": function () {},
  "update": function () {}
};
vis.timeline.components.Group.prototype = {
  "_addToSubgroup": function () {},
  "_calculateHeight": function () {},
  "_calculateSubGroupHeights": function () {},
  "_checkIfVisible": function () {},
  "_checkIfVisibleWithReference": function () {},
  "_create": function () {},
  "_isGroupVisible": function () {},
  "_removeFromSubgroup": function () {},
  "_traceVisible": function () {},
  "_updateItemsInRange": function () {},
  "_updateSubgroupsSizes": function () {},
  "add": function () {},
  "changeSubgroup": function () {},
  "getLabelWidth": function () {},
  "hide": function () {},
  "order": function () {},
  "orderSubgroups": function () {},
  "redraw": function () {},
  "remove": function () {},
  "removeFromDataSet": function () {},
  "resetSubgroups": function () {},
  "setData": function () {},
  "show": function () {}
};
vis.timeline.components.ItemSet.prototype = {
  "_addItem": function () {},
  "_cloneItemData": function () {},
  "_constructByEndArray": function () {},
  "_create": function () {},
  "_deselect": function () {},
  "_firstGroup": function () {},
  "_getGroupId": function () {},
  "_getGroupIndex": function () {},
  "_getType": function () {},
  "_isResized": function () {},
  "_moveToGroup": function () {},
  "_onAdd": function () {},
  "_onAddGroups": function () {},
  "_onAddItem": function () {},
  "_onDrag": function () {},
  "_onDragEnd": function () {},
  "_onDragStart": function () {},
  "_onDragStartAddItem": function () {},
  "_onGroupClick": function () {},
  "_onGroupDrag": function () {},
  "_onGroupDragEnd": function () {},
  "_onGroupDragStart": function () {},
  "_onMouseMove": function () {},
  "_onMouseOut": function () {},
  "_onMouseOver": function () {},
  "_onMouseWheel": function () {},
  "_onMultiSelectItem": function () {},
  "_onRemove": function () {},
  "_onRemoveGroups": function () {},
  "_onSelectItem": function () {},
  "_onTouch": function () {},
  "_onUpdate": function () {},
  "_onUpdateGroups": function () {},
  "_onUpdateItem": function () {},
  "_order": function () {},
  "_orderGroups": function () {},
  "_orderNestedGroups": function () {},
  "_removeItem": function () {},
  "_updateItem": function () {},
  "_updateUngrouped": function () {},
  "destroy": function () {},
  "getGroups": function () {},
  "getItems": function () {},
  "getLabelSet": function () {},
  "getSelection": function () {},
  "getVisibleItems": function () {},
  "groupFromTarget": function () {},
  "hide": function () {},
  "itemFromElement": function () {},
  "itemFromRelatedTarget": function () {},
  "itemFromTarget": function () {},
  "markDirty": function () {},
  "options": function () {},
  "props": function () {},
  "redraw": function () {},
  "removeItem": function () {},
  "setGroups": function () {},
  "setItems": function () {},
  "setOptions": function () {},
  "setSelection": function () {},
  "show": function () {}
};
vis.timeline.components.ItemSet.types.background.prototype = {
  "_contentToString": function () {},
  "_repaintDeleteButton": function () {},
  "_repaintDragCenter": function () {},
  "_repaintOnItemUpdateTimeTooltip": function () {},
  "_updateContents": function () {},
  "_updateDataAttributes": function () {},
  "_updateEditStatus": function () {},
  "_updateStyle": function () {},
  "baseClassName": function () {},
  "conversion": function () {},
  "data": function () {},
  "dirty": function () {},
  "displayed": function () {},
  "dom": function () {},
  "editable": function () {},
  "getTitle": function () {},
  "getWidthLeft": function () {},
  "getWidthRight": function () {},
  "groupShowing": function () {},
  "height": function () {},
  "hide": function () {},
  "id": function () {},
  "isVisible": function () {},
  "left": function () {},
  "options": function () {},
  "parent": function () {},
  "redraw": function () {},
  "repositionX": function () {},
  "repositionY": function () {},
  "right": function () {},
  "select": function () {},
  "selected": function () {},
  "setData": function () {},
  "setParent": function () {},
  "show": function () {},
  "stack": function () {},
  "top": function () {},
  "unselect": function () {},
  "width": function () {}
};
vis.timeline.components.ItemSet.types.box.prototype = {
  "_contentToString": function () {},
  "_repaintDeleteButton": function () {},
  "_repaintDragCenter": function () {},
  "_repaintOnItemUpdateTimeTooltip": function () {},
  "_updateContents": function () {},
  "_updateDataAttributes": function () {},
  "_updateEditStatus": function () {},
  "_updateStyle": function () {},
  "conversion": function () {},
  "data": function () {},
  "dirty": function () {},
  "displayed": function () {},
  "dom": function () {},
  "editable": function () {},
  "getTitle": function () {},
  "getWidthLeft": function () {},
  "getWidthRight": function () {},
  "groupShowing": function () {},
  "height": function () {},
  "hide": function () {},
  "id": function () {},
  "isVisible": function () {},
  "left": function () {},
  "options": function () {},
  "parent": function () {},
  "redraw": function () {},
  "repositionX": function () {},
  "repositionY": function () {},
  "right": function () {},
  "select": function () {},
  "selected": function () {},
  "setData": function () {},
  "setParent": function () {},
  "show": function () {},
  "stack": function () {},
  "top": function () {},
  "unselect": function () {},
  "width": function () {}
};
vis.timeline.components.ItemSet.types.point.prototype = {
  "_contentToString": function () {},
  "_repaintDeleteButton": function () {},
  "_repaintDragCenter": function () {},
  "_repaintOnItemUpdateTimeTooltip": function () {},
  "_updateContents": function () {},
  "_updateDataAttributes": function () {},
  "_updateEditStatus": function () {},
  "_updateStyle": function () {},
  "conversion": function () {},
  "data": function () {},
  "dirty": function () {},
  "displayed": function () {},
  "dom": function () {},
  "editable": function () {},
  "getTitle": function () {},
  "getWidthLeft": function () {},
  "getWidthRight": function () {},
  "groupShowing": function () {},
  "height": function () {},
  "hide": function () {},
  "id": function () {},
  "isVisible": function () {},
  "left": function () {},
  "options": function () {},
  "parent": function () {},
  "redraw": function () {},
  "repositionX": function () {},
  "repositionY": function () {},
  "right": function () {},
  "select": function () {},
  "selected": function () {},
  "setData": function () {},
  "setParent": function () {},
  "show": function () {},
  "stack": function () {},
  "top": function () {},
  "unselect": function () {},
  "width": function () {}
};
vis.timeline.components.ItemSet.types.range.prototype = {
  "_contentToString": function () {},
  "_repaintDeleteButton": function () {},
  "_repaintDragCenter": function () {},
  "_repaintDragLeft": function () {},
  "_repaintDragRight": function () {},
  "_repaintOnItemUpdateTimeTooltip": function () {},
  "_updateContents": function () {},
  "_updateDataAttributes": function () {},
  "_updateEditStatus": function () {},
  "_updateStyle": function () {},
  "baseClassName": function () {},
  "conversion": function () {},
  "data": function () {},
  "dirty": function () {},
  "displayed": function () {},
  "dom": function () {},
  "editable": function () {},
  "getTitle": function () {},
  "getWidthLeft": function () {},
  "getWidthRight": function () {},
  "groupShowing": function () {},
  "height": function () {},
  "hide": function () {},
  "id": function () {},
  "isVisible": function () {},
  "left": function () {},
  "options": function () {},
  "parent": function () {},
  "redraw": function () {},
  "repositionX": function () {},
  "repositionY": function () {},
  "right": function () {},
  "select": function () {},
  "selected": function () {},
  "setData": function () {},
  "setParent": function () {},
  "show": function () {},
  "stack": function () {},
  "top": function () {},
  "unselect": function () {},
  "width": function () {}
};
vis.timeline.components.Legend.prototype = {
  "_create": function () {},
  "_isResized": function () {},
  "addGroup": function () {},
  "clear": function () {},
  "destroy": function () {},
  "drawLegendIcons": function () {},
  "hide": function () {},
  "options": function () {},
  "props": function () {},
  "redraw": function () {},
  "removeGroup": function () {},
  "setOptions": function () {},
  "show": function () {},
  "updateGroup": function () {}
};
vis.timeline.components.LineGraph.prototype = {
  "_applySampling": function () {},
  "_convertXcoordinates": function () {},
  "_convertYcoordinates": function () {},
  "_create": function () {},
  "_getRelevantData": function () {},
  "_getSortedGroupIds": function () {},
  "_getYRanges": function () {},
  "_isResized": function () {},
  "_onAdd": function () {},
  "_onAddGroups": function () {},
  "_onRemove": function () {},
  "_onRemoveGroups": function () {},
  "_onUpdate": function () {},
  "_onUpdateGroups": function () {},
  "_removeGroup": function () {},
  "_stack": function () {},
  "_toggleAxisVisiblity": function () {},
  "_updateAllGroupData": function () {},
  "_updateGraph": function () {},
  "_updateGroup": function () {},
  "_updateYAxis": function () {},
  "destroy": function () {},
  "hide": function () {},
  "options": function () {},
  "props": function () {},
  "redraw": function () {},
  "setGroups": function () {},
  "setItems": function () {},
  "setOptions": function () {},
  "show": function () {}
};
vis.timeline.components.TimeAxis.prototype = {
  "_calculateCharSize": function () {},
  "_create": function () {},
  "_isResized": function () {},
  "_repaintLabels": function () {},
  "_repaintMajorLine": function () {},
  "_repaintMajorText": function () {},
  "_repaintMinorLine": function () {},
  "_repaintMinorText": function () {},
  "destroy": function () {},
  "options": function () {},
  "props": function () {},
  "redraw": function () {},
  "setOptions": function () {}
};
vis.timeline.components.items.BackgroundItem.prototype = {
  "_contentToString": function () {},
  "_repaintDeleteButton": function () {},
  "_repaintDragCenter": function () {},
  "_repaintOnItemUpdateTimeTooltip": function () {},
  "_updateContents": function () {},
  "_updateDataAttributes": function () {},
  "_updateEditStatus": function () {},
  "_updateStyle": function () {},
  "baseClassName": function () {},
  "conversion": function () {},
  "data": function () {},
  "dirty": function () {},
  "displayed": function () {},
  "dom": function () {},
  "editable": function () {},
  "getTitle": function () {},
  "getWidthLeft": function () {},
  "getWidthRight": function () {},
  "groupShowing": function () {},
  "height": function () {},
  "hide": function () {},
  "id": function () {},
  "isVisible": function () {},
  "left": function () {},
  "options": function () {},
  "parent": function () {},
  "redraw": function () {},
  "repositionX": function () {},
  "repositionY": function () {},
  "right": function () {},
  "select": function () {},
  "selected": function () {},
  "setData": function () {},
  "setParent": function () {},
  "show": function () {},
  "stack": function () {},
  "top": function () {},
  "unselect": function () {},
  "width": function () {}
};
vis.timeline.components.items.BoxItem.prototype = {
  "_contentToString": function () {},
  "_repaintDeleteButton": function () {},
  "_repaintDragCenter": function () {},
  "_repaintOnItemUpdateTimeTooltip": function () {},
  "_updateContents": function () {},
  "_updateDataAttributes": function () {},
  "_updateEditStatus": function () {},
  "_updateStyle": function () {},
  "conversion": function () {},
  "data": function () {},
  "dirty": function () {},
  "displayed": function () {},
  "dom": function () {},
  "editable": function () {},
  "getTitle": function () {},
  "getWidthLeft": function () {},
  "getWidthRight": function () {},
  "groupShowing": function () {},
  "height": function () {},
  "hide": function () {},
  "id": function () {},
  "isVisible": function () {},
  "left": function () {},
  "options": function () {},
  "parent": function () {},
  "redraw": function () {},
  "repositionX": function () {},
  "repositionY": function () {},
  "right": function () {},
  "select": function () {},
  "selected": function () {},
  "setData": function () {},
  "setParent": function () {},
  "show": function () {},
  "stack": function () {},
  "top": function () {},
  "unselect": function () {},
  "width": function () {}
};
vis.timeline.components.items.Item.prototype = {
  "_contentToString": function () {},
  "_repaintDeleteButton": function () {},
  "_repaintDragCenter": function () {},
  "_repaintOnItemUpdateTimeTooltip": function () {},
  "_updateContents": function () {},
  "_updateDataAttributes": function () {},
  "_updateEditStatus": function () {},
  "_updateStyle": function () {},
  "getTitle": function () {},
  "getWidthLeft": function () {},
  "getWidthRight": function () {},
  "hide": function () {},
  "isVisible": function () {},
  "redraw": function () {},
  "repositionX": function () {},
  "repositionY": function () {},
  "select": function () {},
  "setData": function () {},
  "setParent": function () {},
  "show": function () {},
  "stack": function () {},
  "unselect": function () {}
};
vis.timeline.components.items.PointItem.prototype = {
  "_contentToString": function () {},
  "_repaintDeleteButton": function () {},
  "_repaintDragCenter": function () {},
  "_repaintOnItemUpdateTimeTooltip": function () {},
  "_updateContents": function () {},
  "_updateDataAttributes": function () {},
  "_updateEditStatus": function () {},
  "_updateStyle": function () {},
  "conversion": function () {},
  "data": function () {},
  "dirty": function () {},
  "displayed": function () {},
  "dom": function () {},
  "editable": function () {},
  "getTitle": function () {},
  "getWidthLeft": function () {},
  "getWidthRight": function () {},
  "groupShowing": function () {},
  "height": function () {},
  "hide": function () {},
  "id": function () {},
  "isVisible": function () {},
  "left": function () {},
  "options": function () {},
  "parent": function () {},
  "redraw": function () {},
  "repositionX": function () {},
  "repositionY": function () {},
  "right": function () {},
  "select": function () {},
  "selected": function () {},
  "setData": function () {},
  "setParent": function () {},
  "show": function () {},
  "stack": function () {},
  "top": function () {},
  "unselect": function () {},
  "width": function () {}
};
vis.timeline.components.items.RangeItem.prototype = {
  "_contentToString": function () {},
  "_repaintDeleteButton": function () {},
  "_repaintDragCenter": function () {},
  "_repaintDragLeft": function () {},
  "_repaintDragRight": function () {},
  "_repaintOnItemUpdateTimeTooltip": function () {},
  "_updateContents": function () {},
  "_updateDataAttributes": function () {},
  "_updateEditStatus": function () {},
  "_updateStyle": function () {},
  "baseClassName": function () {},
  "conversion": function () {},
  "data": function () {},
  "dirty": function () {},
  "displayed": function () {},
  "dom": function () {},
  "editable": function () {},
  "getTitle": function () {},
  "getWidthLeft": function () {},
  "getWidthRight": function () {},
  "groupShowing": function () {},
  "height": function () {},
  "hide": function () {},
  "id": function () {},
  "isVisible": function () {},
  "left": function () {},
  "options": function () {},
  "parent": function () {},
  "redraw": function () {},
  "repositionX": function () {},
  "repositionY": function () {},
  "right": function () {},
  "select": function () {},
  "selected": function () {},
  "setData": function () {},
  "setParent": function () {},
  "show": function () {},
  "stack": function () {},
  "top": function () {},
  "unselect": function () {},
  "width": function () {}
};
/**********************************************************************
 * End Generated Extern for vis
/**********************************************************************/
