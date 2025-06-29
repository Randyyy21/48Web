"use client";

import React from 'react';
import Card from '@/components/ui/Card';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { MemberItem } from '@/types/member';
import { mockMembers } from '@/data/mockData';

const Members: React.FC = () => {
  const members: MemberItem[] = mockMembers;

  return (
    <section className="members py-12 bg-white">
      <h2 className="text-3xl font-bold text-dreamland-dark text-center mb-8 animate-fade-in">Our Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        {members.length === 0 ? (
          <LoadingSpinner />
        ) : (
          members.map((member) => (
            <Card
              key={member.id}
              image={member.image}
              title={member.name}
              description={member.team}
              buttonText="Profile"
              onButtonClick={() => console.log('Member profile')}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Members;