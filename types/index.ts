// Base Entity Interface
export interface BaseEntity {
  id: number;
  created_at: string;
  updated_at?: string;
}

// User Types
export interface User extends BaseEntity {
  full_name: string;
  email: string;
  password_hash: string;
  role_id: number;
  office_id?: number;
  role?: Role;
  office?: Office;
}

export interface Role extends BaseEntity {
  name: string;
  description?: string;
  permissions?: Permission[];
}

export interface Office extends BaseEntity {
  name: string;
  description?: string;
  users?: User[];
}

export interface Permission extends BaseEntity {
  name: string;
  description?: string;
  resource: string;
  action: string;
}

// Project Types
export interface Project extends BaseEntity {
  name: string;
  description?: string;
  created_by_id: number;
  created_by?: User;
  properties?: EntityProperty[];
}

// Property Definition Types
export interface PropertyDefinition extends BaseEntity {
  name: string;
  display_name: string;
  description?: string;
  data_type: 'string' | 'number' | 'boolean' | 'date' | 'select';
  is_required: boolean;
  default_value?: string;
  validation_rules?: string;
  options?: PropertyOption[];
}

export interface PropertyOption extends BaseEntity {
  property_definition_id: number;
  value: string;
  display_name: string;
  sort_order: number;
  property_definition?: PropertyDefinition;
}

// Entity Property Types
export interface EntityProperty extends BaseEntity {
  entity_type: string;
  entity_id: number;
  property_definition_id: number;
  string_value?: string;
  number_value?: number;
  date_value?: string;
  bool_value?: boolean;
  created_by_id: number;
  property_definition?: PropertyDefinition;
  created_by?: User;
}

export interface EntityPropertyLog extends BaseEntity {
  entity_property_id: number;
  old_value?: string;
  new_value?: string;
  changed_by_id: number;
  change_reason?: string;
  entity_property?: EntityProperty;
  changed_by?: User;
}

// Task Types
export interface Task extends BaseEntity {
  task_rule_id: number;
  entity_type: string;
  entity_id: number;
  assigned_to_user_id?: number;
  assigned_to_office_id?: number;
  due_date?: string;
  status: 'pending' | 'completed' | 'overdue';
  created_by_id: number;
  completed_by_id?: number;
  completed_at?: string;
  task_rule?: TaskRule;
  assigned_to_user?: User;
  assigned_to_office?: Office;
  created_by?: User;
  completed_by?: User;
}

export interface TaskRule extends BaseEntity {
  name: string;
  description?: string;
  entity_type: string;
  property_definition_id?: number;
  condition_type: 'equals' | 'not_equals' | 'contains' | 'greater_than' | 'less_than';
  condition_value?: string;
  task_name: string;
  task_description?: string;
  due_date_offset?: number;
  assign_to_user_id?: number;
  assign_to_office_id?: number;
  property_definition?: PropertyDefinition;
  assign_to_user?: User;
  assign_to_office?: Office;
}

export interface TaskLog extends BaseEntity {
  task_id: number;
  action: 'created' | 'assigned' | 'started' | 'completed' | 'overdue';
  performed_by_id?: number;
  notes?: string;
  task?: Task;
  performed_by?: User;
}

// Approval Types
export interface ApprovalRequest extends BaseEntity {
  entity_type: string;
  entity_id: number;
  requestor_id: number;
  approver_id?: number;
  status: 'pending' | 'approved' | 'rejected';
  request_reason?: string;
  approval_notes?: string;
  approved_at?: string;
  requestor?: User;
  approver?: User;
}

// API Response Types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
  status: 'success' | 'error';
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface AuthResponse {
  token: string;
  user: User;
  role: string;
}

// Query Types
export interface QueryOptions {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  filters?: Record<string, any>;
}

// Form Types
export interface FormProps<T> {
  initialData?: Partial<T>;
  onSubmit: (data: T) => Promise<void>;
  onCancel?: () => void;
  isLoading?: boolean;
  errors?: Record<string, string>;
}

export interface TableProps<T> {
  data: T[];
  columns: ColumnDefinition<T>[];
  onRowClick?: (item: T) => void;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  isLoading?: boolean;
  pagination?: PaginationProps;
}

export interface ColumnDefinition<T> {
  key: keyof T | string;
  header: string;
  render?: (value: any, item: T) => React.ReactNode;
  sortable?: boolean;
  width?: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// Authentication Types
export interface JwtPayload {
  userId: number;
  username: string;
  role: string;
  iat: number;
  exp: number;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthContext {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
}

// Theme Types
export interface Theme {
  mode: 'light' | 'dark';
  colors: ColorTokens;
  typography: TypographyTokens;
  spacing: SpacingTokens;
  shadows: ShadowTokens;
  transitions: TransitionTokens;
}

export interface ColorTokens {
  primary: Record<string, string>;
  neutral: Record<string, string>;
  success: Record<string, string>;
  warning: Record<string, string>;
  error: Record<string, string>;
  background: Record<string, string>;
  text: Record<string, string>;
}

export interface TypographyTokens {
  fonts: Record<string, string[]>;
  fontSizes: Record<string, string>;
  headings: Record<string, string>;
  body: Record<string, string>;
}

export interface SpacingTokens {
  spacing: Record<string, string>;
  layout: Record<string, Record<string, string>>;
}

export interface ShadowTokens {
  light: Record<string, string>;
  dark: Record<string, string>;
}

export interface TransitionTokens {
  duration: Record<string, string>;
  easing: Record<string, string>;
  common: Record<string, string>;
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (mode: 'light' | 'dark') => void;
}

// Component Variant Types
export interface ButtonVariants {
  primary: {
    light: string;
    dark: string;
  };
  secondary: {
    light: string;
    dark: string;
  };
  ghost: {
    light: string;
    dark: string;
  };
  danger: {
    light: string;
    dark: string;
  };
  size: {
    sm: string;
    md: string;
    lg: string;
  };
}

export interface CardVariants {
  default: {
    light: string;
    dark: string;
  };
  elevated: {
    light: string;
    dark: string;
  };
  outline: {
    light: string;
    dark: string;
  };
}

export interface FormVariants {
  input: {
    light: string;
    dark: string;
  };
  select: {
    light: string;
    dark: string;
  };
  textarea: {
    light: string;
    dark: string;
  };
} 