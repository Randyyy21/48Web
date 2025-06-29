import { NewsItem } from '@/types/news';
import { EventItem } from '@/types/event';
import { ScheduleItem } from '@/types/schedule';
import { MemberItem } from '@/types/member';
import { mockNews, mockEvents, mockSchedules, mockMembers } from '@/data/mockData';

export const fetchNews = async (): Promise<NewsItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockNews);
    }, 1000);
  });
};

export const fetchEvents = async (): Promise<EventItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockEvents);
    }, 1000);
  });
};

export const fetchSchedules = async (): Promise<ScheduleItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockSchedules);
    }, 1000);
  });
};

export const fetchMembers = async (): Promise<MemberItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMembers);
    }, 1000);
  });
};