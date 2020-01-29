export const schema1 = {
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://example.com/root.json",
    "type": "object",
    "minProperties": 1,
    "additionalProperties": false,
    "required": [
        "customContent",
        "font",
        "lotaltyPoints",
        "productIcons",
        "grid",
        "progressIndicator",
        "heroImage",
        "landingPage",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "link",
        "urgencyTrigger",
        "border",
        "background",
        "box",
        "modal",
        "gallery",
        "spinner",
        "page",
        "header",
        "input",
        "button",
        "message",
        "calendar",
        "imageHeight",
        "addOn",
        "checkout",
        "palette"
    ],
    "properties": {
        "fontsUsage": {
            "$id": "#/properties/fontsUsage",
            "type": "object"
        },
        "customContent": {
            "$id": "#/properties/customContent",
            "type": "object"
        },
        "font": {
            "$id": "#/properties/font",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "main",
                "secondary",
                "color",
                "colorAlternate",
                "colorHighlight",
                "colorLight",
                "baseSize",
                "smallerSize",
                "thin",
                "normalWeight",
                "bold",
                "lineHeight"
            ],
            "properties": {
                "main": {
                    "$id": "#/properties/font/properties/main",
                    "type": "string",
                    "minLength": 1
                },
                "secondary": {
                    "$id": "#/properties/font/properties/secondary",
                    "type": "string",
                    "minLength": 1
                },
                "color": {
                    "$id": "#/properties/font/properties/color",
                    "type": "string",
                    "minLength": 1
                },
                "colorAlternate": {
                    "$id": "#/properties/font/properties/colorAlternate",
                    "type": "string",
                    "minLength": 1
                },
                "colorHighlight": {
                    "$id": "#/properties/font/properties/colorHighlight",
                    "type": "string",
                    "minLength": 1
                },
                "colorLight": {
                    "$id": "#/properties/font/properties/colorLight",
                    "type": "string",
                    "minLength": 1
                },
                "baseSize": {
                    "$id": "#/properties/font/properties/baseSize",
                    "type": "string",
                    "minLength": 1
                },
                "smallerSize": {
                    "$id": "#/properties/font/properties/smallerSize",
                    "type": "string",
                    "minLength": 1
                },
                "thin": {
                    "$id": "#/properties/font/properties/thin",
                    "type": "string",
                    "minLength": 1
                },
                "normalWeight": {
                    "$id": "#/properties/font/properties/normalWeight",
                    "type": "string",
                    "minLength": 1
                },
                "bold": {
                    "$id": "#/properties/font/properties/bold",
                    "type": "string",
                    "minLength": 1
                },
                "lineHeight": {
                    "$id": "#/properties/font/properties/lineHeight",
                    "type": "string",
                    "minLength": 1
                }
            }
        },
        "lotaltyPoints": {
            "$id": "#/properties/lotaltyPoints",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "color",
                "fontWeight"
            ],
            "properties": {
                "color": {
                    "$id": "#/properties/lotaltyPoints/properties/color",
                    "type": "string",
                    "minLength": 1
                },
                "fontWeight": {
                    "$id": "#/properties/lotaltyPoints/properties/fontWeight",
                    "type": "string",
                    "minLength": 1
                }
            }
        },
        "productIcons": {
            "$id": "#/properties/productIcons",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "colorHighlight"
            ],
            "properties": {
                "colorHighlight": {
                    "$id": "#/properties/productIcons/properties/colorHighlight",
                    "type": "string",
                    "minLength": 1
                }
            }
        },
        "grid": {
            "$id": "#/properties/grid",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "head",
                "row"
            ],
            "properties": {
                "head": {
                    "$id": "#/properties/grid/properties/head",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "background",
                        "color",
                        "fontWeight",
                        "fontSize"
                    ],
                    "properties": {
                        "background": {
                            "$id": "#/properties/grid/properties/head/properties/background",
                            "type": "string",
                            "minLength": 1
                        },
                        "color": {
                            "$id": "#/properties/grid/properties/head/properties/color",
                            "type": "string",
                            "minLength": 1
                        },
                        "fontWeight": {
                            "$id": "#/properties/grid/properties/head/properties/fontWeight",
                            "type": "string",
                            "minLength": 1
                        },
                        "fontSize": {
                            "$id": "#/properties/grid/properties/head/properties/fontSize",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "row": {
                    "$id": "#/properties/grid/properties/row",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "background",
                        "border",
                        "color",
                        "fontWeight"
                    ],
                    "properties": {
                        "background": {
                            "$id": "#/properties/grid/properties/row/properties/background",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "hover"
                            ],
                            "properties": {
                                "hover": {
                                    "$id": "#/properties/grid/properties/row/properties/background/properties/hover",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "border": {
                            "$id": "#/properties/grid/properties/row/properties/border",
                            "type": "string",
                            "minLength": 1
                        },
                        "color": {
                            "$id": "#/properties/grid/properties/row/properties/color",
                            "type": "string",
                            "minLength": 1
                        },
                        "fontWeight": {
                            "$id": "#/properties/grid/properties/row/properties/fontWeight",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                }
            }
        },
        "progressIndicator": {
            "$id": "#/properties/progressIndicator",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "icon",
                "text",
                "line",
                "current",
                "next",
                "completed",
                "mobileSelect",
                "mobile"
            ],
            "properties": {
                "icon": {
                    "$id": "#/properties/progressIndicator/properties/icon",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "fontSize",
                        "fontWeight"
                    ],
                    "properties": {
                        "fontSize": {
                            "$id": "#/properties/progressIndicator/properties/icon/properties/fontSize",
                            "type": "string",
                            "minLength": 1
                        },
                        "fontWeight": {
                            "$id": "#/properties/progressIndicator/properties/icon/properties/fontWeight",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "text": {
                    "$id": "#/properties/progressIndicator/properties/text",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "fontSize"
                    ],
                    "properties": {
                        "fontSize": {
                            "$id": "#/properties/progressIndicator/properties/text/properties/fontSize",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "line": {
                    "$id": "#/properties/progressIndicator/properties/line",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "height"
                    ],
                    "properties": {
                        "height": {
                            "$id": "#/properties/progressIndicator/properties/line/properties/height",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "current": {
                    "$id": "#/properties/progressIndicator/properties/current",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "icon",
                        "text"
                    ],
                    "properties": {
                        "icon": {
                            "$id": "#/properties/progressIndicator/properties/current/properties/icon",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "background",
                                "border",
                                "color"
                            ],
                            "properties": {
                                "background": {
                                    "$id": "#/properties/progressIndicator/properties/current/properties/icon/properties/background",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "border": {
                                    "$id": "#/properties/progressIndicator/properties/current/properties/icon/properties/border",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "color": {
                                    "$id": "#/properties/progressIndicator/properties/current/properties/icon/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "text": {
                            "$id": "#/properties/progressIndicator/properties/current/properties/text",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "color",
                                "fontWeight"
                            ],
                            "properties": {
                                "color": {
                                    "$id": "#/properties/progressIndicator/properties/current/properties/text/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "fontWeight": {
                                    "$id": "#/properties/progressIndicator/properties/current/properties/text/properties/fontWeight",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        }
                    }
                },
                "next": {
                    "$id": "#/properties/progressIndicator/properties/next",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "icon",
                        "text",
                        "line"
                    ],
                    "properties": {
                        "icon": {
                            "$id": "#/properties/progressIndicator/properties/next/properties/icon",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "background",
                                "border",
                                "color"
                            ],
                            "properties": {
                                "background": {
                                    "$id": "#/properties/progressIndicator/properties/next/properties/icon/properties/background",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "border": {
                                    "$id": "#/properties/progressIndicator/properties/next/properties/icon/properties/border",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "color": {
                                    "$id": "#/properties/progressIndicator/properties/next/properties/icon/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "text": {
                            "$id": "#/properties/progressIndicator/properties/next/properties/text",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "color",
                                "fontWeight"
                            ],
                            "properties": {
                                "color": {
                                    "$id": "#/properties/progressIndicator/properties/next/properties/text/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "fontWeight": {
                                    "$id": "#/properties/progressIndicator/properties/next/properties/text/properties/fontWeight",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "line": {
                            "$id": "#/properties/progressIndicator/properties/next/properties/line",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "color"
                            ],
                            "properties": {
                                "color": {
                                    "$id": "#/properties/progressIndicator/properties/next/properties/line/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        }
                    }
                },
                "completed": {
                    "$id": "#/properties/progressIndicator/properties/completed",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "icon",
                        "text",
                        "line"
                    ],
                    "properties": {
                        "icon": {
                            "$id": "#/properties/progressIndicator/properties/completed/properties/icon",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "background",
                                "border",
                                "color"
                            ],
                            "properties": {
                                "background": {
                                    "$id": "#/properties/progressIndicator/properties/completed/properties/icon/properties/background",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "border": {
                                    "$id": "#/properties/progressIndicator/properties/completed/properties/icon/properties/border",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "color": {
                                    "$id": "#/properties/progressIndicator/properties/completed/properties/icon/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "text": {
                            "$id": "#/properties/progressIndicator/properties/completed/properties/text",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "color",
                                "fontWeight"
                            ],
                            "properties": {
                                "color": {
                                    "$id": "#/properties/progressIndicator/properties/completed/properties/text/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "fontWeight": {
                                    "$id": "#/properties/progressIndicator/properties/completed/properties/text/properties/fontWeight",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "line": {
                            "$id": "#/properties/progressIndicator/properties/completed/properties/line",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "color"
                            ],
                            "properties": {
                                "color": {
                                    "$id": "#/properties/progressIndicator/properties/completed/properties/line/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        }
                    }
                },
                "mobileSelect": {
                    "$id": "#/properties/progressIndicator/properties/mobileSelect",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "border",
                        "background",
                        "textTransform",
                        "fontWeight",
                        "fontSize",
                        "color"
                    ],
                    "properties": {
                        "border": {
                            "$id": "#/properties/progressIndicator/properties/mobileSelect/properties/border",
                            "type": "string",
                            "minLength": 1
                        },
                        "background": {
                            "$id": "#/properties/progressIndicator/properties/mobileSelect/properties/background",
                            "type": "string",
                            "minLength": 1
                        },
                        "textTransform": {
                            "$id": "#/properties/progressIndicator/properties/mobileSelect/properties/textTransform",
                            "type": "string",
                            "minLength": 1
                        },
                        "fontWeight": {
                            "$id": "#/properties/progressIndicator/properties/mobileSelect/properties/fontWeight",
                            "type": "string",
                            "minLength": 1
                        },
                        "fontSize": {
                            "$id": "#/properties/progressIndicator/properties/mobileSelect/properties/fontSize",
                            "type": "string",
                            "minLength": 1
                        },
                        "color": {
                            "$id": "#/properties/progressIndicator/properties/mobileSelect/properties/color",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "mobile": {
                    "$id": "#/properties/progressIndicator/properties/mobile",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "stepNumber",
                        "stepName",
                        "stepStatus"
                    ],
                    "properties": {
                        "stepNumber": {
                            "$id": "#/properties/progressIndicator/properties/mobile/properties/stepNumber",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "fontSize",
                                "fontWeight"
                            ],
                            "properties": {
                                "fontSize": {
                                    "$id": "#/properties/progressIndicator/properties/mobile/properties/stepNumber/properties/fontSize",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "fontWeight": {
                                    "$id": "#/properties/progressIndicator/properties/mobile/properties/stepNumber/properties/fontWeight",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "stepName": {
                            "$id": "#/properties/progressIndicator/properties/mobile/properties/stepName",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "fontSize",
                                "fontWeight"
                            ],
                            "properties": {
                                "fontSize": {
                                    "$id": "#/properties/progressIndicator/properties/mobile/properties/stepName/properties/fontSize",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "fontWeight": {
                                    "$id": "#/properties/progressIndicator/properties/mobile/properties/stepName/properties/fontWeight",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "stepStatus": {
                            "$id": "#/properties/progressIndicator/properties/mobile/properties/stepStatus",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "fontSize",
                                "fontWeight"
                            ],
                            "properties": {
                                "fontSize": {
                                    "$id": "#/properties/progressIndicator/properties/mobile/properties/stepStatus/properties/fontSize",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "fontWeight": {
                                    "$id": "#/properties/progressIndicator/properties/mobile/properties/stepStatus/properties/fontWeight",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        }
                    }
                }
            }
        },
        "heroImage": {
            "$id": "#/properties/heroImage",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "hotelDetails",
                "background",
                "height"
            ],
            "properties": {
                "hotelDetails": {
                    "$id": "#/properties/heroImage/properties/hotelDetails",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "background",
                        "color",
                        "fontWeight",
                        "maxWidth",
                        "link"
                    ],
                    "properties": {
                        "background": {
                            "$id": "#/properties/heroImage/properties/hotelDetails/properties/background",
                            "type": "string",
                            "minLength": 1
                        },
                        "color": {
                            "$id": "#/properties/heroImage/properties/hotelDetails/properties/color",
                            "type": "string",
                            "minLength": 1
                        },
                        "fontWeight": {
                            "$id": "#/properties/heroImage/properties/hotelDetails/properties/fontWeight",
                            "type": "string",
                            "minLength": 1
                        },
                        "maxWidth": {
                            "$id": "#/properties/heroImage/properties/hotelDetails/properties/maxWidth",
                            "type": "string",
                            "minLength": 1
                        },
                        "link": {
                            "$id": "#/properties/heroImage/properties/hotelDetails/properties/link",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "color",
                                "fontWeight"
                            ],
                            "properties": {
                                "color": {
                                    "$id": "#/properties/heroImage/properties/hotelDetails/properties/link/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "fontWeight": {
                                    "$id": "#/properties/heroImage/properties/hotelDetails/properties/link/properties/fontWeight",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        }
                    }
                },
                "background": {
                    "$id": "#/properties/heroImage/properties/background",
                    "type": "string",
                    "minLength": 1
                },
                "height": {
                    "$id": "#/properties/heroImage/properties/height",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "desktop",
                        "tablet"
                    ],
                    "properties": {
                        "desktop": {
                            "$id": "#/properties/heroImage/properties/height/properties/desktop",
                            "type": "string",
                            "minLength": 1
                        },
                        "tablet": {
                            "$id": "#/properties/heroImage/properties/height/properties/tablet",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                }
            }
        },
        "landingPage": {
            "$id": "#/properties/landingPage",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "background"
            ],
            "properties": {
                "background": {
                    "$id": "#/properties/landingPage/properties/background",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "image",
                        "repeat",
                        "position",
                        "attachment",
                        "size"
                    ],
                    "properties": {
                        "image": {
                            "$id": "#/properties/landingPage/properties/background/properties/image",
                            "type": "string",
                            "minLength": 1
                        },
                        "repeat": {
                            "$id": "#/properties/landingPage/properties/background/properties/repeat",
                            "type": "string",
                            "minLength": 1
                        },
                        "position": {
                            "$id": "#/properties/landingPage/properties/background/properties/position",
                            "type": "string",
                            "minLength": 1
                        },
                        "attachment": {
                            "$id": "#/properties/landingPage/properties/background/properties/attachment",
                            "type": "string",
                            "minLength": 1
                        },
                        "size": {
                            "$id": "#/properties/landingPage/properties/background/properties/size",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                }
            }
        },
        "h1": {
            "$id": "#/properties/h1",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "color",
                "fontSize",
                "fontWeight",
                "fontFamily",
                "textTransform",
                "lineHeight"
            ],
            "properties": {
                "color": {
                    "$id": "#/properties/h1/properties/color",
                    "type": "string",
                    "minLength": 1
                },
                "fontSize": {
                    "$id": "#/properties/h1/properties/fontSize",
                    "type": "string",
                    "minLength": 1
                },
                "fontWeight": {
                    "$id": "#/properties/h1/properties/fontWeight",
                    "type": "string",
                    "minLength": 1
                },
                "fontFamily": {
                    "$id": "#/properties/h1/properties/fontFamily",
                    "type": "string",
                    "minLength": 1
                },
                "textTransform": {
                    "$id": "#/properties/h1/properties/textTransform",
                    "type": "string",
                    "minLength": 1
                },
                "lineHeight": {
                    "$id": "#/properties/h1/properties/lineHeight",
                    "type": "string",
                    "minLength": 1
                }
            }
        },
        "h2": {
            "$id": "#/properties/h2",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "color",
                "fontSize",
                "fontWeight",
                "fontFamily",
                "textTransform",
                "lineHeight"
            ],
            "properties": {
                "color": {
                    "$id": "#/properties/h2/properties/color",
                    "type": "string",
                    "minLength": 1
                },
                "fontSize": {
                    "$id": "#/properties/h2/properties/fontSize",
                    "type": "string",
                    "minLength": 1
                },
                "fontWeight": {
                    "$id": "#/properties/h2/properties/fontWeight",
                    "type": "string",
                    "minLength": 1
                },
                "fontFamily": {
                    "$id": "#/properties/h2/properties/fontFamily",
                    "type": "string",
                    "minLength": 1
                },
                "textTransform": {
                    "$id": "#/properties/h2/properties/textTransform",
                    "type": "string",
                    "minLength": 1
                },
                "lineHeight": {
                    "$id": "#/properties/h2/properties/lineHeight",
                    "type": "string",
                    "minLength": 1
                }
            }
        },
        "h3": {
            "$id": "#/properties/h3",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "color",
                "fontSize",
                "fontWeight",
                "fontFamily",
                "textTransform",
                "lineHeight"
            ],
            "properties": {
                "color": {
                    "$id": "#/properties/h3/properties/color",
                    "type": "string",
                    "minLength": 1
                },
                "fontSize": {
                    "$id": "#/properties/h3/properties/fontSize",
                    "type": "string",
                    "minLength": 1
                },
                "fontWeight": {
                    "$id": "#/properties/h3/properties/fontWeight",
                    "type": "string",
                    "minLength": 1
                },
                "fontFamily": {
                    "$id": "#/properties/h3/properties/fontFamily",
                    "type": "string",
                    "minLength": 1
                },
                "textTransform": {
                    "$id": "#/properties/h3/properties/textTransform",
                    "type": "string",
                    "minLength": 1
                },
                "lineHeight": {
                    "$id": "#/properties/h3/properties/lineHeight",
                    "type": "string",
                    "minLength": 1
                }
            }
        },
        "h4": {
            "$id": "#/properties/h4",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "color",
                "fontSize",
                "fontWeight",
                "fontFamily",
                "textTransform",
                "lineHeight"
            ],
            "properties": {
                "color": {
                    "$id": "#/properties/h4/properties/color",
                    "type": "string",
                    "minLength": 1
                },
                "fontSize": {
                    "$id": "#/properties/h4/properties/fontSize",
                    "type": "string",
                    "minLength": 1
                },
                "fontWeight": {
                    "$id": "#/properties/h4/properties/fontWeight",
                    "type": "string",
                    "minLength": 1
                },
                "fontFamily": {
                    "$id": "#/properties/h4/properties/fontFamily",
                    "type": "string",
                    "minLength": 1
                },
                "textTransform": {
                    "$id": "#/properties/h4/properties/textTransform",
                    "type": "string",
                    "minLength": 1
                },
                "lineHeight": {
                    "$id": "#/properties/h4/properties/lineHeight",
                    "type": "string",
                    "minLength": 1
                }
            }
        },
        "h5": {
            "$id": "#/properties/h5",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "color",
                "fontSize",
                "fontWeight",
                "fontFamily",
                "textTransform",
                "lineHeight"
            ],
            "properties": {
                "color": {
                    "$id": "#/properties/h5/properties/color",
                    "type": "string",
                    "minLength": 1
                },
                "fontSize": {
                    "$id": "#/properties/h5/properties/fontSize",
                    "type": "string",
                    "minLength": 1
                },
                "fontWeight": {
                    "$id": "#/properties/h5/properties/fontWeight",
                    "type": "string",
                    "minLength": 1
                },
                "fontFamily": {
                    "$id": "#/properties/h5/properties/fontFamily",
                    "type": "string",
                    "minLength": 1
                },
                "textTransform": {
                    "$id": "#/properties/h5/properties/textTransform",
                    "type": "string",
                    "minLength": 1
                },
                "lineHeight": {
                    "$id": "#/properties/h5/properties/lineHeight",
                    "type": "string",
                    "minLength": 1
                }
            }
        },
        "link": {
            "$id": "#/properties/link",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "color",
                "underline",
                "fontWeight",
                "highlight",
                "icon"
            ],
            "properties": {
                "color": {
                    "$id": "#/properties/link/properties/color",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "normal",
                        "hover",
                        "active",
                        "default",
                        "focus",
                        "disabled"
                    ],
                    "properties": {
                        "normal": {
                            "$id": "#/properties/link/properties/color/properties/normal",
                            "type": "string",
                            "minLength": 1
                        },
                        "hover": {
                            "$id": "#/properties/link/properties/color/properties/hover",
                            "type": "string",
                            "minLength": 1
                        },
                        "active": {
                            "$id": "#/properties/link/properties/color/properties/active",
                            "type": "string",
                            "minLength": 1
                        },
                        "default": {
                            "$id": "#/properties/link/properties/color/properties/default",
                            "type": "string",
                            "minLength": 1
                        },
                        "focus": {
                            "$id": "#/properties/link/properties/color/properties/focus",
                            "type": "string",
                            "minLength": 1
                        },
                        "disabled": {
                            "$id": "#/properties/link/properties/color/properties/disabled",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "underline": {
                    "$id": "#/properties/link/properties/underline",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "default",
                        "hover",
                        "focus",
                        "active"
                    ],
                    "properties": {
                        "default": {
                            "$id": "#/properties/link/properties/underline/properties/default",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "width",
                                "style",
                                "color"
                            ],
                            "properties": {
                                "width": {
                                    "$id": "#/properties/link/properties/underline/properties/default/properties/width",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "style": {
                                    "$id": "#/properties/link/properties/underline/properties/default/properties/style",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "color": {
                                    "$id": "#/properties/link/properties/underline/properties/default/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "hover": {
                            "$id": "#/properties/link/properties/underline/properties/hover",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "width",
                                "style",
                                "color"
                            ],
                            "properties": {
                                "width": {
                                    "$id": "#/properties/link/properties/underline/properties/hover/properties/width",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "style": {
                                    "$id": "#/properties/link/properties/underline/properties/hover/properties/style",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "color": {
                                    "$id": "#/properties/link/properties/underline/properties/hover/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "focus": {
                            "$id": "#/properties/link/properties/underline/properties/focus",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "width",
                                "style",
                                "color"
                            ],
                            "properties": {
                                "width": {
                                    "$id": "#/properties/link/properties/underline/properties/focus/properties/width",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "style": {
                                    "$id": "#/properties/link/properties/underline/properties/focus/properties/style",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "color": {
                                    "$id": "#/properties/link/properties/underline/properties/focus/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "active": {
                            "$id": "#/properties/link/properties/underline/properties/active",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "width",
                                "style",
                                "color"
                            ],
                            "properties": {
                                "width": {
                                    "$id": "#/properties/link/properties/underline/properties/active/properties/width",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "style": {
                                    "$id": "#/properties/link/properties/underline/properties/active/properties/style",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "color": {
                                    "$id": "#/properties/link/properties/underline/properties/active/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        }
                    }
                },
                "fontWeight": {
                    "$id": "#/properties/link/properties/fontWeight",
                    "type": "string",
                    "minLength": 1
                },
                "highlight": {
                    "$id": "#/properties/link/properties/highlight",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "color",
                        "textDecoration",
                        "fontWeight"
                    ],
                    "properties": {
                        "color": {
                            "$id": "#/properties/link/properties/highlight/properties/color",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "normal",
                                "hover",
                                "active"
                            ],
                            "properties": {
                                "normal": {
                                    "$id": "#/properties/link/properties/highlight/properties/color/properties/normal",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "hover": {
                                    "$id": "#/properties/link/properties/highlight/properties/color/properties/hover",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "active": {
                                    "$id": "#/properties/link/properties/highlight/properties/color/properties/active",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "textDecoration": {
                            "$id": "#/properties/link/properties/highlight/properties/textDecoration",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "normal",
                                "hover",
                                "active"
                            ],
                            "properties": {
                                "normal": {
                                    "$id": "#/properties/link/properties/highlight/properties/textDecoration/properties/normal",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "hover": {
                                    "$id": "#/properties/link/properties/highlight/properties/textDecoration/properties/hover",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "active": {
                                    "$id": "#/properties/link/properties/highlight/properties/textDecoration/properties/active",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "fontWeight": {
                            "$id": "#/properties/link/properties/highlight/properties/fontWeight",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "icon": {
                    "$id": "#/properties/link/properties/icon",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "color"
                    ],
                    "properties": {
                        "color": {
                            "$id": "#/properties/link/properties/icon/properties/color",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "disabled"
                            ],
                            "properties": {
                                "disabled": {
                                    "$id": "#/properties/link/properties/icon/properties/color/properties/disabled",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        }
                    }
                }
            }
        },
        "urgencyTrigger": {
            "$id": "#/properties/urgencyTrigger",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "inline",
                "floating"
            ],
            "properties": {
                "inline": {
                    "$id": "#/properties/urgencyTrigger/properties/inline",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "color"
                    ],
                    "properties": {
                        "color": {
                            "$id": "#/properties/urgencyTrigger/properties/inline/properties/color",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "floating": {
                    "$id": "#/properties/urgencyTrigger/properties/floating",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "background",
                        "color"
                    ],
                    "properties": {
                        "background": {
                            "$id": "#/properties/urgencyTrigger/properties/floating/properties/background",
                            "type": "string",
                            "minLength": 1
                        },
                        "color": {
                            "$id": "#/properties/urgencyTrigger/properties/floating/properties/color",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                }
            }
        },
        "border": {
            "$id": "#/properties/border",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "radius",
                "color"
            ],
            "properties": {
                "radius": {
                    "$id": "#/properties/border/properties/radius",
                    "type": "string",
                    "minLength": 1
                },
                "color": {
                    "$id": "#/properties/border/properties/color",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "style1",
                        "style2"
                    ],
                    "properties": {
                        "style1": {
                            "$id": "#/properties/border/properties/color/properties/style1",
                            "type": "string",
                            "minLength": 1
                        },
                        "style2": {
                            "$id": "#/properties/border/properties/color/properties/style2",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                }
            }
        },
        "background": {
            "$id": "#/properties/background",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "body",
                "style1",
                "style2",
                "style3"
            ],
            "properties": {
                "body": {
                    "$id": "#/properties/background/properties/body",
                    "type": "string",
                    "minLength": 1
                },
                "style1": {
                    "$id": "#/properties/background/properties/style1",
                    "type": "string",
                    "minLength": 1
                },
                "style2": {
                    "$id": "#/properties/background/properties/style2",
                    "type": "string",
                    "minLength": 1
                },
                "style3": {
                    "$id": "#/properties/background/properties/style3",
                    "type": "string",
                    "minLength": 1
                }
            }
        },
        "box": {
            "$id": "#/properties/box",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "shadow"
            ],
            "properties": {
                "shadow": {
                    "$id": "#/properties/box/properties/shadow",
                    "type": "string",
                    "minLength": 1
                }
            }
        },
        "modal": {
            "$id": "#/properties/modal",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "overlay",
                "borderRadius"
            ],
            "properties": {
                "overlay": {
                    "$id": "#/properties/modal/properties/overlay",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "background",
                        "close"
                    ],
                    "properties": {
                        "background": {
                            "$id": "#/properties/modal/properties/overlay/properties/background",
                            "type": "string",
                            "minLength": 1
                        },
                        "close": {
                            "$id": "#/properties/modal/properties/overlay/properties/close",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "borderRadius": {
                    "$id": "#/properties/modal/properties/borderRadius",
                    "type": "string",
                    "minLength": 1
                }
            }
        },
        "gallery": {
            "$id": "#/properties/gallery",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "overlay",
                "text"
            ],
            "properties": {
                "overlay": {
                    "$id": "#/properties/gallery/properties/overlay",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "background"
                    ],
                    "properties": {
                        "background": {
                            "$id": "#/properties/gallery/properties/overlay/properties/background",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "text": {
                    "$id": "#/properties/gallery/properties/text",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "background",
                        "color"
                    ],
                    "properties": {
                        "background": {
                            "$id": "#/properties/gallery/properties/text/properties/background",
                            "type": "string",
                            "minLength": 1
                        },
                        "color": {
                            "$id": "#/properties/gallery/properties/text/properties/color",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                }
            }
        },
        "spinner": {
            "$id": "#/properties/spinner",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "color1",
                "color2"
            ],
            "properties": {
                "color1": {
                    "$id": "#/properties/spinner/properties/color1",
                    "type": "string",
                    "minLength": 1
                },
                "color2": {
                    "$id": "#/properties/spinner/properties/color2",
                    "type": "string",
                    "minLength": 1
                }
            }
        },
        "page": {
            "$id": "#/properties/page",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "favicon"
            ],
            "properties": {
                "favicon": {
                    "$id": "#/properties/page/properties/favicon",
                    "type": "string",
                    "minLength": 1
                }
            }
        },
        "header": {
            "$id": "#/properties/header",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "alwaysShowHotelName",
                "userBar",
                "globalBar",
                "logo",
                "hamburgerMenu",
                "criteria.overlay"
            ],
            "properties": {
                "alwaysShowHotelName": {
                    "$id": "#/properties/header/properties/alwaysShowHotelName",
                    "type": "boolean"
                },
                "userBar": {
                    "$id": "#/properties/header/properties/userBar",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "background",
                        "font",
                        "fontSize",
                        "fontWeight",
                        "textTransform",
                        "color",
                        "textDecoration",
                        "iconColor"
                    ],
                    "properties": {
                        "background": {
                            "$id": "#/properties/header/properties/userBar/properties/background",
                            "type": "string",
                            "minLength": 1
                        },
                        "font": {
                            "$id": "#/properties/header/properties/userBar/properties/font",
                            "type": "string",
                            "minLength": 1
                        },
                        "fontSize": {
                            "$id": "#/properties/header/properties/userBar/properties/fontSize",
                            "type": "string",
                            "minLength": 1
                        },
                        "fontWeight": {
                            "$id": "#/properties/header/properties/userBar/properties/fontWeight",
                            "type": "string",
                            "minLength": 1
                        },
                        "textTransform": {
                            "$id": "#/properties/header/properties/userBar/properties/textTransform",
                            "type": "string",
                            "minLength": 1
                        },
                        "color": {
                            "$id": "#/properties/header/properties/userBar/properties/color",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "normal",
                                "hover"
                            ],
                            "properties": {
                                "normal": {
                                    "$id": "#/properties/header/properties/userBar/properties/color/properties/normal",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "hover": {
                                    "$id": "#/properties/header/properties/userBar/properties/color/properties/hover",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "textDecoration": {
                            "$id": "#/properties/header/properties/userBar/properties/textDecoration",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "normal",
                                "hover"
                            ],
                            "properties": {
                                "normal": {
                                    "$id": "#/properties/header/properties/userBar/properties/textDecoration/properties/normal",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "hover": {
                                    "$id": "#/properties/header/properties/userBar/properties/textDecoration/properties/hover",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "iconColor": {
                            "$id": "#/properties/header/properties/userBar/properties/iconColor",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "normal",
                                "hover"
                            ],
                            "properties": {
                                "normal": {
                                    "$id": "#/properties/header/properties/userBar/properties/iconColor/properties/normal",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "hover": {
                                    "$id": "#/properties/header/properties/userBar/properties/iconColor/properties/hover",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        }
                    }
                },
                "globalBar": {
                    "$id": "#/properties/header/properties/globalBar",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "background",
                        "dividerLine",
                        "title",
                        "subtitle",
                        "link",
                        "cart"
                    ],
                    "properties": {
                        "background": {
                            "$id": "#/properties/header/properties/globalBar/properties/background",
                            "type": "string",
                            "minLength": 1
                        },
                        "dividerLine": {
                            "$id": "#/properties/header/properties/globalBar/properties/dividerLine",
                            "type": "string",
                            "minLength": 1
                        },
                        "title": {
                            "$id": "#/properties/header/properties/globalBar/properties/title",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "color",
                                "tablet",
                                "mobile"
                            ],
                            "properties": {
                                "color": {
                                    "$id": "#/properties/header/properties/globalBar/properties/title/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "tablet": {
                                    "$id": "#/properties/header/properties/globalBar/properties/title/properties/tablet",
                                    "type": "object",
                                    "minProperties": 1,
                                    "additionalProperties": false,
                                    "required": [
                                        "font",
                                        "fontSize",
                                        "fontWeight",
                                        "textTransform"
                                    ],
                                    "properties": {
                                        "font": {
                                            "$id": "#/properties/header/properties/globalBar/properties/title/properties/tablet/properties/font",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "fontSize": {
                                            "$id": "#/properties/header/properties/globalBar/properties/title/properties/tablet/properties/fontSize",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "fontWeight": {
                                            "$id": "#/properties/header/properties/globalBar/properties/title/properties/tablet/properties/fontWeight",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "textTransform": {
                                            "$id": "#/properties/header/properties/globalBar/properties/title/properties/tablet/properties/textTransform",
                                            "type": "string",
                                            "minLength": 1
                                        }
                                    }
                                },
                                "mobile": {
                                    "$id": "#/properties/header/properties/globalBar/properties/title/properties/mobile",
                                    "type": "object",
                                    "minProperties": 1,
                                    "additionalProperties": false,
                                    "required": [
                                        "font",
                                        "fontSize",
                                        "fontWeight",
                                        "textTransform"
                                    ],
                                    "properties": {
                                        "font": {
                                            "$id": "#/properties/header/properties/globalBar/properties/title/properties/mobile/properties/font",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "fontSize": {
                                            "$id": "#/properties/header/properties/globalBar/properties/title/properties/mobile/properties/fontSize",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "fontWeight": {
                                            "$id": "#/properties/header/properties/globalBar/properties/title/properties/mobile/properties/fontWeight",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "textTransform": {
                                            "$id": "#/properties/header/properties/globalBar/properties/title/properties/mobile/properties/textTransform",
                                            "type": "string",
                                            "minLength": 1
                                        }
                                    }
                                }
                            }
                        },
                        "subtitle": {
                            "$id": "#/properties/header/properties/globalBar/properties/subtitle",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "color",
                                "tablet",
                                "mobile"
                            ],
                            "properties": {
                                "color": {
                                    "$id": "#/properties/header/properties/globalBar/properties/subtitle/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "tablet": {
                                    "$id": "#/properties/header/properties/globalBar/properties/subtitle/properties/tablet",
                                    "type": "object",
                                    "minProperties": 1,
                                    "additionalProperties": false,
                                    "required": [
                                        "font",
                                        "fontSize",
                                        "fontWeight",
                                        "textTransform"
                                    ],
                                    "properties": {
                                        "font": {
                                            "$id": "#/properties/header/properties/globalBar/properties/subtitle/properties/tablet/properties/font",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "fontSize": {
                                            "$id": "#/properties/header/properties/globalBar/properties/subtitle/properties/tablet/properties/fontSize",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "fontWeight": {
                                            "$id": "#/properties/header/properties/globalBar/properties/subtitle/properties/tablet/properties/fontWeight",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "textTransform": {
                                            "$id": "#/properties/header/properties/globalBar/properties/subtitle/properties/tablet/properties/textTransform",
                                            "type": "string",
                                            "minLength": 1
                                        }
                                    }
                                },
                                "mobile": {
                                    "$id": "#/properties/header/properties/globalBar/properties/subtitle/properties/mobile",
                                    "type": "object",
                                    "minProperties": 1,
                                    "additionalProperties": false,
                                    "required": [
                                        "font",
                                        "fontSize",
                                        "fontWeight",
                                        "textTransform"
                                    ],
                                    "properties": {
                                        "font": {
                                            "$id": "#/properties/header/properties/globalBar/properties/subtitle/properties/mobile/properties/font",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "fontSize": {
                                            "$id": "#/properties/header/properties/globalBar/properties/subtitle/properties/mobile/properties/fontSize",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "fontWeight": {
                                            "$id": "#/properties/header/properties/globalBar/properties/subtitle/properties/mobile/properties/fontWeight",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "textTransform": {
                                            "$id": "#/properties/header/properties/globalBar/properties/subtitle/properties/mobile/properties/textTransform",
                                            "type": "string",
                                            "minLength": 1
                                        }
                                    }
                                }
                            }
                        },
                        "link": {
                            "$id": "#/properties/header/properties/globalBar/properties/link",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "fontSize",
                                "iconColor"
                            ],
                            "properties": {
                                "fontSize": {
                                    "$id": "#/properties/header/properties/globalBar/properties/link/properties/fontSize",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "iconColor": {
                                    "$id": "#/properties/header/properties/globalBar/properties/link/properties/iconColor",
                                    "type": "object",
                                    "minProperties": 1,
                                    "additionalProperties": false,
                                    "required": [
                                        "normal",
                                        "hover"
                                    ],
                                    "properties": {
                                        "normal": {
                                            "$id": "#/properties/header/properties/globalBar/properties/link/properties/iconColor/properties/normal",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "hover": {
                                            "$id": "#/properties/header/properties/globalBar/properties/link/properties/iconColor/properties/hover",
                                            "type": "string",
                                            "minLength": 1
                                        }
                                    }
                                }
                            }
                        },
                        "cart": {
                            "$id": "#/properties/header/properties/globalBar/properties/cart",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "font",
                                "fontSize",
                                "fontWeight",
                                "textTransform",
                                "color",
                                "iconColor"
                            ],
                            "properties": {
                                "font": {
                                    "$id": "#/properties/header/properties/globalBar/properties/cart/properties/font",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "fontSize": {
                                    "$id": "#/properties/header/properties/globalBar/properties/cart/properties/fontSize",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "fontWeight": {
                                    "$id": "#/properties/header/properties/globalBar/properties/cart/properties/fontWeight",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "textTransform": {
                                    "$id": "#/properties/header/properties/globalBar/properties/cart/properties/textTransform",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "color": {
                                    "$id": "#/properties/header/properties/globalBar/properties/cart/properties/color",
                                    "type": "object",
                                    "minProperties": 1,
                                    "additionalProperties": false,
                                    "required": [
                                        "normal",
                                        "hover"
                                    ],
                                    "properties": {
                                        "normal": {
                                            "$id": "#/properties/header/properties/globalBar/properties/cart/properties/color/properties/normal",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "hover": {
                                            "$id": "#/properties/header/properties/globalBar/properties/cart/properties/color/properties/hover",
                                            "type": "string",
                                            "minLength": 1
                                        }
                                    }
                                },
                                "iconColor": {
                                    "$id": "#/properties/header/properties/globalBar/properties/cart/properties/iconColor",
                                    "type": "object",
                                    "minProperties": 1,
                                    "additionalProperties": false,
                                    "required": [
                                        "normal",
                                        "hover"
                                    ],
                                    "properties": {
                                        "normal": {
                                            "$id": "#/properties/header/properties/globalBar/properties/cart/properties/iconColor/properties/normal",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "hover": {
                                            "$id": "#/properties/header/properties/globalBar/properties/cart/properties/iconColor/properties/hover",
                                            "type": "string",
                                            "minLength": 1
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "logo": {
                    "$id": "#/properties/header/properties/logo",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "url",
                        "size",
                        "position",
                        "width",
                        "height"
                    ],
                    "properties": {
                        "url": {
                            "$id": "#/properties/header/properties/logo/properties/url",
                            "type": "string",
                            "minLength": 1
                        },
                        "size": {
                            "$id": "#/properties/header/properties/logo/properties/size",
                            "type": "string",
                            "minLength": 1
                        },
                        "position": {
                            "$id": "#/properties/header/properties/logo/properties/position",
                            "type": "string",
                            "minLength": 1
                        },
                        "width": {
                            "$id": "#/properties/header/properties/logo/properties/width",
                            "type": "string",
                            "minLength": 1
                        },
                        "height": {
                            "$id": "#/properties/header/properties/logo/properties/height",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "hamburgerMenu": {
                    "$id": "#/properties/header/properties/hamburgerMenu",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "background",
                        "color",
                        "width",
                        "iconSize",
                        "link"
                    ],
                    "properties": {
                        "background": {
                            "$id": "#/properties/header/properties/hamburgerMenu/properties/background",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "normal",
                                "active"
                            ],
                            "properties": {
                                "normal": {
                                    "$id": "#/properties/header/properties/hamburgerMenu/properties/background/properties/normal",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "active": {
                                    "$id": "#/properties/header/properties/hamburgerMenu/properties/background/properties/active",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "color": {
                            "$id": "#/properties/header/properties/hamburgerMenu/properties/color",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "normal",
                                "active"
                            ],
                            "properties": {
                                "normal": {
                                    "$id": "#/properties/header/properties/hamburgerMenu/properties/color/properties/normal",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "active": {
                                    "$id": "#/properties/header/properties/hamburgerMenu/properties/color/properties/active",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "width": {
                            "$id": "#/properties/header/properties/hamburgerMenu/properties/width",
                            "type": "string",
                            "minLength": 1
                        },
                        "iconSize": {
                            "$id": "#/properties/header/properties/hamburgerMenu/properties/iconSize",
                            "type": "string",
                            "minLength": 1
                        },
                        "link": {
                            "$id": "#/properties/header/properties/hamburgerMenu/properties/link",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "textTransform"
                            ],
                            "properties": {
                                "textTransform": {
                                    "$id": "#/properties/header/properties/hamburgerMenu/properties/link/properties/textTransform",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        }
                    }
                },
                "criteria.overlay": {
                    "$id": "#/properties/header/properties/criteria.overlay",
                    "type": "string",
                    "minLength": 1
                }
            }
        },
        "input": {
            "$id": "#/properties/input",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "size",
                "color",
                "style",
                "weight",
                "font",
                "height",
                "borderRadius",
                "padding",
                "background",
                "border",
                "label",
                "checkboxAndRadio",
                "required"
            ],
            "properties": {
                "size": {
                    "$id": "#/properties/input/properties/size",
                    "type": "string",
                    "minLength": 1
                },
                "color": {
                    "$id": "#/properties/input/properties/color",
                    "type": "string",
                    "minLength": 1
                },
                "style": {
                    "$id": "#/properties/input/properties/style",
                    "type": "string",
                    "minLength": 1
                },
                "weight": {
                    "$id": "#/properties/input/properties/weight",
                    "type": "string",
                    "minLength": 1
                },
                "font": {
                    "$id": "#/properties/input/properties/font",
                    "type": "string",
                    "minLength": 1
                },
                "height": {
                    "$id": "#/properties/input/properties/height",
                    "type": "string",
                    "minLength": 1
                },
                "borderRadius": {
                    "$id": "#/properties/input/properties/borderRadius",
                    "type": "string",
                    "minLength": 1
                },
                "padding": {
                    "$id": "#/properties/input/properties/padding",
                    "type": "string",
                    "minLength": 1
                },
                "background": {
                    "$id": "#/properties/input/properties/background",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "normal",
                        "hover",
                        "focus"
                    ],
                    "properties": {
                        "normal": {
                            "$id": "#/properties/input/properties/background/properties/normal",
                            "type": "string",
                            "minLength": 1
                        },
                        "hover": {
                            "$id": "#/properties/input/properties/background/properties/hover",
                            "type": "string",
                            "minLength": 1
                        },
                        "focus": {
                            "$id": "#/properties/input/properties/background/properties/focus",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "border": {
                    "$id": "#/properties/input/properties/border",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "normal",
                        "focus",
                        "hover"
                    ],
                    "properties": {
                        "normal": {
                            "$id": "#/properties/input/properties/border/properties/normal",
                            "type": "string",
                            "minLength": 1
                        },
                        "focus": {
                            "$id": "#/properties/input/properties/border/properties/focus",
                            "type": "string",
                            "minLength": 1
                        },
                        "hover": {
                            "$id": "#/properties/input/properties/border/properties/hover",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "label": {
                    "$id": "#/properties/input/properties/label",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "font",
                        "size",
                        "weight",
                        "color",
                        "height"
                    ],
                    "properties": {
                        "font": {
                            "$id": "#/properties/input/properties/label/properties/font",
                            "type": "string",
                            "minLength": 1
                        },
                        "size": {
                            "$id": "#/properties/input/properties/label/properties/size",
                            "type": "string",
                            "minLength": 1
                        },
                        "weight": {
                            "$id": "#/properties/input/properties/label/properties/weight",
                            "type": "string",
                            "minLength": 1
                        },
                        "color": {
                            "$id": "#/properties/input/properties/label/properties/color",
                            "type": "string",
                            "minLength": 1
                        },
                        "height": {
                            "$id": "#/properties/input/properties/label/properties/height",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "checkboxAndRadio": {
                    "$id": "#/properties/input/properties/checkboxAndRadio",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "disabledText"
                    ],
                    "properties": {
                        "disabledText": {
                            "$id": "#/properties/input/properties/checkboxAndRadio/properties/disabledText",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "required": {
                    "$id": "#/properties/input/properties/required",
                    "type": "string",
                    "minLength": 1
                }
            }
        },
        "button": {
            "$id": "#/properties/button",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "shadow",
                "large",
                "medium",
                "small",
                "primary",
                "secondary",
                "link",
                "circle",
                "disabled"
            ],
            "properties": {
                "shadow": {
                    "$id": "#/properties/button/properties/shadow",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "focus"
                    ],
                    "properties": {
                        "focus": {
                            "$id": "#/properties/button/properties/shadow/properties/focus",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "large": {
                    "$id": "#/properties/button/properties/large",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "lineHeight",
                        "padding"
                    ],
                    "properties": {
                        "lineHeight": {
                            "$id": "#/properties/button/properties/large/properties/lineHeight",
                            "type": "string",
                            "minLength": 1
                        },
                        "padding": {
                            "$id": "#/properties/button/properties/large/properties/padding",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "medium": {
                    "$id": "#/properties/button/properties/medium",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "lineHeight",
                        "padding"
                    ],
                    "properties": {
                        "lineHeight": {
                            "$id": "#/properties/button/properties/medium/properties/lineHeight",
                            "type": "string",
                            "minLength": 1
                        },
                        "padding": {
                            "$id": "#/properties/button/properties/medium/properties/padding",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "small": {
                    "$id": "#/properties/button/properties/small",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "lineHeight",
                        "padding"
                    ],
                    "properties": {
                        "lineHeight": {
                            "$id": "#/properties/button/properties/small/properties/lineHeight",
                            "type": "string",
                            "minLength": 1
                        },
                        "padding": {
                            "$id": "#/properties/button/properties/small/properties/padding",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "primary": {
                    "$id": "#/properties/button/properties/primary",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "font",
                        "fontSize",
                        "style",
                        "weight",
                        "textTransform",
                        "borderRadius",
                        "background",
                        "border",
                        "color",
                        "before",
                        "after",
                        "spinner"
                    ],
                    "properties": {
                        "font": {
                            "$id": "#/properties/button/properties/primary/properties/font",
                            "type": "string",
                            "minLength": 1
                        },
                        "fontSize": {
                            "$id": "#/properties/button/properties/primary/properties/fontSize",
                            "type": "string",
                            "minLength": 1
                        },
                        "style": {
                            "$id": "#/properties/button/properties/primary/properties/style",
                            "type": "string",
                            "minLength": 1
                        },
                        "weight": {
                            "$id": "#/properties/button/properties/primary/properties/weight",
                            "type": "string",
                            "minLength": 1
                        },
                        "textTransform": {
                            "$id": "#/properties/button/properties/primary/properties/textTransform",
                            "type": "string",
                            "minLength": 1
                        },
                        "borderRadius": {
                            "$id": "#/properties/button/properties/primary/properties/borderRadius",
                            "type": "string",
                            "minLength": 1
                        },
                        "background": {
                            "$id": "#/properties/button/properties/primary/properties/background",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "normal",
                                "hover",
                                "active"
                            ],
                            "properties": {
                                "normal": {
                                    "$id": "#/properties/button/properties/primary/properties/background/properties/normal",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "hover": {
                                    "$id": "#/properties/button/properties/primary/properties/background/properties/hover",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "active": {
                                    "$id": "#/properties/button/properties/primary/properties/background/properties/active",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "border": {
                            "$id": "#/properties/button/properties/primary/properties/border",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "normal",
                                "hover",
                                "active"
                            ],
                            "properties": {
                                "normal": {
                                    "$id": "#/properties/button/properties/primary/properties/border/properties/normal",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "hover": {
                                    "$id": "#/properties/button/properties/primary/properties/border/properties/hover",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "active": {
                                    "$id": "#/properties/button/properties/primary/properties/border/properties/active",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "color": {
                            "$id": "#/properties/button/properties/primary/properties/color",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "normal",
                                "hover",
                                "active"
                            ],
                            "properties": {
                                "normal": {
                                    "$id": "#/properties/button/properties/primary/properties/color/properties/normal",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "hover": {
                                    "$id": "#/properties/button/properties/primary/properties/color/properties/hover",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "active": {
                                    "$id": "#/properties/button/properties/primary/properties/color/properties/active",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "before": {
                            "$id": "#/properties/button/properties/primary/properties/before",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "display",
                                "boxShadow"
                            ],
                            "properties": {
                                "display": {
                                    "$id": "#/properties/button/properties/primary/properties/before/properties/display",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "boxShadow": {
                                    "$id": "#/properties/button/properties/primary/properties/before/properties/boxShadow",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "after": {
                            "$id": "#/properties/button/properties/primary/properties/after",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "display",
                                "background"
                            ],
                            "properties": {
                                "display": {
                                    "$id": "#/properties/button/properties/primary/properties/after/properties/display",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "background": {
                                    "$id": "#/properties/button/properties/primary/properties/after/properties/background",
                                    "type": "object",
                                    "minProperties": 1,
                                    "additionalProperties": false,
                                    "required": [
                                        "normal",
                                        "active"
                                    ],
                                    "properties": {
                                        "normal": {
                                            "$id": "#/properties/button/properties/primary/properties/after/properties/background/properties/normal",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "active": {
                                            "$id": "#/properties/button/properties/primary/properties/after/properties/background/properties/active",
                                            "type": "string",
                                            "minLength": 1
                                        }
                                    }
                                }
                            }
                        },
                        "spinner": {
                            "$id": "#/properties/button/properties/primary/properties/spinner",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "color1",
                                "color2"
                            ],
                            "properties": {
                                "color1": {
                                    "$id": "#/properties/button/properties/primary/properties/spinner/properties/color1",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "color2": {
                                    "$id": "#/properties/button/properties/primary/properties/spinner/properties/color2",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        }
                    }
                },
                "secondary": {
                    "$id": "#/properties/button/properties/secondary",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "font",
                        "fontSize",
                        "style",
                        "weight",
                        "textTransform",
                        "borderRadius",
                        "background",
                        "border",
                        "color",
                        "before",
                        "spinner"
                    ],
                    "properties": {
                        "font": {
                            "$id": "#/properties/button/properties/secondary/properties/font",
                            "type": "string",
                            "minLength": 1
                        },
                        "fontSize": {
                            "$id": "#/properties/button/properties/secondary/properties/fontSize",
                            "type": "string",
                            "minLength": 1
                        },
                        "style": {
                            "$id": "#/properties/button/properties/secondary/properties/style",
                            "type": "string",
                            "minLength": 1
                        },
                        "weight": {
                            "$id": "#/properties/button/properties/secondary/properties/weight",
                            "type": "string",
                            "minLength": 1
                        },
                        "textTransform": {
                            "$id": "#/properties/button/properties/secondary/properties/textTransform",
                            "type": "string",
                            "minLength": 1
                        },
                        "borderRadius": {
                            "$id": "#/properties/button/properties/secondary/properties/borderRadius",
                            "type": "string",
                            "minLength": 1
                        },
                        "background": {
                            "$id": "#/properties/button/properties/secondary/properties/background",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "normal",
                                "hover"
                            ],
                            "properties": {
                                "normal": {
                                    "$id": "#/properties/button/properties/secondary/properties/background/properties/normal",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "hover": {
                                    "$id": "#/properties/button/properties/secondary/properties/background/properties/hover",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "border": {
                            "$id": "#/properties/button/properties/secondary/properties/border",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "normal",
                                "hover"
                            ],
                            "properties": {
                                "normal": {
                                    "$id": "#/properties/button/properties/secondary/properties/border/properties/normal",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "hover": {
                                    "$id": "#/properties/button/properties/secondary/properties/border/properties/hover",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "color": {
                            "$id": "#/properties/button/properties/secondary/properties/color",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "normal",
                                "hover"
                            ],
                            "properties": {
                                "normal": {
                                    "$id": "#/properties/button/properties/secondary/properties/color/properties/normal",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "hover": {
                                    "$id": "#/properties/button/properties/secondary/properties/color/properties/hover",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "before": {
                            "$id": "#/properties/button/properties/secondary/properties/before",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "display",
                                "boxShadow"
                            ],
                            "properties": {
                                "display": {
                                    "$id": "#/properties/button/properties/secondary/properties/before/properties/display",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "boxShadow": {
                                    "$id": "#/properties/button/properties/secondary/properties/before/properties/boxShadow",
                                    "type": "object",
                                    "minProperties": 1,
                                    "additionalProperties": false,
                                    "required": [
                                        "normal",
                                        "hover"
                                    ],
                                    "properties": {
                                        "normal": {
                                            "$id": "#/properties/button/properties/secondary/properties/before/properties/boxShadow/properties/normal",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "hover": {
                                            "$id": "#/properties/button/properties/secondary/properties/before/properties/boxShadow/properties/hover",
                                            "type": "string",
                                            "minLength": 1
                                        }
                                    }
                                }
                            }
                        },
                        "spinner": {
                            "$id": "#/properties/button/properties/secondary/properties/spinner",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "color1",
                                "color2"
                            ],
                            "properties": {
                                "color1": {
                                    "$id": "#/properties/button/properties/secondary/properties/spinner/properties/color1",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "color2": {
                                    "$id": "#/properties/button/properties/secondary/properties/spinner/properties/color2",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        }
                    }
                },
                "link": {
                    "$id": "#/properties/button/properties/link",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "font",
                        "fontSize",
                        "style",
                        "weight",
                        "textTransform",
                        "color",
                        "textDecoration",
                        "icon"
                    ],
                    "properties": {
                        "font": {
                            "$id": "#/properties/button/properties/link/properties/font",
                            "type": "string",
                            "minLength": 1
                        },
                        "fontSize": {
                            "$id": "#/properties/button/properties/link/properties/fontSize",
                            "type": "string",
                            "minLength": 1
                        },
                        "style": {
                            "$id": "#/properties/button/properties/link/properties/style",
                            "type": "string",
                            "minLength": 1
                        },
                        "weight": {
                            "$id": "#/properties/button/properties/link/properties/weight",
                            "type": "string",
                            "minLength": 1
                        },
                        "textTransform": {
                            "$id": "#/properties/button/properties/link/properties/textTransform",
                            "type": "string",
                            "minLength": 1
                        },
                        "color": {
                            "$id": "#/properties/button/properties/link/properties/color",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "normal",
                                "hover",
                                "active",
                                "disabled"
                            ],
                            "properties": {
                                "normal": {
                                    "$id": "#/properties/button/properties/link/properties/color/properties/normal",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "hover": {
                                    "$id": "#/properties/button/properties/link/properties/color/properties/hover",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "active": {
                                    "$id": "#/properties/button/properties/link/properties/color/properties/active",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "disabled": {
                                    "$id": "#/properties/button/properties/link/properties/color/properties/disabled",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "textDecoration": {
                            "$id": "#/properties/button/properties/link/properties/textDecoration",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "normal",
                                "hover",
                                "active"
                            ],
                            "properties": {
                                "normal": {
                                    "$id": "#/properties/button/properties/link/properties/textDecoration/properties/normal",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "hover": {
                                    "$id": "#/properties/button/properties/link/properties/textDecoration/properties/hover",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "active": {
                                    "$id": "#/properties/button/properties/link/properties/textDecoration/properties/active",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "icon": {
                            "$id": "#/properties/button/properties/link/properties/icon",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "color",
                                "size"
                            ],
                            "properties": {
                                "color": {
                                    "$id": "#/properties/button/properties/link/properties/icon/properties/color",
                                    "type": "object",
                                    "minProperties": 1,
                                    "additionalProperties": false,
                                    "required": [
                                        "normal",
                                        "hover",
                                        "active",
                                        "disabled"
                                    ],
                                    "properties": {
                                        "normal": {
                                            "$id": "#/properties/button/properties/link/properties/icon/properties/color/properties/normal",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "hover": {
                                            "$id": "#/properties/button/properties/link/properties/icon/properties/color/properties/hover",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "active": {
                                            "$id": "#/properties/button/properties/link/properties/icon/properties/color/properties/active",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "disabled": {
                                            "$id": "#/properties/button/properties/link/properties/icon/properties/color/properties/disabled",
                                            "type": "string",
                                            "minLength": 1
                                        }
                                    }
                                },
                                "size": {
                                    "$id": "#/properties/button/properties/link/properties/icon/properties/size",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        }
                    }
                },
                "circle": {
                    "$id": "#/properties/button/properties/circle",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "iconSize",
                        "borderRadius",
                        "padding"
                    ],
                    "properties": {
                        "iconSize": {
                            "$id": "#/properties/button/properties/circle/properties/iconSize",
                            "type": "string",
                            "minLength": 1
                        },
                        "borderRadius": {
                            "$id": "#/properties/button/properties/circle/properties/borderRadius",
                            "type": "string",
                            "minLength": 1
                        },
                        "padding": {
                            "$id": "#/properties/button/properties/circle/properties/padding",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "disabled": {
                    "$id": "#/properties/button/properties/disabled",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "background",
                        "border",
                        "color"
                    ],
                    "properties": {
                        "background": {
                            "$id": "#/properties/button/properties/disabled/properties/background",
                            "type": "string",
                            "minLength": 1
                        },
                        "border": {
                            "$id": "#/properties/button/properties/disabled/properties/border",
                            "type": "string",
                            "minLength": 1
                        },
                        "color": {
                            "$id": "#/properties/button/properties/disabled/properties/color",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                }
            }
        },
        "message": {
            "$id": "#/properties/message",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "success",
                "info",
                "warning",
                "error",
                "roomCard",
                "memberRate",
                "pacRate",
                "fnsRate"
            ],
            "properties": {
                "success": {
                    "$id": "#/properties/message/properties/success",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "color",
                        "colorLight",
                        "icon"
                    ],
                    "properties": {
                        "color": {
                            "$id": "#/properties/message/properties/success/properties/color",
                            "type": "string",
                            "minLength": 1
                        },
                        "colorLight": {
                            "$id": "#/properties/message/properties/success/properties/colorLight",
                            "type": "string",
                            "minLength": 1
                        },
                        "icon": {
                            "$id": "#/properties/message/properties/success/properties/icon",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "info": {
                    "$id": "#/properties/message/properties/info",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "color",
                        "colorLight",
                        "icon"
                    ],
                    "properties": {
                        "color": {
                            "$id": "#/properties/message/properties/info/properties/color",
                            "type": "string",
                            "minLength": 1
                        },
                        "colorLight": {
                            "$id": "#/properties/message/properties/info/properties/colorLight",
                            "type": "string",
                            "minLength": 1
                        },
                        "icon": {
                            "$id": "#/properties/message/properties/info/properties/icon",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "warning": {
                    "$id": "#/properties/message/properties/warning",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "color",
                        "colorLight",
                        "icon"
                    ],
                    "properties": {
                        "color": {
                            "$id": "#/properties/message/properties/warning/properties/color",
                            "type": "string",
                            "minLength": 1
                        },
                        "colorLight": {
                            "$id": "#/properties/message/properties/warning/properties/colorLight",
                            "type": "string",
                            "minLength": 1
                        },
                        "icon": {
                            "$id": "#/properties/message/properties/warning/properties/icon",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "error": {
                    "$id": "#/properties/message/properties/error",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "color",
                        "colorLight",
                        "icon"
                    ],
                    "properties": {
                        "color": {
                            "$id": "#/properties/message/properties/error/properties/color",
                            "type": "string",
                            "minLength": 1
                        },
                        "colorLight": {
                            "$id": "#/properties/message/properties/error/properties/colorLight",
                            "type": "string",
                            "minLength": 1
                        },
                        "icon": {
                            "$id": "#/properties/message/properties/error/properties/icon",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "roomCard": {
                    "$id": "#/properties/message/properties/roomCard",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "color",
                        "background"
                    ],
                    "properties": {
                        "color": {
                            "$id": "#/properties/message/properties/roomCard/properties/color",
                            "type": "string",
                            "minLength": 1
                        },
                        "background": {
                            "$id": "#/properties/message/properties/roomCard/properties/background",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "memberRate": {
                    "$id": "#/properties/message/properties/memberRate",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "color",
                        "fontWeight",
                        "textTransform"
                    ],
                    "properties": {
                        "color": {
                            "$id": "#/properties/message/properties/memberRate/properties/color",
                            "type": "string",
                            "minLength": 1
                        },
                        "fontWeight": {
                            "$id": "#/properties/message/properties/memberRate/properties/fontWeight",
                            "type": "string",
                            "minLength": 1
                        },
                        "textTransform": {
                            "$id": "#/properties/message/properties/memberRate/properties/textTransform",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "pacRate": {
                    "$id": "#/properties/message/properties/pacRate",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "color",
                        "fontWeight",
                        "textTransform"
                    ],
                    "properties": {
                        "color": {
                            "$id": "#/properties/message/properties/pacRate/properties/color",
                            "type": "string",
                            "minLength": 1
                        },
                        "fontWeight": {
                            "$id": "#/properties/message/properties/pacRate/properties/fontWeight",
                            "type": "string",
                            "minLength": 1
                        },
                        "textTransform": {
                            "$id": "#/properties/message/properties/pacRate/properties/textTransform",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "fnsRate": {
                    "$id": "#/properties/message/properties/fnsRate",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "color",
                        "fontWeight",
                        "textTransform"
                    ],
                    "properties": {
                        "color": {
                            "$id": "#/properties/message/properties/fnsRate/properties/color",
                            "type": "string",
                            "minLength": 1
                        },
                        "fontWeight": {
                            "$id": "#/properties/message/properties/fnsRate/properties/fontWeight",
                            "type": "string",
                            "minLength": 1
                        },
                        "textTransform": {
                            "$id": "#/properties/message/properties/fnsRate/properties/textTransform",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                }
            }
        },
        "calendar": {
            "$id": "#/properties/calendar",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "border",
                "date",
                "dot",
                "tooltip",
                "inlinePrice"
            ],
            "properties": {
                "border": {
                    "$id": "#/properties/calendar/properties/border",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "width",
                        "style",
                        "color"
                    ],
                    "properties": {
                        "width": {
                            "$id": "#/properties/calendar/properties/border/properties/width",
                            "type": "string",
                            "minLength": 1
                        },
                        "style": {
                            "$id": "#/properties/calendar/properties/border/properties/style",
                            "type": "string",
                            "minLength": 1
                        },
                        "color": {
                            "$id": "#/properties/calendar/properties/border/properties/color",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "date": {
                    "$id": "#/properties/calendar/properties/date",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "noCheckIn",
                        "noCheckOut",
                        "unavailableFutureDate",
                        "selected",
                        "available",
                        "unavailable",
                        "restricted",
                        "hover",
                        "textSize"
                    ],
                    "properties": {
                        "noCheckIn": {
                            "$id": "#/properties/calendar/properties/date/properties/noCheckIn",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "background",
                                "color"
                            ],
                            "properties": {
                                "background": {
                                    "$id": "#/properties/calendar/properties/date/properties/noCheckIn/properties/background",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "color": {
                                    "$id": "#/properties/calendar/properties/date/properties/noCheckIn/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "noCheckOut": {
                            "$id": "#/properties/calendar/properties/date/properties/noCheckOut",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "background",
                                "color"
                            ],
                            "properties": {
                                "background": {
                                    "$id": "#/properties/calendar/properties/date/properties/noCheckOut/properties/background",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "color": {
                                    "$id": "#/properties/calendar/properties/date/properties/noCheckOut/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "unavailableFutureDate": {
                            "$id": "#/properties/calendar/properties/date/properties/unavailableFutureDate",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "background",
                                "textColor",
                                "lineColor"
                            ],
                            "properties": {
                                "background": {
                                    "$id": "#/properties/calendar/properties/date/properties/unavailableFutureDate/properties/background",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "textColor": {
                                    "$id": "#/properties/calendar/properties/date/properties/unavailableFutureDate/properties/textColor",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "lineColor": {
                                    "$id": "#/properties/calendar/properties/date/properties/unavailableFutureDate/properties/lineColor",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "selected": {
                            "$id": "#/properties/calendar/properties/date/properties/selected",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "background",
                                "color",
                                "spinner"
                            ],
                            "properties": {
                                "background": {
                                    "$id": "#/properties/calendar/properties/date/properties/selected/properties/background",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "color": {
                                    "$id": "#/properties/calendar/properties/date/properties/selected/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "spinner": {
                                    "$id": "#/properties/calendar/properties/date/properties/selected/properties/spinner",
                                    "type": "object",
                                    "minProperties": 1,
                                    "additionalProperties": false,
                                    "required": [
                                        "color1",
                                        "color2"
                                    ],
                                    "properties": {
                                        "color1": {
                                            "$id": "#/properties/calendar/properties/date/properties/selected/properties/spinner/properties/color1",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "color2": {
                                            "$id": "#/properties/calendar/properties/date/properties/selected/properties/spinner/properties/color2",
                                            "type": "string",
                                            "minLength": 1
                                        }
                                    }
                                }
                            }
                        },
                        "available": {
                            "$id": "#/properties/calendar/properties/date/properties/available",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "background",
                                "color"
                            ],
                            "properties": {
                                "background": {
                                    "$id": "#/properties/calendar/properties/date/properties/available/properties/background",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "color": {
                                    "$id": "#/properties/calendar/properties/date/properties/available/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "unavailable": {
                            "$id": "#/properties/calendar/properties/date/properties/unavailable",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "background",
                                "color"
                            ],
                            "properties": {
                                "background": {
                                    "$id": "#/properties/calendar/properties/date/properties/unavailable/properties/background",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "color": {
                                    "$id": "#/properties/calendar/properties/date/properties/unavailable/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "restricted": {
                            "$id": "#/properties/calendar/properties/date/properties/restricted",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "background",
                                "color"
                            ],
                            "properties": {
                                "background": {
                                    "$id": "#/properties/calendar/properties/date/properties/restricted/properties/background",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "color": {
                                    "$id": "#/properties/calendar/properties/date/properties/restricted/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "hover": {
                            "$id": "#/properties/calendar/properties/date/properties/hover",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "background",
                                "color"
                            ],
                            "properties": {
                                "background": {
                                    "$id": "#/properties/calendar/properties/date/properties/hover/properties/background",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "color": {
                                    "$id": "#/properties/calendar/properties/date/properties/hover/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "textSize": {
                            "$id": "#/properties/calendar/properties/date/properties/textSize",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "dot": {
                    "$id": "#/properties/calendar/properties/dot",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "color",
                        "border"
                    ],
                    "properties": {
                        "color": {
                            "$id": "#/properties/calendar/properties/dot/properties/color",
                            "type": "string",
                            "minLength": 1
                        },
                        "border": {
                            "$id": "#/properties/calendar/properties/dot/properties/border",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "tooltip": {
                    "$id": "#/properties/calendar/properties/tooltip",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "background",
                        "border",
                        "color"
                    ],
                    "properties": {
                        "background": {
                            "$id": "#/properties/calendar/properties/tooltip/properties/background",
                            "type": "string",
                            "minLength": 1
                        },
                        "border": {
                            "$id": "#/properties/calendar/properties/tooltip/properties/border",
                            "type": "string",
                            "minLength": 1
                        },
                        "color": {
                            "$id": "#/properties/calendar/properties/tooltip/properties/color",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "inlinePrice": {
                    "$id": "#/properties/calendar/properties/inlinePrice",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "textSize"
                    ],
                    "properties": {
                        "textSize": {
                            "$id": "#/properties/calendar/properties/inlinePrice/properties/textSize",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                }
            }
        },
        "imageHeight": {
            "$id": "#/properties/imageHeight",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "hotel"
            ],
            "properties": {
                "hotel": {
                    "$id": "#/properties/imageHeight/properties/hotel",
                    "type": "string",
                    "minLength": 1
                }
            }
        },
        "addOn": {
            "$id": "#/properties/addOn",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "category"
            ],
            "properties": {
                "category": {
                    "$id": "#/properties/addOn/properties/category",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "color"
                    ],
                    "properties": {
                        "color": {
                            "$id": "#/properties/addOn/properties/category/properties/color",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                }
            }
        },
        "checkout": {
            "$id": "#/properties/checkout",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "signInMsg"
            ],
            "properties": {
                "signInMsg": {
                    "$id": "#/properties/checkout/properties/signInMsg",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "color"
                    ],
                    "properties": {
                        "color": {
                            "$id": "#/properties/checkout/properties/signInMsg/properties/color",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                }
            }
        },
        "palette": {
            "$id": "#/properties/palette",
            "type": "object",
            "minProperties": 1,
            "additionalProperties": false,
            "required": [
                "primary",
                "background",
                "messages",
                "message",
                "border"
            ],
            "properties": {
                "primary": {
                    "$id": "#/properties/palette/properties/primary",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "colors",
                        "selected"
                    ],
                    "properties": {
                        "colors": {
                            "$id": "#/properties/palette/properties/primary/properties/colors",
                            "type": "array",
                            "items": {
                                "$id": "#/properties/palette/properties/primary/properties/colors/items",
                                "type": "object",
                                "minProperties": 1,
                                "additionalProperties": false,
                                "required": [
                                    "color",
                                    "label"
                                ],
                                "properties": {
                                    "color": {
                                        "$id": "#/properties/palette/properties/primary/properties/colors/items/properties/color",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "label": {
                                        "$id": "#/properties/palette/properties/primary/properties/colors/items/properties/label",
                                        "type": "string",
                                        "minLength": 1
                                    }
                                }
                            }
                        },
                        "selected": {
                            "$id": "#/properties/palette/properties/primary/properties/selected",
                            "type": "integer"
                        }
                    }
                },
                "background": {
                    "$id": "#/properties/palette/properties/background",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "body",
                        "style1",
                        "style2",
                        "style3"
                    ],
                    "properties": {
                        "body": {
                            "$id": "#/properties/palette/properties/background/properties/body",
                            "type": "string",
                            "minLength": 1
                        },
                        "style1": {
                            "$id": "#/properties/palette/properties/background/properties/style1",
                            "type": "string",
                            "minLength": 1
                        },
                        "style2": {
                            "$id": "#/properties/palette/properties/background/properties/style2",
                            "type": "string",
                            "minLength": 1
                        },
                        "style3": {
                            "$id": "#/properties/palette/properties/background/properties/style3",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "messages": {
                    "$id": "#/properties/palette/properties/messages",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "colors",
                        "selected"
                    ],
                    "properties": {
                        "colors": {
                            "$id": "#/properties/palette/properties/messages/properties/colors",
                            "type": "array",
                            "items": {
                                "$id": "#/properties/palette/properties/messages/properties/colors/items",
                                "type": "object",
                                "minProperties": 1,
                                "additionalProperties": false,
                                "required": [
                                    "color",
                                    "label"
                                ],
                                "properties": {
                                    "color": {
                                        "$id": "#/properties/palette/properties/messages/properties/colors/items/properties/color",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "label": {
                                        "$id": "#/properties/palette/properties/messages/properties/colors/items/properties/label",
                                        "type": "string",
                                        "minLength": 1
                                    }
                                }
                            }
                        },
                        "selected": {
                            "$id": "#/properties/palette/properties/messages/properties/selected",
                            "type": "integer"
                        }
                    }
                },
                "message": {
                    "$id": "#/properties/palette/properties/message",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "success",
                        "info",
                        "warning",
                        "error"
                    ],
                    "properties": {
                        "success": {
                            "$id": "#/properties/palette/properties/message/properties/success",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "color",
                                "icon"
                            ],
                            "properties": {
                                "color": {
                                    "$id": "#/properties/palette/properties/message/properties/success/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "icon": {
                                    "$id": "#/properties/palette/properties/message/properties/success/properties/icon",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "info": {
                            "$id": "#/properties/palette/properties/message/properties/info",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "color",
                                "icon"
                            ],
                            "properties": {
                                "color": {
                                    "$id": "#/properties/palette/properties/message/properties/info/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "icon": {
                                    "$id": "#/properties/palette/properties/message/properties/info/properties/icon",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "warning": {
                            "$id": "#/properties/palette/properties/message/properties/warning",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "color",
                                "icon"
                            ],
                            "properties": {
                                "color": {
                                    "$id": "#/properties/palette/properties/message/properties/warning/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "icon": {
                                    "$id": "#/properties/palette/properties/message/properties/warning/properties/icon",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "error": {
                            "$id": "#/properties/palette/properties/message/properties/error",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "color",
                                "icon"
                            ],
                            "properties": {
                                "color": {
                                    "$id": "#/properties/palette/properties/message/properties/error/properties/color",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "icon": {
                                    "$id": "#/properties/palette/properties/message/properties/error/properties/icon",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        }
                    }
                },
                "border": {
                    "$id": "#/properties/palette/properties/border",
                    "type": "object",
                    "minProperties": 1,
                    "additionalProperties": false,
                    "required": [
                        "radius",
                        "color"
                    ],
                    "properties": {
                        "radius": {
                            "$id": "#/properties/palette/properties/border/properties/radius",
                            "type": "string",
                            "minLength": 1
                        },
                        "color": {
                            "$id": "#/properties/palette/properties/border/properties/color",
                            "type": "object",
                            "minProperties": 1,
                            "additionalProperties": false,
                            "required": [
                                "style1",
                                "style2"
                            ],
                            "properties": {
                                "style1": {
                                    "$id": "#/properties/palette/properties/border/properties/color/properties/style1",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "style2": {
                                    "$id": "#/properties/palette/properties/border/properties/color/properties/style2",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}