
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  children
}) => (
  <Card className="h-full">
    <CardHeader className="flex flex-row items-center space-x-3 pb-2">
      <Icon className="h-8 w-8 text-primary" />
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-muted-foreground">
      {children}
    </CardContent>
  </Card>
);

export default FeatureCard;
