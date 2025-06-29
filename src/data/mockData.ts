import { NewsItem } from '@/types/news';
import { EventItem } from '@/types/event';
import { ScheduleItem } from '@/types/schedule';
import { MemberItem } from '@/types/member';

export const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'JKT48 New Single Release',
    excerpt: 'JKT48 announces their latest single, set to release next month.',
    image: '/images/news1.jpg',
  },
  {
    id: '2',
    title: 'Special Fan Meeting',
    excerpt: 'Join us for an exclusive fan meeting this weekend!',
    image: '/images/news2.jpg',
  },
];

export const mockEvents: EventItem[] = [
  {
    id: '1',
    title: 'JKT48 Concert',
    date: '2025-07-15',
    image: '/images/event1.jpg',
  },
  {
    id: '2',
    title: 'Meet and Greet',
    date: '2025-08-01',
    image: '/images/event2.jpg',
  },
];

export const mockSchedules: ScheduleItem[] = [
  {
    id: '1',
    date: '2025-07-01',
    show: 'Pajama Drive',
    time: '19:00',
  },
  {
    id: '2',
    date: '2025-07-02',
    show: 'Renai Kinshi Jourei',
    time: '19:00',
  },
];

export const mockMembers: MemberItem[] = [
  {
    id: '1',
    name: 'Member Name 1',
    team: 'Team J',
    image: '/images/members/member1.jpg',
  },
  {
    id: '2',
    name: 'Member Name 2',
    team: 'Team KIII',
    image: '/images/members/member2.jpg',
  },
];