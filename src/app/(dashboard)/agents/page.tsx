import { auth } from "@/lib/auth";
import { AgentListHeader } from "@/modules/agents/ui/components/agentlist-header";
import { AgentView, AgenViewError, AgenViewLoading } from "@/modules/agents/ui/views/agents-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Page = async() =>{

    const session = await auth.api.getSession({
        headers: await headers(),
    })
    if(!session){
        redirect("/sign-in");
    }
    const quearyClient = getQueryClient();
    void quearyClient.prefetchQuery(trpc.agents.getMany.queryOptions());


    return (
        <>
        <AgentListHeader/>
        <HydrationBoundary state={dehydrate(quearyClient)}>
            <Suspense fallback={<AgenViewLoading/>}>
            <ErrorBoundary fallback={<AgenViewError/>}>
            <AgentView/>
            </ErrorBoundary>
            

            </Suspense>
            
        </HydrationBoundary>
        </>
);
};
export default Page; 

