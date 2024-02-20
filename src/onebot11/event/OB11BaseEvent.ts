import {selfInfo} from "../../common/data";

export enum EventType {
    META = "meta_event",
    REQUEST = "request",
    NOTICE = "notice",
    MESSAGE = "message"
}


export abstract class OB11BaseEvent {
    time = new Date().getTime();
    self_id = parseInt(selfInfo.uin);
    post_type: EventType;
}