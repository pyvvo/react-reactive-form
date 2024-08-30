import { Box, Center, Group, Paper, RingProgress, Text } from '@mantine/core';
import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons-react';
import { FC } from 'react';

interface IStatsRing {
  label: string;
  stats: string;
  progress: number;
  color: string;
  icon: 'up' | 'down';
}

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight
};

const StatsRing: FC<IStatsRing> = (props) => {
  const { label, stats, progress, color, icon, ...rest } = props;
  const Icon = icons[icon];

  return (
    <Paper withBorder radius="md" p="xs" {...rest}>
      <Group>
        <RingProgress
          size={80}
          roundCaps
          thickness={8}
          sections={[{ value: progress, color }]}
          label={
            <Center>
              <Icon size={22} stroke={1.5} />
            </Center>
          }
        />

        <Box>
          <Text
            style={{
              color: 'dimmed',
              fontWeight: 700
            }}
            size="xs"
            tt="uppercase">
            {label}
          </Text>
          <Text
            style={{
              fontWeight: 700
            }}
            size="xl">
            {stats}
          </Text>
        </Box>
      </Group>
    </Paper>
  );
};

export default StatsRing;
