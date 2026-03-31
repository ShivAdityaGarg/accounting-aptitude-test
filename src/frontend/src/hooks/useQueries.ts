import { useMutation, useQuery } from "@tanstack/react-query";
import type { SubmitAttemptInput } from "../backend";
import { useActor } from "./useActor";

export function useGetQuestions() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["questions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getQuestions();
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}

export function useGetExamConfig() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["examConfig"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getExamConfig();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitAttempt() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (input: SubmitAttemptInput) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitAttempt(input);
    },
  });
}
