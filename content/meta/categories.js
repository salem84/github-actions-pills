import SettingsIcon from 'react-feather/dist/icons/settings';
import GitBranchIcon from 'react-feather/dist/icons/git-branch';
import ImageIcon from 'react-feather/dist/icons/image';
import FolderPlusIcon from 'react-feather/dist/icons/folder-plus';
import CloudIcon from 'react-feather/dist/icons/cloud';

export const categories = [
  // { name: 'devops', label: 'DevOps', icon: GitBranchIcon },
  { name: 'azure', label: 'Azure', icon: CloudIcon },
  { name: 'iac', label: 'Infrastructure As Code', icon: SettingsIcon },
  // { name: 'scripts', label: 'Scripts', icon: ImageIcon },
  // { name: 'tools', label: 'Tools', icon: FolderPlusIcon },
  // { name: 'hacking', label: 'Hacking', icon: SettingsIcon },
  // { name: 'varie', label: 'Varie', icon: SettingsIcon },
];

export default categories;
