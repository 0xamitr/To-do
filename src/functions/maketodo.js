
function maketodo(topic, description, date, priority){
    this.topic = topic;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.complete = "false";
}

export {maketodo};