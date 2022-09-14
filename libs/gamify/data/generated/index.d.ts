
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  createdAt: Date
  email: string
  firstname: string | null
  lastname: string | null
  firebaseUid: string | null
  moderationRole: string
}

/**
 * Model Application
 * 
 */
export type Application = {
  id: number
  createdAt: Date
  name: string
  description: string | null
  applicationType: string
  externalApplicationUrl: string | null
  ownerUserId: number
}

/**
 * Model Badge
 * 
 */
export type Badge = {
  id: number
  createdAt: Date
  name: string
  applicationId: number
  iconPath: string | null
  tier: string
  repeatedlyObtainable: boolean
  totalScore: number | null
}

/**
 * Model ApplicationUser
 * 
 */
export type ApplicationUser = {
  applicationId: number
  userId: number
  joinedAt: Date
}

/**
 * Model UserBadge
 * 
 */
export type UserBadge = {
  id: number
  userId: number
  badgeId: number
  earnedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<GlobalReject>;

  /**
   * `prisma.badge`: Exposes CRUD operations for the **Badge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Badges
    * const badges = await prisma.badge.findMany()
    * ```
    */
  get badge(): Prisma.BadgeDelegate<GlobalReject>;

  /**
   * `prisma.applicationUser`: Exposes CRUD operations for the **ApplicationUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplicationUsers
    * const applicationUsers = await prisma.applicationUser.findMany()
    * ```
    */
  get applicationUser(): Prisma.ApplicationUserDelegate<GlobalReject>;

  /**
   * `prisma.userBadge`: Exposes CRUD operations for the **UserBadge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBadges
    * const userBadges = await prisma.userBadge.findMany()
    * ```
    */
  get userBadge(): Prisma.UserBadgeDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Prisma Client JS version: 3.15.2
   * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Application: 'Application',
    Badge: 'Badge',
    ApplicationUser: 'ApplicationUser',
    UserBadge: 'UserBadge'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    ownedApplications: number
    joinedApplications: number
    badges: number
  }

  export type UserCountOutputTypeSelect = {
    ownedApplications?: boolean
    joinedApplications?: boolean
    badges?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type ApplicationCountOutputType
   */


  export type ApplicationCountOutputType = {
    badges: number
    users: number
  }

  export type ApplicationCountOutputTypeSelect = {
    badges?: boolean
    users?: boolean
  }

  export type ApplicationCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ApplicationCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ApplicationCountOutputType
    : S extends undefined
    ? never
    : S extends ApplicationCountOutputTypeArgs
    ?'include' extends U
    ? ApplicationCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ApplicationCountOutputType ? ApplicationCountOutputType[P] : never
  } 
    : ApplicationCountOutputType
  : ApplicationCountOutputType




  // Custom InputTypes

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ApplicationCountOutputType
     * 
    **/
    select?: ApplicationCountOutputTypeSelect | null
  }



  /**
   * Count Type BadgeCountOutputType
   */


  export type BadgeCountOutputType = {
    users: number
  }

  export type BadgeCountOutputTypeSelect = {
    users?: boolean
  }

  export type BadgeCountOutputTypeGetPayload<
    S extends boolean | null | undefined | BadgeCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? BadgeCountOutputType
    : S extends undefined
    ? never
    : S extends BadgeCountOutputTypeArgs
    ?'include' extends U
    ? BadgeCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof BadgeCountOutputType ? BadgeCountOutputType[P] : never
  } 
    : BadgeCountOutputType
  : BadgeCountOutputType




  // Custom InputTypes

  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BadgeCountOutputType
     * 
    **/
    select?: BadgeCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    firstname: string | null
    lastname: string | null
    firebaseUid: string | null
    moderationRole: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    firstname: string | null
    lastname: string | null
    firebaseUid: string | null
    moderationRole: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    email: number
    firstname: number
    lastname: number
    firebaseUid: number
    moderationRole: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    firstname?: true
    lastname?: true
    firebaseUid?: true
    moderationRole?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    firstname?: true
    lastname?: true
    firebaseUid?: true
    moderationRole?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    firstname?: true
    lastname?: true
    firebaseUid?: true
    moderationRole?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    email: string
    firstname: string | null
    lastname: string | null
    firebaseUid: string | null
    moderationRole: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    createdAt?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    ownedApplications?: boolean | ApplicationFindManyArgs
    firebaseUid?: boolean
    moderationRole?: boolean
    joinedApplications?: boolean | ApplicationUserFindManyArgs
    badges?: boolean | UserBadgeFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    ownedApplications?: boolean | ApplicationFindManyArgs
    joinedApplications?: boolean | ApplicationUserFindManyArgs
    badges?: boolean | UserBadgeFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'ownedApplications' ? Array < ApplicationGetPayload<S['include'][P]>>  :
        P extends 'joinedApplications' ? Array < ApplicationUserGetPayload<S['include'][P]>>  :
        P extends 'badges' ? Array < UserBadgeGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'ownedApplications' ? Array < ApplicationGetPayload<S['select'][P]>>  :
        P extends 'joinedApplications' ? Array < ApplicationUserGetPayload<S['select'][P]>>  :
        P extends 'badges' ? Array < UserBadgeGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    ownedApplications<T extends ApplicationFindManyArgs = {}>(args?: Subset<T, ApplicationFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Application>>, PrismaPromise<Array<ApplicationGetPayload<T>>>>;

    joinedApplications<T extends ApplicationUserFindManyArgs = {}>(args?: Subset<T, ApplicationUserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ApplicationUser>>, PrismaPromise<Array<ApplicationUserGetPayload<T>>>>;

    badges<T extends UserBadgeFindManyArgs = {}>(args?: Subset<T, UserBadgeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<UserBadge>>, PrismaPromise<Array<UserBadgeGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Application
   */


  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationAvgAggregateOutputType = {
    id: number | null
    ownerUserId: number | null
  }

  export type ApplicationSumAggregateOutputType = {
    id: number | null
    ownerUserId: number | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    description: string | null
    applicationType: string | null
    externalApplicationUrl: string | null
    ownerUserId: number | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    description: string | null
    applicationType: string | null
    externalApplicationUrl: string | null
    ownerUserId: number | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    description: number
    applicationType: number
    externalApplicationUrl: number
    ownerUserId: number
    _all: number
  }


  export type ApplicationAvgAggregateInputType = {
    id?: true
    ownerUserId?: true
  }

  export type ApplicationSumAggregateInputType = {
    id?: true
    ownerUserId?: true
  }

  export type ApplicationMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    description?: true
    applicationType?: true
    externalApplicationUrl?: true
    ownerUserId?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    description?: true
    applicationType?: true
    externalApplicationUrl?: true
    ownerUserId?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    description?: true
    applicationType?: true
    externalApplicationUrl?: true
    ownerUserId?: true
    _all?: true
  }

  export type ApplicationAggregateArgs = {
    /**
     * Filter which Application to aggregate.
     * 
    **/
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     * 
    **/
    orderBy?: Enumerable<ApplicationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs = {
    where?: ApplicationWhereInput
    orderBy?: Enumerable<ApplicationOrderByWithAggregationInput>
    by: Array<ApplicationScalarFieldEnum>
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _avg?: ApplicationAvgAggregateInputType
    _sum?: ApplicationSumAggregateInputType
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }


  export type ApplicationGroupByOutputType = {
    id: number
    createdAt: Date
    name: string
    description: string | null
    applicationType: string
    externalApplicationUrl: string | null
    ownerUserId: number
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    description?: boolean
    applicationType?: boolean
    externalApplicationUrl?: boolean
    ownerUser?: boolean | UserArgs
    ownerUserId?: boolean
    badges?: boolean | BadgeFindManyArgs
    users?: boolean | ApplicationUserFindManyArgs
    _count?: boolean | ApplicationCountOutputTypeArgs
  }

  export type ApplicationInclude = {
    ownerUser?: boolean | UserArgs
    badges?: boolean | BadgeFindManyArgs
    users?: boolean | ApplicationUserFindManyArgs
    _count?: boolean | ApplicationCountOutputTypeArgs
  }

  export type ApplicationGetPayload<
    S extends boolean | null | undefined | ApplicationArgs,
    U = keyof S
      > = S extends true
        ? Application
    : S extends undefined
    ? never
    : S extends ApplicationArgs | ApplicationFindManyArgs
    ?'include' extends U
    ? Application  & {
    [P in TrueKeys<S['include']>]:
        P extends 'ownerUser' ? UserGetPayload<S['include'][P]> :
        P extends 'badges' ? Array < BadgeGetPayload<S['include'][P]>>  :
        P extends 'users' ? Array < ApplicationUserGetPayload<S['include'][P]>>  :
        P extends '_count' ? ApplicationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'ownerUser' ? UserGetPayload<S['select'][P]> :
        P extends 'badges' ? Array < BadgeGetPayload<S['select'][P]>>  :
        P extends 'users' ? Array < ApplicationUserGetPayload<S['select'][P]>>  :
        P extends '_count' ? ApplicationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Application ? Application[P] : never
  } 
    : Application
  : Application


  type ApplicationCountArgs = Merge<
    Omit<ApplicationFindManyArgs, 'select' | 'include'> & {
      select?: ApplicationCountAggregateInputType | true
    }
  >

  export interface ApplicationDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApplicationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ApplicationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Application'> extends True ? CheckSelect<T, Prisma__ApplicationClient<Application>, Prisma__ApplicationClient<ApplicationGetPayload<T>>> : CheckSelect<T, Prisma__ApplicationClient<Application | null >, Prisma__ApplicationClient<ApplicationGetPayload<T> | null >>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApplicationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ApplicationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Application'> extends True ? CheckSelect<T, Prisma__ApplicationClient<Application>, Prisma__ApplicationClient<ApplicationGetPayload<T>>> : CheckSelect<T, Prisma__ApplicationClient<Application | null >, Prisma__ApplicationClient<ApplicationGetPayload<T> | null >>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ApplicationFindManyArgs>(
      args?: SelectSubset<T, ApplicationFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Application>>, PrismaPromise<Array<ApplicationGetPayload<T>>>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
    **/
    create<T extends ApplicationCreateArgs>(
      args: SelectSubset<T, ApplicationCreateArgs>
    ): CheckSelect<T, Prisma__ApplicationClient<Application>, Prisma__ApplicationClient<ApplicationGetPayload<T>>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
    **/
    delete<T extends ApplicationDeleteArgs>(
      args: SelectSubset<T, ApplicationDeleteArgs>
    ): CheckSelect<T, Prisma__ApplicationClient<Application>, Prisma__ApplicationClient<ApplicationGetPayload<T>>>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApplicationUpdateArgs>(
      args: SelectSubset<T, ApplicationUpdateArgs>
    ): CheckSelect<T, Prisma__ApplicationClient<Application>, Prisma__ApplicationClient<ApplicationGetPayload<T>>>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApplicationDeleteManyArgs>(
      args?: SelectSubset<T, ApplicationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApplicationUpdateManyArgs>(
      args: SelectSubset<T, ApplicationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
    **/
    upsert<T extends ApplicationUpsertArgs>(
      args: SelectSubset<T, ApplicationUpsertArgs>
    ): CheckSelect<T, Prisma__ApplicationClient<Application>, Prisma__ApplicationClient<ApplicationGetPayload<T>>>

    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ApplicationClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    ownerUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    badges<T extends BadgeFindManyArgs = {}>(args?: Subset<T, BadgeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Badge>>, PrismaPromise<Array<BadgeGetPayload<T>>>>;

    users<T extends ApplicationUserFindManyArgs = {}>(args?: Subset<T, ApplicationUserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ApplicationUser>>, PrismaPromise<Array<ApplicationUserGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Application
     * 
    **/
    select?: ApplicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationInclude | null
    /**
     * Throw an Error if a Application can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Application to fetch.
     * 
    **/
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Application
     * 
    **/
    select?: ApplicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationInclude | null
    /**
     * Throw an Error if a Application can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Application to fetch.
     * 
    **/
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     * 
    **/
    orderBy?: Enumerable<ApplicationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     * 
    **/
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     * 
    **/
    distinct?: Enumerable<ApplicationScalarFieldEnum>
  }


  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Application
     * 
    **/
    select?: ApplicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationInclude | null
    /**
     * Filter, which Applications to fetch.
     * 
    **/
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     * 
    **/
    orderBy?: Enumerable<ApplicationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     * 
    **/
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ApplicationScalarFieldEnum>
  }


  /**
   * Application create
   */
  export type ApplicationCreateArgs = {
    /**
     * Select specific fields to fetch from the Application
     * 
    **/
    select?: ApplicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationInclude | null
    /**
     * The data needed to create a Application.
     * 
    **/
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }


  /**
   * Application update
   */
  export type ApplicationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Application
     * 
    **/
    select?: ApplicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationInclude | null
    /**
     * The data needed to update a Application.
     * 
    **/
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     * 
    **/
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs = {
    /**
     * The data used to update Applications.
     * 
    **/
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     * 
    **/
    where?: ApplicationWhereInput
  }


  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Application
     * 
    **/
    select?: ApplicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationInclude | null
    /**
     * The filter to search for the Application to update in case it exists.
     * 
    **/
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     * 
    **/
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }


  /**
   * Application delete
   */
  export type ApplicationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Application
     * 
    **/
    select?: ApplicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationInclude | null
    /**
     * Filter which Application to delete.
     * 
    **/
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs = {
    /**
     * Filter which Applications to delete
     * 
    **/
    where?: ApplicationWhereInput
  }


  /**
   * Application without action
   */
  export type ApplicationArgs = {
    /**
     * Select specific fields to fetch from the Application
     * 
    **/
    select?: ApplicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationInclude | null
  }



  /**
   * Model Badge
   */


  export type AggregateBadge = {
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  export type BadgeAvgAggregateOutputType = {
    id: number | null
    applicationId: number | null
    totalScore: number | null
  }

  export type BadgeSumAggregateOutputType = {
    id: number | null
    applicationId: number | null
    totalScore: number | null
  }

  export type BadgeMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    applicationId: number | null
    iconPath: string | null
    tier: string | null
    repeatedlyObtainable: boolean | null
    totalScore: number | null
  }

  export type BadgeMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    applicationId: number | null
    iconPath: string | null
    tier: string | null
    repeatedlyObtainable: boolean | null
    totalScore: number | null
  }

  export type BadgeCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    applicationId: number
    iconPath: number
    tier: number
    repeatedlyObtainable: number
    totalScore: number
    _all: number
  }


  export type BadgeAvgAggregateInputType = {
    id?: true
    applicationId?: true
    totalScore?: true
  }

  export type BadgeSumAggregateInputType = {
    id?: true
    applicationId?: true
    totalScore?: true
  }

  export type BadgeMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    applicationId?: true
    iconPath?: true
    tier?: true
    repeatedlyObtainable?: true
    totalScore?: true
  }

  export type BadgeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    applicationId?: true
    iconPath?: true
    tier?: true
    repeatedlyObtainable?: true
    totalScore?: true
  }

  export type BadgeCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    applicationId?: true
    iconPath?: true
    tier?: true
    repeatedlyObtainable?: true
    totalScore?: true
    _all?: true
  }

  export type BadgeAggregateArgs = {
    /**
     * Filter which Badge to aggregate.
     * 
    **/
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     * 
    **/
    orderBy?: Enumerable<BadgeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Badges
    **/
    _count?: true | BadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgeMaxAggregateInputType
  }

  export type GetBadgeAggregateType<T extends BadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadge[P]>
      : GetScalarType<T[P], AggregateBadge[P]>
  }




  export type BadgeGroupByArgs = {
    where?: BadgeWhereInput
    orderBy?: Enumerable<BadgeOrderByWithAggregationInput>
    by: Array<BadgeScalarFieldEnum>
    having?: BadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgeCountAggregateInputType | true
    _avg?: BadgeAvgAggregateInputType
    _sum?: BadgeSumAggregateInputType
    _min?: BadgeMinAggregateInputType
    _max?: BadgeMaxAggregateInputType
  }


  export type BadgeGroupByOutputType = {
    id: number
    createdAt: Date
    name: string
    applicationId: number
    iconPath: string | null
    tier: string
    repeatedlyObtainable: boolean
    totalScore: number | null
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  type GetBadgeGroupByPayload<T extends BadgeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgeGroupByOutputType[P]>
            : GetScalarType<T[P], BadgeGroupByOutputType[P]>
        }
      >
    >


  export type BadgeSelect = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    application?: boolean | ApplicationArgs
    applicationId?: boolean
    iconPath?: boolean
    tier?: boolean
    repeatedlyObtainable?: boolean
    totalScore?: boolean
    users?: boolean | UserBadgeFindManyArgs
    _count?: boolean | BadgeCountOutputTypeArgs
  }

  export type BadgeInclude = {
    application?: boolean | ApplicationArgs
    users?: boolean | UserBadgeFindManyArgs
    _count?: boolean | BadgeCountOutputTypeArgs
  }

  export type BadgeGetPayload<
    S extends boolean | null | undefined | BadgeArgs,
    U = keyof S
      > = S extends true
        ? Badge
    : S extends undefined
    ? never
    : S extends BadgeArgs | BadgeFindManyArgs
    ?'include' extends U
    ? Badge  & {
    [P in TrueKeys<S['include']>]:
        P extends 'application' ? ApplicationGetPayload<S['include'][P]> :
        P extends 'users' ? Array < UserBadgeGetPayload<S['include'][P]>>  :
        P extends '_count' ? BadgeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'application' ? ApplicationGetPayload<S['select'][P]> :
        P extends 'users' ? Array < UserBadgeGetPayload<S['select'][P]>>  :
        P extends '_count' ? BadgeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Badge ? Badge[P] : never
  } 
    : Badge
  : Badge


  type BadgeCountArgs = Merge<
    Omit<BadgeFindManyArgs, 'select' | 'include'> & {
      select?: BadgeCountAggregateInputType | true
    }
  >

  export interface BadgeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Badge that matches the filter.
     * @param {BadgeFindUniqueArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BadgeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BadgeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Badge'> extends True ? CheckSelect<T, Prisma__BadgeClient<Badge>, Prisma__BadgeClient<BadgeGetPayload<T>>> : CheckSelect<T, Prisma__BadgeClient<Badge | null >, Prisma__BadgeClient<BadgeGetPayload<T> | null >>

    /**
     * Find the first Badge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BadgeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BadgeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Badge'> extends True ? CheckSelect<T, Prisma__BadgeClient<Badge>, Prisma__BadgeClient<BadgeGetPayload<T>>> : CheckSelect<T, Prisma__BadgeClient<Badge | null >, Prisma__BadgeClient<BadgeGetPayload<T> | null >>

    /**
     * Find zero or more Badges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Badges
     * const badges = await prisma.badge.findMany()
     * 
     * // Get first 10 Badges
     * const badges = await prisma.badge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const badgeWithIdOnly = await prisma.badge.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BadgeFindManyArgs>(
      args?: SelectSubset<T, BadgeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Badge>>, PrismaPromise<Array<BadgeGetPayload<T>>>>

    /**
     * Create a Badge.
     * @param {BadgeCreateArgs} args - Arguments to create a Badge.
     * @example
     * // Create one Badge
     * const Badge = await prisma.badge.create({
     *   data: {
     *     // ... data to create a Badge
     *   }
     * })
     * 
    **/
    create<T extends BadgeCreateArgs>(
      args: SelectSubset<T, BadgeCreateArgs>
    ): CheckSelect<T, Prisma__BadgeClient<Badge>, Prisma__BadgeClient<BadgeGetPayload<T>>>

    /**
     * Delete a Badge.
     * @param {BadgeDeleteArgs} args - Arguments to delete one Badge.
     * @example
     * // Delete one Badge
     * const Badge = await prisma.badge.delete({
     *   where: {
     *     // ... filter to delete one Badge
     *   }
     * })
     * 
    **/
    delete<T extends BadgeDeleteArgs>(
      args: SelectSubset<T, BadgeDeleteArgs>
    ): CheckSelect<T, Prisma__BadgeClient<Badge>, Prisma__BadgeClient<BadgeGetPayload<T>>>

    /**
     * Update one Badge.
     * @param {BadgeUpdateArgs} args - Arguments to update one Badge.
     * @example
     * // Update one Badge
     * const badge = await prisma.badge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BadgeUpdateArgs>(
      args: SelectSubset<T, BadgeUpdateArgs>
    ): CheckSelect<T, Prisma__BadgeClient<Badge>, Prisma__BadgeClient<BadgeGetPayload<T>>>

    /**
     * Delete zero or more Badges.
     * @param {BadgeDeleteManyArgs} args - Arguments to filter Badges to delete.
     * @example
     * // Delete a few Badges
     * const { count } = await prisma.badge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BadgeDeleteManyArgs>(
      args?: SelectSubset<T, BadgeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BadgeUpdateManyArgs>(
      args: SelectSubset<T, BadgeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Badge.
     * @param {BadgeUpsertArgs} args - Arguments to update or create a Badge.
     * @example
     * // Update or create a Badge
     * const badge = await prisma.badge.upsert({
     *   create: {
     *     // ... data to create a Badge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Badge we want to update
     *   }
     * })
    **/
    upsert<T extends BadgeUpsertArgs>(
      args: SelectSubset<T, BadgeUpsertArgs>
    ): CheckSelect<T, Prisma__BadgeClient<Badge>, Prisma__BadgeClient<BadgeGetPayload<T>>>

    /**
     * Count the number of Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeCountArgs} args - Arguments to filter Badges to count.
     * @example
     * // Count the number of Badges
     * const count = await prisma.badge.count({
     *   where: {
     *     // ... the filter for the Badges we want to count
     *   }
     * })
    **/
    count<T extends BadgeCountArgs>(
      args?: Subset<T, BadgeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BadgeAggregateArgs>(args: Subset<T, BadgeAggregateArgs>): PrismaPromise<GetBadgeAggregateType<T>>

    /**
     * Group by Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BadgeGroupByArgs['orderBy'] }
        : { orderBy?: BadgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Badge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BadgeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    application<T extends ApplicationArgs = {}>(args?: Subset<T, ApplicationArgs>): CheckSelect<T, Prisma__ApplicationClient<Application | null >, Prisma__ApplicationClient<ApplicationGetPayload<T> | null >>;

    users<T extends UserBadgeFindManyArgs = {}>(args?: Subset<T, UserBadgeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<UserBadge>>, PrismaPromise<Array<UserBadgeGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Badge findUnique
   */
  export type BadgeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Badge
     * 
    **/
    select?: BadgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BadgeInclude | null
    /**
     * Throw an Error if a Badge can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Badge to fetch.
     * 
    **/
    where: BadgeWhereUniqueInput
  }


  /**
   * Badge findFirst
   */
  export type BadgeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Badge
     * 
    **/
    select?: BadgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BadgeInclude | null
    /**
     * Throw an Error if a Badge can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Badge to fetch.
     * 
    **/
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     * 
    **/
    orderBy?: Enumerable<BadgeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     * 
    **/
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     * 
    **/
    distinct?: Enumerable<BadgeScalarFieldEnum>
  }


  /**
   * Badge findMany
   */
  export type BadgeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Badge
     * 
    **/
    select?: BadgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BadgeInclude | null
    /**
     * Filter, which Badges to fetch.
     * 
    **/
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     * 
    **/
    orderBy?: Enumerable<BadgeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Badges.
     * 
    **/
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BadgeScalarFieldEnum>
  }


  /**
   * Badge create
   */
  export type BadgeCreateArgs = {
    /**
     * Select specific fields to fetch from the Badge
     * 
    **/
    select?: BadgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BadgeInclude | null
    /**
     * The data needed to create a Badge.
     * 
    **/
    data: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
  }


  /**
   * Badge update
   */
  export type BadgeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Badge
     * 
    **/
    select?: BadgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BadgeInclude | null
    /**
     * The data needed to update a Badge.
     * 
    **/
    data: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
    /**
     * Choose, which Badge to update.
     * 
    **/
    where: BadgeWhereUniqueInput
  }


  /**
   * Badge updateMany
   */
  export type BadgeUpdateManyArgs = {
    /**
     * The data used to update Badges.
     * 
    **/
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     * 
    **/
    where?: BadgeWhereInput
  }


  /**
   * Badge upsert
   */
  export type BadgeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Badge
     * 
    **/
    select?: BadgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BadgeInclude | null
    /**
     * The filter to search for the Badge to update in case it exists.
     * 
    **/
    where: BadgeWhereUniqueInput
    /**
     * In case the Badge found by the `where` argument doesn't exist, create a new Badge with this data.
     * 
    **/
    create: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
    /**
     * In case the Badge was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
  }


  /**
   * Badge delete
   */
  export type BadgeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Badge
     * 
    **/
    select?: BadgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BadgeInclude | null
    /**
     * Filter which Badge to delete.
     * 
    **/
    where: BadgeWhereUniqueInput
  }


  /**
   * Badge deleteMany
   */
  export type BadgeDeleteManyArgs = {
    /**
     * Filter which Badges to delete
     * 
    **/
    where?: BadgeWhereInput
  }


  /**
   * Badge without action
   */
  export type BadgeArgs = {
    /**
     * Select specific fields to fetch from the Badge
     * 
    **/
    select?: BadgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BadgeInclude | null
  }



  /**
   * Model ApplicationUser
   */


  export type AggregateApplicationUser = {
    _count: ApplicationUserCountAggregateOutputType | null
    _avg: ApplicationUserAvgAggregateOutputType | null
    _sum: ApplicationUserSumAggregateOutputType | null
    _min: ApplicationUserMinAggregateOutputType | null
    _max: ApplicationUserMaxAggregateOutputType | null
  }

  export type ApplicationUserAvgAggregateOutputType = {
    applicationId: number | null
    userId: number | null
  }

  export type ApplicationUserSumAggregateOutputType = {
    applicationId: number | null
    userId: number | null
  }

  export type ApplicationUserMinAggregateOutputType = {
    applicationId: number | null
    userId: number | null
    joinedAt: Date | null
  }

  export type ApplicationUserMaxAggregateOutputType = {
    applicationId: number | null
    userId: number | null
    joinedAt: Date | null
  }

  export type ApplicationUserCountAggregateOutputType = {
    applicationId: number
    userId: number
    joinedAt: number
    _all: number
  }


  export type ApplicationUserAvgAggregateInputType = {
    applicationId?: true
    userId?: true
  }

  export type ApplicationUserSumAggregateInputType = {
    applicationId?: true
    userId?: true
  }

  export type ApplicationUserMinAggregateInputType = {
    applicationId?: true
    userId?: true
    joinedAt?: true
  }

  export type ApplicationUserMaxAggregateInputType = {
    applicationId?: true
    userId?: true
    joinedAt?: true
  }

  export type ApplicationUserCountAggregateInputType = {
    applicationId?: true
    userId?: true
    joinedAt?: true
    _all?: true
  }

  export type ApplicationUserAggregateArgs = {
    /**
     * Filter which ApplicationUser to aggregate.
     * 
    **/
    where?: ApplicationUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ApplicationUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ApplicationUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplicationUsers
    **/
    _count?: true | ApplicationUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationUserMaxAggregateInputType
  }

  export type GetApplicationUserAggregateType<T extends ApplicationUserAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicationUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicationUser[P]>
      : GetScalarType<T[P], AggregateApplicationUser[P]>
  }




  export type ApplicationUserGroupByArgs = {
    where?: ApplicationUserWhereInput
    orderBy?: Enumerable<ApplicationUserOrderByWithAggregationInput>
    by: Array<ApplicationUserScalarFieldEnum>
    having?: ApplicationUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationUserCountAggregateInputType | true
    _avg?: ApplicationUserAvgAggregateInputType
    _sum?: ApplicationUserSumAggregateInputType
    _min?: ApplicationUserMinAggregateInputType
    _max?: ApplicationUserMaxAggregateInputType
  }


  export type ApplicationUserGroupByOutputType = {
    applicationId: number
    userId: number
    joinedAt: Date
    _count: ApplicationUserCountAggregateOutputType | null
    _avg: ApplicationUserAvgAggregateOutputType | null
    _sum: ApplicationUserSumAggregateOutputType | null
    _min: ApplicationUserMinAggregateOutputType | null
    _max: ApplicationUserMaxAggregateOutputType | null
  }

  type GetApplicationUserGroupByPayload<T extends ApplicationUserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ApplicationUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationUserGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationUserGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationUserSelect = {
    application?: boolean | ApplicationArgs
    applicationId?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    joinedAt?: boolean
  }

  export type ApplicationUserInclude = {
    application?: boolean | ApplicationArgs
    user?: boolean | UserArgs
  }

  export type ApplicationUserGetPayload<
    S extends boolean | null | undefined | ApplicationUserArgs,
    U = keyof S
      > = S extends true
        ? ApplicationUser
    : S extends undefined
    ? never
    : S extends ApplicationUserArgs | ApplicationUserFindManyArgs
    ?'include' extends U
    ? ApplicationUser  & {
    [P in TrueKeys<S['include']>]:
        P extends 'application' ? ApplicationGetPayload<S['include'][P]> :
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'application' ? ApplicationGetPayload<S['select'][P]> :
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof ApplicationUser ? ApplicationUser[P] : never
  } 
    : ApplicationUser
  : ApplicationUser


  type ApplicationUserCountArgs = Merge<
    Omit<ApplicationUserFindManyArgs, 'select' | 'include'> & {
      select?: ApplicationUserCountAggregateInputType | true
    }
  >

  export interface ApplicationUserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ApplicationUser that matches the filter.
     * @param {ApplicationUserFindUniqueArgs} args - Arguments to find a ApplicationUser
     * @example
     * // Get one ApplicationUser
     * const applicationUser = await prisma.applicationUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApplicationUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ApplicationUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ApplicationUser'> extends True ? CheckSelect<T, Prisma__ApplicationUserClient<ApplicationUser>, Prisma__ApplicationUserClient<ApplicationUserGetPayload<T>>> : CheckSelect<T, Prisma__ApplicationUserClient<ApplicationUser | null >, Prisma__ApplicationUserClient<ApplicationUserGetPayload<T> | null >>

    /**
     * Find the first ApplicationUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUserFindFirstArgs} args - Arguments to find a ApplicationUser
     * @example
     * // Get one ApplicationUser
     * const applicationUser = await prisma.applicationUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApplicationUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ApplicationUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ApplicationUser'> extends True ? CheckSelect<T, Prisma__ApplicationUserClient<ApplicationUser>, Prisma__ApplicationUserClient<ApplicationUserGetPayload<T>>> : CheckSelect<T, Prisma__ApplicationUserClient<ApplicationUser | null >, Prisma__ApplicationUserClient<ApplicationUserGetPayload<T> | null >>

    /**
     * Find zero or more ApplicationUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplicationUsers
     * const applicationUsers = await prisma.applicationUser.findMany()
     * 
     * // Get first 10 ApplicationUsers
     * const applicationUsers = await prisma.applicationUser.findMany({ take: 10 })
     * 
     * // Only select the `applicationId`
     * const applicationUserWithApplicationIdOnly = await prisma.applicationUser.findMany({ select: { applicationId: true } })
     * 
    **/
    findMany<T extends ApplicationUserFindManyArgs>(
      args?: SelectSubset<T, ApplicationUserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ApplicationUser>>, PrismaPromise<Array<ApplicationUserGetPayload<T>>>>

    /**
     * Create a ApplicationUser.
     * @param {ApplicationUserCreateArgs} args - Arguments to create a ApplicationUser.
     * @example
     * // Create one ApplicationUser
     * const ApplicationUser = await prisma.applicationUser.create({
     *   data: {
     *     // ... data to create a ApplicationUser
     *   }
     * })
     * 
    **/
    create<T extends ApplicationUserCreateArgs>(
      args: SelectSubset<T, ApplicationUserCreateArgs>
    ): CheckSelect<T, Prisma__ApplicationUserClient<ApplicationUser>, Prisma__ApplicationUserClient<ApplicationUserGetPayload<T>>>

    /**
     * Delete a ApplicationUser.
     * @param {ApplicationUserDeleteArgs} args - Arguments to delete one ApplicationUser.
     * @example
     * // Delete one ApplicationUser
     * const ApplicationUser = await prisma.applicationUser.delete({
     *   where: {
     *     // ... filter to delete one ApplicationUser
     *   }
     * })
     * 
    **/
    delete<T extends ApplicationUserDeleteArgs>(
      args: SelectSubset<T, ApplicationUserDeleteArgs>
    ): CheckSelect<T, Prisma__ApplicationUserClient<ApplicationUser>, Prisma__ApplicationUserClient<ApplicationUserGetPayload<T>>>

    /**
     * Update one ApplicationUser.
     * @param {ApplicationUserUpdateArgs} args - Arguments to update one ApplicationUser.
     * @example
     * // Update one ApplicationUser
     * const applicationUser = await prisma.applicationUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApplicationUserUpdateArgs>(
      args: SelectSubset<T, ApplicationUserUpdateArgs>
    ): CheckSelect<T, Prisma__ApplicationUserClient<ApplicationUser>, Prisma__ApplicationUserClient<ApplicationUserGetPayload<T>>>

    /**
     * Delete zero or more ApplicationUsers.
     * @param {ApplicationUserDeleteManyArgs} args - Arguments to filter ApplicationUsers to delete.
     * @example
     * // Delete a few ApplicationUsers
     * const { count } = await prisma.applicationUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApplicationUserDeleteManyArgs>(
      args?: SelectSubset<T, ApplicationUserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplicationUsers
     * const applicationUser = await prisma.applicationUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApplicationUserUpdateManyArgs>(
      args: SelectSubset<T, ApplicationUserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ApplicationUser.
     * @param {ApplicationUserUpsertArgs} args - Arguments to update or create a ApplicationUser.
     * @example
     * // Update or create a ApplicationUser
     * const applicationUser = await prisma.applicationUser.upsert({
     *   create: {
     *     // ... data to create a ApplicationUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplicationUser we want to update
     *   }
     * })
    **/
    upsert<T extends ApplicationUserUpsertArgs>(
      args: SelectSubset<T, ApplicationUserUpsertArgs>
    ): CheckSelect<T, Prisma__ApplicationUserClient<ApplicationUser>, Prisma__ApplicationUserClient<ApplicationUserGetPayload<T>>>

    /**
     * Count the number of ApplicationUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUserCountArgs} args - Arguments to filter ApplicationUsers to count.
     * @example
     * // Count the number of ApplicationUsers
     * const count = await prisma.applicationUser.count({
     *   where: {
     *     // ... the filter for the ApplicationUsers we want to count
     *   }
     * })
    **/
    count<T extends ApplicationUserCountArgs>(
      args?: Subset<T, ApplicationUserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplicationUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationUserAggregateArgs>(args: Subset<T, ApplicationUserAggregateArgs>): PrismaPromise<GetApplicationUserAggregateType<T>>

    /**
     * Group by ApplicationUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationUserGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplicationUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ApplicationUserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    application<T extends ApplicationArgs = {}>(args?: Subset<T, ApplicationArgs>): CheckSelect<T, Prisma__ApplicationClient<Application | null >, Prisma__ApplicationClient<ApplicationGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ApplicationUser findUnique
   */
  export type ApplicationUserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ApplicationUser
     * 
    **/
    select?: ApplicationUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationUserInclude | null
    /**
     * Throw an Error if a ApplicationUser can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ApplicationUser to fetch.
     * 
    **/
    where: ApplicationUserWhereUniqueInput
  }


  /**
   * ApplicationUser findFirst
   */
  export type ApplicationUserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ApplicationUser
     * 
    **/
    select?: ApplicationUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationUserInclude | null
    /**
     * Throw an Error if a ApplicationUser can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ApplicationUser to fetch.
     * 
    **/
    where?: ApplicationUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ApplicationUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationUsers.
     * 
    **/
    cursor?: ApplicationUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationUsers.
     * 
    **/
    distinct?: Enumerable<ApplicationUserScalarFieldEnum>
  }


  /**
   * ApplicationUser findMany
   */
  export type ApplicationUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the ApplicationUser
     * 
    **/
    select?: ApplicationUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationUserInclude | null
    /**
     * Filter, which ApplicationUsers to fetch.
     * 
    **/
    where?: ApplicationUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ApplicationUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplicationUsers.
     * 
    **/
    cursor?: ApplicationUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ApplicationUserScalarFieldEnum>
  }


  /**
   * ApplicationUser create
   */
  export type ApplicationUserCreateArgs = {
    /**
     * Select specific fields to fetch from the ApplicationUser
     * 
    **/
    select?: ApplicationUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationUserInclude | null
    /**
     * The data needed to create a ApplicationUser.
     * 
    **/
    data: XOR<ApplicationUserCreateInput, ApplicationUserUncheckedCreateInput>
  }


  /**
   * ApplicationUser update
   */
  export type ApplicationUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the ApplicationUser
     * 
    **/
    select?: ApplicationUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationUserInclude | null
    /**
     * The data needed to update a ApplicationUser.
     * 
    **/
    data: XOR<ApplicationUserUpdateInput, ApplicationUserUncheckedUpdateInput>
    /**
     * Choose, which ApplicationUser to update.
     * 
    **/
    where: ApplicationUserWhereUniqueInput
  }


  /**
   * ApplicationUser updateMany
   */
  export type ApplicationUserUpdateManyArgs = {
    /**
     * The data used to update ApplicationUsers.
     * 
    **/
    data: XOR<ApplicationUserUpdateManyMutationInput, ApplicationUserUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationUsers to update
     * 
    **/
    where?: ApplicationUserWhereInput
  }


  /**
   * ApplicationUser upsert
   */
  export type ApplicationUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the ApplicationUser
     * 
    **/
    select?: ApplicationUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationUserInclude | null
    /**
     * The filter to search for the ApplicationUser to update in case it exists.
     * 
    **/
    where: ApplicationUserWhereUniqueInput
    /**
     * In case the ApplicationUser found by the `where` argument doesn't exist, create a new ApplicationUser with this data.
     * 
    **/
    create: XOR<ApplicationUserCreateInput, ApplicationUserUncheckedCreateInput>
    /**
     * In case the ApplicationUser was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ApplicationUserUpdateInput, ApplicationUserUncheckedUpdateInput>
  }


  /**
   * ApplicationUser delete
   */
  export type ApplicationUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the ApplicationUser
     * 
    **/
    select?: ApplicationUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationUserInclude | null
    /**
     * Filter which ApplicationUser to delete.
     * 
    **/
    where: ApplicationUserWhereUniqueInput
  }


  /**
   * ApplicationUser deleteMany
   */
  export type ApplicationUserDeleteManyArgs = {
    /**
     * Filter which ApplicationUsers to delete
     * 
    **/
    where?: ApplicationUserWhereInput
  }


  /**
   * ApplicationUser without action
   */
  export type ApplicationUserArgs = {
    /**
     * Select specific fields to fetch from the ApplicationUser
     * 
    **/
    select?: ApplicationUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ApplicationUserInclude | null
  }



  /**
   * Model UserBadge
   */


  export type AggregateUserBadge = {
    _count: UserBadgeCountAggregateOutputType | null
    _avg: UserBadgeAvgAggregateOutputType | null
    _sum: UserBadgeSumAggregateOutputType | null
    _min: UserBadgeMinAggregateOutputType | null
    _max: UserBadgeMaxAggregateOutputType | null
  }

  export type UserBadgeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    badgeId: number | null
  }

  export type UserBadgeSumAggregateOutputType = {
    id: number | null
    userId: number | null
    badgeId: number | null
  }

  export type UserBadgeMinAggregateOutputType = {
    id: number | null
    userId: number | null
    badgeId: number | null
    earnedAt: Date | null
  }

  export type UserBadgeMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    badgeId: number | null
    earnedAt: Date | null
  }

  export type UserBadgeCountAggregateOutputType = {
    id: number
    userId: number
    badgeId: number
    earnedAt: number
    _all: number
  }


  export type UserBadgeAvgAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
  }

  export type UserBadgeSumAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
  }

  export type UserBadgeMinAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
    earnedAt?: true
  }

  export type UserBadgeMaxAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
    earnedAt?: true
  }

  export type UserBadgeCountAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
    earnedAt?: true
    _all?: true
  }

  export type UserBadgeAggregateArgs = {
    /**
     * Filter which UserBadge to aggregate.
     * 
    **/
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     * 
    **/
    orderBy?: Enumerable<UserBadgeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBadges
    **/
    _count?: true | UserBadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserBadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserBadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBadgeMaxAggregateInputType
  }

  export type GetUserBadgeAggregateType<T extends UserBadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBadge[P]>
      : GetScalarType<T[P], AggregateUserBadge[P]>
  }




  export type UserBadgeGroupByArgs = {
    where?: UserBadgeWhereInput
    orderBy?: Enumerable<UserBadgeOrderByWithAggregationInput>
    by: Array<UserBadgeScalarFieldEnum>
    having?: UserBadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBadgeCountAggregateInputType | true
    _avg?: UserBadgeAvgAggregateInputType
    _sum?: UserBadgeSumAggregateInputType
    _min?: UserBadgeMinAggregateInputType
    _max?: UserBadgeMaxAggregateInputType
  }


  export type UserBadgeGroupByOutputType = {
    id: number
    userId: number
    badgeId: number
    earnedAt: Date
    _count: UserBadgeCountAggregateOutputType | null
    _avg: UserBadgeAvgAggregateOutputType | null
    _sum: UserBadgeSumAggregateOutputType | null
    _min: UserBadgeMinAggregateOutputType | null
    _max: UserBadgeMaxAggregateOutputType | null
  }

  type GetUserBadgeGroupByPayload<T extends UserBadgeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserBadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBadgeGroupByOutputType[P]>
            : GetScalarType<T[P], UserBadgeGroupByOutputType[P]>
        }
      >
    >


  export type UserBadgeSelect = {
    id?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    badge?: boolean | BadgeArgs
    badgeId?: boolean
    earnedAt?: boolean
  }

  export type UserBadgeInclude = {
    user?: boolean | UserArgs
    badge?: boolean | BadgeArgs
  }

  export type UserBadgeGetPayload<
    S extends boolean | null | undefined | UserBadgeArgs,
    U = keyof S
      > = S extends true
        ? UserBadge
    : S extends undefined
    ? never
    : S extends UserBadgeArgs | UserBadgeFindManyArgs
    ?'include' extends U
    ? UserBadge  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'badge' ? BadgeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'badge' ? BadgeGetPayload<S['select'][P]> :  P extends keyof UserBadge ? UserBadge[P] : never
  } 
    : UserBadge
  : UserBadge


  type UserBadgeCountArgs = Merge<
    Omit<UserBadgeFindManyArgs, 'select' | 'include'> & {
      select?: UserBadgeCountAggregateInputType | true
    }
  >

  export interface UserBadgeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one UserBadge that matches the filter.
     * @param {UserBadgeFindUniqueArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserBadgeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserBadgeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserBadge'> extends True ? CheckSelect<T, Prisma__UserBadgeClient<UserBadge>, Prisma__UserBadgeClient<UserBadgeGetPayload<T>>> : CheckSelect<T, Prisma__UserBadgeClient<UserBadge | null >, Prisma__UserBadgeClient<UserBadgeGetPayload<T> | null >>

    /**
     * Find the first UserBadge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindFirstArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserBadgeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserBadgeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserBadge'> extends True ? CheckSelect<T, Prisma__UserBadgeClient<UserBadge>, Prisma__UserBadgeClient<UserBadgeGetPayload<T>>> : CheckSelect<T, Prisma__UserBadgeClient<UserBadge | null >, Prisma__UserBadgeClient<UserBadgeGetPayload<T> | null >>

    /**
     * Find zero or more UserBadges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBadges
     * const userBadges = await prisma.userBadge.findMany()
     * 
     * // Get first 10 UserBadges
     * const userBadges = await prisma.userBadge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBadgeWithIdOnly = await prisma.userBadge.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserBadgeFindManyArgs>(
      args?: SelectSubset<T, UserBadgeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserBadge>>, PrismaPromise<Array<UserBadgeGetPayload<T>>>>

    /**
     * Create a UserBadge.
     * @param {UserBadgeCreateArgs} args - Arguments to create a UserBadge.
     * @example
     * // Create one UserBadge
     * const UserBadge = await prisma.userBadge.create({
     *   data: {
     *     // ... data to create a UserBadge
     *   }
     * })
     * 
    **/
    create<T extends UserBadgeCreateArgs>(
      args: SelectSubset<T, UserBadgeCreateArgs>
    ): CheckSelect<T, Prisma__UserBadgeClient<UserBadge>, Prisma__UserBadgeClient<UserBadgeGetPayload<T>>>

    /**
     * Delete a UserBadge.
     * @param {UserBadgeDeleteArgs} args - Arguments to delete one UserBadge.
     * @example
     * // Delete one UserBadge
     * const UserBadge = await prisma.userBadge.delete({
     *   where: {
     *     // ... filter to delete one UserBadge
     *   }
     * })
     * 
    **/
    delete<T extends UserBadgeDeleteArgs>(
      args: SelectSubset<T, UserBadgeDeleteArgs>
    ): CheckSelect<T, Prisma__UserBadgeClient<UserBadge>, Prisma__UserBadgeClient<UserBadgeGetPayload<T>>>

    /**
     * Update one UserBadge.
     * @param {UserBadgeUpdateArgs} args - Arguments to update one UserBadge.
     * @example
     * // Update one UserBadge
     * const userBadge = await prisma.userBadge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserBadgeUpdateArgs>(
      args: SelectSubset<T, UserBadgeUpdateArgs>
    ): CheckSelect<T, Prisma__UserBadgeClient<UserBadge>, Prisma__UserBadgeClient<UserBadgeGetPayload<T>>>

    /**
     * Delete zero or more UserBadges.
     * @param {UserBadgeDeleteManyArgs} args - Arguments to filter UserBadges to delete.
     * @example
     * // Delete a few UserBadges
     * const { count } = await prisma.userBadge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserBadgeDeleteManyArgs>(
      args?: SelectSubset<T, UserBadgeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBadges
     * const userBadge = await prisma.userBadge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserBadgeUpdateManyArgs>(
      args: SelectSubset<T, UserBadgeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserBadge.
     * @param {UserBadgeUpsertArgs} args - Arguments to update or create a UserBadge.
     * @example
     * // Update or create a UserBadge
     * const userBadge = await prisma.userBadge.upsert({
     *   create: {
     *     // ... data to create a UserBadge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBadge we want to update
     *   }
     * })
    **/
    upsert<T extends UserBadgeUpsertArgs>(
      args: SelectSubset<T, UserBadgeUpsertArgs>
    ): CheckSelect<T, Prisma__UserBadgeClient<UserBadge>, Prisma__UserBadgeClient<UserBadgeGetPayload<T>>>

    /**
     * Count the number of UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeCountArgs} args - Arguments to filter UserBadges to count.
     * @example
     * // Count the number of UserBadges
     * const count = await prisma.userBadge.count({
     *   where: {
     *     // ... the filter for the UserBadges we want to count
     *   }
     * })
    **/
    count<T extends UserBadgeCountArgs>(
      args?: Subset<T, UserBadgeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserBadgeAggregateArgs>(args: Subset<T, UserBadgeAggregateArgs>): PrismaPromise<GetUserBadgeAggregateType<T>>

    /**
     * Group by UserBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserBadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBadgeGroupByArgs['orderBy'] }
        : { orderBy?: UserBadgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserBadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBadgeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBadge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserBadgeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    badge<T extends BadgeArgs = {}>(args?: Subset<T, BadgeArgs>): CheckSelect<T, Prisma__BadgeClient<Badge | null >, Prisma__BadgeClient<BadgeGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * UserBadge findUnique
   */
  export type UserBadgeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the UserBadge
     * 
    **/
    select?: UserBadgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBadgeInclude | null
    /**
     * Throw an Error if a UserBadge can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserBadge to fetch.
     * 
    **/
    where: UserBadgeWhereUniqueInput
  }


  /**
   * UserBadge findFirst
   */
  export type UserBadgeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the UserBadge
     * 
    **/
    select?: UserBadgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBadgeInclude | null
    /**
     * Throw an Error if a UserBadge can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserBadge to fetch.
     * 
    **/
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     * 
    **/
    orderBy?: Enumerable<UserBadgeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBadges.
     * 
    **/
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBadges.
     * 
    **/
    distinct?: Enumerable<UserBadgeScalarFieldEnum>
  }


  /**
   * UserBadge findMany
   */
  export type UserBadgeFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserBadge
     * 
    **/
    select?: UserBadgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBadgeInclude | null
    /**
     * Filter, which UserBadges to fetch.
     * 
    **/
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     * 
    **/
    orderBy?: Enumerable<UserBadgeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBadges.
     * 
    **/
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserBadgeScalarFieldEnum>
  }


  /**
   * UserBadge create
   */
  export type UserBadgeCreateArgs = {
    /**
     * Select specific fields to fetch from the UserBadge
     * 
    **/
    select?: UserBadgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBadgeInclude | null
    /**
     * The data needed to create a UserBadge.
     * 
    **/
    data: XOR<UserBadgeCreateInput, UserBadgeUncheckedCreateInput>
  }


  /**
   * UserBadge update
   */
  export type UserBadgeUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserBadge
     * 
    **/
    select?: UserBadgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBadgeInclude | null
    /**
     * The data needed to update a UserBadge.
     * 
    **/
    data: XOR<UserBadgeUpdateInput, UserBadgeUncheckedUpdateInput>
    /**
     * Choose, which UserBadge to update.
     * 
    **/
    where: UserBadgeWhereUniqueInput
  }


  /**
   * UserBadge updateMany
   */
  export type UserBadgeUpdateManyArgs = {
    /**
     * The data used to update UserBadges.
     * 
    **/
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyInput>
    /**
     * Filter which UserBadges to update
     * 
    **/
    where?: UserBadgeWhereInput
  }


  /**
   * UserBadge upsert
   */
  export type UserBadgeUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserBadge
     * 
    **/
    select?: UserBadgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBadgeInclude | null
    /**
     * The filter to search for the UserBadge to update in case it exists.
     * 
    **/
    where: UserBadgeWhereUniqueInput
    /**
     * In case the UserBadge found by the `where` argument doesn't exist, create a new UserBadge with this data.
     * 
    **/
    create: XOR<UserBadgeCreateInput, UserBadgeUncheckedCreateInput>
    /**
     * In case the UserBadge was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserBadgeUpdateInput, UserBadgeUncheckedUpdateInput>
  }


  /**
   * UserBadge delete
   */
  export type UserBadgeDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserBadge
     * 
    **/
    select?: UserBadgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBadgeInclude | null
    /**
     * Filter which UserBadge to delete.
     * 
    **/
    where: UserBadgeWhereUniqueInput
  }


  /**
   * UserBadge deleteMany
   */
  export type UserBadgeDeleteManyArgs = {
    /**
     * Filter which UserBadges to delete
     * 
    **/
    where?: UserBadgeWhereInput
  }


  /**
   * UserBadge without action
   */
  export type UserBadgeArgs = {
    /**
     * Select specific fields to fetch from the UserBadge
     * 
    **/
    select?: UserBadgeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBadgeInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    email: 'email',
    firstname: 'firstname',
    lastname: 'lastname',
    firebaseUid: 'firebaseUid',
    moderationRole: 'moderationRole'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    description: 'description',
    applicationType: 'applicationType',
    externalApplicationUrl: 'externalApplicationUrl',
    ownerUserId: 'ownerUserId'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const BadgeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    applicationId: 'applicationId',
    iconPath: 'iconPath',
    tier: 'tier',
    repeatedlyObtainable: 'repeatedlyObtainable',
    totalScore: 'totalScore'
  };

  export type BadgeScalarFieldEnum = (typeof BadgeScalarFieldEnum)[keyof typeof BadgeScalarFieldEnum]


  export const ApplicationUserScalarFieldEnum: {
    applicationId: 'applicationId',
    userId: 'userId',
    joinedAt: 'joinedAt'
  };

  export type ApplicationUserScalarFieldEnum = (typeof ApplicationUserScalarFieldEnum)[keyof typeof ApplicationUserScalarFieldEnum]


  export const UserBadgeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    badgeId: 'badgeId',
    earnedAt: 'earnedAt'
  };

  export type UserBadgeScalarFieldEnum = (typeof UserBadgeScalarFieldEnum)[keyof typeof UserBadgeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    firstname?: StringNullableFilter | string | null
    lastname?: StringNullableFilter | string | null
    ownedApplications?: ApplicationListRelationFilter
    firebaseUid?: StringNullableFilter | string | null
    moderationRole?: StringFilter | string
    joinedApplications?: ApplicationUserListRelationFilter
    badges?: UserBadgeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    ownedApplications?: ApplicationOrderByRelationAggregateInput
    firebaseUid?: SortOrder
    moderationRole?: SortOrder
    joinedApplications?: ApplicationUserOrderByRelationAggregateInput
    badges?: UserBadgeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
    firebaseUid?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    firebaseUid?: SortOrder
    moderationRole?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    email?: StringWithAggregatesFilter | string
    firstname?: StringNullableWithAggregatesFilter | string | null
    lastname?: StringNullableWithAggregatesFilter | string | null
    firebaseUid?: StringNullableWithAggregatesFilter | string | null
    moderationRole?: StringWithAggregatesFilter | string
  }

  export type ApplicationWhereInput = {
    AND?: Enumerable<ApplicationWhereInput>
    OR?: Enumerable<ApplicationWhereInput>
    NOT?: Enumerable<ApplicationWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    description?: StringNullableFilter | string | null
    applicationType?: StringFilter | string
    externalApplicationUrl?: StringNullableFilter | string | null
    ownerUser?: XOR<UserRelationFilter, UserWhereInput>
    ownerUserId?: IntFilter | number
    badges?: BadgeListRelationFilter
    users?: ApplicationUserListRelationFilter
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    applicationType?: SortOrder
    externalApplicationUrl?: SortOrder
    ownerUser?: UserOrderByWithRelationInput
    ownerUserId?: SortOrder
    badges?: BadgeOrderByRelationAggregateInput
    users?: ApplicationUserOrderByRelationAggregateInput
  }

  export type ApplicationWhereUniqueInput = {
    id?: number
  }

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    applicationType?: SortOrder
    externalApplicationUrl?: SortOrder
    ownerUserId?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _avg?: ApplicationAvgOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
    _sum?: ApplicationSumOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ApplicationScalarWhereWithAggregatesInput>
    OR?: Enumerable<ApplicationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ApplicationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    applicationType?: StringWithAggregatesFilter | string
    externalApplicationUrl?: StringNullableWithAggregatesFilter | string | null
    ownerUserId?: IntWithAggregatesFilter | number
  }

  export type BadgeWhereInput = {
    AND?: Enumerable<BadgeWhereInput>
    OR?: Enumerable<BadgeWhereInput>
    NOT?: Enumerable<BadgeWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    application?: XOR<ApplicationRelationFilter, ApplicationWhereInput>
    applicationId?: IntFilter | number
    iconPath?: StringNullableFilter | string | null
    tier?: StringFilter | string
    repeatedlyObtainable?: BoolFilter | boolean
    totalScore?: IntNullableFilter | number | null
    users?: UserBadgeListRelationFilter
  }

  export type BadgeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    application?: ApplicationOrderByWithRelationInput
    applicationId?: SortOrder
    iconPath?: SortOrder
    tier?: SortOrder
    repeatedlyObtainable?: SortOrder
    totalScore?: SortOrder
    users?: UserBadgeOrderByRelationAggregateInput
  }

  export type BadgeWhereUniqueInput = {
    id?: number
  }

  export type BadgeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    applicationId?: SortOrder
    iconPath?: SortOrder
    tier?: SortOrder
    repeatedlyObtainable?: SortOrder
    totalScore?: SortOrder
    _count?: BadgeCountOrderByAggregateInput
    _avg?: BadgeAvgOrderByAggregateInput
    _max?: BadgeMaxOrderByAggregateInput
    _min?: BadgeMinOrderByAggregateInput
    _sum?: BadgeSumOrderByAggregateInput
  }

  export type BadgeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BadgeScalarWhereWithAggregatesInput>
    OR?: Enumerable<BadgeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BadgeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    applicationId?: IntWithAggregatesFilter | number
    iconPath?: StringNullableWithAggregatesFilter | string | null
    tier?: StringWithAggregatesFilter | string
    repeatedlyObtainable?: BoolWithAggregatesFilter | boolean
    totalScore?: IntNullableWithAggregatesFilter | number | null
  }

  export type ApplicationUserWhereInput = {
    AND?: Enumerable<ApplicationUserWhereInput>
    OR?: Enumerable<ApplicationUserWhereInput>
    NOT?: Enumerable<ApplicationUserWhereInput>
    application?: XOR<ApplicationRelationFilter, ApplicationWhereInput>
    applicationId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
    joinedAt?: DateTimeFilter | Date | string
  }

  export type ApplicationUserOrderByWithRelationInput = {
    application?: ApplicationOrderByWithRelationInput
    applicationId?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ApplicationUserWhereUniqueInput = {
    applicationId_userId?: ApplicationUserApplicationIdUserIdCompoundUniqueInput
  }

  export type ApplicationUserOrderByWithAggregationInput = {
    applicationId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    _count?: ApplicationUserCountOrderByAggregateInput
    _avg?: ApplicationUserAvgOrderByAggregateInput
    _max?: ApplicationUserMaxOrderByAggregateInput
    _min?: ApplicationUserMinOrderByAggregateInput
    _sum?: ApplicationUserSumOrderByAggregateInput
  }

  export type ApplicationUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ApplicationUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<ApplicationUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ApplicationUserScalarWhereWithAggregatesInput>
    applicationId?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    joinedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserBadgeWhereInput = {
    AND?: Enumerable<UserBadgeWhereInput>
    OR?: Enumerable<UserBadgeWhereInput>
    NOT?: Enumerable<UserBadgeWhereInput>
    id?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
    badge?: XOR<BadgeRelationFilter, BadgeWhereInput>
    badgeId?: IntFilter | number
    earnedAt?: DateTimeFilter | Date | string
  }

  export type UserBadgeOrderByWithRelationInput = {
    id?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    badge?: BadgeOrderByWithRelationInput
    badgeId?: SortOrder
    earnedAt?: SortOrder
  }

  export type UserBadgeWhereUniqueInput = {
    id?: number
  }

  export type UserBadgeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedAt?: SortOrder
    _count?: UserBadgeCountOrderByAggregateInput
    _avg?: UserBadgeAvgOrderByAggregateInput
    _max?: UserBadgeMaxOrderByAggregateInput
    _min?: UserBadgeMinOrderByAggregateInput
    _sum?: UserBadgeSumOrderByAggregateInput
  }

  export type UserBadgeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserBadgeScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserBadgeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserBadgeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    badgeId?: IntWithAggregatesFilter | number
    earnedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    email: string
    firstname?: string | null
    lastname?: string | null
    ownedApplications?: ApplicationCreateNestedManyWithoutOwnerUserInput
    firebaseUid?: string | null
    moderationRole?: string
    joinedApplications?: ApplicationUserCreateNestedManyWithoutUserInput
    badges?: UserBadgeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    email: string
    firstname?: string | null
    lastname?: string | null
    ownedApplications?: ApplicationUncheckedCreateNestedManyWithoutOwnerUserInput
    firebaseUid?: string | null
    moderationRole?: string
    joinedApplications?: ApplicationUserUncheckedCreateNestedManyWithoutUserInput
    badges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    ownedApplications?: ApplicationUpdateManyWithoutOwnerUserInput
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    moderationRole?: StringFieldUpdateOperationsInput | string
    joinedApplications?: ApplicationUserUpdateManyWithoutUserInput
    badges?: UserBadgeUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    ownedApplications?: ApplicationUncheckedUpdateManyWithoutOwnerUserInput
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    moderationRole?: StringFieldUpdateOperationsInput | string
    joinedApplications?: ApplicationUserUncheckedUpdateManyWithoutUserInput
    badges?: UserBadgeUncheckedUpdateManyWithoutUserInput
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    moderationRole?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    moderationRole?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationCreateInput = {
    createdAt?: Date | string
    name: string
    description?: string | null
    applicationType: string
    externalApplicationUrl?: string | null
    ownerUser: UserCreateNestedOneWithoutOwnedApplicationsInput
    badges?: BadgeCreateNestedManyWithoutApplicationInput
    users?: ApplicationUserCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    description?: string | null
    applicationType: string
    externalApplicationUrl?: string | null
    ownerUserId: number
    badges?: BadgeUncheckedCreateNestedManyWithoutApplicationInput
    users?: ApplicationUserUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applicationType?: StringFieldUpdateOperationsInput | string
    externalApplicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUser?: UserUpdateOneRequiredWithoutOwnedApplicationsInput
    badges?: BadgeUpdateManyWithoutApplicationInput
    users?: ApplicationUserUpdateManyWithoutApplicationInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applicationType?: StringFieldUpdateOperationsInput | string
    externalApplicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: IntFieldUpdateOperationsInput | number
    badges?: BadgeUncheckedUpdateManyWithoutApplicationInput
    users?: ApplicationUserUncheckedUpdateManyWithoutApplicationInput
  }

  export type ApplicationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applicationType?: StringFieldUpdateOperationsInput | string
    externalApplicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applicationType?: StringFieldUpdateOperationsInput | string
    externalApplicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: IntFieldUpdateOperationsInput | number
  }

  export type BadgeCreateInput = {
    createdAt?: Date | string
    name: string
    application: ApplicationCreateNestedOneWithoutBadgesInput
    iconPath?: string | null
    tier: string
    repeatedlyObtainable: boolean
    totalScore?: number | null
    users?: UserBadgeCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    applicationId: number
    iconPath?: string | null
    tier: string
    repeatedlyObtainable: boolean
    totalScore?: number | null
    users?: UserBadgeUncheckedCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    application?: ApplicationUpdateOneRequiredWithoutBadgesInput
    iconPath?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: StringFieldUpdateOperationsInput | string
    repeatedlyObtainable?: BoolFieldUpdateOperationsInput | boolean
    totalScore?: NullableIntFieldUpdateOperationsInput | number | null
    users?: UserBadgeUpdateManyWithoutBadgeInput
  }

  export type BadgeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    applicationId?: IntFieldUpdateOperationsInput | number
    iconPath?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: StringFieldUpdateOperationsInput | string
    repeatedlyObtainable?: BoolFieldUpdateOperationsInput | boolean
    totalScore?: NullableIntFieldUpdateOperationsInput | number | null
    users?: UserBadgeUncheckedUpdateManyWithoutBadgeInput
  }

  export type BadgeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    iconPath?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: StringFieldUpdateOperationsInput | string
    repeatedlyObtainable?: BoolFieldUpdateOperationsInput | boolean
    totalScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BadgeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    applicationId?: IntFieldUpdateOperationsInput | number
    iconPath?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: StringFieldUpdateOperationsInput | string
    repeatedlyObtainable?: BoolFieldUpdateOperationsInput | boolean
    totalScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApplicationUserCreateInput = {
    application: ApplicationCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutJoinedApplicationsInput
    joinedAt?: Date | string
  }

  export type ApplicationUserUncheckedCreateInput = {
    applicationId: number
    userId: number
    joinedAt?: Date | string
  }

  export type ApplicationUserUpdateInput = {
    application?: ApplicationUpdateOneRequiredWithoutUsersInput
    user?: UserUpdateOneRequiredWithoutJoinedApplicationsInput
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUserUncheckedUpdateInput = {
    applicationId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUserUpdateManyMutationInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUserUncheckedUpdateManyInput = {
    applicationId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeCreateInput = {
    user: UserCreateNestedOneWithoutBadgesInput
    badge: BadgeCreateNestedOneWithoutUsersInput
    earnedAt?: Date | string
  }

  export type UserBadgeUncheckedCreateInput = {
    id?: number
    userId: number
    badgeId: number
    earnedAt?: Date | string
  }

  export type UserBadgeUpdateInput = {
    user?: UserUpdateOneRequiredWithoutBadgesInput
    badge?: BadgeUpdateOneRequiredWithoutUsersInput
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    badgeId?: IntFieldUpdateOperationsInput | number
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUpdateManyMutationInput = {
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    badgeId?: IntFieldUpdateOperationsInput | number
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type ApplicationUserListRelationFilter = {
    every?: ApplicationUserWhereInput
    some?: ApplicationUserWhereInput
    none?: ApplicationUserWhereInput
  }

  export type UserBadgeListRelationFilter = {
    every?: UserBadgeWhereInput
    some?: UserBadgeWhereInput
    none?: UserBadgeWhereInput
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserBadgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    firebaseUid?: SortOrder
    moderationRole?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    firebaseUid?: SortOrder
    moderationRole?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    firebaseUid?: SortOrder
    moderationRole?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BadgeListRelationFilter = {
    every?: BadgeWhereInput
    some?: BadgeWhereInput
    none?: BadgeWhereInput
  }

  export type BadgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    applicationType?: SortOrder
    externalApplicationUrl?: SortOrder
    ownerUserId?: SortOrder
  }

  export type ApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    applicationType?: SortOrder
    externalApplicationUrl?: SortOrder
    ownerUserId?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    applicationType?: SortOrder
    externalApplicationUrl?: SortOrder
    ownerUserId?: SortOrder
  }

  export type ApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
  }

  export type ApplicationRelationFilter = {
    is?: ApplicationWhereInput
    isNot?: ApplicationWhereInput
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type BadgeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    applicationId?: SortOrder
    iconPath?: SortOrder
    tier?: SortOrder
    repeatedlyObtainable?: SortOrder
    totalScore?: SortOrder
  }

  export type BadgeAvgOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    totalScore?: SortOrder
  }

  export type BadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    applicationId?: SortOrder
    iconPath?: SortOrder
    tier?: SortOrder
    repeatedlyObtainable?: SortOrder
    totalScore?: SortOrder
  }

  export type BadgeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    applicationId?: SortOrder
    iconPath?: SortOrder
    tier?: SortOrder
    repeatedlyObtainable?: SortOrder
    totalScore?: SortOrder
  }

  export type BadgeSumOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    totalScore?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type ApplicationUserApplicationIdUserIdCompoundUniqueInput = {
    applicationId: number
    userId: number
  }

  export type ApplicationUserCountOrderByAggregateInput = {
    applicationId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ApplicationUserAvgOrderByAggregateInput = {
    applicationId?: SortOrder
    userId?: SortOrder
  }

  export type ApplicationUserMaxOrderByAggregateInput = {
    applicationId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ApplicationUserMinOrderByAggregateInput = {
    applicationId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ApplicationUserSumOrderByAggregateInput = {
    applicationId?: SortOrder
    userId?: SortOrder
  }

  export type BadgeRelationFilter = {
    is?: BadgeWhereInput
    isNot?: BadgeWhereInput
  }

  export type UserBadgeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedAt?: SortOrder
  }

  export type UserBadgeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
  }

  export type UserBadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedAt?: SortOrder
  }

  export type UserBadgeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedAt?: SortOrder
  }

  export type UserBadgeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
  }

  export type ApplicationCreateNestedManyWithoutOwnerUserInput = {
    create?: XOR<Enumerable<ApplicationCreateWithoutOwnerUserInput>, Enumerable<ApplicationUncheckedCreateWithoutOwnerUserInput>>
    connectOrCreate?: Enumerable<ApplicationCreateOrConnectWithoutOwnerUserInput>
    connect?: Enumerable<ApplicationWhereUniqueInput>
  }

  export type ApplicationUserCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ApplicationUserCreateWithoutUserInput>, Enumerable<ApplicationUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ApplicationUserCreateOrConnectWithoutUserInput>
    connect?: Enumerable<ApplicationUserWhereUniqueInput>
  }

  export type UserBadgeCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserBadgeCreateWithoutUserInput>, Enumerable<UserBadgeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserBadgeCreateOrConnectWithoutUserInput>
    connect?: Enumerable<UserBadgeWhereUniqueInput>
  }

  export type ApplicationUncheckedCreateNestedManyWithoutOwnerUserInput = {
    create?: XOR<Enumerable<ApplicationCreateWithoutOwnerUserInput>, Enumerable<ApplicationUncheckedCreateWithoutOwnerUserInput>>
    connectOrCreate?: Enumerable<ApplicationCreateOrConnectWithoutOwnerUserInput>
    connect?: Enumerable<ApplicationWhereUniqueInput>
  }

  export type ApplicationUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ApplicationUserCreateWithoutUserInput>, Enumerable<ApplicationUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ApplicationUserCreateOrConnectWithoutUserInput>
    connect?: Enumerable<ApplicationUserWhereUniqueInput>
  }

  export type UserBadgeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserBadgeCreateWithoutUserInput>, Enumerable<UserBadgeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserBadgeCreateOrConnectWithoutUserInput>
    connect?: Enumerable<UserBadgeWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ApplicationUpdateManyWithoutOwnerUserInput = {
    create?: XOR<Enumerable<ApplicationCreateWithoutOwnerUserInput>, Enumerable<ApplicationUncheckedCreateWithoutOwnerUserInput>>
    connectOrCreate?: Enumerable<ApplicationCreateOrConnectWithoutOwnerUserInput>
    upsert?: Enumerable<ApplicationUpsertWithWhereUniqueWithoutOwnerUserInput>
    set?: Enumerable<ApplicationWhereUniqueInput>
    disconnect?: Enumerable<ApplicationWhereUniqueInput>
    delete?: Enumerable<ApplicationWhereUniqueInput>
    connect?: Enumerable<ApplicationWhereUniqueInput>
    update?: Enumerable<ApplicationUpdateWithWhereUniqueWithoutOwnerUserInput>
    updateMany?: Enumerable<ApplicationUpdateManyWithWhereWithoutOwnerUserInput>
    deleteMany?: Enumerable<ApplicationScalarWhereInput>
  }

  export type ApplicationUserUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ApplicationUserCreateWithoutUserInput>, Enumerable<ApplicationUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ApplicationUserCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ApplicationUserUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<ApplicationUserWhereUniqueInput>
    disconnect?: Enumerable<ApplicationUserWhereUniqueInput>
    delete?: Enumerable<ApplicationUserWhereUniqueInput>
    connect?: Enumerable<ApplicationUserWhereUniqueInput>
    update?: Enumerable<ApplicationUserUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ApplicationUserUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ApplicationUserScalarWhereInput>
  }

  export type UserBadgeUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<UserBadgeCreateWithoutUserInput>, Enumerable<UserBadgeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserBadgeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserBadgeUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<UserBadgeWhereUniqueInput>
    disconnect?: Enumerable<UserBadgeWhereUniqueInput>
    delete?: Enumerable<UserBadgeWhereUniqueInput>
    connect?: Enumerable<UserBadgeWhereUniqueInput>
    update?: Enumerable<UserBadgeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserBadgeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserBadgeScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApplicationUncheckedUpdateManyWithoutOwnerUserInput = {
    create?: XOR<Enumerable<ApplicationCreateWithoutOwnerUserInput>, Enumerable<ApplicationUncheckedCreateWithoutOwnerUserInput>>
    connectOrCreate?: Enumerable<ApplicationCreateOrConnectWithoutOwnerUserInput>
    upsert?: Enumerable<ApplicationUpsertWithWhereUniqueWithoutOwnerUserInput>
    set?: Enumerable<ApplicationWhereUniqueInput>
    disconnect?: Enumerable<ApplicationWhereUniqueInput>
    delete?: Enumerable<ApplicationWhereUniqueInput>
    connect?: Enumerable<ApplicationWhereUniqueInput>
    update?: Enumerable<ApplicationUpdateWithWhereUniqueWithoutOwnerUserInput>
    updateMany?: Enumerable<ApplicationUpdateManyWithWhereWithoutOwnerUserInput>
    deleteMany?: Enumerable<ApplicationScalarWhereInput>
  }

  export type ApplicationUserUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ApplicationUserCreateWithoutUserInput>, Enumerable<ApplicationUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ApplicationUserCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ApplicationUserUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<ApplicationUserWhereUniqueInput>
    disconnect?: Enumerable<ApplicationUserWhereUniqueInput>
    delete?: Enumerable<ApplicationUserWhereUniqueInput>
    connect?: Enumerable<ApplicationUserWhereUniqueInput>
    update?: Enumerable<ApplicationUserUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ApplicationUserUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ApplicationUserScalarWhereInput>
  }

  export type UserBadgeUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<UserBadgeCreateWithoutUserInput>, Enumerable<UserBadgeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserBadgeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserBadgeUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<UserBadgeWhereUniqueInput>
    disconnect?: Enumerable<UserBadgeWhereUniqueInput>
    delete?: Enumerable<UserBadgeWhereUniqueInput>
    connect?: Enumerable<UserBadgeWhereUniqueInput>
    update?: Enumerable<UserBadgeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserBadgeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserBadgeScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutOwnedApplicationsInput = {
    create?: XOR<UserCreateWithoutOwnedApplicationsInput, UserUncheckedCreateWithoutOwnedApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type BadgeCreateNestedManyWithoutApplicationInput = {
    create?: XOR<Enumerable<BadgeCreateWithoutApplicationInput>, Enumerable<BadgeUncheckedCreateWithoutApplicationInput>>
    connectOrCreate?: Enumerable<BadgeCreateOrConnectWithoutApplicationInput>
    connect?: Enumerable<BadgeWhereUniqueInput>
  }

  export type ApplicationUserCreateNestedManyWithoutApplicationInput = {
    create?: XOR<Enumerable<ApplicationUserCreateWithoutApplicationInput>, Enumerable<ApplicationUserUncheckedCreateWithoutApplicationInput>>
    connectOrCreate?: Enumerable<ApplicationUserCreateOrConnectWithoutApplicationInput>
    connect?: Enumerable<ApplicationUserWhereUniqueInput>
  }

  export type BadgeUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<Enumerable<BadgeCreateWithoutApplicationInput>, Enumerable<BadgeUncheckedCreateWithoutApplicationInput>>
    connectOrCreate?: Enumerable<BadgeCreateOrConnectWithoutApplicationInput>
    connect?: Enumerable<BadgeWhereUniqueInput>
  }

  export type ApplicationUserUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<Enumerable<ApplicationUserCreateWithoutApplicationInput>, Enumerable<ApplicationUserUncheckedCreateWithoutApplicationInput>>
    connectOrCreate?: Enumerable<ApplicationUserCreateOrConnectWithoutApplicationInput>
    connect?: Enumerable<ApplicationUserWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutOwnedApplicationsInput = {
    create?: XOR<UserCreateWithoutOwnedApplicationsInput, UserUncheckedCreateWithoutOwnedApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedApplicationsInput
    upsert?: UserUpsertWithoutOwnedApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutOwnedApplicationsInput, UserUncheckedUpdateWithoutOwnedApplicationsInput>
  }

  export type BadgeUpdateManyWithoutApplicationInput = {
    create?: XOR<Enumerable<BadgeCreateWithoutApplicationInput>, Enumerable<BadgeUncheckedCreateWithoutApplicationInput>>
    connectOrCreate?: Enumerable<BadgeCreateOrConnectWithoutApplicationInput>
    upsert?: Enumerable<BadgeUpsertWithWhereUniqueWithoutApplicationInput>
    set?: Enumerable<BadgeWhereUniqueInput>
    disconnect?: Enumerable<BadgeWhereUniqueInput>
    delete?: Enumerable<BadgeWhereUniqueInput>
    connect?: Enumerable<BadgeWhereUniqueInput>
    update?: Enumerable<BadgeUpdateWithWhereUniqueWithoutApplicationInput>
    updateMany?: Enumerable<BadgeUpdateManyWithWhereWithoutApplicationInput>
    deleteMany?: Enumerable<BadgeScalarWhereInput>
  }

  export type ApplicationUserUpdateManyWithoutApplicationInput = {
    create?: XOR<Enumerable<ApplicationUserCreateWithoutApplicationInput>, Enumerable<ApplicationUserUncheckedCreateWithoutApplicationInput>>
    connectOrCreate?: Enumerable<ApplicationUserCreateOrConnectWithoutApplicationInput>
    upsert?: Enumerable<ApplicationUserUpsertWithWhereUniqueWithoutApplicationInput>
    set?: Enumerable<ApplicationUserWhereUniqueInput>
    disconnect?: Enumerable<ApplicationUserWhereUniqueInput>
    delete?: Enumerable<ApplicationUserWhereUniqueInput>
    connect?: Enumerable<ApplicationUserWhereUniqueInput>
    update?: Enumerable<ApplicationUserUpdateWithWhereUniqueWithoutApplicationInput>
    updateMany?: Enumerable<ApplicationUserUpdateManyWithWhereWithoutApplicationInput>
    deleteMany?: Enumerable<ApplicationUserScalarWhereInput>
  }

  export type BadgeUncheckedUpdateManyWithoutApplicationInput = {
    create?: XOR<Enumerable<BadgeCreateWithoutApplicationInput>, Enumerable<BadgeUncheckedCreateWithoutApplicationInput>>
    connectOrCreate?: Enumerable<BadgeCreateOrConnectWithoutApplicationInput>
    upsert?: Enumerable<BadgeUpsertWithWhereUniqueWithoutApplicationInput>
    set?: Enumerable<BadgeWhereUniqueInput>
    disconnect?: Enumerable<BadgeWhereUniqueInput>
    delete?: Enumerable<BadgeWhereUniqueInput>
    connect?: Enumerable<BadgeWhereUniqueInput>
    update?: Enumerable<BadgeUpdateWithWhereUniqueWithoutApplicationInput>
    updateMany?: Enumerable<BadgeUpdateManyWithWhereWithoutApplicationInput>
    deleteMany?: Enumerable<BadgeScalarWhereInput>
  }

  export type ApplicationUserUncheckedUpdateManyWithoutApplicationInput = {
    create?: XOR<Enumerable<ApplicationUserCreateWithoutApplicationInput>, Enumerable<ApplicationUserUncheckedCreateWithoutApplicationInput>>
    connectOrCreate?: Enumerable<ApplicationUserCreateOrConnectWithoutApplicationInput>
    upsert?: Enumerable<ApplicationUserUpsertWithWhereUniqueWithoutApplicationInput>
    set?: Enumerable<ApplicationUserWhereUniqueInput>
    disconnect?: Enumerable<ApplicationUserWhereUniqueInput>
    delete?: Enumerable<ApplicationUserWhereUniqueInput>
    connect?: Enumerable<ApplicationUserWhereUniqueInput>
    update?: Enumerable<ApplicationUserUpdateWithWhereUniqueWithoutApplicationInput>
    updateMany?: Enumerable<ApplicationUserUpdateManyWithWhereWithoutApplicationInput>
    deleteMany?: Enumerable<ApplicationUserScalarWhereInput>
  }

  export type ApplicationCreateNestedOneWithoutBadgesInput = {
    create?: XOR<ApplicationCreateWithoutBadgesInput, ApplicationUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutBadgesInput
    connect?: ApplicationWhereUniqueInput
  }

  export type UserBadgeCreateNestedManyWithoutBadgeInput = {
    create?: XOR<Enumerable<UserBadgeCreateWithoutBadgeInput>, Enumerable<UserBadgeUncheckedCreateWithoutBadgeInput>>
    connectOrCreate?: Enumerable<UserBadgeCreateOrConnectWithoutBadgeInput>
    connect?: Enumerable<UserBadgeWhereUniqueInput>
  }

  export type UserBadgeUncheckedCreateNestedManyWithoutBadgeInput = {
    create?: XOR<Enumerable<UserBadgeCreateWithoutBadgeInput>, Enumerable<UserBadgeUncheckedCreateWithoutBadgeInput>>
    connectOrCreate?: Enumerable<UserBadgeCreateOrConnectWithoutBadgeInput>
    connect?: Enumerable<UserBadgeWhereUniqueInput>
  }

  export type ApplicationUpdateOneRequiredWithoutBadgesInput = {
    create?: XOR<ApplicationCreateWithoutBadgesInput, ApplicationUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutBadgesInput
    upsert?: ApplicationUpsertWithoutBadgesInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<ApplicationUpdateWithoutBadgesInput, ApplicationUncheckedUpdateWithoutBadgesInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserBadgeUpdateManyWithoutBadgeInput = {
    create?: XOR<Enumerable<UserBadgeCreateWithoutBadgeInput>, Enumerable<UserBadgeUncheckedCreateWithoutBadgeInput>>
    connectOrCreate?: Enumerable<UserBadgeCreateOrConnectWithoutBadgeInput>
    upsert?: Enumerable<UserBadgeUpsertWithWhereUniqueWithoutBadgeInput>
    set?: Enumerable<UserBadgeWhereUniqueInput>
    disconnect?: Enumerable<UserBadgeWhereUniqueInput>
    delete?: Enumerable<UserBadgeWhereUniqueInput>
    connect?: Enumerable<UserBadgeWhereUniqueInput>
    update?: Enumerable<UserBadgeUpdateWithWhereUniqueWithoutBadgeInput>
    updateMany?: Enumerable<UserBadgeUpdateManyWithWhereWithoutBadgeInput>
    deleteMany?: Enumerable<UserBadgeScalarWhereInput>
  }

  export type UserBadgeUncheckedUpdateManyWithoutBadgeInput = {
    create?: XOR<Enumerable<UserBadgeCreateWithoutBadgeInput>, Enumerable<UserBadgeUncheckedCreateWithoutBadgeInput>>
    connectOrCreate?: Enumerable<UserBadgeCreateOrConnectWithoutBadgeInput>
    upsert?: Enumerable<UserBadgeUpsertWithWhereUniqueWithoutBadgeInput>
    set?: Enumerable<UserBadgeWhereUniqueInput>
    disconnect?: Enumerable<UserBadgeWhereUniqueInput>
    delete?: Enumerable<UserBadgeWhereUniqueInput>
    connect?: Enumerable<UserBadgeWhereUniqueInput>
    update?: Enumerable<UserBadgeUpdateWithWhereUniqueWithoutBadgeInput>
    updateMany?: Enumerable<UserBadgeUpdateManyWithWhereWithoutBadgeInput>
    deleteMany?: Enumerable<UserBadgeScalarWhereInput>
  }

  export type ApplicationCreateNestedOneWithoutUsersInput = {
    create?: XOR<ApplicationCreateWithoutUsersInput, ApplicationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutUsersInput
    connect?: ApplicationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutJoinedApplicationsInput = {
    create?: XOR<UserCreateWithoutJoinedApplicationsInput, UserUncheckedCreateWithoutJoinedApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinedApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type ApplicationUpdateOneRequiredWithoutUsersInput = {
    create?: XOR<ApplicationCreateWithoutUsersInput, ApplicationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutUsersInput
    upsert?: ApplicationUpsertWithoutUsersInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<ApplicationUpdateWithoutUsersInput, ApplicationUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutJoinedApplicationsInput = {
    create?: XOR<UserCreateWithoutJoinedApplicationsInput, UserUncheckedCreateWithoutJoinedApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinedApplicationsInput
    upsert?: UserUpsertWithoutJoinedApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutJoinedApplicationsInput, UserUncheckedUpdateWithoutJoinedApplicationsInput>
  }

  export type UserCreateNestedOneWithoutBadgesInput = {
    create?: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBadgesInput
    connect?: UserWhereUniqueInput
  }

  export type BadgeCreateNestedOneWithoutUsersInput = {
    create?: XOR<BadgeCreateWithoutUsersInput, BadgeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutUsersInput
    connect?: BadgeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBadgesInput = {
    create?: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBadgesInput
    upsert?: UserUpsertWithoutBadgesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBadgesInput, UserUncheckedUpdateWithoutBadgesInput>
  }

  export type BadgeUpdateOneRequiredWithoutUsersInput = {
    create?: XOR<BadgeCreateWithoutUsersInput, BadgeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutUsersInput
    upsert?: BadgeUpsertWithoutUsersInput
    connect?: BadgeWhereUniqueInput
    update?: XOR<BadgeUpdateWithoutUsersInput, BadgeUncheckedUpdateWithoutUsersInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type ApplicationCreateWithoutOwnerUserInput = {
    createdAt?: Date | string
    name: string
    description?: string | null
    applicationType: string
    externalApplicationUrl?: string | null
    badges?: BadgeCreateNestedManyWithoutApplicationInput
    users?: ApplicationUserCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutOwnerUserInput = {
    id?: number
    createdAt?: Date | string
    name: string
    description?: string | null
    applicationType: string
    externalApplicationUrl?: string | null
    badges?: BadgeUncheckedCreateNestedManyWithoutApplicationInput
    users?: ApplicationUserUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutOwnerUserInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutOwnerUserInput, ApplicationUncheckedCreateWithoutOwnerUserInput>
  }

  export type ApplicationUserCreateWithoutUserInput = {
    application: ApplicationCreateNestedOneWithoutUsersInput
    joinedAt?: Date | string
  }

  export type ApplicationUserUncheckedCreateWithoutUserInput = {
    applicationId: number
    joinedAt?: Date | string
  }

  export type ApplicationUserCreateOrConnectWithoutUserInput = {
    where: ApplicationUserWhereUniqueInput
    create: XOR<ApplicationUserCreateWithoutUserInput, ApplicationUserUncheckedCreateWithoutUserInput>
  }

  export type UserBadgeCreateWithoutUserInput = {
    badge: BadgeCreateNestedOneWithoutUsersInput
    earnedAt?: Date | string
  }

  export type UserBadgeUncheckedCreateWithoutUserInput = {
    id?: number
    badgeId: number
    earnedAt?: Date | string
  }

  export type UserBadgeCreateOrConnectWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    create: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput>
  }

  export type ApplicationUpsertWithWhereUniqueWithoutOwnerUserInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutOwnerUserInput, ApplicationUncheckedUpdateWithoutOwnerUserInput>
    create: XOR<ApplicationCreateWithoutOwnerUserInput, ApplicationUncheckedCreateWithoutOwnerUserInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutOwnerUserInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutOwnerUserInput, ApplicationUncheckedUpdateWithoutOwnerUserInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutOwnerUserInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutOwnedApplicationsInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: Enumerable<ApplicationScalarWhereInput>
    OR?: Enumerable<ApplicationScalarWhereInput>
    NOT?: Enumerable<ApplicationScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    description?: StringNullableFilter | string | null
    applicationType?: StringFilter | string
    externalApplicationUrl?: StringNullableFilter | string | null
    ownerUserId?: IntFilter | number
  }

  export type ApplicationUserUpsertWithWhereUniqueWithoutUserInput = {
    where: ApplicationUserWhereUniqueInput
    update: XOR<ApplicationUserUpdateWithoutUserInput, ApplicationUserUncheckedUpdateWithoutUserInput>
    create: XOR<ApplicationUserCreateWithoutUserInput, ApplicationUserUncheckedCreateWithoutUserInput>
  }

  export type ApplicationUserUpdateWithWhereUniqueWithoutUserInput = {
    where: ApplicationUserWhereUniqueInput
    data: XOR<ApplicationUserUpdateWithoutUserInput, ApplicationUserUncheckedUpdateWithoutUserInput>
  }

  export type ApplicationUserUpdateManyWithWhereWithoutUserInput = {
    where: ApplicationUserScalarWhereInput
    data: XOR<ApplicationUserUpdateManyMutationInput, ApplicationUserUncheckedUpdateManyWithoutJoinedApplicationsInput>
  }

  export type ApplicationUserScalarWhereInput = {
    AND?: Enumerable<ApplicationUserScalarWhereInput>
    OR?: Enumerable<ApplicationUserScalarWhereInput>
    NOT?: Enumerable<ApplicationUserScalarWhereInput>
    applicationId?: IntFilter | number
    userId?: IntFilter | number
    joinedAt?: DateTimeFilter | Date | string
  }

  export type UserBadgeUpsertWithWhereUniqueWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    update: XOR<UserBadgeUpdateWithoutUserInput, UserBadgeUncheckedUpdateWithoutUserInput>
    create: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput>
  }

  export type UserBadgeUpdateWithWhereUniqueWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    data: XOR<UserBadgeUpdateWithoutUserInput, UserBadgeUncheckedUpdateWithoutUserInput>
  }

  export type UserBadgeUpdateManyWithWhereWithoutUserInput = {
    where: UserBadgeScalarWhereInput
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyWithoutBadgesInput>
  }

  export type UserBadgeScalarWhereInput = {
    AND?: Enumerable<UserBadgeScalarWhereInput>
    OR?: Enumerable<UserBadgeScalarWhereInput>
    NOT?: Enumerable<UserBadgeScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    badgeId?: IntFilter | number
    earnedAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutOwnedApplicationsInput = {
    createdAt?: Date | string
    email: string
    firstname?: string | null
    lastname?: string | null
    firebaseUid?: string | null
    moderationRole?: string
    joinedApplications?: ApplicationUserCreateNestedManyWithoutUserInput
    badges?: UserBadgeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedApplicationsInput = {
    id?: number
    createdAt?: Date | string
    email: string
    firstname?: string | null
    lastname?: string | null
    firebaseUid?: string | null
    moderationRole?: string
    joinedApplications?: ApplicationUserUncheckedCreateNestedManyWithoutUserInput
    badges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedApplicationsInput, UserUncheckedCreateWithoutOwnedApplicationsInput>
  }

  export type BadgeCreateWithoutApplicationInput = {
    createdAt?: Date | string
    name: string
    iconPath?: string | null
    tier: string
    repeatedlyObtainable: boolean
    totalScore?: number | null
    users?: UserBadgeCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUncheckedCreateWithoutApplicationInput = {
    id?: number
    createdAt?: Date | string
    name: string
    iconPath?: string | null
    tier: string
    repeatedlyObtainable: boolean
    totalScore?: number | null
    users?: UserBadgeUncheckedCreateNestedManyWithoutBadgeInput
  }

  export type BadgeCreateOrConnectWithoutApplicationInput = {
    where: BadgeWhereUniqueInput
    create: XOR<BadgeCreateWithoutApplicationInput, BadgeUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationUserCreateWithoutApplicationInput = {
    user: UserCreateNestedOneWithoutJoinedApplicationsInput
    joinedAt?: Date | string
  }

  export type ApplicationUserUncheckedCreateWithoutApplicationInput = {
    userId: number
    joinedAt?: Date | string
  }

  export type ApplicationUserCreateOrConnectWithoutApplicationInput = {
    where: ApplicationUserWhereUniqueInput
    create: XOR<ApplicationUserCreateWithoutApplicationInput, ApplicationUserUncheckedCreateWithoutApplicationInput>
  }

  export type UserUpsertWithoutOwnedApplicationsInput = {
    update: XOR<UserUpdateWithoutOwnedApplicationsInput, UserUncheckedUpdateWithoutOwnedApplicationsInput>
    create: XOR<UserCreateWithoutOwnedApplicationsInput, UserUncheckedCreateWithoutOwnedApplicationsInput>
  }

  export type UserUpdateWithoutOwnedApplicationsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    moderationRole?: StringFieldUpdateOperationsInput | string
    joinedApplications?: ApplicationUserUpdateManyWithoutUserInput
    badges?: UserBadgeUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutOwnedApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    moderationRole?: StringFieldUpdateOperationsInput | string
    joinedApplications?: ApplicationUserUncheckedUpdateManyWithoutUserInput
    badges?: UserBadgeUncheckedUpdateManyWithoutUserInput
  }

  export type BadgeUpsertWithWhereUniqueWithoutApplicationInput = {
    where: BadgeWhereUniqueInput
    update: XOR<BadgeUpdateWithoutApplicationInput, BadgeUncheckedUpdateWithoutApplicationInput>
    create: XOR<BadgeCreateWithoutApplicationInput, BadgeUncheckedCreateWithoutApplicationInput>
  }

  export type BadgeUpdateWithWhereUniqueWithoutApplicationInput = {
    where: BadgeWhereUniqueInput
    data: XOR<BadgeUpdateWithoutApplicationInput, BadgeUncheckedUpdateWithoutApplicationInput>
  }

  export type BadgeUpdateManyWithWhereWithoutApplicationInput = {
    where: BadgeScalarWhereInput
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyWithoutBadgesInput>
  }

  export type BadgeScalarWhereInput = {
    AND?: Enumerable<BadgeScalarWhereInput>
    OR?: Enumerable<BadgeScalarWhereInput>
    NOT?: Enumerable<BadgeScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    applicationId?: IntFilter | number
    iconPath?: StringNullableFilter | string | null
    tier?: StringFilter | string
    repeatedlyObtainable?: BoolFilter | boolean
    totalScore?: IntNullableFilter | number | null
  }

  export type ApplicationUserUpsertWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationUserWhereUniqueInput
    update: XOR<ApplicationUserUpdateWithoutApplicationInput, ApplicationUserUncheckedUpdateWithoutApplicationInput>
    create: XOR<ApplicationUserCreateWithoutApplicationInput, ApplicationUserUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationUserUpdateWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationUserWhereUniqueInput
    data: XOR<ApplicationUserUpdateWithoutApplicationInput, ApplicationUserUncheckedUpdateWithoutApplicationInput>
  }

  export type ApplicationUserUpdateManyWithWhereWithoutApplicationInput = {
    where: ApplicationUserScalarWhereInput
    data: XOR<ApplicationUserUpdateManyMutationInput, ApplicationUserUncheckedUpdateManyWithoutUsersInput>
  }

  export type ApplicationCreateWithoutBadgesInput = {
    createdAt?: Date | string
    name: string
    description?: string | null
    applicationType: string
    externalApplicationUrl?: string | null
    ownerUser: UserCreateNestedOneWithoutOwnedApplicationsInput
    users?: ApplicationUserCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutBadgesInput = {
    id?: number
    createdAt?: Date | string
    name: string
    description?: string | null
    applicationType: string
    externalApplicationUrl?: string | null
    ownerUserId: number
    users?: ApplicationUserUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutBadgesInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutBadgesInput, ApplicationUncheckedCreateWithoutBadgesInput>
  }

  export type UserBadgeCreateWithoutBadgeInput = {
    user: UserCreateNestedOneWithoutBadgesInput
    earnedAt?: Date | string
  }

  export type UserBadgeUncheckedCreateWithoutBadgeInput = {
    id?: number
    userId: number
    earnedAt?: Date | string
  }

  export type UserBadgeCreateOrConnectWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    create: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput>
  }

  export type ApplicationUpsertWithoutBadgesInput = {
    update: XOR<ApplicationUpdateWithoutBadgesInput, ApplicationUncheckedUpdateWithoutBadgesInput>
    create: XOR<ApplicationCreateWithoutBadgesInput, ApplicationUncheckedCreateWithoutBadgesInput>
  }

  export type ApplicationUpdateWithoutBadgesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applicationType?: StringFieldUpdateOperationsInput | string
    externalApplicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUser?: UserUpdateOneRequiredWithoutOwnedApplicationsInput
    users?: ApplicationUserUpdateManyWithoutApplicationInput
  }

  export type ApplicationUncheckedUpdateWithoutBadgesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applicationType?: StringFieldUpdateOperationsInput | string
    externalApplicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: IntFieldUpdateOperationsInput | number
    users?: ApplicationUserUncheckedUpdateManyWithoutApplicationInput
  }

  export type UserBadgeUpsertWithWhereUniqueWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    update: XOR<UserBadgeUpdateWithoutBadgeInput, UserBadgeUncheckedUpdateWithoutBadgeInput>
    create: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput>
  }

  export type UserBadgeUpdateWithWhereUniqueWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    data: XOR<UserBadgeUpdateWithoutBadgeInput, UserBadgeUncheckedUpdateWithoutBadgeInput>
  }

  export type UserBadgeUpdateManyWithWhereWithoutBadgeInput = {
    where: UserBadgeScalarWhereInput
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyWithoutUsersInput>
  }

  export type ApplicationCreateWithoutUsersInput = {
    createdAt?: Date | string
    name: string
    description?: string | null
    applicationType: string
    externalApplicationUrl?: string | null
    ownerUser: UserCreateNestedOneWithoutOwnedApplicationsInput
    badges?: BadgeCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutUsersInput = {
    id?: number
    createdAt?: Date | string
    name: string
    description?: string | null
    applicationType: string
    externalApplicationUrl?: string | null
    ownerUserId: number
    badges?: BadgeUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutUsersInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutUsersInput, ApplicationUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutJoinedApplicationsInput = {
    createdAt?: Date | string
    email: string
    firstname?: string | null
    lastname?: string | null
    ownedApplications?: ApplicationCreateNestedManyWithoutOwnerUserInput
    firebaseUid?: string | null
    moderationRole?: string
    badges?: UserBadgeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJoinedApplicationsInput = {
    id?: number
    createdAt?: Date | string
    email: string
    firstname?: string | null
    lastname?: string | null
    ownedApplications?: ApplicationUncheckedCreateNestedManyWithoutOwnerUserInput
    firebaseUid?: string | null
    moderationRole?: string
    badges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJoinedApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJoinedApplicationsInput, UserUncheckedCreateWithoutJoinedApplicationsInput>
  }

  export type ApplicationUpsertWithoutUsersInput = {
    update: XOR<ApplicationUpdateWithoutUsersInput, ApplicationUncheckedUpdateWithoutUsersInput>
    create: XOR<ApplicationCreateWithoutUsersInput, ApplicationUncheckedCreateWithoutUsersInput>
  }

  export type ApplicationUpdateWithoutUsersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applicationType?: StringFieldUpdateOperationsInput | string
    externalApplicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUser?: UserUpdateOneRequiredWithoutOwnedApplicationsInput
    badges?: BadgeUpdateManyWithoutApplicationInput
  }

  export type ApplicationUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applicationType?: StringFieldUpdateOperationsInput | string
    externalApplicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: IntFieldUpdateOperationsInput | number
    badges?: BadgeUncheckedUpdateManyWithoutApplicationInput
  }

  export type UserUpsertWithoutJoinedApplicationsInput = {
    update: XOR<UserUpdateWithoutJoinedApplicationsInput, UserUncheckedUpdateWithoutJoinedApplicationsInput>
    create: XOR<UserCreateWithoutJoinedApplicationsInput, UserUncheckedCreateWithoutJoinedApplicationsInput>
  }

  export type UserUpdateWithoutJoinedApplicationsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    ownedApplications?: ApplicationUpdateManyWithoutOwnerUserInput
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    moderationRole?: StringFieldUpdateOperationsInput | string
    badges?: UserBadgeUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutJoinedApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    ownedApplications?: ApplicationUncheckedUpdateManyWithoutOwnerUserInput
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    moderationRole?: StringFieldUpdateOperationsInput | string
    badges?: UserBadgeUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateWithoutBadgesInput = {
    createdAt?: Date | string
    email: string
    firstname?: string | null
    lastname?: string | null
    ownedApplications?: ApplicationCreateNestedManyWithoutOwnerUserInput
    firebaseUid?: string | null
    moderationRole?: string
    joinedApplications?: ApplicationUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBadgesInput = {
    id?: number
    createdAt?: Date | string
    email: string
    firstname?: string | null
    lastname?: string | null
    ownedApplications?: ApplicationUncheckedCreateNestedManyWithoutOwnerUserInput
    firebaseUid?: string | null
    moderationRole?: string
    joinedApplications?: ApplicationUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBadgesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
  }

  export type BadgeCreateWithoutUsersInput = {
    createdAt?: Date | string
    name: string
    application: ApplicationCreateNestedOneWithoutBadgesInput
    iconPath?: string | null
    tier: string
    repeatedlyObtainable: boolean
    totalScore?: number | null
  }

  export type BadgeUncheckedCreateWithoutUsersInput = {
    id?: number
    createdAt?: Date | string
    name: string
    applicationId: number
    iconPath?: string | null
    tier: string
    repeatedlyObtainable: boolean
    totalScore?: number | null
  }

  export type BadgeCreateOrConnectWithoutUsersInput = {
    where: BadgeWhereUniqueInput
    create: XOR<BadgeCreateWithoutUsersInput, BadgeUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutBadgesInput = {
    update: XOR<UserUpdateWithoutBadgesInput, UserUncheckedUpdateWithoutBadgesInput>
    create: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
  }

  export type UserUpdateWithoutBadgesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    ownedApplications?: ApplicationUpdateManyWithoutOwnerUserInput
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    moderationRole?: StringFieldUpdateOperationsInput | string
    joinedApplications?: ApplicationUserUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutBadgesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    ownedApplications?: ApplicationUncheckedUpdateManyWithoutOwnerUserInput
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null
    moderationRole?: StringFieldUpdateOperationsInput | string
    joinedApplications?: ApplicationUserUncheckedUpdateManyWithoutUserInput
  }

  export type BadgeUpsertWithoutUsersInput = {
    update: XOR<BadgeUpdateWithoutUsersInput, BadgeUncheckedUpdateWithoutUsersInput>
    create: XOR<BadgeCreateWithoutUsersInput, BadgeUncheckedCreateWithoutUsersInput>
  }

  export type BadgeUpdateWithoutUsersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    application?: ApplicationUpdateOneRequiredWithoutBadgesInput
    iconPath?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: StringFieldUpdateOperationsInput | string
    repeatedlyObtainable?: BoolFieldUpdateOperationsInput | boolean
    totalScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BadgeUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    applicationId?: IntFieldUpdateOperationsInput | number
    iconPath?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: StringFieldUpdateOperationsInput | string
    repeatedlyObtainable?: BoolFieldUpdateOperationsInput | boolean
    totalScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApplicationUpdateWithoutOwnerUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applicationType?: StringFieldUpdateOperationsInput | string
    externalApplicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    badges?: BadgeUpdateManyWithoutApplicationInput
    users?: ApplicationUserUpdateManyWithoutApplicationInput
  }

  export type ApplicationUncheckedUpdateWithoutOwnerUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applicationType?: StringFieldUpdateOperationsInput | string
    externalApplicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    badges?: BadgeUncheckedUpdateManyWithoutApplicationInput
    users?: ApplicationUserUncheckedUpdateManyWithoutApplicationInput
  }

  export type ApplicationUncheckedUpdateManyWithoutOwnedApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applicationType?: StringFieldUpdateOperationsInput | string
    externalApplicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationUserUpdateWithoutUserInput = {
    application?: ApplicationUpdateOneRequiredWithoutUsersInput
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUserUncheckedUpdateWithoutUserInput = {
    applicationId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUserUncheckedUpdateManyWithoutJoinedApplicationsInput = {
    applicationId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUpdateWithoutUserInput = {
    badge?: BadgeUpdateOneRequiredWithoutUsersInput
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    badgeId?: IntFieldUpdateOperationsInput | number
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateManyWithoutBadgesInput = {
    id?: IntFieldUpdateOperationsInput | number
    badgeId?: IntFieldUpdateOperationsInput | number
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeUpdateWithoutApplicationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    iconPath?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: StringFieldUpdateOperationsInput | string
    repeatedlyObtainable?: BoolFieldUpdateOperationsInput | boolean
    totalScore?: NullableIntFieldUpdateOperationsInput | number | null
    users?: UserBadgeUpdateManyWithoutBadgeInput
  }

  export type BadgeUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    iconPath?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: StringFieldUpdateOperationsInput | string
    repeatedlyObtainable?: BoolFieldUpdateOperationsInput | boolean
    totalScore?: NullableIntFieldUpdateOperationsInput | number | null
    users?: UserBadgeUncheckedUpdateManyWithoutBadgeInput
  }

  export type BadgeUncheckedUpdateManyWithoutBadgesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    iconPath?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: StringFieldUpdateOperationsInput | string
    repeatedlyObtainable?: BoolFieldUpdateOperationsInput | boolean
    totalScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApplicationUserUpdateWithoutApplicationInput = {
    user?: UserUpdateOneRequiredWithoutJoinedApplicationsInput
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUserUncheckedUpdateWithoutApplicationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUserUncheckedUpdateManyWithoutUsersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUpdateWithoutBadgeInput = {
    user?: UserUpdateOneRequiredWithoutBadgesInput
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateWithoutBadgeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}