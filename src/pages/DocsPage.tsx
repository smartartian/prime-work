import { Navigate, useParams } from "react-router-dom";
import { Docs } from "../components/Docs";
import { getDoc } from "../data/docs";

export function DocsPage() {
  const { slug } = useParams<{ slug?: string }>();
  const doc = getDoc(slug);

  if (!doc) return <Navigate to="/docs" replace />;
  return <Docs doc={doc} />;
}
