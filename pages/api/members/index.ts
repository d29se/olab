import { NextApiRequest, NextApiResponse } from "next";
import { mockMembers } from "../../../mocks/mockMembers";
// Types
import { IMember } from "../../../interfaces/member.interface";

export default function (req: NextApiRequest, res: NextApiResponse) {
  const members: Array<IMember> = mockMembers;
  res.statusCode = 200;
  res.json({ members });
}
