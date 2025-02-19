import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await res.revalidate("/rendering/isr/on-demand-revalidate");
    return res.json({ revalidated: true });
  } catch (error) {
    return res.json({ revalidated: false });
  }
}
