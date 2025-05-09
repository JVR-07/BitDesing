
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model project_logs
 * 
 */
export type project_logs = $Result.DefaultSelection<Prisma.$project_logsPayload>
/**
 * Model projects
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type projects = $Result.DefaultSelection<Prisma.$projectsPayload>
/**
 * Model tasks
 * 
 */
export type tasks = $Result.DefaultSelection<Prisma.$tasksPayload>
/**
 * Model users
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Project_logs
 * const project_logs = await prisma.project_logs.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Project_logs
   * const project_logs = await prisma.project_logs.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.project_logs`: Exposes CRUD operations for the **project_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Project_logs
    * const project_logs = await prisma.project_logs.findMany()
    * ```
    */
  get project_logs(): Prisma.project_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.projectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tasks`: Exposes CRUD operations for the **tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.tasks.findMany()
    * ```
    */
  get tasks(): Prisma.tasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    project_logs: 'project_logs',
    projects: 'projects',
    tasks: 'tasks',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "project_logs" | "projects" | "tasks" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      project_logs: {
        payload: Prisma.$project_logsPayload<ExtArgs>
        fields: Prisma.project_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.project_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.project_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_logsPayload>
          }
          findFirst: {
            args: Prisma.project_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.project_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_logsPayload>
          }
          findMany: {
            args: Prisma.project_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_logsPayload>[]
          }
          create: {
            args: Prisma.project_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_logsPayload>
          }
          createMany: {
            args: Prisma.project_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.project_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_logsPayload>[]
          }
          delete: {
            args: Prisma.project_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_logsPayload>
          }
          update: {
            args: Prisma.project_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_logsPayload>
          }
          deleteMany: {
            args: Prisma.project_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.project_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.project_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_logsPayload>[]
          }
          upsert: {
            args: Prisma.project_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_logsPayload>
          }
          aggregate: {
            args: Prisma.Project_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject_logs>
          }
          groupBy: {
            args: Prisma.project_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Project_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.project_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Project_logsCountAggregateOutputType> | number
          }
        }
      }
      projects: {
        payload: Prisma.$projectsPayload<ExtArgs>
        fields: Prisma.projectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findFirst: {
            args: Prisma.projectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findMany: {
            args: Prisma.projectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          create: {
            args: Prisma.projectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          createMany: {
            args: Prisma.projectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          delete: {
            args: Prisma.projectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          update: {
            args: Prisma.projectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          deleteMany: {
            args: Prisma.projectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          upsert: {
            args: Prisma.projectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.projectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      tasks: {
        payload: Prisma.$tasksPayload<ExtArgs>
        fields: Prisma.tasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findFirst: {
            args: Prisma.tasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findMany: {
            args: Prisma.tasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          create: {
            args: Prisma.tasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          createMany: {
            args: Prisma.tasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tasksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          delete: {
            args: Prisma.tasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          update: {
            args: Prisma.tasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          deleteMany: {
            args: Prisma.tasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tasksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          upsert: {
            args: Prisma.tasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          aggregate: {
            args: Prisma.TasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTasks>
          }
          groupBy: {
            args: Prisma.tasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<TasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.tasksCountArgs<ExtArgs>
            result: $Utils.Optional<TasksCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    project_logs?: project_logsOmit
    projects?: projectsOmit
    tasks?: tasksOmit
    users?: usersOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectsCountOutputType
   */

  export type ProjectsCountOutputType = {
    project_logs: number
    tasks: number
  }

  export type ProjectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project_logs?: boolean | ProjectsCountOutputTypeCountProject_logsArgs
    tasks?: boolean | ProjectsCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectsCountOutputType
     */
    select?: ProjectsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountProject_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_logsWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    project_logs: number
    projects_projects_client_idTousers: number
    projects_projects_developer_idTousers: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project_logs?: boolean | UsersCountOutputTypeCountProject_logsArgs
    projects_projects_client_idTousers?: boolean | UsersCountOutputTypeCountProjects_projects_client_idTousersArgs
    projects_projects_developer_idTousers?: boolean | UsersCountOutputTypeCountProjects_projects_developer_idTousersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProject_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_logsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProjects_projects_client_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProjects_projects_developer_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model project_logs
   */

  export type AggregateProject_logs = {
    _count: Project_logsCountAggregateOutputType | null
    _avg: Project_logsAvgAggregateOutputType | null
    _sum: Project_logsSumAggregateOutputType | null
    _min: Project_logsMinAggregateOutputType | null
    _max: Project_logsMaxAggregateOutputType | null
  }

  export type Project_logsAvgAggregateOutputType = {
    project_log_id: number | null
    project_id: number | null
  }

  export type Project_logsSumAggregateOutputType = {
    project_log_id: number | null
    project_id: number | null
  }

  export type Project_logsMinAggregateOutputType = {
    project_log_id: number | null
    project_id: number | null
    public_key: string | null
    action: string | null
    wallet_address: string | null
    timestamp: Date | null
  }

  export type Project_logsMaxAggregateOutputType = {
    project_log_id: number | null
    project_id: number | null
    public_key: string | null
    action: string | null
    wallet_address: string | null
    timestamp: Date | null
  }

  export type Project_logsCountAggregateOutputType = {
    project_log_id: number
    project_id: number
    public_key: number
    action: number
    wallet_address: number
    timestamp: number
    _all: number
  }


  export type Project_logsAvgAggregateInputType = {
    project_log_id?: true
    project_id?: true
  }

  export type Project_logsSumAggregateInputType = {
    project_log_id?: true
    project_id?: true
  }

  export type Project_logsMinAggregateInputType = {
    project_log_id?: true
    project_id?: true
    public_key?: true
    action?: true
    wallet_address?: true
    timestamp?: true
  }

  export type Project_logsMaxAggregateInputType = {
    project_log_id?: true
    project_id?: true
    public_key?: true
    action?: true
    wallet_address?: true
    timestamp?: true
  }

  export type Project_logsCountAggregateInputType = {
    project_log_id?: true
    project_id?: true
    public_key?: true
    action?: true
    wallet_address?: true
    timestamp?: true
    _all?: true
  }

  export type Project_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_logs to aggregate.
     */
    where?: project_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_logs to fetch.
     */
    orderBy?: project_logsOrderByWithRelationInput | project_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: project_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned project_logs
    **/
    _count?: true | Project_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Project_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Project_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Project_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Project_logsMaxAggregateInputType
  }

  export type GetProject_logsAggregateType<T extends Project_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateProject_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject_logs[P]>
      : GetScalarType<T[P], AggregateProject_logs[P]>
  }




  export type project_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_logsWhereInput
    orderBy?: project_logsOrderByWithAggregationInput | project_logsOrderByWithAggregationInput[]
    by: Project_logsScalarFieldEnum[] | Project_logsScalarFieldEnum
    having?: project_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Project_logsCountAggregateInputType | true
    _avg?: Project_logsAvgAggregateInputType
    _sum?: Project_logsSumAggregateInputType
    _min?: Project_logsMinAggregateInputType
    _max?: Project_logsMaxAggregateInputType
  }

  export type Project_logsGroupByOutputType = {
    project_log_id: number
    project_id: number | null
    public_key: string | null
    action: string
    wallet_address: string | null
    timestamp: Date | null
    _count: Project_logsCountAggregateOutputType | null
    _avg: Project_logsAvgAggregateOutputType | null
    _sum: Project_logsSumAggregateOutputType | null
    _min: Project_logsMinAggregateOutputType | null
    _max: Project_logsMaxAggregateOutputType | null
  }

  type GetProject_logsGroupByPayload<T extends project_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Project_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Project_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Project_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Project_logsGroupByOutputType[P]>
        }
      >
    >


  export type project_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    project_log_id?: boolean
    project_id?: boolean
    public_key?: boolean
    action?: boolean
    wallet_address?: boolean
    timestamp?: boolean
    projects?: boolean | project_logs$projectsArgs<ExtArgs>
    users?: boolean | project_logs$usersArgs<ExtArgs>
  }, ExtArgs["result"]["project_logs"]>

  export type project_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    project_log_id?: boolean
    project_id?: boolean
    public_key?: boolean
    action?: boolean
    wallet_address?: boolean
    timestamp?: boolean
    projects?: boolean | project_logs$projectsArgs<ExtArgs>
    users?: boolean | project_logs$usersArgs<ExtArgs>
  }, ExtArgs["result"]["project_logs"]>

  export type project_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    project_log_id?: boolean
    project_id?: boolean
    public_key?: boolean
    action?: boolean
    wallet_address?: boolean
    timestamp?: boolean
    projects?: boolean | project_logs$projectsArgs<ExtArgs>
    users?: boolean | project_logs$usersArgs<ExtArgs>
  }, ExtArgs["result"]["project_logs"]>

  export type project_logsSelectScalar = {
    project_log_id?: boolean
    project_id?: boolean
    public_key?: boolean
    action?: boolean
    wallet_address?: boolean
    timestamp?: boolean
  }

  export type project_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"project_log_id" | "project_id" | "public_key" | "action" | "wallet_address" | "timestamp", ExtArgs["result"]["project_logs"]>
  export type project_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | project_logs$projectsArgs<ExtArgs>
    users?: boolean | project_logs$usersArgs<ExtArgs>
  }
  export type project_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | project_logs$projectsArgs<ExtArgs>
    users?: boolean | project_logs$usersArgs<ExtArgs>
  }
  export type project_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | project_logs$projectsArgs<ExtArgs>
    users?: boolean | project_logs$usersArgs<ExtArgs>
  }

  export type $project_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project_logs"
    objects: {
      projects: Prisma.$projectsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      project_log_id: number
      project_id: number | null
      public_key: string | null
      action: string
      wallet_address: string | null
      timestamp: Date | null
    }, ExtArgs["result"]["project_logs"]>
    composites: {}
  }

  type project_logsGetPayload<S extends boolean | null | undefined | project_logsDefaultArgs> = $Result.GetResult<Prisma.$project_logsPayload, S>

  type project_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<project_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Project_logsCountAggregateInputType | true
    }

  export interface project_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project_logs'], meta: { name: 'project_logs' } }
    /**
     * Find zero or one Project_logs that matches the filter.
     * @param {project_logsFindUniqueArgs} args - Arguments to find a Project_logs
     * @example
     * // Get one Project_logs
     * const project_logs = await prisma.project_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends project_logsFindUniqueArgs>(args: SelectSubset<T, project_logsFindUniqueArgs<ExtArgs>>): Prisma__project_logsClient<$Result.GetResult<Prisma.$project_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {project_logsFindUniqueOrThrowArgs} args - Arguments to find a Project_logs
     * @example
     * // Get one Project_logs
     * const project_logs = await prisma.project_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends project_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, project_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__project_logsClient<$Result.GetResult<Prisma.$project_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_logsFindFirstArgs} args - Arguments to find a Project_logs
     * @example
     * // Get one Project_logs
     * const project_logs = await prisma.project_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends project_logsFindFirstArgs>(args?: SelectSubset<T, project_logsFindFirstArgs<ExtArgs>>): Prisma__project_logsClient<$Result.GetResult<Prisma.$project_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_logsFindFirstOrThrowArgs} args - Arguments to find a Project_logs
     * @example
     * // Get one Project_logs
     * const project_logs = await prisma.project_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends project_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, project_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__project_logsClient<$Result.GetResult<Prisma.$project_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Project_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Project_logs
     * const project_logs = await prisma.project_logs.findMany()
     * 
     * // Get first 10 Project_logs
     * const project_logs = await prisma.project_logs.findMany({ take: 10 })
     * 
     * // Only select the `project_log_id`
     * const project_logsWithProject_log_idOnly = await prisma.project_logs.findMany({ select: { project_log_id: true } })
     * 
     */
    findMany<T extends project_logsFindManyArgs>(args?: SelectSubset<T, project_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project_logs.
     * @param {project_logsCreateArgs} args - Arguments to create a Project_logs.
     * @example
     * // Create one Project_logs
     * const Project_logs = await prisma.project_logs.create({
     *   data: {
     *     // ... data to create a Project_logs
     *   }
     * })
     * 
     */
    create<T extends project_logsCreateArgs>(args: SelectSubset<T, project_logsCreateArgs<ExtArgs>>): Prisma__project_logsClient<$Result.GetResult<Prisma.$project_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Project_logs.
     * @param {project_logsCreateManyArgs} args - Arguments to create many Project_logs.
     * @example
     * // Create many Project_logs
     * const project_logs = await prisma.project_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends project_logsCreateManyArgs>(args?: SelectSubset<T, project_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Project_logs and returns the data saved in the database.
     * @param {project_logsCreateManyAndReturnArgs} args - Arguments to create many Project_logs.
     * @example
     * // Create many Project_logs
     * const project_logs = await prisma.project_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Project_logs and only return the `project_log_id`
     * const project_logsWithProject_log_idOnly = await prisma.project_logs.createManyAndReturn({
     *   select: { project_log_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends project_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, project_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project_logs.
     * @param {project_logsDeleteArgs} args - Arguments to delete one Project_logs.
     * @example
     * // Delete one Project_logs
     * const Project_logs = await prisma.project_logs.delete({
     *   where: {
     *     // ... filter to delete one Project_logs
     *   }
     * })
     * 
     */
    delete<T extends project_logsDeleteArgs>(args: SelectSubset<T, project_logsDeleteArgs<ExtArgs>>): Prisma__project_logsClient<$Result.GetResult<Prisma.$project_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project_logs.
     * @param {project_logsUpdateArgs} args - Arguments to update one Project_logs.
     * @example
     * // Update one Project_logs
     * const project_logs = await prisma.project_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends project_logsUpdateArgs>(args: SelectSubset<T, project_logsUpdateArgs<ExtArgs>>): Prisma__project_logsClient<$Result.GetResult<Prisma.$project_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Project_logs.
     * @param {project_logsDeleteManyArgs} args - Arguments to filter Project_logs to delete.
     * @example
     * // Delete a few Project_logs
     * const { count } = await prisma.project_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends project_logsDeleteManyArgs>(args?: SelectSubset<T, project_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Project_logs
     * const project_logs = await prisma.project_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends project_logsUpdateManyArgs>(args: SelectSubset<T, project_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_logs and returns the data updated in the database.
     * @param {project_logsUpdateManyAndReturnArgs} args - Arguments to update many Project_logs.
     * @example
     * // Update many Project_logs
     * const project_logs = await prisma.project_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Project_logs and only return the `project_log_id`
     * const project_logsWithProject_log_idOnly = await prisma.project_logs.updateManyAndReturn({
     *   select: { project_log_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends project_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, project_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project_logs.
     * @param {project_logsUpsertArgs} args - Arguments to update or create a Project_logs.
     * @example
     * // Update or create a Project_logs
     * const project_logs = await prisma.project_logs.upsert({
     *   create: {
     *     // ... data to create a Project_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project_logs we want to update
     *   }
     * })
     */
    upsert<T extends project_logsUpsertArgs>(args: SelectSubset<T, project_logsUpsertArgs<ExtArgs>>): Prisma__project_logsClient<$Result.GetResult<Prisma.$project_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Project_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_logsCountArgs} args - Arguments to filter Project_logs to count.
     * @example
     * // Count the number of Project_logs
     * const count = await prisma.project_logs.count({
     *   where: {
     *     // ... the filter for the Project_logs we want to count
     *   }
     * })
    **/
    count<T extends project_logsCountArgs>(
      args?: Subset<T, project_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Project_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Project_logsAggregateArgs>(args: Subset<T, Project_logsAggregateArgs>): Prisma.PrismaPromise<GetProject_logsAggregateType<T>>

    /**
     * Group by Project_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_logsGroupByArgs} args - Group by arguments.
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
      T extends project_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: project_logsGroupByArgs['orderBy'] }
        : { orderBy?: project_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, project_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProject_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project_logs model
   */
  readonly fields: project_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__project_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends project_logs$projectsArgs<ExtArgs> = {}>(args?: Subset<T, project_logs$projectsArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends project_logs$usersArgs<ExtArgs> = {}>(args?: Subset<T, project_logs$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project_logs model
   */
  interface project_logsFieldRefs {
    readonly project_log_id: FieldRef<"project_logs", 'Int'>
    readonly project_id: FieldRef<"project_logs", 'Int'>
    readonly public_key: FieldRef<"project_logs", 'String'>
    readonly action: FieldRef<"project_logs", 'String'>
    readonly wallet_address: FieldRef<"project_logs", 'String'>
    readonly timestamp: FieldRef<"project_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * project_logs findUnique
   */
  export type project_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_logs
     */
    select?: project_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_logs
     */
    omit?: project_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_logsInclude<ExtArgs> | null
    /**
     * Filter, which project_logs to fetch.
     */
    where: project_logsWhereUniqueInput
  }

  /**
   * project_logs findUniqueOrThrow
   */
  export type project_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_logs
     */
    select?: project_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_logs
     */
    omit?: project_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_logsInclude<ExtArgs> | null
    /**
     * Filter, which project_logs to fetch.
     */
    where: project_logsWhereUniqueInput
  }

  /**
   * project_logs findFirst
   */
  export type project_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_logs
     */
    select?: project_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_logs
     */
    omit?: project_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_logsInclude<ExtArgs> | null
    /**
     * Filter, which project_logs to fetch.
     */
    where?: project_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_logs to fetch.
     */
    orderBy?: project_logsOrderByWithRelationInput | project_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_logs.
     */
    cursor?: project_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_logs.
     */
    distinct?: Project_logsScalarFieldEnum | Project_logsScalarFieldEnum[]
  }

  /**
   * project_logs findFirstOrThrow
   */
  export type project_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_logs
     */
    select?: project_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_logs
     */
    omit?: project_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_logsInclude<ExtArgs> | null
    /**
     * Filter, which project_logs to fetch.
     */
    where?: project_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_logs to fetch.
     */
    orderBy?: project_logsOrderByWithRelationInput | project_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_logs.
     */
    cursor?: project_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_logs.
     */
    distinct?: Project_logsScalarFieldEnum | Project_logsScalarFieldEnum[]
  }

  /**
   * project_logs findMany
   */
  export type project_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_logs
     */
    select?: project_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_logs
     */
    omit?: project_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_logsInclude<ExtArgs> | null
    /**
     * Filter, which project_logs to fetch.
     */
    where?: project_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_logs to fetch.
     */
    orderBy?: project_logsOrderByWithRelationInput | project_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing project_logs.
     */
    cursor?: project_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_logs.
     */
    skip?: number
    distinct?: Project_logsScalarFieldEnum | Project_logsScalarFieldEnum[]
  }

  /**
   * project_logs create
   */
  export type project_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_logs
     */
    select?: project_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_logs
     */
    omit?: project_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a project_logs.
     */
    data: XOR<project_logsCreateInput, project_logsUncheckedCreateInput>
  }

  /**
   * project_logs createMany
   */
  export type project_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many project_logs.
     */
    data: project_logsCreateManyInput | project_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project_logs createManyAndReturn
   */
  export type project_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_logs
     */
    select?: project_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project_logs
     */
    omit?: project_logsOmit<ExtArgs> | null
    /**
     * The data used to create many project_logs.
     */
    data: project_logsCreateManyInput | project_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * project_logs update
   */
  export type project_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_logs
     */
    select?: project_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_logs
     */
    omit?: project_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a project_logs.
     */
    data: XOR<project_logsUpdateInput, project_logsUncheckedUpdateInput>
    /**
     * Choose, which project_logs to update.
     */
    where: project_logsWhereUniqueInput
  }

  /**
   * project_logs updateMany
   */
  export type project_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update project_logs.
     */
    data: XOR<project_logsUpdateManyMutationInput, project_logsUncheckedUpdateManyInput>
    /**
     * Filter which project_logs to update
     */
    where?: project_logsWhereInput
    /**
     * Limit how many project_logs to update.
     */
    limit?: number
  }

  /**
   * project_logs updateManyAndReturn
   */
  export type project_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_logs
     */
    select?: project_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project_logs
     */
    omit?: project_logsOmit<ExtArgs> | null
    /**
     * The data used to update project_logs.
     */
    data: XOR<project_logsUpdateManyMutationInput, project_logsUncheckedUpdateManyInput>
    /**
     * Filter which project_logs to update
     */
    where?: project_logsWhereInput
    /**
     * Limit how many project_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * project_logs upsert
   */
  export type project_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_logs
     */
    select?: project_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_logs
     */
    omit?: project_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the project_logs to update in case it exists.
     */
    where: project_logsWhereUniqueInput
    /**
     * In case the project_logs found by the `where` argument doesn't exist, create a new project_logs with this data.
     */
    create: XOR<project_logsCreateInput, project_logsUncheckedCreateInput>
    /**
     * In case the project_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<project_logsUpdateInput, project_logsUncheckedUpdateInput>
  }

  /**
   * project_logs delete
   */
  export type project_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_logs
     */
    select?: project_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_logs
     */
    omit?: project_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_logsInclude<ExtArgs> | null
    /**
     * Filter which project_logs to delete.
     */
    where: project_logsWhereUniqueInput
  }

  /**
   * project_logs deleteMany
   */
  export type project_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_logs to delete
     */
    where?: project_logsWhereInput
    /**
     * Limit how many project_logs to delete.
     */
    limit?: number
  }

  /**
   * project_logs.projects
   */
  export type project_logs$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
  }

  /**
   * project_logs.users
   */
  export type project_logs$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * project_logs without action
   */
  export type project_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_logs
     */
    select?: project_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_logs
     */
    omit?: project_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_logsInclude<ExtArgs> | null
  }


  /**
   * Model projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsAvgAggregateOutputType = {
    project_id: number | null
    amount: Decimal | null
  }

  export type ProjectsSumAggregateOutputType = {
    project_id: number | null
    amount: Decimal | null
  }

  export type ProjectsMinAggregateOutputType = {
    project_id: number | null
    title: string | null
    description: string | null
    amount: Decimal | null
    status: string | null
    client_public_key: string | null
    developer_public_key: string | null
    contract_address: string | null
    created_at: Date | null
  }

  export type ProjectsMaxAggregateOutputType = {
    project_id: number | null
    title: string | null
    description: string | null
    amount: Decimal | null
    status: string | null
    client_public_key: string | null
    developer_public_key: string | null
    contract_address: string | null
    created_at: Date | null
  }

  export type ProjectsCountAggregateOutputType = {
    project_id: number
    title: number
    description: number
    amount: number
    status: number
    client_public_key: number
    developer_public_key: number
    contract_address: number
    created_at: number
    _all: number
  }


  export type ProjectsAvgAggregateInputType = {
    project_id?: true
    amount?: true
  }

  export type ProjectsSumAggregateInputType = {
    project_id?: true
    amount?: true
  }

  export type ProjectsMinAggregateInputType = {
    project_id?: true
    title?: true
    description?: true
    amount?: true
    status?: true
    client_public_key?: true
    developer_public_key?: true
    contract_address?: true
    created_at?: true
  }

  export type ProjectsMaxAggregateInputType = {
    project_id?: true
    title?: true
    description?: true
    amount?: true
    status?: true
    client_public_key?: true
    developer_public_key?: true
    contract_address?: true
    created_at?: true
  }

  export type ProjectsCountAggregateInputType = {
    project_id?: true
    title?: true
    description?: true
    amount?: true
    status?: true
    client_public_key?: true
    developer_public_key?: true
    contract_address?: true
    created_at?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to aggregate.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type projectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithAggregationInput | projectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: projectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _avg?: ProjectsAvgAggregateInputType
    _sum?: ProjectsSumAggregateInputType
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    project_id: number
    title: string
    description: string | null
    amount: Decimal
    status: string | null
    client_public_key: string | null
    developer_public_key: string | null
    contract_address: string | null
    created_at: Date | null
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends projectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type projectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    project_id?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    status?: boolean
    client_public_key?: boolean
    developer_public_key?: boolean
    contract_address?: boolean
    created_at?: boolean
    project_logs?: boolean | projects$project_logsArgs<ExtArgs>
    users_projects_client_idTousers?: boolean | projects$users_projects_client_idTousersArgs<ExtArgs>
    users_projects_developer_idTousers?: boolean | projects$users_projects_developer_idTousersArgs<ExtArgs>
    tasks?: boolean | projects$tasksArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    project_id?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    status?: boolean
    client_public_key?: boolean
    developer_public_key?: boolean
    contract_address?: boolean
    created_at?: boolean
    users_projects_client_idTousers?: boolean | projects$users_projects_client_idTousersArgs<ExtArgs>
    users_projects_developer_idTousers?: boolean | projects$users_projects_developer_idTousersArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    project_id?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    status?: boolean
    client_public_key?: boolean
    developer_public_key?: boolean
    contract_address?: boolean
    created_at?: boolean
    users_projects_client_idTousers?: boolean | projects$users_projects_client_idTousersArgs<ExtArgs>
    users_projects_developer_idTousers?: boolean | projects$users_projects_developer_idTousersArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectScalar = {
    project_id?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    status?: boolean
    client_public_key?: boolean
    developer_public_key?: boolean
    contract_address?: boolean
    created_at?: boolean
  }

  export type projectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"project_id" | "title" | "description" | "amount" | "status" | "client_public_key" | "developer_public_key" | "contract_address" | "created_at", ExtArgs["result"]["projects"]>
  export type projectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project_logs?: boolean | projects$project_logsArgs<ExtArgs>
    users_projects_client_idTousers?: boolean | projects$users_projects_client_idTousersArgs<ExtArgs>
    users_projects_developer_idTousers?: boolean | projects$users_projects_developer_idTousersArgs<ExtArgs>
    tasks?: boolean | projects$tasksArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type projectsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_projects_client_idTousers?: boolean | projects$users_projects_client_idTousersArgs<ExtArgs>
    users_projects_developer_idTousers?: boolean | projects$users_projects_developer_idTousersArgs<ExtArgs>
  }
  export type projectsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_projects_client_idTousers?: boolean | projects$users_projects_client_idTousersArgs<ExtArgs>
    users_projects_developer_idTousers?: boolean | projects$users_projects_developer_idTousersArgs<ExtArgs>
  }

  export type $projectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projects"
    objects: {
      project_logs: Prisma.$project_logsPayload<ExtArgs>[]
      users_projects_client_idTousers: Prisma.$usersPayload<ExtArgs> | null
      users_projects_developer_idTousers: Prisma.$usersPayload<ExtArgs> | null
      tasks: Prisma.$tasksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      project_id: number
      title: string
      description: string | null
      amount: Prisma.Decimal
      status: string | null
      client_public_key: string | null
      developer_public_key: string | null
      contract_address: string | null
      created_at: Date | null
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }

  type projectsGetPayload<S extends boolean | null | undefined | projectsDefaultArgs> = $Result.GetResult<Prisma.$projectsPayload, S>

  type projectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface projectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projects'], meta: { name: 'projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {projectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectsFindUniqueArgs>(args: SelectSubset<T, projectsFindUniqueArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectsFindUniqueOrThrowArgs>(args: SelectSubset<T, projectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectsFindFirstArgs>(args?: SelectSubset<T, projectsFindFirstArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectsFindFirstOrThrowArgs>(args?: SelectSubset<T, projectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `project_id`
     * const projectsWithProject_idOnly = await prisma.projects.findMany({ select: { project_id: true } })
     * 
     */
    findMany<T extends projectsFindManyArgs>(args?: SelectSubset<T, projectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projects.
     * @param {projectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends projectsCreateArgs>(args: SelectSubset<T, projectsCreateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectsCreateManyArgs>(args?: SelectSubset<T, projectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {projectsCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `project_id`
     * const projectsWithProject_idOnly = await prisma.projects.createManyAndReturn({
     *   select: { project_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectsCreateManyAndReturnArgs>(args?: SelectSubset<T, projectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projects.
     * @param {projectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends projectsDeleteArgs>(args: SelectSubset<T, projectsDeleteArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projects.
     * @param {projectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectsUpdateArgs>(args: SelectSubset<T, projectsUpdateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectsDeleteManyArgs>(args?: SelectSubset<T, projectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectsUpdateManyArgs>(args: SelectSubset<T, projectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {projectsUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `project_id`
     * const projectsWithProject_idOnly = await prisma.projects.updateManyAndReturn({
     *   select: { project_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projectsUpdateManyAndReturnArgs>(args: SelectSubset<T, projectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projects.
     * @param {projectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends projectsUpsertArgs>(args: SelectSubset<T, projectsUpsertArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectsCountArgs>(
      args?: Subset<T, projectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsGroupByArgs} args - Group by arguments.
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
      T extends projectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectsGroupByArgs['orderBy'] }
        : { orderBy?: projectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, projectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projects model
   */
  readonly fields: projectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project_logs<T extends projects$project_logsArgs<ExtArgs> = {}>(args?: Subset<T, projects$project_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users_projects_client_idTousers<T extends projects$users_projects_client_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, projects$users_projects_client_idTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users_projects_developer_idTousers<T extends projects$users_projects_developer_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, projects$users_projects_developer_idTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tasks<T extends projects$tasksArgs<ExtArgs> = {}>(args?: Subset<T, projects$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the projects model
   */
  interface projectsFieldRefs {
    readonly project_id: FieldRef<"projects", 'Int'>
    readonly title: FieldRef<"projects", 'String'>
    readonly description: FieldRef<"projects", 'String'>
    readonly amount: FieldRef<"projects", 'Decimal'>
    readonly status: FieldRef<"projects", 'String'>
    readonly client_public_key: FieldRef<"projects", 'String'>
    readonly developer_public_key: FieldRef<"projects", 'String'>
    readonly contract_address: FieldRef<"projects", 'String'>
    readonly created_at: FieldRef<"projects", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * projects findUnique
   */
  export type projectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findUniqueOrThrow
   */
  export type projectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findFirst
   */
  export type projectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findFirstOrThrow
   */
  export type projectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findMany
   */
  export type projectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects create
   */
  export type projectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to create a projects.
     */
    data: XOR<projectsCreateInput, projectsUncheckedCreateInput>
  }

  /**
   * projects createMany
   */
  export type projectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projects createManyAndReturn
   */
  export type projectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * projects update
   */
  export type projectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to update a projects.
     */
    data: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
    /**
     * Choose, which projects to update.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects updateMany
   */
  export type projectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * projects updateManyAndReturn
   */
  export type projectsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * projects upsert
   */
  export type projectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The filter to search for the projects to update in case it exists.
     */
    where: projectsWhereUniqueInput
    /**
     * In case the projects found by the `where` argument doesn't exist, create a new projects with this data.
     */
    create: XOR<projectsCreateInput, projectsUncheckedCreateInput>
    /**
     * In case the projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
  }

  /**
   * projects delete
   */
  export type projectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter which projects to delete.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects deleteMany
   */
  export type projectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * projects.project_logs
   */
  export type projects$project_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_logs
     */
    select?: project_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_logs
     */
    omit?: project_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_logsInclude<ExtArgs> | null
    where?: project_logsWhereInput
    orderBy?: project_logsOrderByWithRelationInput | project_logsOrderByWithRelationInput[]
    cursor?: project_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Project_logsScalarFieldEnum | Project_logsScalarFieldEnum[]
  }

  /**
   * projects.users_projects_client_idTousers
   */
  export type projects$users_projects_client_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * projects.users_projects_developer_idTousers
   */
  export type projects$users_projects_developer_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * projects.tasks
   */
  export type projects$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * projects without action
   */
  export type projectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
  }


  /**
   * Model tasks
   */

  export type AggregateTasks = {
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  export type TasksAvgAggregateOutputType = {
    task_id: number | null
    project_id: number | null
  }

  export type TasksSumAggregateOutputType = {
    task_id: number | null
    project_id: number | null
  }

  export type TasksMinAggregateOutputType = {
    task_id: number | null
    project_id: number | null
    description: string | null
    completed_by_dev: boolean | null
    confirmed_by_client: boolean | null
  }

  export type TasksMaxAggregateOutputType = {
    task_id: number | null
    project_id: number | null
    description: string | null
    completed_by_dev: boolean | null
    confirmed_by_client: boolean | null
  }

  export type TasksCountAggregateOutputType = {
    task_id: number
    project_id: number
    description: number
    completed_by_dev: number
    confirmed_by_client: number
    _all: number
  }


  export type TasksAvgAggregateInputType = {
    task_id?: true
    project_id?: true
  }

  export type TasksSumAggregateInputType = {
    task_id?: true
    project_id?: true
  }

  export type TasksMinAggregateInputType = {
    task_id?: true
    project_id?: true
    description?: true
    completed_by_dev?: true
    confirmed_by_client?: true
  }

  export type TasksMaxAggregateInputType = {
    task_id?: true
    project_id?: true
    description?: true
    completed_by_dev?: true
    confirmed_by_client?: true
  }

  export type TasksCountAggregateInputType = {
    task_id?: true
    project_id?: true
    description?: true
    completed_by_dev?: true
    confirmed_by_client?: true
    _all?: true
  }

  export type TasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to aggregate.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TasksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TasksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasksMaxAggregateInputType
  }

  export type GetTasksAggregateType<T extends TasksAggregateArgs> = {
        [P in keyof T & keyof AggregateTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasks[P]>
      : GetScalarType<T[P], AggregateTasks[P]>
  }




  export type tasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithAggregationInput | tasksOrderByWithAggregationInput[]
    by: TasksScalarFieldEnum[] | TasksScalarFieldEnum
    having?: tasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasksCountAggregateInputType | true
    _avg?: TasksAvgAggregateInputType
    _sum?: TasksSumAggregateInputType
    _min?: TasksMinAggregateInputType
    _max?: TasksMaxAggregateInputType
  }

  export type TasksGroupByOutputType = {
    task_id: number
    project_id: number | null
    description: string
    completed_by_dev: boolean | null
    confirmed_by_client: boolean | null
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  type GetTasksGroupByPayload<T extends tasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasksGroupByOutputType[P]>
            : GetScalarType<T[P], TasksGroupByOutputType[P]>
        }
      >
    >


  export type tasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    task_id?: boolean
    project_id?: boolean
    description?: boolean
    completed_by_dev?: boolean
    confirmed_by_client?: boolean
    projects?: boolean | tasks$projectsArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type tasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    task_id?: boolean
    project_id?: boolean
    description?: boolean
    completed_by_dev?: boolean
    confirmed_by_client?: boolean
    projects?: boolean | tasks$projectsArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type tasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    task_id?: boolean
    project_id?: boolean
    description?: boolean
    completed_by_dev?: boolean
    confirmed_by_client?: boolean
    projects?: boolean | tasks$projectsArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type tasksSelectScalar = {
    task_id?: boolean
    project_id?: boolean
    description?: boolean
    completed_by_dev?: boolean
    confirmed_by_client?: boolean
  }

  export type tasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"task_id" | "project_id" | "description" | "completed_by_dev" | "confirmed_by_client", ExtArgs["result"]["tasks"]>
  export type tasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | tasks$projectsArgs<ExtArgs>
  }
  export type tasksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | tasks$projectsArgs<ExtArgs>
  }
  export type tasksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | tasks$projectsArgs<ExtArgs>
  }

  export type $tasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tasks"
    objects: {
      projects: Prisma.$projectsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      task_id: number
      project_id: number | null
      description: string
      completed_by_dev: boolean | null
      confirmed_by_client: boolean | null
    }, ExtArgs["result"]["tasks"]>
    composites: {}
  }

  type tasksGetPayload<S extends boolean | null | undefined | tasksDefaultArgs> = $Result.GetResult<Prisma.$tasksPayload, S>

  type tasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TasksCountAggregateInputType | true
    }

  export interface tasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tasks'], meta: { name: 'tasks' } }
    /**
     * Find zero or one Tasks that matches the filter.
     * @param {tasksFindUniqueArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tasksFindUniqueArgs>(args: SelectSubset<T, tasksFindUniqueArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tasksFindUniqueOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tasksFindUniqueOrThrowArgs>(args: SelectSubset<T, tasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tasksFindFirstArgs>(args?: SelectSubset<T, tasksFindFirstArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tasksFindFirstOrThrowArgs>(args?: SelectSubset<T, tasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.tasks.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.tasks.findMany({ take: 10 })
     * 
     * // Only select the `task_id`
     * const tasksWithTask_idOnly = await prisma.tasks.findMany({ select: { task_id: true } })
     * 
     */
    findMany<T extends tasksFindManyArgs>(args?: SelectSubset<T, tasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tasks.
     * @param {tasksCreateArgs} args - Arguments to create a Tasks.
     * @example
     * // Create one Tasks
     * const Tasks = await prisma.tasks.create({
     *   data: {
     *     // ... data to create a Tasks
     *   }
     * })
     * 
     */
    create<T extends tasksCreateArgs>(args: SelectSubset<T, tasksCreateArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {tasksCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tasksCreateManyArgs>(args?: SelectSubset<T, tasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {tasksCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `task_id`
     * const tasksWithTask_idOnly = await prisma.tasks.createManyAndReturn({
     *   select: { task_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tasksCreateManyAndReturnArgs>(args?: SelectSubset<T, tasksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tasks.
     * @param {tasksDeleteArgs} args - Arguments to delete one Tasks.
     * @example
     * // Delete one Tasks
     * const Tasks = await prisma.tasks.delete({
     *   where: {
     *     // ... filter to delete one Tasks
     *   }
     * })
     * 
     */
    delete<T extends tasksDeleteArgs>(args: SelectSubset<T, tasksDeleteArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tasks.
     * @param {tasksUpdateArgs} args - Arguments to update one Tasks.
     * @example
     * // Update one Tasks
     * const tasks = await prisma.tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tasksUpdateArgs>(args: SelectSubset<T, tasksUpdateArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {tasksDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tasksDeleteManyArgs>(args?: SelectSubset<T, tasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tasksUpdateManyArgs>(args: SelectSubset<T, tasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {tasksUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `task_id`
     * const tasksWithTask_idOnly = await prisma.tasks.updateManyAndReturn({
     *   select: { task_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tasksUpdateManyAndReturnArgs>(args: SelectSubset<T, tasksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tasks.
     * @param {tasksUpsertArgs} args - Arguments to update or create a Tasks.
     * @example
     * // Update or create a Tasks
     * const tasks = await prisma.tasks.upsert({
     *   create: {
     *     // ... data to create a Tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasks we want to update
     *   }
     * })
     */
    upsert<T extends tasksUpsertArgs>(args: SelectSubset<T, tasksUpsertArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.tasks.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends tasksCountArgs>(
      args?: Subset<T, tasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TasksAggregateArgs>(args: Subset<T, TasksAggregateArgs>): Prisma.PrismaPromise<GetTasksAggregateType<T>>

    /**
     * Group by Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksGroupByArgs} args - Group by arguments.
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
      T extends tasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tasksGroupByArgs['orderBy'] }
        : { orderBy?: tasksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, tasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tasks model
   */
  readonly fields: tasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends tasks$projectsArgs<ExtArgs> = {}>(args?: Subset<T, tasks$projectsArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tasks model
   */
  interface tasksFieldRefs {
    readonly task_id: FieldRef<"tasks", 'Int'>
    readonly project_id: FieldRef<"tasks", 'Int'>
    readonly description: FieldRef<"tasks", 'String'>
    readonly completed_by_dev: FieldRef<"tasks", 'Boolean'>
    readonly confirmed_by_client: FieldRef<"tasks", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * tasks findUnique
   */
  export type tasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks findUniqueOrThrow
   */
  export type tasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks findFirst
   */
  export type tasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks findFirstOrThrow
   */
  export type tasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks findMany
   */
  export type tasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks create
   */
  export type tasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to create a tasks.
     */
    data: XOR<tasksCreateInput, tasksUncheckedCreateInput>
  }

  /**
   * tasks createMany
   */
  export type tasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: tasksCreateManyInput | tasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tasks createManyAndReturn
   */
  export type tasksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * The data used to create many tasks.
     */
    data: tasksCreateManyInput | tasksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tasks update
   */
  export type tasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to update a tasks.
     */
    data: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
    /**
     * Choose, which tasks to update.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks updateMany
   */
  export type tasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
  }

  /**
   * tasks updateManyAndReturn
   */
  export type tasksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * The data used to update tasks.
     */
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tasks upsert
   */
  export type tasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The filter to search for the tasks to update in case it exists.
     */
    where: tasksWhereUniqueInput
    /**
     * In case the tasks found by the `where` argument doesn't exist, create a new tasks with this data.
     */
    create: XOR<tasksCreateInput, tasksUncheckedCreateInput>
    /**
     * In case the tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
  }

  /**
   * tasks delete
   */
  export type tasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter which tasks to delete.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks deleteMany
   */
  export type tasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to delete.
     */
    limit?: number
  }

  /**
   * tasks.projects
   */
  export type tasks$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
  }

  /**
   * tasks without action
   */
  export type tasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    public_key: string | null
    rol: string | null
    user_name: string | null
  }

  export type UsersMaxAggregateOutputType = {
    public_key: string | null
    rol: string | null
    user_name: string | null
  }

  export type UsersCountAggregateOutputType = {
    public_key: number
    rol: number
    user_name: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    public_key?: true
    rol?: true
    user_name?: true
  }

  export type UsersMaxAggregateInputType = {
    public_key?: true
    rol?: true
    user_name?: true
  }

  export type UsersCountAggregateInputType = {
    public_key?: true
    rol?: true
    user_name?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    public_key: string
    rol: string
    user_name: string
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    public_key?: boolean
    rol?: boolean
    user_name?: boolean
    project_logs?: boolean | users$project_logsArgs<ExtArgs>
    projects_projects_client_idTousers?: boolean | users$projects_projects_client_idTousersArgs<ExtArgs>
    projects_projects_developer_idTousers?: boolean | users$projects_projects_developer_idTousersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    public_key?: boolean
    rol?: boolean
    user_name?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    public_key?: boolean
    rol?: boolean
    user_name?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    public_key?: boolean
    rol?: boolean
    user_name?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"public_key" | "rol" | "user_name", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project_logs?: boolean | users$project_logsArgs<ExtArgs>
    projects_projects_client_idTousers?: boolean | users$projects_projects_client_idTousersArgs<ExtArgs>
    projects_projects_developer_idTousers?: boolean | users$projects_projects_developer_idTousersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      project_logs: Prisma.$project_logsPayload<ExtArgs>[]
      projects_projects_client_idTousers: Prisma.$projectsPayload<ExtArgs>[]
      projects_projects_developer_idTousers: Prisma.$projectsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      public_key: string
      rol: string
      user_name: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `public_key`
     * const usersWithPublic_keyOnly = await prisma.users.findMany({ select: { public_key: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `public_key`
     * const usersWithPublic_keyOnly = await prisma.users.createManyAndReturn({
     *   select: { public_key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `public_key`
     * const usersWithPublic_keyOnly = await prisma.users.updateManyAndReturn({
     *   select: { public_key: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project_logs<T extends users$project_logsArgs<ExtArgs> = {}>(args?: Subset<T, users$project_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects_projects_client_idTousers<T extends users$projects_projects_client_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$projects_projects_client_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects_projects_developer_idTousers<T extends users$projects_projects_developer_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$projects_projects_developer_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly public_key: FieldRef<"users", 'String'>
    readonly rol: FieldRef<"users", 'String'>
    readonly user_name: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.project_logs
   */
  export type users$project_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_logs
     */
    select?: project_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_logs
     */
    omit?: project_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_logsInclude<ExtArgs> | null
    where?: project_logsWhereInput
    orderBy?: project_logsOrderByWithRelationInput | project_logsOrderByWithRelationInput[]
    cursor?: project_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Project_logsScalarFieldEnum | Project_logsScalarFieldEnum[]
  }

  /**
   * users.projects_projects_client_idTousers
   */
  export type users$projects_projects_client_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    cursor?: projectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * users.projects_projects_developer_idTousers
   */
  export type users$projects_projects_developer_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    cursor?: projectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Project_logsScalarFieldEnum: {
    project_log_id: 'project_log_id',
    project_id: 'project_id',
    public_key: 'public_key',
    action: 'action',
    wallet_address: 'wallet_address',
    timestamp: 'timestamp'
  };

  export type Project_logsScalarFieldEnum = (typeof Project_logsScalarFieldEnum)[keyof typeof Project_logsScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    project_id: 'project_id',
    title: 'title',
    description: 'description',
    amount: 'amount',
    status: 'status',
    client_public_key: 'client_public_key',
    developer_public_key: 'developer_public_key',
    contract_address: 'contract_address',
    created_at: 'created_at'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const TasksScalarFieldEnum: {
    task_id: 'task_id',
    project_id: 'project_id',
    description: 'description',
    completed_by_dev: 'completed_by_dev',
    confirmed_by_client: 'confirmed_by_client'
  };

  export type TasksScalarFieldEnum = (typeof TasksScalarFieldEnum)[keyof typeof TasksScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    public_key: 'public_key',
    rol: 'rol',
    user_name: 'user_name'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type project_logsWhereInput = {
    AND?: project_logsWhereInput | project_logsWhereInput[]
    OR?: project_logsWhereInput[]
    NOT?: project_logsWhereInput | project_logsWhereInput[]
    project_log_id?: IntFilter<"project_logs"> | number
    project_id?: IntNullableFilter<"project_logs"> | number | null
    public_key?: StringNullableFilter<"project_logs"> | string | null
    action?: StringFilter<"project_logs"> | string
    wallet_address?: StringNullableFilter<"project_logs"> | string | null
    timestamp?: DateTimeNullableFilter<"project_logs"> | Date | string | null
    projects?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type project_logsOrderByWithRelationInput = {
    project_log_id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    public_key?: SortOrderInput | SortOrder
    action?: SortOrder
    wallet_address?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    projects?: projectsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type project_logsWhereUniqueInput = Prisma.AtLeast<{
    project_log_id?: number
    AND?: project_logsWhereInput | project_logsWhereInput[]
    OR?: project_logsWhereInput[]
    NOT?: project_logsWhereInput | project_logsWhereInput[]
    project_id?: IntNullableFilter<"project_logs"> | number | null
    public_key?: StringNullableFilter<"project_logs"> | string | null
    action?: StringFilter<"project_logs"> | string
    wallet_address?: StringNullableFilter<"project_logs"> | string | null
    timestamp?: DateTimeNullableFilter<"project_logs"> | Date | string | null
    projects?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "project_log_id">

  export type project_logsOrderByWithAggregationInput = {
    project_log_id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    public_key?: SortOrderInput | SortOrder
    action?: SortOrder
    wallet_address?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    _count?: project_logsCountOrderByAggregateInput
    _avg?: project_logsAvgOrderByAggregateInput
    _max?: project_logsMaxOrderByAggregateInput
    _min?: project_logsMinOrderByAggregateInput
    _sum?: project_logsSumOrderByAggregateInput
  }

  export type project_logsScalarWhereWithAggregatesInput = {
    AND?: project_logsScalarWhereWithAggregatesInput | project_logsScalarWhereWithAggregatesInput[]
    OR?: project_logsScalarWhereWithAggregatesInput[]
    NOT?: project_logsScalarWhereWithAggregatesInput | project_logsScalarWhereWithAggregatesInput[]
    project_log_id?: IntWithAggregatesFilter<"project_logs"> | number
    project_id?: IntNullableWithAggregatesFilter<"project_logs"> | number | null
    public_key?: StringNullableWithAggregatesFilter<"project_logs"> | string | null
    action?: StringWithAggregatesFilter<"project_logs"> | string
    wallet_address?: StringNullableWithAggregatesFilter<"project_logs"> | string | null
    timestamp?: DateTimeNullableWithAggregatesFilter<"project_logs"> | Date | string | null
  }

  export type projectsWhereInput = {
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    project_id?: IntFilter<"projects"> | number
    title?: StringFilter<"projects"> | string
    description?: StringNullableFilter<"projects"> | string | null
    amount?: DecimalFilter<"projects"> | Decimal | DecimalJsLike | number | string
    status?: StringNullableFilter<"projects"> | string | null
    client_public_key?: StringNullableFilter<"projects"> | string | null
    developer_public_key?: StringNullableFilter<"projects"> | string | null
    contract_address?: StringNullableFilter<"projects"> | string | null
    created_at?: DateTimeNullableFilter<"projects"> | Date | string | null
    project_logs?: Project_logsListRelationFilter
    users_projects_client_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_projects_developer_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    tasks?: TasksListRelationFilter
  }

  export type projectsOrderByWithRelationInput = {
    project_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrderInput | SortOrder
    client_public_key?: SortOrderInput | SortOrder
    developer_public_key?: SortOrderInput | SortOrder
    contract_address?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    project_logs?: project_logsOrderByRelationAggregateInput
    users_projects_client_idTousers?: usersOrderByWithRelationInput
    users_projects_developer_idTousers?: usersOrderByWithRelationInput
    tasks?: tasksOrderByRelationAggregateInput
  }

  export type projectsWhereUniqueInput = Prisma.AtLeast<{
    project_id?: number
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    title?: StringFilter<"projects"> | string
    description?: StringNullableFilter<"projects"> | string | null
    amount?: DecimalFilter<"projects"> | Decimal | DecimalJsLike | number | string
    status?: StringNullableFilter<"projects"> | string | null
    client_public_key?: StringNullableFilter<"projects"> | string | null
    developer_public_key?: StringNullableFilter<"projects"> | string | null
    contract_address?: StringNullableFilter<"projects"> | string | null
    created_at?: DateTimeNullableFilter<"projects"> | Date | string | null
    project_logs?: Project_logsListRelationFilter
    users_projects_client_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_projects_developer_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    tasks?: TasksListRelationFilter
  }, "project_id">

  export type projectsOrderByWithAggregationInput = {
    project_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrderInput | SortOrder
    client_public_key?: SortOrderInput | SortOrder
    developer_public_key?: SortOrderInput | SortOrder
    contract_address?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: projectsCountOrderByAggregateInput
    _avg?: projectsAvgOrderByAggregateInput
    _max?: projectsMaxOrderByAggregateInput
    _min?: projectsMinOrderByAggregateInput
    _sum?: projectsSumOrderByAggregateInput
  }

  export type projectsScalarWhereWithAggregatesInput = {
    AND?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    OR?: projectsScalarWhereWithAggregatesInput[]
    NOT?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    project_id?: IntWithAggregatesFilter<"projects"> | number
    title?: StringWithAggregatesFilter<"projects"> | string
    description?: StringNullableWithAggregatesFilter<"projects"> | string | null
    amount?: DecimalWithAggregatesFilter<"projects"> | Decimal | DecimalJsLike | number | string
    status?: StringNullableWithAggregatesFilter<"projects"> | string | null
    client_public_key?: StringNullableWithAggregatesFilter<"projects"> | string | null
    developer_public_key?: StringNullableWithAggregatesFilter<"projects"> | string | null
    contract_address?: StringNullableWithAggregatesFilter<"projects"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"projects"> | Date | string | null
  }

  export type tasksWhereInput = {
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    task_id?: IntFilter<"tasks"> | number
    project_id?: IntNullableFilter<"tasks"> | number | null
    description?: StringFilter<"tasks"> | string
    completed_by_dev?: BoolNullableFilter<"tasks"> | boolean | null
    confirmed_by_client?: BoolNullableFilter<"tasks"> | boolean | null
    projects?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
  }

  export type tasksOrderByWithRelationInput = {
    task_id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    description?: SortOrder
    completed_by_dev?: SortOrderInput | SortOrder
    confirmed_by_client?: SortOrderInput | SortOrder
    projects?: projectsOrderByWithRelationInput
  }

  export type tasksWhereUniqueInput = Prisma.AtLeast<{
    task_id?: number
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    project_id?: IntNullableFilter<"tasks"> | number | null
    description?: StringFilter<"tasks"> | string
    completed_by_dev?: BoolNullableFilter<"tasks"> | boolean | null
    confirmed_by_client?: BoolNullableFilter<"tasks"> | boolean | null
    projects?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
  }, "task_id">

  export type tasksOrderByWithAggregationInput = {
    task_id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    description?: SortOrder
    completed_by_dev?: SortOrderInput | SortOrder
    confirmed_by_client?: SortOrderInput | SortOrder
    _count?: tasksCountOrderByAggregateInput
    _avg?: tasksAvgOrderByAggregateInput
    _max?: tasksMaxOrderByAggregateInput
    _min?: tasksMinOrderByAggregateInput
    _sum?: tasksSumOrderByAggregateInput
  }

  export type tasksScalarWhereWithAggregatesInput = {
    AND?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    OR?: tasksScalarWhereWithAggregatesInput[]
    NOT?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    task_id?: IntWithAggregatesFilter<"tasks"> | number
    project_id?: IntNullableWithAggregatesFilter<"tasks"> | number | null
    description?: StringWithAggregatesFilter<"tasks"> | string
    completed_by_dev?: BoolNullableWithAggregatesFilter<"tasks"> | boolean | null
    confirmed_by_client?: BoolNullableWithAggregatesFilter<"tasks"> | boolean | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    public_key?: StringFilter<"users"> | string
    rol?: StringFilter<"users"> | string
    user_name?: StringFilter<"users"> | string
    project_logs?: Project_logsListRelationFilter
    projects_projects_client_idTousers?: ProjectsListRelationFilter
    projects_projects_developer_idTousers?: ProjectsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    public_key?: SortOrder
    rol?: SortOrder
    user_name?: SortOrder
    project_logs?: project_logsOrderByRelationAggregateInput
    projects_projects_client_idTousers?: projectsOrderByRelationAggregateInput
    projects_projects_developer_idTousers?: projectsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    public_key?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    rol?: StringFilter<"users"> | string
    user_name?: StringFilter<"users"> | string
    project_logs?: Project_logsListRelationFilter
    projects_projects_client_idTousers?: ProjectsListRelationFilter
    projects_projects_developer_idTousers?: ProjectsListRelationFilter
  }, "public_key">

  export type usersOrderByWithAggregationInput = {
    public_key?: SortOrder
    rol?: SortOrder
    user_name?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    public_key?: StringWithAggregatesFilter<"users"> | string
    rol?: StringWithAggregatesFilter<"users"> | string
    user_name?: StringWithAggregatesFilter<"users"> | string
  }

  export type project_logsCreateInput = {
    action: string
    wallet_address?: string | null
    timestamp?: Date | string | null
    projects?: projectsCreateNestedOneWithoutProject_logsInput
    users?: usersCreateNestedOneWithoutProject_logsInput
  }

  export type project_logsUncheckedCreateInput = {
    project_log_id?: number
    project_id?: number | null
    public_key?: string | null
    action: string
    wallet_address?: string | null
    timestamp?: Date | string | null
  }

  export type project_logsUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    wallet_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: projectsUpdateOneWithoutProject_logsNestedInput
    users?: usersUpdateOneWithoutProject_logsNestedInput
  }

  export type project_logsUncheckedUpdateInput = {
    project_log_id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    public_key?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    wallet_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type project_logsCreateManyInput = {
    project_log_id?: number
    project_id?: number | null
    public_key?: string | null
    action: string
    wallet_address?: string | null
    timestamp?: Date | string | null
  }

  export type project_logsUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    wallet_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type project_logsUncheckedUpdateManyInput = {
    project_log_id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    public_key?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    wallet_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectsCreateInput = {
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    contract_address?: string | null
    created_at?: Date | string | null
    project_logs?: project_logsCreateNestedManyWithoutProjectsInput
    users_projects_client_idTousers?: usersCreateNestedOneWithoutProjects_projects_client_idTousersInput
    users_projects_developer_idTousers?: usersCreateNestedOneWithoutProjects_projects_developer_idTousersInput
    tasks?: tasksCreateNestedManyWithoutProjectsInput
  }

  export type projectsUncheckedCreateInput = {
    project_id?: number
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    client_public_key?: string | null
    developer_public_key?: string | null
    contract_address?: string | null
    created_at?: Date | string | null
    project_logs?: project_logsUncheckedCreateNestedManyWithoutProjectsInput
    tasks?: tasksUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_logs?: project_logsUpdateManyWithoutProjectsNestedInput
    users_projects_client_idTousers?: usersUpdateOneWithoutProjects_projects_client_idTousersNestedInput
    users_projects_developer_idTousers?: usersUpdateOneWithoutProjects_projects_developer_idTousersNestedInput
    tasks?: tasksUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    client_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    developer_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_logs?: project_logsUncheckedUpdateManyWithoutProjectsNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type projectsCreateManyInput = {
    project_id?: number
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    client_public_key?: string | null
    developer_public_key?: string | null
    contract_address?: string | null
    created_at?: Date | string | null
  }

  export type projectsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectsUncheckedUpdateManyInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    client_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    developer_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksCreateInput = {
    description: string
    completed_by_dev?: boolean | null
    confirmed_by_client?: boolean | null
    projects?: projectsCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateInput = {
    task_id?: number
    project_id?: number | null
    description: string
    completed_by_dev?: boolean | null
    confirmed_by_client?: boolean | null
  }

  export type tasksUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    completed_by_dev?: NullableBoolFieldUpdateOperationsInput | boolean | null
    confirmed_by_client?: NullableBoolFieldUpdateOperationsInput | boolean | null
    projects?: projectsUpdateOneWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    completed_by_dev?: NullableBoolFieldUpdateOperationsInput | boolean | null
    confirmed_by_client?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tasksCreateManyInput = {
    task_id?: number
    project_id?: number | null
    description: string
    completed_by_dev?: boolean | null
    confirmed_by_client?: boolean | null
  }

  export type tasksUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    completed_by_dev?: NullableBoolFieldUpdateOperationsInput | boolean | null
    confirmed_by_client?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tasksUncheckedUpdateManyInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    completed_by_dev?: NullableBoolFieldUpdateOperationsInput | boolean | null
    confirmed_by_client?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usersCreateInput = {
    public_key: string
    rol: string
    user_name: string
    project_logs?: project_logsCreateNestedManyWithoutUsersInput
    projects_projects_client_idTousers?: projectsCreateNestedManyWithoutUsers_projects_client_idTousersInput
    projects_projects_developer_idTousers?: projectsCreateNestedManyWithoutUsers_projects_developer_idTousersInput
  }

  export type usersUncheckedCreateInput = {
    public_key: string
    rol: string
    user_name: string
    project_logs?: project_logsUncheckedCreateNestedManyWithoutUsersInput
    projects_projects_client_idTousers?: projectsUncheckedCreateNestedManyWithoutUsers_projects_client_idTousersInput
    projects_projects_developer_idTousers?: projectsUncheckedCreateNestedManyWithoutUsers_projects_developer_idTousersInput
  }

  export type usersUpdateInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    project_logs?: project_logsUpdateManyWithoutUsersNestedInput
    projects_projects_client_idTousers?: projectsUpdateManyWithoutUsers_projects_client_idTousersNestedInput
    projects_projects_developer_idTousers?: projectsUpdateManyWithoutUsers_projects_developer_idTousersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    project_logs?: project_logsUncheckedUpdateManyWithoutUsersNestedInput
    projects_projects_client_idTousers?: projectsUncheckedUpdateManyWithoutUsers_projects_client_idTousersNestedInput
    projects_projects_developer_idTousers?: projectsUncheckedUpdateManyWithoutUsers_projects_developer_idTousersNestedInput
  }

  export type usersCreateManyInput = {
    public_key: string
    rol: string
    user_name: string
  }

  export type usersUpdateManyMutationInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProjectsNullableScalarRelationFilter = {
    is?: projectsWhereInput | null
    isNot?: projectsWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type project_logsCountOrderByAggregateInput = {
    project_log_id?: SortOrder
    project_id?: SortOrder
    public_key?: SortOrder
    action?: SortOrder
    wallet_address?: SortOrder
    timestamp?: SortOrder
  }

  export type project_logsAvgOrderByAggregateInput = {
    project_log_id?: SortOrder
    project_id?: SortOrder
  }

  export type project_logsMaxOrderByAggregateInput = {
    project_log_id?: SortOrder
    project_id?: SortOrder
    public_key?: SortOrder
    action?: SortOrder
    wallet_address?: SortOrder
    timestamp?: SortOrder
  }

  export type project_logsMinOrderByAggregateInput = {
    project_log_id?: SortOrder
    project_id?: SortOrder
    public_key?: SortOrder
    action?: SortOrder
    wallet_address?: SortOrder
    timestamp?: SortOrder
  }

  export type project_logsSumOrderByAggregateInput = {
    project_log_id?: SortOrder
    project_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Project_logsListRelationFilter = {
    every?: project_logsWhereInput
    some?: project_logsWhereInput
    none?: project_logsWhereInput
  }

  export type TasksListRelationFilter = {
    every?: tasksWhereInput
    some?: tasksWhereInput
    none?: tasksWhereInput
  }

  export type project_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectsCountOrderByAggregateInput = {
    project_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    client_public_key?: SortOrder
    developer_public_key?: SortOrder
    contract_address?: SortOrder
    created_at?: SortOrder
  }

  export type projectsAvgOrderByAggregateInput = {
    project_id?: SortOrder
    amount?: SortOrder
  }

  export type projectsMaxOrderByAggregateInput = {
    project_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    client_public_key?: SortOrder
    developer_public_key?: SortOrder
    contract_address?: SortOrder
    created_at?: SortOrder
  }

  export type projectsMinOrderByAggregateInput = {
    project_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    client_public_key?: SortOrder
    developer_public_key?: SortOrder
    contract_address?: SortOrder
    created_at?: SortOrder
  }

  export type projectsSumOrderByAggregateInput = {
    project_id?: SortOrder
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type tasksCountOrderByAggregateInput = {
    task_id?: SortOrder
    project_id?: SortOrder
    description?: SortOrder
    completed_by_dev?: SortOrder
    confirmed_by_client?: SortOrder
  }

  export type tasksAvgOrderByAggregateInput = {
    task_id?: SortOrder
    project_id?: SortOrder
  }

  export type tasksMaxOrderByAggregateInput = {
    task_id?: SortOrder
    project_id?: SortOrder
    description?: SortOrder
    completed_by_dev?: SortOrder
    confirmed_by_client?: SortOrder
  }

  export type tasksMinOrderByAggregateInput = {
    task_id?: SortOrder
    project_id?: SortOrder
    description?: SortOrder
    completed_by_dev?: SortOrder
    confirmed_by_client?: SortOrder
  }

  export type tasksSumOrderByAggregateInput = {
    task_id?: SortOrder
    project_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ProjectsListRelationFilter = {
    every?: projectsWhereInput
    some?: projectsWhereInput
    none?: projectsWhereInput
  }

  export type projectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    public_key?: SortOrder
    rol?: SortOrder
    user_name?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    public_key?: SortOrder
    rol?: SortOrder
    user_name?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    public_key?: SortOrder
    rol?: SortOrder
    user_name?: SortOrder
  }

  export type projectsCreateNestedOneWithoutProject_logsInput = {
    create?: XOR<projectsCreateWithoutProject_logsInput, projectsUncheckedCreateWithoutProject_logsInput>
    connectOrCreate?: projectsCreateOrConnectWithoutProject_logsInput
    connect?: projectsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutProject_logsInput = {
    create?: XOR<usersCreateWithoutProject_logsInput, usersUncheckedCreateWithoutProject_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProject_logsInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type projectsUpdateOneWithoutProject_logsNestedInput = {
    create?: XOR<projectsCreateWithoutProject_logsInput, projectsUncheckedCreateWithoutProject_logsInput>
    connectOrCreate?: projectsCreateOrConnectWithoutProject_logsInput
    upsert?: projectsUpsertWithoutProject_logsInput
    disconnect?: projectsWhereInput | boolean
    delete?: projectsWhereInput | boolean
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutProject_logsInput, projectsUpdateWithoutProject_logsInput>, projectsUncheckedUpdateWithoutProject_logsInput>
  }

  export type usersUpdateOneWithoutProject_logsNestedInput = {
    create?: XOR<usersCreateWithoutProject_logsInput, usersUncheckedCreateWithoutProject_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProject_logsInput
    upsert?: usersUpsertWithoutProject_logsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProject_logsInput, usersUpdateWithoutProject_logsInput>, usersUncheckedUpdateWithoutProject_logsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type project_logsCreateNestedManyWithoutProjectsInput = {
    create?: XOR<project_logsCreateWithoutProjectsInput, project_logsUncheckedCreateWithoutProjectsInput> | project_logsCreateWithoutProjectsInput[] | project_logsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_logsCreateOrConnectWithoutProjectsInput | project_logsCreateOrConnectWithoutProjectsInput[]
    createMany?: project_logsCreateManyProjectsInputEnvelope
    connect?: project_logsWhereUniqueInput | project_logsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutProjects_projects_client_idTousersInput = {
    create?: XOR<usersCreateWithoutProjects_projects_client_idTousersInput, usersUncheckedCreateWithoutProjects_projects_client_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjects_projects_client_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutProjects_projects_developer_idTousersInput = {
    create?: XOR<usersCreateWithoutProjects_projects_developer_idTousersInput, usersUncheckedCreateWithoutProjects_projects_developer_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjects_projects_developer_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type tasksCreateNestedManyWithoutProjectsInput = {
    create?: XOR<tasksCreateWithoutProjectsInput, tasksUncheckedCreateWithoutProjectsInput> | tasksCreateWithoutProjectsInput[] | tasksUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutProjectsInput | tasksCreateOrConnectWithoutProjectsInput[]
    createMany?: tasksCreateManyProjectsInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type project_logsUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<project_logsCreateWithoutProjectsInput, project_logsUncheckedCreateWithoutProjectsInput> | project_logsCreateWithoutProjectsInput[] | project_logsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_logsCreateOrConnectWithoutProjectsInput | project_logsCreateOrConnectWithoutProjectsInput[]
    createMany?: project_logsCreateManyProjectsInputEnvelope
    connect?: project_logsWhereUniqueInput | project_logsWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<tasksCreateWithoutProjectsInput, tasksUncheckedCreateWithoutProjectsInput> | tasksCreateWithoutProjectsInput[] | tasksUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutProjectsInput | tasksCreateOrConnectWithoutProjectsInput[]
    createMany?: tasksCreateManyProjectsInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type project_logsUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<project_logsCreateWithoutProjectsInput, project_logsUncheckedCreateWithoutProjectsInput> | project_logsCreateWithoutProjectsInput[] | project_logsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_logsCreateOrConnectWithoutProjectsInput | project_logsCreateOrConnectWithoutProjectsInput[]
    upsert?: project_logsUpsertWithWhereUniqueWithoutProjectsInput | project_logsUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: project_logsCreateManyProjectsInputEnvelope
    set?: project_logsWhereUniqueInput | project_logsWhereUniqueInput[]
    disconnect?: project_logsWhereUniqueInput | project_logsWhereUniqueInput[]
    delete?: project_logsWhereUniqueInput | project_logsWhereUniqueInput[]
    connect?: project_logsWhereUniqueInput | project_logsWhereUniqueInput[]
    update?: project_logsUpdateWithWhereUniqueWithoutProjectsInput | project_logsUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: project_logsUpdateManyWithWhereWithoutProjectsInput | project_logsUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: project_logsScalarWhereInput | project_logsScalarWhereInput[]
  }

  export type usersUpdateOneWithoutProjects_projects_client_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutProjects_projects_client_idTousersInput, usersUncheckedCreateWithoutProjects_projects_client_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjects_projects_client_idTousersInput
    upsert?: usersUpsertWithoutProjects_projects_client_idTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProjects_projects_client_idTousersInput, usersUpdateWithoutProjects_projects_client_idTousersInput>, usersUncheckedUpdateWithoutProjects_projects_client_idTousersInput>
  }

  export type usersUpdateOneWithoutProjects_projects_developer_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutProjects_projects_developer_idTousersInput, usersUncheckedCreateWithoutProjects_projects_developer_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjects_projects_developer_idTousersInput
    upsert?: usersUpsertWithoutProjects_projects_developer_idTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProjects_projects_developer_idTousersInput, usersUpdateWithoutProjects_projects_developer_idTousersInput>, usersUncheckedUpdateWithoutProjects_projects_developer_idTousersInput>
  }

  export type tasksUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<tasksCreateWithoutProjectsInput, tasksUncheckedCreateWithoutProjectsInput> | tasksCreateWithoutProjectsInput[] | tasksUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutProjectsInput | tasksCreateOrConnectWithoutProjectsInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutProjectsInput | tasksUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: tasksCreateManyProjectsInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutProjectsInput | tasksUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutProjectsInput | tasksUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type project_logsUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<project_logsCreateWithoutProjectsInput, project_logsUncheckedCreateWithoutProjectsInput> | project_logsCreateWithoutProjectsInput[] | project_logsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_logsCreateOrConnectWithoutProjectsInput | project_logsCreateOrConnectWithoutProjectsInput[]
    upsert?: project_logsUpsertWithWhereUniqueWithoutProjectsInput | project_logsUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: project_logsCreateManyProjectsInputEnvelope
    set?: project_logsWhereUniqueInput | project_logsWhereUniqueInput[]
    disconnect?: project_logsWhereUniqueInput | project_logsWhereUniqueInput[]
    delete?: project_logsWhereUniqueInput | project_logsWhereUniqueInput[]
    connect?: project_logsWhereUniqueInput | project_logsWhereUniqueInput[]
    update?: project_logsUpdateWithWhereUniqueWithoutProjectsInput | project_logsUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: project_logsUpdateManyWithWhereWithoutProjectsInput | project_logsUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: project_logsScalarWhereInput | project_logsScalarWhereInput[]
  }

  export type tasksUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<tasksCreateWithoutProjectsInput, tasksUncheckedCreateWithoutProjectsInput> | tasksCreateWithoutProjectsInput[] | tasksUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutProjectsInput | tasksCreateOrConnectWithoutProjectsInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutProjectsInput | tasksUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: tasksCreateManyProjectsInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutProjectsInput | tasksUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutProjectsInput | tasksUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type projectsCreateNestedOneWithoutTasksInput = {
    create?: XOR<projectsCreateWithoutTasksInput, projectsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: projectsCreateOrConnectWithoutTasksInput
    connect?: projectsWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type projectsUpdateOneWithoutTasksNestedInput = {
    create?: XOR<projectsCreateWithoutTasksInput, projectsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: projectsCreateOrConnectWithoutTasksInput
    upsert?: projectsUpsertWithoutTasksInput
    disconnect?: projectsWhereInput | boolean
    delete?: projectsWhereInput | boolean
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutTasksInput, projectsUpdateWithoutTasksInput>, projectsUncheckedUpdateWithoutTasksInput>
  }

  export type project_logsCreateNestedManyWithoutUsersInput = {
    create?: XOR<project_logsCreateWithoutUsersInput, project_logsUncheckedCreateWithoutUsersInput> | project_logsCreateWithoutUsersInput[] | project_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: project_logsCreateOrConnectWithoutUsersInput | project_logsCreateOrConnectWithoutUsersInput[]
    createMany?: project_logsCreateManyUsersInputEnvelope
    connect?: project_logsWhereUniqueInput | project_logsWhereUniqueInput[]
  }

  export type projectsCreateNestedManyWithoutUsers_projects_client_idTousersInput = {
    create?: XOR<projectsCreateWithoutUsers_projects_client_idTousersInput, projectsUncheckedCreateWithoutUsers_projects_client_idTousersInput> | projectsCreateWithoutUsers_projects_client_idTousersInput[] | projectsUncheckedCreateWithoutUsers_projects_client_idTousersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsers_projects_client_idTousersInput | projectsCreateOrConnectWithoutUsers_projects_client_idTousersInput[]
    createMany?: projectsCreateManyUsers_projects_client_idTousersInputEnvelope
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
  }

  export type projectsCreateNestedManyWithoutUsers_projects_developer_idTousersInput = {
    create?: XOR<projectsCreateWithoutUsers_projects_developer_idTousersInput, projectsUncheckedCreateWithoutUsers_projects_developer_idTousersInput> | projectsCreateWithoutUsers_projects_developer_idTousersInput[] | projectsUncheckedCreateWithoutUsers_projects_developer_idTousersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsers_projects_developer_idTousersInput | projectsCreateOrConnectWithoutUsers_projects_developer_idTousersInput[]
    createMany?: projectsCreateManyUsers_projects_developer_idTousersInputEnvelope
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
  }

  export type project_logsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<project_logsCreateWithoutUsersInput, project_logsUncheckedCreateWithoutUsersInput> | project_logsCreateWithoutUsersInput[] | project_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: project_logsCreateOrConnectWithoutUsersInput | project_logsCreateOrConnectWithoutUsersInput[]
    createMany?: project_logsCreateManyUsersInputEnvelope
    connect?: project_logsWhereUniqueInput | project_logsWhereUniqueInput[]
  }

  export type projectsUncheckedCreateNestedManyWithoutUsers_projects_client_idTousersInput = {
    create?: XOR<projectsCreateWithoutUsers_projects_client_idTousersInput, projectsUncheckedCreateWithoutUsers_projects_client_idTousersInput> | projectsCreateWithoutUsers_projects_client_idTousersInput[] | projectsUncheckedCreateWithoutUsers_projects_client_idTousersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsers_projects_client_idTousersInput | projectsCreateOrConnectWithoutUsers_projects_client_idTousersInput[]
    createMany?: projectsCreateManyUsers_projects_client_idTousersInputEnvelope
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
  }

  export type projectsUncheckedCreateNestedManyWithoutUsers_projects_developer_idTousersInput = {
    create?: XOR<projectsCreateWithoutUsers_projects_developer_idTousersInput, projectsUncheckedCreateWithoutUsers_projects_developer_idTousersInput> | projectsCreateWithoutUsers_projects_developer_idTousersInput[] | projectsUncheckedCreateWithoutUsers_projects_developer_idTousersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsers_projects_developer_idTousersInput | projectsCreateOrConnectWithoutUsers_projects_developer_idTousersInput[]
    createMany?: projectsCreateManyUsers_projects_developer_idTousersInputEnvelope
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
  }

  export type project_logsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<project_logsCreateWithoutUsersInput, project_logsUncheckedCreateWithoutUsersInput> | project_logsCreateWithoutUsersInput[] | project_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: project_logsCreateOrConnectWithoutUsersInput | project_logsCreateOrConnectWithoutUsersInput[]
    upsert?: project_logsUpsertWithWhereUniqueWithoutUsersInput | project_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: project_logsCreateManyUsersInputEnvelope
    set?: project_logsWhereUniqueInput | project_logsWhereUniqueInput[]
    disconnect?: project_logsWhereUniqueInput | project_logsWhereUniqueInput[]
    delete?: project_logsWhereUniqueInput | project_logsWhereUniqueInput[]
    connect?: project_logsWhereUniqueInput | project_logsWhereUniqueInput[]
    update?: project_logsUpdateWithWhereUniqueWithoutUsersInput | project_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: project_logsUpdateManyWithWhereWithoutUsersInput | project_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: project_logsScalarWhereInput | project_logsScalarWhereInput[]
  }

  export type projectsUpdateManyWithoutUsers_projects_client_idTousersNestedInput = {
    create?: XOR<projectsCreateWithoutUsers_projects_client_idTousersInput, projectsUncheckedCreateWithoutUsers_projects_client_idTousersInput> | projectsCreateWithoutUsers_projects_client_idTousersInput[] | projectsUncheckedCreateWithoutUsers_projects_client_idTousersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsers_projects_client_idTousersInput | projectsCreateOrConnectWithoutUsers_projects_client_idTousersInput[]
    upsert?: projectsUpsertWithWhereUniqueWithoutUsers_projects_client_idTousersInput | projectsUpsertWithWhereUniqueWithoutUsers_projects_client_idTousersInput[]
    createMany?: projectsCreateManyUsers_projects_client_idTousersInputEnvelope
    set?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    disconnect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    delete?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    update?: projectsUpdateWithWhereUniqueWithoutUsers_projects_client_idTousersInput | projectsUpdateWithWhereUniqueWithoutUsers_projects_client_idTousersInput[]
    updateMany?: projectsUpdateManyWithWhereWithoutUsers_projects_client_idTousersInput | projectsUpdateManyWithWhereWithoutUsers_projects_client_idTousersInput[]
    deleteMany?: projectsScalarWhereInput | projectsScalarWhereInput[]
  }

  export type projectsUpdateManyWithoutUsers_projects_developer_idTousersNestedInput = {
    create?: XOR<projectsCreateWithoutUsers_projects_developer_idTousersInput, projectsUncheckedCreateWithoutUsers_projects_developer_idTousersInput> | projectsCreateWithoutUsers_projects_developer_idTousersInput[] | projectsUncheckedCreateWithoutUsers_projects_developer_idTousersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsers_projects_developer_idTousersInput | projectsCreateOrConnectWithoutUsers_projects_developer_idTousersInput[]
    upsert?: projectsUpsertWithWhereUniqueWithoutUsers_projects_developer_idTousersInput | projectsUpsertWithWhereUniqueWithoutUsers_projects_developer_idTousersInput[]
    createMany?: projectsCreateManyUsers_projects_developer_idTousersInputEnvelope
    set?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    disconnect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    delete?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    update?: projectsUpdateWithWhereUniqueWithoutUsers_projects_developer_idTousersInput | projectsUpdateWithWhereUniqueWithoutUsers_projects_developer_idTousersInput[]
    updateMany?: projectsUpdateManyWithWhereWithoutUsers_projects_developer_idTousersInput | projectsUpdateManyWithWhereWithoutUsers_projects_developer_idTousersInput[]
    deleteMany?: projectsScalarWhereInput | projectsScalarWhereInput[]
  }

  export type project_logsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<project_logsCreateWithoutUsersInput, project_logsUncheckedCreateWithoutUsersInput> | project_logsCreateWithoutUsersInput[] | project_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: project_logsCreateOrConnectWithoutUsersInput | project_logsCreateOrConnectWithoutUsersInput[]
    upsert?: project_logsUpsertWithWhereUniqueWithoutUsersInput | project_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: project_logsCreateManyUsersInputEnvelope
    set?: project_logsWhereUniqueInput | project_logsWhereUniqueInput[]
    disconnect?: project_logsWhereUniqueInput | project_logsWhereUniqueInput[]
    delete?: project_logsWhereUniqueInput | project_logsWhereUniqueInput[]
    connect?: project_logsWhereUniqueInput | project_logsWhereUniqueInput[]
    update?: project_logsUpdateWithWhereUniqueWithoutUsersInput | project_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: project_logsUpdateManyWithWhereWithoutUsersInput | project_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: project_logsScalarWhereInput | project_logsScalarWhereInput[]
  }

  export type projectsUncheckedUpdateManyWithoutUsers_projects_client_idTousersNestedInput = {
    create?: XOR<projectsCreateWithoutUsers_projects_client_idTousersInput, projectsUncheckedCreateWithoutUsers_projects_client_idTousersInput> | projectsCreateWithoutUsers_projects_client_idTousersInput[] | projectsUncheckedCreateWithoutUsers_projects_client_idTousersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsers_projects_client_idTousersInput | projectsCreateOrConnectWithoutUsers_projects_client_idTousersInput[]
    upsert?: projectsUpsertWithWhereUniqueWithoutUsers_projects_client_idTousersInput | projectsUpsertWithWhereUniqueWithoutUsers_projects_client_idTousersInput[]
    createMany?: projectsCreateManyUsers_projects_client_idTousersInputEnvelope
    set?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    disconnect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    delete?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    update?: projectsUpdateWithWhereUniqueWithoutUsers_projects_client_idTousersInput | projectsUpdateWithWhereUniqueWithoutUsers_projects_client_idTousersInput[]
    updateMany?: projectsUpdateManyWithWhereWithoutUsers_projects_client_idTousersInput | projectsUpdateManyWithWhereWithoutUsers_projects_client_idTousersInput[]
    deleteMany?: projectsScalarWhereInput | projectsScalarWhereInput[]
  }

  export type projectsUncheckedUpdateManyWithoutUsers_projects_developer_idTousersNestedInput = {
    create?: XOR<projectsCreateWithoutUsers_projects_developer_idTousersInput, projectsUncheckedCreateWithoutUsers_projects_developer_idTousersInput> | projectsCreateWithoutUsers_projects_developer_idTousersInput[] | projectsUncheckedCreateWithoutUsers_projects_developer_idTousersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsers_projects_developer_idTousersInput | projectsCreateOrConnectWithoutUsers_projects_developer_idTousersInput[]
    upsert?: projectsUpsertWithWhereUniqueWithoutUsers_projects_developer_idTousersInput | projectsUpsertWithWhereUniqueWithoutUsers_projects_developer_idTousersInput[]
    createMany?: projectsCreateManyUsers_projects_developer_idTousersInputEnvelope
    set?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    disconnect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    delete?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    update?: projectsUpdateWithWhereUniqueWithoutUsers_projects_developer_idTousersInput | projectsUpdateWithWhereUniqueWithoutUsers_projects_developer_idTousersInput[]
    updateMany?: projectsUpdateManyWithWhereWithoutUsers_projects_developer_idTousersInput | projectsUpdateManyWithWhereWithoutUsers_projects_developer_idTousersInput[]
    deleteMany?: projectsScalarWhereInput | projectsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type projectsCreateWithoutProject_logsInput = {
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    contract_address?: string | null
    created_at?: Date | string | null
    users_projects_client_idTousers?: usersCreateNestedOneWithoutProjects_projects_client_idTousersInput
    users_projects_developer_idTousers?: usersCreateNestedOneWithoutProjects_projects_developer_idTousersInput
    tasks?: tasksCreateNestedManyWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutProject_logsInput = {
    project_id?: number
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    client_public_key?: string | null
    developer_public_key?: string | null
    contract_address?: string | null
    created_at?: Date | string | null
    tasks?: tasksUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutProject_logsInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutProject_logsInput, projectsUncheckedCreateWithoutProject_logsInput>
  }

  export type usersCreateWithoutProject_logsInput = {
    public_key: string
    rol: string
    user_name: string
    projects_projects_client_idTousers?: projectsCreateNestedManyWithoutUsers_projects_client_idTousersInput
    projects_projects_developer_idTousers?: projectsCreateNestedManyWithoutUsers_projects_developer_idTousersInput
  }

  export type usersUncheckedCreateWithoutProject_logsInput = {
    public_key: string
    rol: string
    user_name: string
    projects_projects_client_idTousers?: projectsUncheckedCreateNestedManyWithoutUsers_projects_client_idTousersInput
    projects_projects_developer_idTousers?: projectsUncheckedCreateNestedManyWithoutUsers_projects_developer_idTousersInput
  }

  export type usersCreateOrConnectWithoutProject_logsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProject_logsInput, usersUncheckedCreateWithoutProject_logsInput>
  }

  export type projectsUpsertWithoutProject_logsInput = {
    update: XOR<projectsUpdateWithoutProject_logsInput, projectsUncheckedUpdateWithoutProject_logsInput>
    create: XOR<projectsCreateWithoutProject_logsInput, projectsUncheckedCreateWithoutProject_logsInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutProject_logsInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutProject_logsInput, projectsUncheckedUpdateWithoutProject_logsInput>
  }

  export type projectsUpdateWithoutProject_logsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_projects_client_idTousers?: usersUpdateOneWithoutProjects_projects_client_idTousersNestedInput
    users_projects_developer_idTousers?: usersUpdateOneWithoutProjects_projects_developer_idTousersNestedInput
    tasks?: tasksUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutProject_logsInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    client_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    developer_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: tasksUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type usersUpsertWithoutProject_logsInput = {
    update: XOR<usersUpdateWithoutProject_logsInput, usersUncheckedUpdateWithoutProject_logsInput>
    create: XOR<usersCreateWithoutProject_logsInput, usersUncheckedCreateWithoutProject_logsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProject_logsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProject_logsInput, usersUncheckedUpdateWithoutProject_logsInput>
  }

  export type usersUpdateWithoutProject_logsInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    projects_projects_client_idTousers?: projectsUpdateManyWithoutUsers_projects_client_idTousersNestedInput
    projects_projects_developer_idTousers?: projectsUpdateManyWithoutUsers_projects_developer_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutProject_logsInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    projects_projects_client_idTousers?: projectsUncheckedUpdateManyWithoutUsers_projects_client_idTousersNestedInput
    projects_projects_developer_idTousers?: projectsUncheckedUpdateManyWithoutUsers_projects_developer_idTousersNestedInput
  }

  export type project_logsCreateWithoutProjectsInput = {
    action: string
    wallet_address?: string | null
    timestamp?: Date | string | null
    users?: usersCreateNestedOneWithoutProject_logsInput
  }

  export type project_logsUncheckedCreateWithoutProjectsInput = {
    project_log_id?: number
    public_key?: string | null
    action: string
    wallet_address?: string | null
    timestamp?: Date | string | null
  }

  export type project_logsCreateOrConnectWithoutProjectsInput = {
    where: project_logsWhereUniqueInput
    create: XOR<project_logsCreateWithoutProjectsInput, project_logsUncheckedCreateWithoutProjectsInput>
  }

  export type project_logsCreateManyProjectsInputEnvelope = {
    data: project_logsCreateManyProjectsInput | project_logsCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutProjects_projects_client_idTousersInput = {
    public_key: string
    rol: string
    user_name: string
    project_logs?: project_logsCreateNestedManyWithoutUsersInput
    projects_projects_developer_idTousers?: projectsCreateNestedManyWithoutUsers_projects_developer_idTousersInput
  }

  export type usersUncheckedCreateWithoutProjects_projects_client_idTousersInput = {
    public_key: string
    rol: string
    user_name: string
    project_logs?: project_logsUncheckedCreateNestedManyWithoutUsersInput
    projects_projects_developer_idTousers?: projectsUncheckedCreateNestedManyWithoutUsers_projects_developer_idTousersInput
  }

  export type usersCreateOrConnectWithoutProjects_projects_client_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProjects_projects_client_idTousersInput, usersUncheckedCreateWithoutProjects_projects_client_idTousersInput>
  }

  export type usersCreateWithoutProjects_projects_developer_idTousersInput = {
    public_key: string
    rol: string
    user_name: string
    project_logs?: project_logsCreateNestedManyWithoutUsersInput
    projects_projects_client_idTousers?: projectsCreateNestedManyWithoutUsers_projects_client_idTousersInput
  }

  export type usersUncheckedCreateWithoutProjects_projects_developer_idTousersInput = {
    public_key: string
    rol: string
    user_name: string
    project_logs?: project_logsUncheckedCreateNestedManyWithoutUsersInput
    projects_projects_client_idTousers?: projectsUncheckedCreateNestedManyWithoutUsers_projects_client_idTousersInput
  }

  export type usersCreateOrConnectWithoutProjects_projects_developer_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProjects_projects_developer_idTousersInput, usersUncheckedCreateWithoutProjects_projects_developer_idTousersInput>
  }

  export type tasksCreateWithoutProjectsInput = {
    description: string
    completed_by_dev?: boolean | null
    confirmed_by_client?: boolean | null
  }

  export type tasksUncheckedCreateWithoutProjectsInput = {
    task_id?: number
    description: string
    completed_by_dev?: boolean | null
    confirmed_by_client?: boolean | null
  }

  export type tasksCreateOrConnectWithoutProjectsInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutProjectsInput, tasksUncheckedCreateWithoutProjectsInput>
  }

  export type tasksCreateManyProjectsInputEnvelope = {
    data: tasksCreateManyProjectsInput | tasksCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type project_logsUpsertWithWhereUniqueWithoutProjectsInput = {
    where: project_logsWhereUniqueInput
    update: XOR<project_logsUpdateWithoutProjectsInput, project_logsUncheckedUpdateWithoutProjectsInput>
    create: XOR<project_logsCreateWithoutProjectsInput, project_logsUncheckedCreateWithoutProjectsInput>
  }

  export type project_logsUpdateWithWhereUniqueWithoutProjectsInput = {
    where: project_logsWhereUniqueInput
    data: XOR<project_logsUpdateWithoutProjectsInput, project_logsUncheckedUpdateWithoutProjectsInput>
  }

  export type project_logsUpdateManyWithWhereWithoutProjectsInput = {
    where: project_logsScalarWhereInput
    data: XOR<project_logsUpdateManyMutationInput, project_logsUncheckedUpdateManyWithoutProjectsInput>
  }

  export type project_logsScalarWhereInput = {
    AND?: project_logsScalarWhereInput | project_logsScalarWhereInput[]
    OR?: project_logsScalarWhereInput[]
    NOT?: project_logsScalarWhereInput | project_logsScalarWhereInput[]
    project_log_id?: IntFilter<"project_logs"> | number
    project_id?: IntNullableFilter<"project_logs"> | number | null
    public_key?: StringNullableFilter<"project_logs"> | string | null
    action?: StringFilter<"project_logs"> | string
    wallet_address?: StringNullableFilter<"project_logs"> | string | null
    timestamp?: DateTimeNullableFilter<"project_logs"> | Date | string | null
  }

  export type usersUpsertWithoutProjects_projects_client_idTousersInput = {
    update: XOR<usersUpdateWithoutProjects_projects_client_idTousersInput, usersUncheckedUpdateWithoutProjects_projects_client_idTousersInput>
    create: XOR<usersCreateWithoutProjects_projects_client_idTousersInput, usersUncheckedCreateWithoutProjects_projects_client_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProjects_projects_client_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProjects_projects_client_idTousersInput, usersUncheckedUpdateWithoutProjects_projects_client_idTousersInput>
  }

  export type usersUpdateWithoutProjects_projects_client_idTousersInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    project_logs?: project_logsUpdateManyWithoutUsersNestedInput
    projects_projects_developer_idTousers?: projectsUpdateManyWithoutUsers_projects_developer_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutProjects_projects_client_idTousersInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    project_logs?: project_logsUncheckedUpdateManyWithoutUsersNestedInput
    projects_projects_developer_idTousers?: projectsUncheckedUpdateManyWithoutUsers_projects_developer_idTousersNestedInput
  }

  export type usersUpsertWithoutProjects_projects_developer_idTousersInput = {
    update: XOR<usersUpdateWithoutProjects_projects_developer_idTousersInput, usersUncheckedUpdateWithoutProjects_projects_developer_idTousersInput>
    create: XOR<usersCreateWithoutProjects_projects_developer_idTousersInput, usersUncheckedCreateWithoutProjects_projects_developer_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProjects_projects_developer_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProjects_projects_developer_idTousersInput, usersUncheckedUpdateWithoutProjects_projects_developer_idTousersInput>
  }

  export type usersUpdateWithoutProjects_projects_developer_idTousersInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    project_logs?: project_logsUpdateManyWithoutUsersNestedInput
    projects_projects_client_idTousers?: projectsUpdateManyWithoutUsers_projects_client_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutProjects_projects_developer_idTousersInput = {
    public_key?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    project_logs?: project_logsUncheckedUpdateManyWithoutUsersNestedInput
    projects_projects_client_idTousers?: projectsUncheckedUpdateManyWithoutUsers_projects_client_idTousersNestedInput
  }

  export type tasksUpsertWithWhereUniqueWithoutProjectsInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutProjectsInput, tasksUncheckedUpdateWithoutProjectsInput>
    create: XOR<tasksCreateWithoutProjectsInput, tasksUncheckedCreateWithoutProjectsInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutProjectsInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutProjectsInput, tasksUncheckedUpdateWithoutProjectsInput>
  }

  export type tasksUpdateManyWithWhereWithoutProjectsInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutProjectsInput>
  }

  export type tasksScalarWhereInput = {
    AND?: tasksScalarWhereInput | tasksScalarWhereInput[]
    OR?: tasksScalarWhereInput[]
    NOT?: tasksScalarWhereInput | tasksScalarWhereInput[]
    task_id?: IntFilter<"tasks"> | number
    project_id?: IntNullableFilter<"tasks"> | number | null
    description?: StringFilter<"tasks"> | string
    completed_by_dev?: BoolNullableFilter<"tasks"> | boolean | null
    confirmed_by_client?: BoolNullableFilter<"tasks"> | boolean | null
  }

  export type projectsCreateWithoutTasksInput = {
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    contract_address?: string | null
    created_at?: Date | string | null
    project_logs?: project_logsCreateNestedManyWithoutProjectsInput
    users_projects_client_idTousers?: usersCreateNestedOneWithoutProjects_projects_client_idTousersInput
    users_projects_developer_idTousers?: usersCreateNestedOneWithoutProjects_projects_developer_idTousersInput
  }

  export type projectsUncheckedCreateWithoutTasksInput = {
    project_id?: number
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    client_public_key?: string | null
    developer_public_key?: string | null
    contract_address?: string | null
    created_at?: Date | string | null
    project_logs?: project_logsUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutTasksInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutTasksInput, projectsUncheckedCreateWithoutTasksInput>
  }

  export type projectsUpsertWithoutTasksInput = {
    update: XOR<projectsUpdateWithoutTasksInput, projectsUncheckedUpdateWithoutTasksInput>
    create: XOR<projectsCreateWithoutTasksInput, projectsUncheckedCreateWithoutTasksInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutTasksInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutTasksInput, projectsUncheckedUpdateWithoutTasksInput>
  }

  export type projectsUpdateWithoutTasksInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_logs?: project_logsUpdateManyWithoutProjectsNestedInput
    users_projects_client_idTousers?: usersUpdateOneWithoutProjects_projects_client_idTousersNestedInput
    users_projects_developer_idTousers?: usersUpdateOneWithoutProjects_projects_developer_idTousersNestedInput
  }

  export type projectsUncheckedUpdateWithoutTasksInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    client_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    developer_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_logs?: project_logsUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type project_logsCreateWithoutUsersInput = {
    action: string
    wallet_address?: string | null
    timestamp?: Date | string | null
    projects?: projectsCreateNestedOneWithoutProject_logsInput
  }

  export type project_logsUncheckedCreateWithoutUsersInput = {
    project_log_id?: number
    project_id?: number | null
    action: string
    wallet_address?: string | null
    timestamp?: Date | string | null
  }

  export type project_logsCreateOrConnectWithoutUsersInput = {
    where: project_logsWhereUniqueInput
    create: XOR<project_logsCreateWithoutUsersInput, project_logsUncheckedCreateWithoutUsersInput>
  }

  export type project_logsCreateManyUsersInputEnvelope = {
    data: project_logsCreateManyUsersInput | project_logsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type projectsCreateWithoutUsers_projects_client_idTousersInput = {
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    contract_address?: string | null
    created_at?: Date | string | null
    project_logs?: project_logsCreateNestedManyWithoutProjectsInput
    users_projects_developer_idTousers?: usersCreateNestedOneWithoutProjects_projects_developer_idTousersInput
    tasks?: tasksCreateNestedManyWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutUsers_projects_client_idTousersInput = {
    project_id?: number
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    developer_public_key?: string | null
    contract_address?: string | null
    created_at?: Date | string | null
    project_logs?: project_logsUncheckedCreateNestedManyWithoutProjectsInput
    tasks?: tasksUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutUsers_projects_client_idTousersInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutUsers_projects_client_idTousersInput, projectsUncheckedCreateWithoutUsers_projects_client_idTousersInput>
  }

  export type projectsCreateManyUsers_projects_client_idTousersInputEnvelope = {
    data: projectsCreateManyUsers_projects_client_idTousersInput | projectsCreateManyUsers_projects_client_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type projectsCreateWithoutUsers_projects_developer_idTousersInput = {
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    contract_address?: string | null
    created_at?: Date | string | null
    project_logs?: project_logsCreateNestedManyWithoutProjectsInput
    users_projects_client_idTousers?: usersCreateNestedOneWithoutProjects_projects_client_idTousersInput
    tasks?: tasksCreateNestedManyWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutUsers_projects_developer_idTousersInput = {
    project_id?: number
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    client_public_key?: string | null
    contract_address?: string | null
    created_at?: Date | string | null
    project_logs?: project_logsUncheckedCreateNestedManyWithoutProjectsInput
    tasks?: tasksUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutUsers_projects_developer_idTousersInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutUsers_projects_developer_idTousersInput, projectsUncheckedCreateWithoutUsers_projects_developer_idTousersInput>
  }

  export type projectsCreateManyUsers_projects_developer_idTousersInputEnvelope = {
    data: projectsCreateManyUsers_projects_developer_idTousersInput | projectsCreateManyUsers_projects_developer_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type project_logsUpsertWithWhereUniqueWithoutUsersInput = {
    where: project_logsWhereUniqueInput
    update: XOR<project_logsUpdateWithoutUsersInput, project_logsUncheckedUpdateWithoutUsersInput>
    create: XOR<project_logsCreateWithoutUsersInput, project_logsUncheckedCreateWithoutUsersInput>
  }

  export type project_logsUpdateWithWhereUniqueWithoutUsersInput = {
    where: project_logsWhereUniqueInput
    data: XOR<project_logsUpdateWithoutUsersInput, project_logsUncheckedUpdateWithoutUsersInput>
  }

  export type project_logsUpdateManyWithWhereWithoutUsersInput = {
    where: project_logsScalarWhereInput
    data: XOR<project_logsUpdateManyMutationInput, project_logsUncheckedUpdateManyWithoutUsersInput>
  }

  export type projectsUpsertWithWhereUniqueWithoutUsers_projects_client_idTousersInput = {
    where: projectsWhereUniqueInput
    update: XOR<projectsUpdateWithoutUsers_projects_client_idTousersInput, projectsUncheckedUpdateWithoutUsers_projects_client_idTousersInput>
    create: XOR<projectsCreateWithoutUsers_projects_client_idTousersInput, projectsUncheckedCreateWithoutUsers_projects_client_idTousersInput>
  }

  export type projectsUpdateWithWhereUniqueWithoutUsers_projects_client_idTousersInput = {
    where: projectsWhereUniqueInput
    data: XOR<projectsUpdateWithoutUsers_projects_client_idTousersInput, projectsUncheckedUpdateWithoutUsers_projects_client_idTousersInput>
  }

  export type projectsUpdateManyWithWhereWithoutUsers_projects_client_idTousersInput = {
    where: projectsScalarWhereInput
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyWithoutUsers_projects_client_idTousersInput>
  }

  export type projectsScalarWhereInput = {
    AND?: projectsScalarWhereInput | projectsScalarWhereInput[]
    OR?: projectsScalarWhereInput[]
    NOT?: projectsScalarWhereInput | projectsScalarWhereInput[]
    project_id?: IntFilter<"projects"> | number
    title?: StringFilter<"projects"> | string
    description?: StringNullableFilter<"projects"> | string | null
    amount?: DecimalFilter<"projects"> | Decimal | DecimalJsLike | number | string
    status?: StringNullableFilter<"projects"> | string | null
    client_public_key?: StringNullableFilter<"projects"> | string | null
    developer_public_key?: StringNullableFilter<"projects"> | string | null
    contract_address?: StringNullableFilter<"projects"> | string | null
    created_at?: DateTimeNullableFilter<"projects"> | Date | string | null
  }

  export type projectsUpsertWithWhereUniqueWithoutUsers_projects_developer_idTousersInput = {
    where: projectsWhereUniqueInput
    update: XOR<projectsUpdateWithoutUsers_projects_developer_idTousersInput, projectsUncheckedUpdateWithoutUsers_projects_developer_idTousersInput>
    create: XOR<projectsCreateWithoutUsers_projects_developer_idTousersInput, projectsUncheckedCreateWithoutUsers_projects_developer_idTousersInput>
  }

  export type projectsUpdateWithWhereUniqueWithoutUsers_projects_developer_idTousersInput = {
    where: projectsWhereUniqueInput
    data: XOR<projectsUpdateWithoutUsers_projects_developer_idTousersInput, projectsUncheckedUpdateWithoutUsers_projects_developer_idTousersInput>
  }

  export type projectsUpdateManyWithWhereWithoutUsers_projects_developer_idTousersInput = {
    where: projectsScalarWhereInput
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyWithoutUsers_projects_developer_idTousersInput>
  }

  export type project_logsCreateManyProjectsInput = {
    project_log_id?: number
    public_key?: string | null
    action: string
    wallet_address?: string | null
    timestamp?: Date | string | null
  }

  export type tasksCreateManyProjectsInput = {
    task_id?: number
    description: string
    completed_by_dev?: boolean | null
    confirmed_by_client?: boolean | null
  }

  export type project_logsUpdateWithoutProjectsInput = {
    action?: StringFieldUpdateOperationsInput | string
    wallet_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutProject_logsNestedInput
  }

  export type project_logsUncheckedUpdateWithoutProjectsInput = {
    project_log_id?: IntFieldUpdateOperationsInput | number
    public_key?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    wallet_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type project_logsUncheckedUpdateManyWithoutProjectsInput = {
    project_log_id?: IntFieldUpdateOperationsInput | number
    public_key?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    wallet_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksUpdateWithoutProjectsInput = {
    description?: StringFieldUpdateOperationsInput | string
    completed_by_dev?: NullableBoolFieldUpdateOperationsInput | boolean | null
    confirmed_by_client?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tasksUncheckedUpdateWithoutProjectsInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    completed_by_dev?: NullableBoolFieldUpdateOperationsInput | boolean | null
    confirmed_by_client?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tasksUncheckedUpdateManyWithoutProjectsInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    completed_by_dev?: NullableBoolFieldUpdateOperationsInput | boolean | null
    confirmed_by_client?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type project_logsCreateManyUsersInput = {
    project_log_id?: number
    project_id?: number | null
    action: string
    wallet_address?: string | null
    timestamp?: Date | string | null
  }

  export type projectsCreateManyUsers_projects_client_idTousersInput = {
    project_id?: number
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    developer_public_key?: string | null
    contract_address?: string | null
    created_at?: Date | string | null
  }

  export type projectsCreateManyUsers_projects_developer_idTousersInput = {
    project_id?: number
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: string | null
    client_public_key?: string | null
    contract_address?: string | null
    created_at?: Date | string | null
  }

  export type project_logsUpdateWithoutUsersInput = {
    action?: StringFieldUpdateOperationsInput | string
    wallet_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: projectsUpdateOneWithoutProject_logsNestedInput
  }

  export type project_logsUncheckedUpdateWithoutUsersInput = {
    project_log_id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    wallet_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type project_logsUncheckedUpdateManyWithoutUsersInput = {
    project_log_id?: IntFieldUpdateOperationsInput | number
    project_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    wallet_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectsUpdateWithoutUsers_projects_client_idTousersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_logs?: project_logsUpdateManyWithoutProjectsNestedInput
    users_projects_developer_idTousers?: usersUpdateOneWithoutProjects_projects_developer_idTousersNestedInput
    tasks?: tasksUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutUsers_projects_client_idTousersInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    developer_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_logs?: project_logsUncheckedUpdateManyWithoutProjectsNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateManyWithoutUsers_projects_client_idTousersInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    developer_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectsUpdateWithoutUsers_projects_developer_idTousersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_logs?: project_logsUpdateManyWithoutProjectsNestedInput
    users_projects_client_idTousers?: usersUpdateOneWithoutProjects_projects_client_idTousersNestedInput
    tasks?: tasksUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutUsers_projects_developer_idTousersInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    client_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_logs?: project_logsUncheckedUpdateManyWithoutProjectsNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateManyWithoutUsers_projects_developer_idTousersInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    client_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
  export const dmmf: runtime.BaseDMMF
}