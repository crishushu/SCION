



module.exports = {
    "states": [
        {
            "id": "a",
            "transitions": [
                {
                    "target": "b",
                    "event": "foo"
                }
            ]
        },
        {
            "id": "b",
            "transitions": [
                {
                    "target": "c",
                    "event": "foo.bar"
                }
            ]
        },
        {
            "id": "c",
            "transitions": [
                {
                    "target": "d",
                    "event": "foo.bar.bat"
                }
            ]
        },
        {
            "id": "d",
            "transitions": [
                {
                    "target": "e",
                    "event": "foo.*"
                },
                {
                    "target": "fail",
                    "event": "foo"
                }
            ]
        },
        {
            "id": "e",
            "transitions": [
                {
                    "target": "f",
                    "event": "foo.bar.*"
                },
                {
                    "target": "fail",
                    "event": "foo.bar"
                }
            ]
        },
        {
            "id": "f",
            "transitions": [
                {
                    "target": "g",
                    "event": "foo.bar.bat.*"
                },
                {
                    "target": "fail",
                    "event": "foo.bar.bat"
                }
            ]
        },
        {
            "id": "g"
        },
        {
            "id": "fail"
        }
    ]
};