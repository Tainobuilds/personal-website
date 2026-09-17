import { kippo } from "./work/kippo";
import { aligned } from "./work/aligned";
import { spruce } from "./work/spruce";
import { trends } from "./work/trends";
import type { WorkContent } from "./work/types";

// Note: ./work/insights-311.ts still exists on disk (real, verified content)
// but is intentionally left out of this index — Trends replaced it in
// Pillar 3 on 2026-09-14, per explicit user decision. Add it back here
// if asked to restore it, rather than rewriting it from scratch.
//
// ./work/ticket-triage.ts also still exists on disk (real, verified
// content) but was removed from this index on 2026-09-17 per explicit
// user decision. Add it back here if asked to restore it.
export const WORK_INDEX: WorkContent[] = [kippo, aligned, spruce, trends];
