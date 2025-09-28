import { useParams, Navigate } from "react-router-dom";
import TrainingGroupDetail from "./TrainingGroupDetail";
import { mockTrainingGroups } from "../data/mockData";

export default function TrainingGroupDetailWrapper() {
  const { groupId } = useParams<{ groupId: string }>();

  const group = mockTrainingGroups.find((g) => g.id === groupId);

  if (!group) {
    return <Navigate to="/app/dashboard" replace />;
  }

  return <TrainingGroupDetail group={group} />;
}
