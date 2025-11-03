import type { Access, FieldAccess } from 'payload';

type AccessArgs = Parameters<Access>[0] & {
  req: {
    user?: {
      id?: string;
      roles?: string[];
    };
  };
};

const hasRole = (req: AccessArgs['req'], role: string) => {
  const roles = req.user?.roles;

  return Array.isArray(roles) && roles.includes(role);
};

export const isLoggedIn: Access = ({ req }) => Boolean(req.user);

export const isAdmin: Access = ({ req }) => hasRole(req, 'admin');

export const isAdminOrEditor: Access = ({ req }) =>
  hasRole(req, 'admin') || hasRole(req, 'editor');

export const isAdminOrAuthor: Access = ({ req }) =>
  hasRole(req, 'admin') || hasRole(req, 'editor') || hasRole(req, 'author');

export const adminsOrSelf: Access = ({ req }) => {
  if (hasRole(req, 'admin')) {
    return true;
  }

  if (!req.user?.id) {
    return false;
  }

  return {
    id: {
      equals: req.user.id,
    },
  };
};

export const ownerOrAdmin = (fieldName: string): Access => ({ req }) => {
  if (hasRole(req, 'admin')) {
    return true;
  }

  if (!req.user?.id) {
    return false;
  }

  return {
    [fieldName]: {
      equals: req.user.id,
    },
  };
};

export const adminsOrEditorsField: FieldAccess = ({ req }) =>
  hasRole(req, 'admin') || hasRole(req, 'editor');

export const adminsField: FieldAccess = ({ req }) => hasRole(req, 'admin');

