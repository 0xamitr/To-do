
function maketodo(topic, description, duedate, priority){
    this.topic = topic;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
    this.complete = "false";
}

export {maketodo};