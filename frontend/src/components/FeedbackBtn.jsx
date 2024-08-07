import React from "react";
import { Popover, PopoverTrigger, PopoverContent, Button, Link } from "@nextui-org/react";

const FeedbackBtn = () => {
    return (
        <Popover placement="bottom" showArrow={true}>
            <PopoverTrigger>
                <Button color="primary" >Feedback</Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="px-1 py-2">
                <Link href="mailto:support@journaling.com">support@journaling.com</Link>
                <div className="text-tiny">We're always looking to improve! Share your feedback and help us make your experience even better.</div>
                </div>
            </PopoverContent>
        </Popover>
    )
} 

export default FeedbackBtn;