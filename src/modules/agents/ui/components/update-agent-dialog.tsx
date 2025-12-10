import { ResponsiveDialog } from "@/components/reponsive-dilog";
import {AgentForm} from "./agent-form"
import { AgentGetOne } from "../../types";
interface updateAgentDialogProps{
    open:boolean;
    onOpenChange:(open:boolean) =>void;
    initialValues:AgentGetOne;

}

export const UpdateAgentDialog = ({
    open,
    onOpenChange,
    initialValues
}:updateAgentDialogProps)=>{
    return(
        <ResponsiveDialog
        title="Edit Agent"
        description="Edit the agent details"
        open={open}
        onOpenChange={onOpenChange}
        >
            <AgentForm
            onSuccess={() => onOpenChange(false)}
            onCancel={() => onOpenChange(false)}
            initialValues={initialValues}
            />
        </ResponsiveDialog>
    )                                                                                   
};