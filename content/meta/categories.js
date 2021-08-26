import SettingsIcon from 'react-feather/dist/icons/settings';
import GitBranchIcon from 'react-feather/dist/icons/git-branch';
import PenToolIcon from 'react-feather/dist/icons/pen-tool';
import ServerIcon from 'react-feather/dist/icons/server';
import CloudIcon from 'react-feather/dist/icons/cloud';

export const categories = [
  // { name: 'devops', label: 'DevOps', icon: GitBranchIcon },
  { name: 'azure', label: 'Azure', icon: CloudIcon },
  { name: 'iac', label: 'Infrastructure As Code', icon: ServerIcon },
  { name: 'frontend', label: 'Frontend', icon: PenToolIcon},
  { name: 'k8s', label: 'K8s & Docker', icon: SettingsIcon },
];

export default categories;
