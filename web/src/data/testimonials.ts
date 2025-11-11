export interface Testimonial {
  id: string
  author: string
  role: string
  content: string
  rating: number
  source?: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    author: "GitChain Studios",
    role: "Game Server Owner",
    content: "Exploring DApps here feels like unlocking hidden worlds. It's smooth, fast, and surprisingly fun.",
    rating: 4.9,
    source: "GitHub",
  },
  {
    id: "2",
    author: "Elena R",
    role: "Blockchain Developer",
    content: "Finally, a Web3 platform that puts security first. I can transact with peace of mind, knowing my assets are always protected.",
    rating: 4.9,
    source: "Discord",
  },
  {
    id: "3",
    author: "Sofia M",
    role: "NFT Creator",
    content: "Managing my NFTs used to be messy. Now I can showcase, trade, and connect wallets in one place—it feels effortless.",
    rating: 4.8,
    source: "FiveM Community",
  },
  {
    id: "4",
    author: "Daniel R",
    role: "DeFi Analyst",
    content: "The real-time transparency helps us track every detail. No more blind spots in blockchain activity.",
    rating: 4.9,
    source: "GitHub",
  },
]

