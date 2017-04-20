module.exports = controller => {
  [
    {
        "command": "q me",
        "description": "When someone tries to queue up, send a response",
        "triggers": [
            {
                "pattern": "queue me",
                "type": "string",
                "id": 72
            },
            {
                "pattern": "q me, queue me",
                "type": "string",
                "id": 41
            },
            {
                "type": "string",
                "pattern": "q me"
            }
        ],
        "variables": [
            {
                "name": "question_1",
                "type": "string"
            },
            {
                "name": "question_2",
                "type": "string"
            },
            {
                "name": "question_3",
                "type": "string"
            }
        ],
        "script": [
            {
                "topic": "default",
                "script": [
                    {
                        "text": [
                            "Hello! I'm Taj French, your new TA bot! I'll never joke about leaving you!"
                        ],
                        "collect": {
                            "key": "question_1",
                            "options": [
                                {
                                    "default": true,
                                    "pattern": "default",
                                    "action": "next"
                                }
                            ]
                        }
                    },
                    {
                        "action": "complete"
                    }
                ]
            },
            {
                "topic": "on_timeout",
                "script": [
                    {
                        "text": [
                            "Looks like you got distracted. We can continue later."
                        ]
                    },
                    {
                        "action": "timeout"
                    }
                ]
            }
        ]
    }
  ]
}
