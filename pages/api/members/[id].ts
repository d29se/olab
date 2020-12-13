import { NextApiRequest, NextApiResponse } from "next";
import { mockMembers } from "../../../mocks/mockMembers";
// Types
import { IMember } from "../../../interfaces/member.interface";

export default function (req: NextApiRequest, res: NextApiResponse) {
  const members: Array<IMember> = mockMembers;
  const memberId = req.query.id;
  const member = members.find((element: IMember) => element.id === memberId);

  res.statusCode = 200;
  res.json({ member });
}
