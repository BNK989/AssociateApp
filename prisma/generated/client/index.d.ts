
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
 * Model Users
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Games
 * 
 */
export type Games = $Result.DefaultSelection<Prisma.$GamesPayload>
/**
 * Model UsersGames
 * 
 */
export type UsersGames = $Result.DefaultSelection<Prisma.$UsersGamesPayload>
/**
 * Model Messages
 * 
 */
export type Messages = $Result.DefaultSelection<Prisma.$MessagesPayload>
/**
 * Model Invites
 * 
 */
export type Invites = $Result.DefaultSelection<Prisma.$InvitesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  ACTIVE: 'ACTIVE',
  ARCHIVED: 'ARCHIVED',
  DELETED: 'DELETED',
  FINISHED: 'FINISHED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const GameMode: {
  INPUT: 'INPUT',
  SOLVE_PENDING: 'SOLVE_PENDING',
  SOLVE: 'SOLVE'
};

export type GameMode = (typeof GameMode)[keyof typeof GameMode]


export const InviteStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED'
};

export type InviteStatus = (typeof InviteStatus)[keyof typeof InviteStatus]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type GameMode = $Enums.GameMode

export const GameMode: typeof $Enums.GameMode

export type InviteStatus = $Enums.InviteStatus

export const InviteStatus: typeof $Enums.InviteStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.games`: Exposes CRUD operations for the **Games** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.games.findMany()
    * ```
    */
  get games(): Prisma.GamesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usersGames`: Exposes CRUD operations for the **UsersGames** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsersGames
    * const usersGames = await prisma.usersGames.findMany()
    * ```
    */
  get usersGames(): Prisma.UsersGamesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **Messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.MessagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invites`: Exposes CRUD operations for the **Invites** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invites
    * const invites = await prisma.invites.findMany()
    * ```
    */
  get invites(): Prisma.InvitesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Users: 'Users',
    Games: 'Games',
    UsersGames: 'UsersGames',
    Messages: 'Messages',
    Invites: 'Invites'
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
      modelProps: "users" | "games" | "usersGames" | "messages" | "invites"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Games: {
        payload: Prisma.$GamesPayload<ExtArgs>
        fields: Prisma.GamesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GamesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GamesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          findFirst: {
            args: Prisma.GamesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GamesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          findMany: {
            args: Prisma.GamesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>[]
          }
          create: {
            args: Prisma.GamesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          createMany: {
            args: Prisma.GamesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GamesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>[]
          }
          delete: {
            args: Prisma.GamesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          update: {
            args: Prisma.GamesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          deleteMany: {
            args: Prisma.GamesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GamesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GamesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>[]
          }
          upsert: {
            args: Prisma.GamesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          aggregate: {
            args: Prisma.GamesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGames>
          }
          groupBy: {
            args: Prisma.GamesGroupByArgs<ExtArgs>
            result: $Utils.Optional<GamesGroupByOutputType>[]
          }
          count: {
            args: Prisma.GamesCountArgs<ExtArgs>
            result: $Utils.Optional<GamesCountAggregateOutputType> | number
          }
        }
      }
      UsersGames: {
        payload: Prisma.$UsersGamesPayload<ExtArgs>
        fields: Prisma.UsersGamesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersGamesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersGamesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersGamesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersGamesPayload>
          }
          findFirst: {
            args: Prisma.UsersGamesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersGamesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersGamesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersGamesPayload>
          }
          findMany: {
            args: Prisma.UsersGamesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersGamesPayload>[]
          }
          create: {
            args: Prisma.UsersGamesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersGamesPayload>
          }
          createMany: {
            args: Prisma.UsersGamesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersGamesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersGamesPayload>[]
          }
          delete: {
            args: Prisma.UsersGamesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersGamesPayload>
          }
          update: {
            args: Prisma.UsersGamesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersGamesPayload>
          }
          deleteMany: {
            args: Prisma.UsersGamesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersGamesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersGamesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersGamesPayload>[]
          }
          upsert: {
            args: Prisma.UsersGamesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersGamesPayload>
          }
          aggregate: {
            args: Prisma.UsersGamesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsersGames>
          }
          groupBy: {
            args: Prisma.UsersGamesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGamesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersGamesCountArgs<ExtArgs>
            result: $Utils.Optional<UsersGamesCountAggregateOutputType> | number
          }
        }
      }
      Messages: {
        payload: Prisma.$MessagesPayload<ExtArgs>
        fields: Prisma.MessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findFirst: {
            args: Prisma.MessagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findMany: {
            args: Prisma.MessagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          create: {
            args: Prisma.MessagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          createMany: {
            args: Prisma.MessagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          delete: {
            args: Prisma.MessagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          update: {
            args: Prisma.MessagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          deleteMany: {
            args: Prisma.MessagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          upsert: {
            args: Prisma.MessagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.MessagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      Invites: {
        payload: Prisma.$InvitesPayload<ExtArgs>
        fields: Prisma.InvitesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload>
          }
          findFirst: {
            args: Prisma.InvitesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload>
          }
          findMany: {
            args: Prisma.InvitesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload>[]
          }
          create: {
            args: Prisma.InvitesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload>
          }
          createMany: {
            args: Prisma.InvitesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvitesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload>[]
          }
          delete: {
            args: Prisma.InvitesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload>
          }
          update: {
            args: Prisma.InvitesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload>
          }
          deleteMany: {
            args: Prisma.InvitesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvitesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvitesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload>[]
          }
          upsert: {
            args: Prisma.InvitesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitesPayload>
          }
          aggregate: {
            args: Prisma.InvitesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvites>
          }
          groupBy: {
            args: Prisma.InvitesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitesGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvitesCountArgs<ExtArgs>
            result: $Utils.Optional<InvitesCountAggregateOutputType> | number
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
    users?: UsersOmit
    games?: GamesOmit
    usersGames?: UsersGamesOmit
    messages?: MessagesOmit
    invites?: InvitesOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Games: number
    messages: number
    sentInvites: number
    receivedInvites: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Games?: boolean | UsersCountOutputTypeCountGamesArgs
    messages?: boolean | UsersCountOutputTypeCountMessagesArgs
    sentInvites?: boolean | UsersCountOutputTypeCountSentInvitesArgs
    receivedInvites?: boolean | UsersCountOutputTypeCountReceivedInvitesArgs
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
  export type UsersCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersGamesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSentInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReceivedInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitesWhereInput
  }


  /**
   * Count Type GamesCountOutputType
   */

  export type GamesCountOutputType = {
    invites: number
    Users: number
    messages: number
  }

  export type GamesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invites?: boolean | GamesCountOutputTypeCountInvitesArgs
    Users?: boolean | GamesCountOutputTypeCountUsersArgs
    messages?: boolean | GamesCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * GamesCountOutputType without action
   */
  export type GamesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamesCountOutputType
     */
    select?: GamesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GamesCountOutputType without action
   */
  export type GamesCountOutputTypeCountInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitesWhereInput
  }

  /**
   * GamesCountOutputType without action
   */
  export type GamesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersGamesWhereInput
  }

  /**
   * GamesCountOutputType without action
   */
  export type GamesCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    score: number | null
    inActiveGame: number | null
  }

  export type UsersSumAggregateOutputType = {
    score: number | null
    inActiveGame: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    avatar: string | null
    userName: string | null
    score: number | null
    inActiveGame: number | null
    isTemp: boolean | null
    email: string | null
    lastLoginAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    avatar: string | null
    userName: string | null
    score: number | null
    inActiveGame: number | null
    isTemp: boolean | null
    email: string | null
    lastLoginAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    createdAt: number
    avatar: number
    userName: number
    score: number
    inActiveGame: number
    isTemp: number
    email: number
    lastLoginAt: number
    preferences: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    score?: true
    inActiveGame?: true
  }

  export type UsersSumAggregateInputType = {
    score?: true
    inActiveGame?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    createdAt?: true
    avatar?: true
    userName?: true
    score?: true
    inActiveGame?: true
    isTemp?: true
    email?: true
    lastLoginAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    createdAt?: true
    avatar?: true
    userName?: true
    score?: true
    inActiveGame?: true
    isTemp?: true
    email?: true
    lastLoginAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    createdAt?: true
    avatar?: true
    userName?: true
    score?: true
    inActiveGame?: true
    isTemp?: true
    email?: true
    lastLoginAt?: true
    preferences?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
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




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    createdAt: Date
    avatar: string
    userName: string
    score: number
    inActiveGame: number | null
    isTemp: boolean
    email: string
    lastLoginAt: Date | null
    preferences: JsonValue | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
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


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    avatar?: boolean
    userName?: boolean
    score?: boolean
    inActiveGame?: boolean
    isTemp?: boolean
    email?: boolean
    lastLoginAt?: boolean
    preferences?: boolean
    Games?: boolean | Users$GamesArgs<ExtArgs>
    messages?: boolean | Users$messagesArgs<ExtArgs>
    sentInvites?: boolean | Users$sentInvitesArgs<ExtArgs>
    receivedInvites?: boolean | Users$receivedInvitesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    avatar?: boolean
    userName?: boolean
    score?: boolean
    inActiveGame?: boolean
    isTemp?: boolean
    email?: boolean
    lastLoginAt?: boolean
    preferences?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    avatar?: boolean
    userName?: boolean
    score?: boolean
    inActiveGame?: boolean
    isTemp?: boolean
    email?: boolean
    lastLoginAt?: boolean
    preferences?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    createdAt?: boolean
    avatar?: boolean
    userName?: boolean
    score?: boolean
    inActiveGame?: boolean
    isTemp?: boolean
    email?: boolean
    lastLoginAt?: boolean
    preferences?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "avatar" | "userName" | "score" | "inActiveGame" | "isTemp" | "email" | "lastLoginAt" | "preferences", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Games?: boolean | Users$GamesArgs<ExtArgs>
    messages?: boolean | Users$messagesArgs<ExtArgs>
    sentInvites?: boolean | Users$sentInvitesArgs<ExtArgs>
    receivedInvites?: boolean | Users$receivedInvitesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Games: Prisma.$UsersGamesPayload<ExtArgs>[]
      messages: Prisma.$MessagesPayload<ExtArgs>[]
      sentInvites: Prisma.$InvitesPayload<ExtArgs>[]
      receivedInvites: Prisma.$InvitesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      avatar: string
      userName: string
      score: number
      inActiveGame: number | null
      isTemp: boolean
      email: string
      lastLoginAt: Date | null
      preferences: Prisma.JsonValue | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
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
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
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
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
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
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Games<T extends Users$GamesArgs<ExtArgs> = {}>(args?: Subset<T, Users$GamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersGamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Users$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Users$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentInvites<T extends Users$sentInvitesArgs<ExtArgs> = {}>(args?: Subset<T, Users$sentInvitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedInvites<T extends Users$receivedInvitesArgs<ExtArgs> = {}>(args?: Subset<T, Users$receivedInvitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly avatar: FieldRef<"Users", 'String'>
    readonly userName: FieldRef<"Users", 'String'>
    readonly score: FieldRef<"Users", 'Int'>
    readonly inActiveGame: FieldRef<"Users", 'Int'>
    readonly isTemp: FieldRef<"Users", 'Boolean'>
    readonly email: FieldRef<"Users", 'String'>
    readonly lastLoginAt: FieldRef<"Users", 'DateTime'>
    readonly preferences: FieldRef<"Users", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Games
   */
  export type Users$GamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersGames
     */
    select?: UsersGamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersGames
     */
    omit?: UsersGamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersGamesInclude<ExtArgs> | null
    where?: UsersGamesWhereInput
    orderBy?: UsersGamesOrderByWithRelationInput | UsersGamesOrderByWithRelationInput[]
    cursor?: UsersGamesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersGamesScalarFieldEnum | UsersGamesScalarFieldEnum[]
  }

  /**
   * Users.messages
   */
  export type Users$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Users.sentInvites
   */
  export type Users$sentInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invites
     */
    omit?: InvitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    where?: InvitesWhereInput
    orderBy?: InvitesOrderByWithRelationInput | InvitesOrderByWithRelationInput[]
    cursor?: InvitesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitesScalarFieldEnum | InvitesScalarFieldEnum[]
  }

  /**
   * Users.receivedInvites
   */
  export type Users$receivedInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invites
     */
    omit?: InvitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    where?: InvitesWhereInput
    orderBy?: InvitesOrderByWithRelationInput | InvitesOrderByWithRelationInput[]
    cursor?: InvitesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitesScalarFieldEnum | InvitesScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Games
   */

  export type AggregateGames = {
    _count: GamesCountAggregateOutputType | null
    _avg: GamesAvgAggregateOutputType | null
    _sum: GamesSumAggregateOutputType | null
    _min: GamesMinAggregateOutputType | null
    _max: GamesMaxAggregateOutputType | null
  }

  export type GamesAvgAggregateOutputType = {
    id: number | null
    score: number | null
    totalWords: number | null
    ticker: number | null
  }

  export type GamesSumAggregateOutputType = {
    id: number | null
    score: number | null
    totalWords: number | null
    ticker: number | null
  }

  export type GamesMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    title: string | null
    score: number | null
    updatedAt: Date | null
    nextTurn: string | null
    GameMode: $Enums.GameMode | null
    status: $Enums.Status | null
    totalWords: number | null
    ticker: number | null
  }

  export type GamesMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    title: string | null
    score: number | null
    updatedAt: Date | null
    nextTurn: string | null
    GameMode: $Enums.GameMode | null
    status: $Enums.Status | null
    totalWords: number | null
    ticker: number | null
  }

  export type GamesCountAggregateOutputType = {
    id: number
    createdAt: number
    title: number
    score: number
    updatedAt: number
    nextTurn: number
    GameMode: number
    status: number
    confirmChange: number
    totalWords: number
    ticker: number
    _all: number
  }


  export type GamesAvgAggregateInputType = {
    id?: true
    score?: true
    totalWords?: true
    ticker?: true
  }

  export type GamesSumAggregateInputType = {
    id?: true
    score?: true
    totalWords?: true
    ticker?: true
  }

  export type GamesMinAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    score?: true
    updatedAt?: true
    nextTurn?: true
    GameMode?: true
    status?: true
    totalWords?: true
    ticker?: true
  }

  export type GamesMaxAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    score?: true
    updatedAt?: true
    nextTurn?: true
    GameMode?: true
    status?: true
    totalWords?: true
    ticker?: true
  }

  export type GamesCountAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    score?: true
    updatedAt?: true
    nextTurn?: true
    GameMode?: true
    status?: true
    confirmChange?: true
    totalWords?: true
    ticker?: true
    _all?: true
  }

  export type GamesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to aggregate.
     */
    where?: GamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GamesOrderByWithRelationInput | GamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GamesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GamesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GamesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GamesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GamesMaxAggregateInputType
  }

  export type GetGamesAggregateType<T extends GamesAggregateArgs> = {
        [P in keyof T & keyof AggregateGames]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGames[P]>
      : GetScalarType<T[P], AggregateGames[P]>
  }




  export type GamesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GamesWhereInput
    orderBy?: GamesOrderByWithAggregationInput | GamesOrderByWithAggregationInput[]
    by: GamesScalarFieldEnum[] | GamesScalarFieldEnum
    having?: GamesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GamesCountAggregateInputType | true
    _avg?: GamesAvgAggregateInputType
    _sum?: GamesSumAggregateInputType
    _min?: GamesMinAggregateInputType
    _max?: GamesMaxAggregateInputType
  }

  export type GamesGroupByOutputType = {
    id: number
    createdAt: Date
    title: string
    score: number
    updatedAt: Date | null
    nextTurn: string | null
    GameMode: $Enums.GameMode
    status: $Enums.Status
    confirmChange: string[]
    totalWords: number | null
    ticker: number | null
    _count: GamesCountAggregateOutputType | null
    _avg: GamesAvgAggregateOutputType | null
    _sum: GamesSumAggregateOutputType | null
    _min: GamesMinAggregateOutputType | null
    _max: GamesMaxAggregateOutputType | null
  }

  type GetGamesGroupByPayload<T extends GamesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GamesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GamesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GamesGroupByOutputType[P]>
            : GetScalarType<T[P], GamesGroupByOutputType[P]>
        }
      >
    >


  export type GamesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    score?: boolean
    updatedAt?: boolean
    nextTurn?: boolean
    GameMode?: boolean
    status?: boolean
    confirmChange?: boolean
    totalWords?: boolean
    ticker?: boolean
    invites?: boolean | Games$invitesArgs<ExtArgs>
    Users?: boolean | Games$UsersArgs<ExtArgs>
    messages?: boolean | Games$messagesArgs<ExtArgs>
    _count?: boolean | GamesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["games"]>

  export type GamesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    score?: boolean
    updatedAt?: boolean
    nextTurn?: boolean
    GameMode?: boolean
    status?: boolean
    confirmChange?: boolean
    totalWords?: boolean
    ticker?: boolean
  }, ExtArgs["result"]["games"]>

  export type GamesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
    score?: boolean
    updatedAt?: boolean
    nextTurn?: boolean
    GameMode?: boolean
    status?: boolean
    confirmChange?: boolean
    totalWords?: boolean
    ticker?: boolean
  }, ExtArgs["result"]["games"]>

  export type GamesSelectScalar = {
    id?: boolean
    createdAt?: boolean
    title?: boolean
    score?: boolean
    updatedAt?: boolean
    nextTurn?: boolean
    GameMode?: boolean
    status?: boolean
    confirmChange?: boolean
    totalWords?: boolean
    ticker?: boolean
  }

  export type GamesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "title" | "score" | "updatedAt" | "nextTurn" | "GameMode" | "status" | "confirmChange" | "totalWords" | "ticker", ExtArgs["result"]["games"]>
  export type GamesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invites?: boolean | Games$invitesArgs<ExtArgs>
    Users?: boolean | Games$UsersArgs<ExtArgs>
    messages?: boolean | Games$messagesArgs<ExtArgs>
    _count?: boolean | GamesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GamesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GamesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GamesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Games"
    objects: {
      invites: Prisma.$InvitesPayload<ExtArgs>[]
      Users: Prisma.$UsersGamesPayload<ExtArgs>[]
      messages: Prisma.$MessagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      title: string
      score: number
      updatedAt: Date | null
      nextTurn: string | null
      GameMode: $Enums.GameMode
      status: $Enums.Status
      confirmChange: string[]
      totalWords: number | null
      ticker: number | null
    }, ExtArgs["result"]["games"]>
    composites: {}
  }

  type GamesGetPayload<S extends boolean | null | undefined | GamesDefaultArgs> = $Result.GetResult<Prisma.$GamesPayload, S>

  type GamesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GamesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GamesCountAggregateInputType | true
    }

  export interface GamesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Games'], meta: { name: 'Games' } }
    /**
     * Find zero or one Games that matches the filter.
     * @param {GamesFindUniqueArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GamesFindUniqueArgs>(args: SelectSubset<T, GamesFindUniqueArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Games that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GamesFindUniqueOrThrowArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GamesFindUniqueOrThrowArgs>(args: SelectSubset<T, GamesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesFindFirstArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GamesFindFirstArgs>(args?: SelectSubset<T, GamesFindFirstArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Games that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesFindFirstOrThrowArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GamesFindFirstOrThrowArgs>(args?: SelectSubset<T, GamesFindFirstOrThrowArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.games.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.games.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gamesWithIdOnly = await prisma.games.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GamesFindManyArgs>(args?: SelectSubset<T, GamesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Games.
     * @param {GamesCreateArgs} args - Arguments to create a Games.
     * @example
     * // Create one Games
     * const Games = await prisma.games.create({
     *   data: {
     *     // ... data to create a Games
     *   }
     * })
     * 
     */
    create<T extends GamesCreateArgs>(args: SelectSubset<T, GamesCreateArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GamesCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const games = await prisma.games.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GamesCreateManyArgs>(args?: SelectSubset<T, GamesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GamesCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const games = await prisma.games.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gamesWithIdOnly = await prisma.games.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GamesCreateManyAndReturnArgs>(args?: SelectSubset<T, GamesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Games.
     * @param {GamesDeleteArgs} args - Arguments to delete one Games.
     * @example
     * // Delete one Games
     * const Games = await prisma.games.delete({
     *   where: {
     *     // ... filter to delete one Games
     *   }
     * })
     * 
     */
    delete<T extends GamesDeleteArgs>(args: SelectSubset<T, GamesDeleteArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Games.
     * @param {GamesUpdateArgs} args - Arguments to update one Games.
     * @example
     * // Update one Games
     * const games = await prisma.games.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GamesUpdateArgs>(args: SelectSubset<T, GamesUpdateArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GamesDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.games.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GamesDeleteManyArgs>(args?: SelectSubset<T, GamesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const games = await prisma.games.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GamesUpdateManyArgs>(args: SelectSubset<T, GamesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GamesUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const games = await prisma.games.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gamesWithIdOnly = await prisma.games.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends GamesUpdateManyAndReturnArgs>(args: SelectSubset<T, GamesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Games.
     * @param {GamesUpsertArgs} args - Arguments to update or create a Games.
     * @example
     * // Update or create a Games
     * const games = await prisma.games.upsert({
     *   create: {
     *     // ... data to create a Games
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Games we want to update
     *   }
     * })
     */
    upsert<T extends GamesUpsertArgs>(args: SelectSubset<T, GamesUpsertArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.games.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GamesCountArgs>(
      args?: Subset<T, GamesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GamesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GamesAggregateArgs>(args: Subset<T, GamesAggregateArgs>): Prisma.PrismaPromise<GetGamesAggregateType<T>>

    /**
     * Group by Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesGroupByArgs} args - Group by arguments.
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
      T extends GamesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GamesGroupByArgs['orderBy'] }
        : { orderBy?: GamesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GamesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGamesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Games model
   */
  readonly fields: GamesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Games.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GamesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invites<T extends Games$invitesArgs<ExtArgs> = {}>(args?: Subset<T, Games$invitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Users<T extends Games$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Games$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersGamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Games$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Games$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Games model
   */
  interface GamesFieldRefs {
    readonly id: FieldRef<"Games", 'Int'>
    readonly createdAt: FieldRef<"Games", 'DateTime'>
    readonly title: FieldRef<"Games", 'String'>
    readonly score: FieldRef<"Games", 'Int'>
    readonly updatedAt: FieldRef<"Games", 'DateTime'>
    readonly nextTurn: FieldRef<"Games", 'String'>
    readonly GameMode: FieldRef<"Games", 'GameMode'>
    readonly status: FieldRef<"Games", 'Status'>
    readonly confirmChange: FieldRef<"Games", 'String[]'>
    readonly totalWords: FieldRef<"Games", 'Int'>
    readonly ticker: FieldRef<"Games", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Games findUnique
   */
  export type GamesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where: GamesWhereUniqueInput
  }

  /**
   * Games findUniqueOrThrow
   */
  export type GamesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where: GamesWhereUniqueInput
  }

  /**
   * Games findFirst
   */
  export type GamesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GamesOrderByWithRelationInput | GamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * Games findFirstOrThrow
   */
  export type GamesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GamesOrderByWithRelationInput | GamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * Games findMany
   */
  export type GamesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GamesOrderByWithRelationInput | GamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * Games create
   */
  export type GamesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * The data needed to create a Games.
     */
    data?: XOR<GamesCreateInput, GamesUncheckedCreateInput>
  }

  /**
   * Games createMany
   */
  export type GamesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GamesCreateManyInput | GamesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Games createManyAndReturn
   */
  export type GamesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GamesCreateManyInput | GamesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Games update
   */
  export type GamesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * The data needed to update a Games.
     */
    data: XOR<GamesUpdateInput, GamesUncheckedUpdateInput>
    /**
     * Choose, which Games to update.
     */
    where: GamesWhereUniqueInput
  }

  /**
   * Games updateMany
   */
  export type GamesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GamesUpdateManyMutationInput, GamesUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GamesWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Games updateManyAndReturn
   */
  export type GamesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GamesUpdateManyMutationInput, GamesUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GamesWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Games upsert
   */
  export type GamesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * The filter to search for the Games to update in case it exists.
     */
    where: GamesWhereUniqueInput
    /**
     * In case the Games found by the `where` argument doesn't exist, create a new Games with this data.
     */
    create: XOR<GamesCreateInput, GamesUncheckedCreateInput>
    /**
     * In case the Games was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GamesUpdateInput, GamesUncheckedUpdateInput>
  }

  /**
   * Games delete
   */
  export type GamesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * Filter which Games to delete.
     */
    where: GamesWhereUniqueInput
  }

  /**
   * Games deleteMany
   */
  export type GamesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GamesWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Games.invites
   */
  export type Games$invitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invites
     */
    omit?: InvitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    where?: InvitesWhereInput
    orderBy?: InvitesOrderByWithRelationInput | InvitesOrderByWithRelationInput[]
    cursor?: InvitesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitesScalarFieldEnum | InvitesScalarFieldEnum[]
  }

  /**
   * Games.Users
   */
  export type Games$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersGames
     */
    select?: UsersGamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersGames
     */
    omit?: UsersGamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersGamesInclude<ExtArgs> | null
    where?: UsersGamesWhereInput
    orderBy?: UsersGamesOrderByWithRelationInput | UsersGamesOrderByWithRelationInput[]
    cursor?: UsersGamesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersGamesScalarFieldEnum | UsersGamesScalarFieldEnum[]
  }

  /**
   * Games.messages
   */
  export type Games$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Games without action
   */
  export type GamesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
  }


  /**
   * Model UsersGames
   */

  export type AggregateUsersGames = {
    _count: UsersGamesCountAggregateOutputType | null
    _avg: UsersGamesAvgAggregateOutputType | null
    _sum: UsersGamesSumAggregateOutputType | null
    _min: UsersGamesMinAggregateOutputType | null
    _max: UsersGamesMaxAggregateOutputType | null
  }

  export type UsersGamesAvgAggregateOutputType = {
    GameId: number | null
  }

  export type UsersGamesSumAggregateOutputType = {
    GameId: number | null
  }

  export type UsersGamesMinAggregateOutputType = {
    UserId: string | null
    GameId: number | null
  }

  export type UsersGamesMaxAggregateOutputType = {
    UserId: string | null
    GameId: number | null
  }

  export type UsersGamesCountAggregateOutputType = {
    UserId: number
    GameId: number
    _all: number
  }


  export type UsersGamesAvgAggregateInputType = {
    GameId?: true
  }

  export type UsersGamesSumAggregateInputType = {
    GameId?: true
  }

  export type UsersGamesMinAggregateInputType = {
    UserId?: true
    GameId?: true
  }

  export type UsersGamesMaxAggregateInputType = {
    UserId?: true
    GameId?: true
  }

  export type UsersGamesCountAggregateInputType = {
    UserId?: true
    GameId?: true
    _all?: true
  }

  export type UsersGamesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersGames to aggregate.
     */
    where?: UsersGamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersGames to fetch.
     */
    orderBy?: UsersGamesOrderByWithRelationInput | UsersGamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersGamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsersGames
    **/
    _count?: true | UsersGamesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersGamesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersGamesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersGamesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersGamesMaxAggregateInputType
  }

  export type GetUsersGamesAggregateType<T extends UsersGamesAggregateArgs> = {
        [P in keyof T & keyof AggregateUsersGames]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsersGames[P]>
      : GetScalarType<T[P], AggregateUsersGames[P]>
  }




  export type UsersGamesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersGamesWhereInput
    orderBy?: UsersGamesOrderByWithAggregationInput | UsersGamesOrderByWithAggregationInput[]
    by: UsersGamesScalarFieldEnum[] | UsersGamesScalarFieldEnum
    having?: UsersGamesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersGamesCountAggregateInputType | true
    _avg?: UsersGamesAvgAggregateInputType
    _sum?: UsersGamesSumAggregateInputType
    _min?: UsersGamesMinAggregateInputType
    _max?: UsersGamesMaxAggregateInputType
  }

  export type UsersGamesGroupByOutputType = {
    UserId: string
    GameId: number
    _count: UsersGamesCountAggregateOutputType | null
    _avg: UsersGamesAvgAggregateOutputType | null
    _sum: UsersGamesSumAggregateOutputType | null
    _min: UsersGamesMinAggregateOutputType | null
    _max: UsersGamesMaxAggregateOutputType | null
  }

  type GetUsersGamesGroupByPayload<T extends UsersGamesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGamesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGamesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGamesGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGamesGroupByOutputType[P]>
        }
      >
    >


  export type UsersGamesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserId?: boolean
    GameId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    game?: boolean | GamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersGames"]>

  export type UsersGamesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserId?: boolean
    GameId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    game?: boolean | GamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersGames"]>

  export type UsersGamesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserId?: boolean
    GameId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    game?: boolean | GamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersGames"]>

  export type UsersGamesSelectScalar = {
    UserId?: boolean
    GameId?: boolean
  }

  export type UsersGamesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"UserId" | "GameId", ExtArgs["result"]["usersGames"]>
  export type UsersGamesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    game?: boolean | GamesDefaultArgs<ExtArgs>
  }
  export type UsersGamesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    game?: boolean | GamesDefaultArgs<ExtArgs>
  }
  export type UsersGamesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    game?: boolean | GamesDefaultArgs<ExtArgs>
  }

  export type $UsersGamesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsersGames"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      game: Prisma.$GamesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      UserId: string
      GameId: number
    }, ExtArgs["result"]["usersGames"]>
    composites: {}
  }

  type UsersGamesGetPayload<S extends boolean | null | undefined | UsersGamesDefaultArgs> = $Result.GetResult<Prisma.$UsersGamesPayload, S>

  type UsersGamesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersGamesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersGamesCountAggregateInputType | true
    }

  export interface UsersGamesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsersGames'], meta: { name: 'UsersGames' } }
    /**
     * Find zero or one UsersGames that matches the filter.
     * @param {UsersGamesFindUniqueArgs} args - Arguments to find a UsersGames
     * @example
     * // Get one UsersGames
     * const usersGames = await prisma.usersGames.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersGamesFindUniqueArgs>(args: SelectSubset<T, UsersGamesFindUniqueArgs<ExtArgs>>): Prisma__UsersGamesClient<$Result.GetResult<Prisma.$UsersGamesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsersGames that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersGamesFindUniqueOrThrowArgs} args - Arguments to find a UsersGames
     * @example
     * // Get one UsersGames
     * const usersGames = await prisma.usersGames.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersGamesFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersGamesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersGamesClient<$Result.GetResult<Prisma.$UsersGamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGamesFindFirstArgs} args - Arguments to find a UsersGames
     * @example
     * // Get one UsersGames
     * const usersGames = await prisma.usersGames.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersGamesFindFirstArgs>(args?: SelectSubset<T, UsersGamesFindFirstArgs<ExtArgs>>): Prisma__UsersGamesClient<$Result.GetResult<Prisma.$UsersGamesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersGames that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGamesFindFirstOrThrowArgs} args - Arguments to find a UsersGames
     * @example
     * // Get one UsersGames
     * const usersGames = await prisma.usersGames.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersGamesFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersGamesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersGamesClient<$Result.GetResult<Prisma.$UsersGamesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsersGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGamesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsersGames
     * const usersGames = await prisma.usersGames.findMany()
     * 
     * // Get first 10 UsersGames
     * const usersGames = await prisma.usersGames.findMany({ take: 10 })
     * 
     * // Only select the `UserId`
     * const usersGamesWithUserIdOnly = await prisma.usersGames.findMany({ select: { UserId: true } })
     * 
     */
    findMany<T extends UsersGamesFindManyArgs>(args?: SelectSubset<T, UsersGamesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersGamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsersGames.
     * @param {UsersGamesCreateArgs} args - Arguments to create a UsersGames.
     * @example
     * // Create one UsersGames
     * const UsersGames = await prisma.usersGames.create({
     *   data: {
     *     // ... data to create a UsersGames
     *   }
     * })
     * 
     */
    create<T extends UsersGamesCreateArgs>(args: SelectSubset<T, UsersGamesCreateArgs<ExtArgs>>): Prisma__UsersGamesClient<$Result.GetResult<Prisma.$UsersGamesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsersGames.
     * @param {UsersGamesCreateManyArgs} args - Arguments to create many UsersGames.
     * @example
     * // Create many UsersGames
     * const usersGames = await prisma.usersGames.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersGamesCreateManyArgs>(args?: SelectSubset<T, UsersGamesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsersGames and returns the data saved in the database.
     * @param {UsersGamesCreateManyAndReturnArgs} args - Arguments to create many UsersGames.
     * @example
     * // Create many UsersGames
     * const usersGames = await prisma.usersGames.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsersGames and only return the `UserId`
     * const usersGamesWithUserIdOnly = await prisma.usersGames.createManyAndReturn({
     *   select: { UserId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersGamesCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersGamesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersGamesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsersGames.
     * @param {UsersGamesDeleteArgs} args - Arguments to delete one UsersGames.
     * @example
     * // Delete one UsersGames
     * const UsersGames = await prisma.usersGames.delete({
     *   where: {
     *     // ... filter to delete one UsersGames
     *   }
     * })
     * 
     */
    delete<T extends UsersGamesDeleteArgs>(args: SelectSubset<T, UsersGamesDeleteArgs<ExtArgs>>): Prisma__UsersGamesClient<$Result.GetResult<Prisma.$UsersGamesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsersGames.
     * @param {UsersGamesUpdateArgs} args - Arguments to update one UsersGames.
     * @example
     * // Update one UsersGames
     * const usersGames = await prisma.usersGames.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersGamesUpdateArgs>(args: SelectSubset<T, UsersGamesUpdateArgs<ExtArgs>>): Prisma__UsersGamesClient<$Result.GetResult<Prisma.$UsersGamesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsersGames.
     * @param {UsersGamesDeleteManyArgs} args - Arguments to filter UsersGames to delete.
     * @example
     * // Delete a few UsersGames
     * const { count } = await prisma.usersGames.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersGamesDeleteManyArgs>(args?: SelectSubset<T, UsersGamesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGamesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsersGames
     * const usersGames = await prisma.usersGames.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersGamesUpdateManyArgs>(args: SelectSubset<T, UsersGamesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersGames and returns the data updated in the database.
     * @param {UsersGamesUpdateManyAndReturnArgs} args - Arguments to update many UsersGames.
     * @example
     * // Update many UsersGames
     * const usersGames = await prisma.usersGames.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsersGames and only return the `UserId`
     * const usersGamesWithUserIdOnly = await prisma.usersGames.updateManyAndReturn({
     *   select: { UserId: true },
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
    updateManyAndReturn<T extends UsersGamesUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersGamesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersGamesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsersGames.
     * @param {UsersGamesUpsertArgs} args - Arguments to update or create a UsersGames.
     * @example
     * // Update or create a UsersGames
     * const usersGames = await prisma.usersGames.upsert({
     *   create: {
     *     // ... data to create a UsersGames
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsersGames we want to update
     *   }
     * })
     */
    upsert<T extends UsersGamesUpsertArgs>(args: SelectSubset<T, UsersGamesUpsertArgs<ExtArgs>>): Prisma__UsersGamesClient<$Result.GetResult<Prisma.$UsersGamesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsersGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGamesCountArgs} args - Arguments to filter UsersGames to count.
     * @example
     * // Count the number of UsersGames
     * const count = await prisma.usersGames.count({
     *   where: {
     *     // ... the filter for the UsersGames we want to count
     *   }
     * })
    **/
    count<T extends UsersGamesCountArgs>(
      args?: Subset<T, UsersGamesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersGamesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsersGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGamesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersGamesAggregateArgs>(args: Subset<T, UsersGamesAggregateArgs>): Prisma.PrismaPromise<GetUsersGamesAggregateType<T>>

    /**
     * Group by UsersGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGamesGroupByArgs} args - Group by arguments.
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
      T extends UsersGamesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGamesGroupByArgs['orderBy'] }
        : { orderBy?: UsersGamesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGamesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGamesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsersGames model
   */
  readonly fields: UsersGamesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsersGames.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersGamesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    game<T extends GamesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GamesDefaultArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UsersGames model
   */
  interface UsersGamesFieldRefs {
    readonly UserId: FieldRef<"UsersGames", 'String'>
    readonly GameId: FieldRef<"UsersGames", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UsersGames findUnique
   */
  export type UsersGamesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersGames
     */
    select?: UsersGamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersGames
     */
    omit?: UsersGamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersGamesInclude<ExtArgs> | null
    /**
     * Filter, which UsersGames to fetch.
     */
    where: UsersGamesWhereUniqueInput
  }

  /**
   * UsersGames findUniqueOrThrow
   */
  export type UsersGamesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersGames
     */
    select?: UsersGamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersGames
     */
    omit?: UsersGamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersGamesInclude<ExtArgs> | null
    /**
     * Filter, which UsersGames to fetch.
     */
    where: UsersGamesWhereUniqueInput
  }

  /**
   * UsersGames findFirst
   */
  export type UsersGamesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersGames
     */
    select?: UsersGamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersGames
     */
    omit?: UsersGamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersGamesInclude<ExtArgs> | null
    /**
     * Filter, which UsersGames to fetch.
     */
    where?: UsersGamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersGames to fetch.
     */
    orderBy?: UsersGamesOrderByWithRelationInput | UsersGamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersGames.
     */
    cursor?: UsersGamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersGames.
     */
    distinct?: UsersGamesScalarFieldEnum | UsersGamesScalarFieldEnum[]
  }

  /**
   * UsersGames findFirstOrThrow
   */
  export type UsersGamesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersGames
     */
    select?: UsersGamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersGames
     */
    omit?: UsersGamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersGamesInclude<ExtArgs> | null
    /**
     * Filter, which UsersGames to fetch.
     */
    where?: UsersGamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersGames to fetch.
     */
    orderBy?: UsersGamesOrderByWithRelationInput | UsersGamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersGames.
     */
    cursor?: UsersGamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersGames.
     */
    distinct?: UsersGamesScalarFieldEnum | UsersGamesScalarFieldEnum[]
  }

  /**
   * UsersGames findMany
   */
  export type UsersGamesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersGames
     */
    select?: UsersGamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersGames
     */
    omit?: UsersGamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersGamesInclude<ExtArgs> | null
    /**
     * Filter, which UsersGames to fetch.
     */
    where?: UsersGamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersGames to fetch.
     */
    orderBy?: UsersGamesOrderByWithRelationInput | UsersGamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsersGames.
     */
    cursor?: UsersGamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersGames.
     */
    skip?: number
    distinct?: UsersGamesScalarFieldEnum | UsersGamesScalarFieldEnum[]
  }

  /**
   * UsersGames create
   */
  export type UsersGamesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersGames
     */
    select?: UsersGamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersGames
     */
    omit?: UsersGamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersGamesInclude<ExtArgs> | null
    /**
     * The data needed to create a UsersGames.
     */
    data: XOR<UsersGamesCreateInput, UsersGamesUncheckedCreateInput>
  }

  /**
   * UsersGames createMany
   */
  export type UsersGamesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsersGames.
     */
    data: UsersGamesCreateManyInput | UsersGamesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsersGames createManyAndReturn
   */
  export type UsersGamesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersGames
     */
    select?: UsersGamesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsersGames
     */
    omit?: UsersGamesOmit<ExtArgs> | null
    /**
     * The data used to create many UsersGames.
     */
    data: UsersGamesCreateManyInput | UsersGamesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersGamesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsersGames update
   */
  export type UsersGamesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersGames
     */
    select?: UsersGamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersGames
     */
    omit?: UsersGamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersGamesInclude<ExtArgs> | null
    /**
     * The data needed to update a UsersGames.
     */
    data: XOR<UsersGamesUpdateInput, UsersGamesUncheckedUpdateInput>
    /**
     * Choose, which UsersGames to update.
     */
    where: UsersGamesWhereUniqueInput
  }

  /**
   * UsersGames updateMany
   */
  export type UsersGamesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsersGames.
     */
    data: XOR<UsersGamesUpdateManyMutationInput, UsersGamesUncheckedUpdateManyInput>
    /**
     * Filter which UsersGames to update
     */
    where?: UsersGamesWhereInput
    /**
     * Limit how many UsersGames to update.
     */
    limit?: number
  }

  /**
   * UsersGames updateManyAndReturn
   */
  export type UsersGamesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersGames
     */
    select?: UsersGamesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsersGames
     */
    omit?: UsersGamesOmit<ExtArgs> | null
    /**
     * The data used to update UsersGames.
     */
    data: XOR<UsersGamesUpdateManyMutationInput, UsersGamesUncheckedUpdateManyInput>
    /**
     * Filter which UsersGames to update
     */
    where?: UsersGamesWhereInput
    /**
     * Limit how many UsersGames to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersGamesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsersGames upsert
   */
  export type UsersGamesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersGames
     */
    select?: UsersGamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersGames
     */
    omit?: UsersGamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersGamesInclude<ExtArgs> | null
    /**
     * The filter to search for the UsersGames to update in case it exists.
     */
    where: UsersGamesWhereUniqueInput
    /**
     * In case the UsersGames found by the `where` argument doesn't exist, create a new UsersGames with this data.
     */
    create: XOR<UsersGamesCreateInput, UsersGamesUncheckedCreateInput>
    /**
     * In case the UsersGames was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersGamesUpdateInput, UsersGamesUncheckedUpdateInput>
  }

  /**
   * UsersGames delete
   */
  export type UsersGamesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersGames
     */
    select?: UsersGamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersGames
     */
    omit?: UsersGamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersGamesInclude<ExtArgs> | null
    /**
     * Filter which UsersGames to delete.
     */
    where: UsersGamesWhereUniqueInput
  }

  /**
   * UsersGames deleteMany
   */
  export type UsersGamesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersGames to delete
     */
    where?: UsersGamesWhereInput
    /**
     * Limit how many UsersGames to delete.
     */
    limit?: number
  }

  /**
   * UsersGames without action
   */
  export type UsersGamesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersGames
     */
    select?: UsersGamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersGames
     */
    omit?: UsersGamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersGamesInclude<ExtArgs> | null
  }


  /**
   * Model Messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesAvgAggregateOutputType = {
    id: number | null
    resolveAttempts: number | null
    gameId: number | null
  }

  export type MessagesSumAggregateOutputType = {
    id: number | null
    resolveAttempts: number | null
    gameId: number | null
  }

  export type MessagesMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    cipher: string | null
    isResolved: boolean | null
    resolveAttempts: number | null
    gameId: number | null
    senderId: string | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    cipher: string | null
    isResolved: boolean | null
    resolveAttempts: number | null
    gameId: number | null
    senderId: string | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    content: number
    cipher: number
    isResolved: number
    resolveAttempts: number
    gameId: number
    senderId: number
    _all: number
  }


  export type MessagesAvgAggregateInputType = {
    id?: true
    resolveAttempts?: true
    gameId?: true
  }

  export type MessagesSumAggregateInputType = {
    id?: true
    resolveAttempts?: true
    gameId?: true
  }

  export type MessagesMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    cipher?: true
    isResolved?: true
    resolveAttempts?: true
    gameId?: true
    senderId?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    cipher?: true
    isResolved?: true
    resolveAttempts?: true
    gameId?: true
    senderId?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    cipher?: true
    isResolved?: true
    resolveAttempts?: true
    gameId?: true
    senderId?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to aggregate.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type MessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithAggregationInput | MessagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: MessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _avg?: MessagesAvgAggregateInputType
    _sum?: MessagesSumAggregateInputType
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date | null
    content: string
    cipher: string
    isResolved: boolean
    resolveAttempts: number | null
    gameId: number
    senderId: string
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends MessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type MessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    cipher?: boolean
    isResolved?: boolean
    resolveAttempts?: boolean
    gameId?: boolean
    senderId?: boolean
    Game?: boolean | GamesDefaultArgs<ExtArgs>
    Sender?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    cipher?: boolean
    isResolved?: boolean
    resolveAttempts?: boolean
    gameId?: boolean
    senderId?: boolean
    Game?: boolean | GamesDefaultArgs<ExtArgs>
    Sender?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    cipher?: boolean
    isResolved?: boolean
    resolveAttempts?: boolean
    gameId?: boolean
    senderId?: boolean
    Game?: boolean | GamesDefaultArgs<ExtArgs>
    Sender?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    cipher?: boolean
    isResolved?: boolean
    resolveAttempts?: boolean
    gameId?: boolean
    senderId?: boolean
  }

  export type MessagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "content" | "cipher" | "isResolved" | "resolveAttempts" | "gameId" | "senderId", ExtArgs["result"]["messages"]>
  export type MessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Game?: boolean | GamesDefaultArgs<ExtArgs>
    Sender?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type MessagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Game?: boolean | GamesDefaultArgs<ExtArgs>
    Sender?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type MessagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Game?: boolean | GamesDefaultArgs<ExtArgs>
    Sender?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $MessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Messages"
    objects: {
      Game: Prisma.$GamesPayload<ExtArgs>
      Sender: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date | null
      content: string
      cipher: string
      isResolved: boolean
      resolveAttempts: number | null
      gameId: number
      senderId: string
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type MessagesGetPayload<S extends boolean | null | undefined | MessagesDefaultArgs> = $Result.GetResult<Prisma.$MessagesPayload, S>

  type MessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface MessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Messages'], meta: { name: 'Messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {MessagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessagesFindUniqueArgs>(args: SelectSubset<T, MessagesFindUniqueArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessagesFindUniqueOrThrowArgs>(args: SelectSubset<T, MessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessagesFindFirstArgs>(args?: SelectSubset<T, MessagesFindFirstArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessagesFindFirstOrThrowArgs>(args?: SelectSubset<T, MessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessagesFindManyArgs>(args?: SelectSubset<T, MessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {MessagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends MessagesCreateArgs>(args: SelectSubset<T, MessagesCreateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessagesCreateManyArgs>(args?: SelectSubset<T, MessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessagesCreateManyAndReturnArgs>(args?: SelectSubset<T, MessagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {MessagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends MessagesDeleteArgs>(args: SelectSubset<T, MessagesDeleteArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {MessagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessagesUpdateArgs>(args: SelectSubset<T, MessagesUpdateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessagesDeleteManyArgs>(args?: SelectSubset<T, MessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessagesUpdateManyArgs>(args: SelectSubset<T, MessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends MessagesUpdateManyAndReturnArgs>(args: SelectSubset<T, MessagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {MessagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends MessagesUpsertArgs>(args: SelectSubset<T, MessagesUpsertArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessagesCountArgs>(
      args?: Subset<T, MessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesGroupByArgs} args - Group by arguments.
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
      T extends MessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessagesGroupByArgs['orderBy'] }
        : { orderBy?: MessagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Messages model
   */
  readonly fields: MessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Game<T extends GamesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GamesDefaultArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Sender<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Messages model
   */
  interface MessagesFieldRefs {
    readonly id: FieldRef<"Messages", 'Int'>
    readonly createdAt: FieldRef<"Messages", 'DateTime'>
    readonly updatedAt: FieldRef<"Messages", 'DateTime'>
    readonly content: FieldRef<"Messages", 'String'>
    readonly cipher: FieldRef<"Messages", 'String'>
    readonly isResolved: FieldRef<"Messages", 'Boolean'>
    readonly resolveAttempts: FieldRef<"Messages", 'Int'>
    readonly gameId: FieldRef<"Messages", 'Int'>
    readonly senderId: FieldRef<"Messages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Messages findUnique
   */
  export type MessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findUniqueOrThrow
   */
  export type MessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findFirst
   */
  export type MessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findFirstOrThrow
   */
  export type MessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findMany
   */
  export type MessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages create
   */
  export type MessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Messages.
     */
    data: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
  }

  /**
   * Messages createMany
   */
  export type MessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Messages createManyAndReturn
   */
  export type MessagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages update
   */
  export type MessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Messages.
     */
    data: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
    /**
     * Choose, which Messages to update.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages updateMany
   */
  export type MessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Messages updateManyAndReturn
   */
  export type MessagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages upsert
   */
  export type MessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Messages to update in case it exists.
     */
    where: MessagesWhereUniqueInput
    /**
     * In case the Messages found by the `where` argument doesn't exist, create a new Messages with this data.
     */
    create: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
    /**
     * In case the Messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
  }

  /**
   * Messages delete
   */
  export type MessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter which Messages to delete.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages deleteMany
   */
  export type MessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Messages without action
   */
  export type MessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
  }


  /**
   * Model Invites
   */

  export type AggregateInvites = {
    _count: InvitesCountAggregateOutputType | null
    _avg: InvitesAvgAggregateOutputType | null
    _sum: InvitesSumAggregateOutputType | null
    _min: InvitesMinAggregateOutputType | null
    _max: InvitesMaxAggregateOutputType | null
  }

  export type InvitesAvgAggregateOutputType = {
    id: number | null
    gameId: number | null
  }

  export type InvitesSumAggregateOutputType = {
    id: number | null
    gameId: number | null
  }

  export type InvitesMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    alias: string | null
    status: $Enums.InviteStatus | null
    inviterId: string | null
    inviteeId: string | null
    gameId: number | null
  }

  export type InvitesMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    alias: string | null
    status: $Enums.InviteStatus | null
    inviterId: string | null
    inviteeId: string | null
    gameId: number | null
  }

  export type InvitesCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    alias: number
    status: number
    inviterId: number
    inviteeId: number
    gameId: number
    _all: number
  }


  export type InvitesAvgAggregateInputType = {
    id?: true
    gameId?: true
  }

  export type InvitesSumAggregateInputType = {
    id?: true
    gameId?: true
  }

  export type InvitesMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    alias?: true
    status?: true
    inviterId?: true
    inviteeId?: true
    gameId?: true
  }

  export type InvitesMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    alias?: true
    status?: true
    inviterId?: true
    inviteeId?: true
    gameId?: true
  }

  export type InvitesCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    alias?: true
    status?: true
    inviterId?: true
    inviteeId?: true
    gameId?: true
    _all?: true
  }

  export type InvitesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invites to aggregate.
     */
    where?: InvitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InvitesOrderByWithRelationInput | InvitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invites
    **/
    _count?: true | InvitesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvitesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvitesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitesMaxAggregateInputType
  }

  export type GetInvitesAggregateType<T extends InvitesAggregateArgs> = {
        [P in keyof T & keyof AggregateInvites]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvites[P]>
      : GetScalarType<T[P], AggregateInvites[P]>
  }




  export type InvitesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitesWhereInput
    orderBy?: InvitesOrderByWithAggregationInput | InvitesOrderByWithAggregationInput[]
    by: InvitesScalarFieldEnum[] | InvitesScalarFieldEnum
    having?: InvitesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitesCountAggregateInputType | true
    _avg?: InvitesAvgAggregateInputType
    _sum?: InvitesSumAggregateInputType
    _min?: InvitesMinAggregateInputType
    _max?: InvitesMaxAggregateInputType
  }

  export type InvitesGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date | null
    alias: string | null
    status: $Enums.InviteStatus
    inviterId: string
    inviteeId: string
    gameId: number
    _count: InvitesCountAggregateOutputType | null
    _avg: InvitesAvgAggregateOutputType | null
    _sum: InvitesSumAggregateOutputType | null
    _min: InvitesMinAggregateOutputType | null
    _max: InvitesMaxAggregateOutputType | null
  }

  type GetInvitesGroupByPayload<T extends InvitesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitesGroupByOutputType[P]>
            : GetScalarType<T[P], InvitesGroupByOutputType[P]>
        }
      >
    >


  export type InvitesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alias?: boolean
    status?: boolean
    inviterId?: boolean
    inviteeId?: boolean
    gameId?: boolean
    inviter?: boolean | UsersDefaultArgs<ExtArgs>
    invitee?: boolean | UsersDefaultArgs<ExtArgs>
    game?: boolean | GamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invites"]>

  export type InvitesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alias?: boolean
    status?: boolean
    inviterId?: boolean
    inviteeId?: boolean
    gameId?: boolean
    inviter?: boolean | UsersDefaultArgs<ExtArgs>
    invitee?: boolean | UsersDefaultArgs<ExtArgs>
    game?: boolean | GamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invites"]>

  export type InvitesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alias?: boolean
    status?: boolean
    inviterId?: boolean
    inviteeId?: boolean
    gameId?: boolean
    inviter?: boolean | UsersDefaultArgs<ExtArgs>
    invitee?: boolean | UsersDefaultArgs<ExtArgs>
    game?: boolean | GamesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invites"]>

  export type InvitesSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alias?: boolean
    status?: boolean
    inviterId?: boolean
    inviteeId?: boolean
    gameId?: boolean
  }

  export type InvitesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "alias" | "status" | "inviterId" | "inviteeId" | "gameId", ExtArgs["result"]["invites"]>
  export type InvitesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inviter?: boolean | UsersDefaultArgs<ExtArgs>
    invitee?: boolean | UsersDefaultArgs<ExtArgs>
    game?: boolean | GamesDefaultArgs<ExtArgs>
  }
  export type InvitesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inviter?: boolean | UsersDefaultArgs<ExtArgs>
    invitee?: boolean | UsersDefaultArgs<ExtArgs>
    game?: boolean | GamesDefaultArgs<ExtArgs>
  }
  export type InvitesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inviter?: boolean | UsersDefaultArgs<ExtArgs>
    invitee?: boolean | UsersDefaultArgs<ExtArgs>
    game?: boolean | GamesDefaultArgs<ExtArgs>
  }

  export type $InvitesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invites"
    objects: {
      inviter: Prisma.$UsersPayload<ExtArgs>
      invitee: Prisma.$UsersPayload<ExtArgs>
      game: Prisma.$GamesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date | null
      alias: string | null
      status: $Enums.InviteStatus
      inviterId: string
      inviteeId: string
      gameId: number
    }, ExtArgs["result"]["invites"]>
    composites: {}
  }

  type InvitesGetPayload<S extends boolean | null | undefined | InvitesDefaultArgs> = $Result.GetResult<Prisma.$InvitesPayload, S>

  type InvitesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvitesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitesCountAggregateInputType | true
    }

  export interface InvitesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invites'], meta: { name: 'Invites' } }
    /**
     * Find zero or one Invites that matches the filter.
     * @param {InvitesFindUniqueArgs} args - Arguments to find a Invites
     * @example
     * // Get one Invites
     * const invites = await prisma.invites.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvitesFindUniqueArgs>(args: SelectSubset<T, InvitesFindUniqueArgs<ExtArgs>>): Prisma__InvitesClient<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invites that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvitesFindUniqueOrThrowArgs} args - Arguments to find a Invites
     * @example
     * // Get one Invites
     * const invites = await prisma.invites.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvitesFindUniqueOrThrowArgs>(args: SelectSubset<T, InvitesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvitesClient<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitesFindFirstArgs} args - Arguments to find a Invites
     * @example
     * // Get one Invites
     * const invites = await prisma.invites.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvitesFindFirstArgs>(args?: SelectSubset<T, InvitesFindFirstArgs<ExtArgs>>): Prisma__InvitesClient<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invites that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitesFindFirstOrThrowArgs} args - Arguments to find a Invites
     * @example
     * // Get one Invites
     * const invites = await prisma.invites.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvitesFindFirstOrThrowArgs>(args?: SelectSubset<T, InvitesFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvitesClient<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invites
     * const invites = await prisma.invites.findMany()
     * 
     * // Get first 10 Invites
     * const invites = await prisma.invites.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitesWithIdOnly = await prisma.invites.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvitesFindManyArgs>(args?: SelectSubset<T, InvitesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invites.
     * @param {InvitesCreateArgs} args - Arguments to create a Invites.
     * @example
     * // Create one Invites
     * const Invites = await prisma.invites.create({
     *   data: {
     *     // ... data to create a Invites
     *   }
     * })
     * 
     */
    create<T extends InvitesCreateArgs>(args: SelectSubset<T, InvitesCreateArgs<ExtArgs>>): Prisma__InvitesClient<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invites.
     * @param {InvitesCreateManyArgs} args - Arguments to create many Invites.
     * @example
     * // Create many Invites
     * const invites = await prisma.invites.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvitesCreateManyArgs>(args?: SelectSubset<T, InvitesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invites and returns the data saved in the database.
     * @param {InvitesCreateManyAndReturnArgs} args - Arguments to create many Invites.
     * @example
     * // Create many Invites
     * const invites = await prisma.invites.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invites and only return the `id`
     * const invitesWithIdOnly = await prisma.invites.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvitesCreateManyAndReturnArgs>(args?: SelectSubset<T, InvitesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invites.
     * @param {InvitesDeleteArgs} args - Arguments to delete one Invites.
     * @example
     * // Delete one Invites
     * const Invites = await prisma.invites.delete({
     *   where: {
     *     // ... filter to delete one Invites
     *   }
     * })
     * 
     */
    delete<T extends InvitesDeleteArgs>(args: SelectSubset<T, InvitesDeleteArgs<ExtArgs>>): Prisma__InvitesClient<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invites.
     * @param {InvitesUpdateArgs} args - Arguments to update one Invites.
     * @example
     * // Update one Invites
     * const invites = await prisma.invites.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvitesUpdateArgs>(args: SelectSubset<T, InvitesUpdateArgs<ExtArgs>>): Prisma__InvitesClient<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invites.
     * @param {InvitesDeleteManyArgs} args - Arguments to filter Invites to delete.
     * @example
     * // Delete a few Invites
     * const { count } = await prisma.invites.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvitesDeleteManyArgs>(args?: SelectSubset<T, InvitesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invites
     * const invites = await prisma.invites.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvitesUpdateManyArgs>(args: SelectSubset<T, InvitesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invites and returns the data updated in the database.
     * @param {InvitesUpdateManyAndReturnArgs} args - Arguments to update many Invites.
     * @example
     * // Update many Invites
     * const invites = await prisma.invites.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invites and only return the `id`
     * const invitesWithIdOnly = await prisma.invites.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends InvitesUpdateManyAndReturnArgs>(args: SelectSubset<T, InvitesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invites.
     * @param {InvitesUpsertArgs} args - Arguments to update or create a Invites.
     * @example
     * // Update or create a Invites
     * const invites = await prisma.invites.upsert({
     *   create: {
     *     // ... data to create a Invites
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invites we want to update
     *   }
     * })
     */
    upsert<T extends InvitesUpsertArgs>(args: SelectSubset<T, InvitesUpsertArgs<ExtArgs>>): Prisma__InvitesClient<$Result.GetResult<Prisma.$InvitesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitesCountArgs} args - Arguments to filter Invites to count.
     * @example
     * // Count the number of Invites
     * const count = await prisma.invites.count({
     *   where: {
     *     // ... the filter for the Invites we want to count
     *   }
     * })
    **/
    count<T extends InvitesCountArgs>(
      args?: Subset<T, InvitesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvitesAggregateArgs>(args: Subset<T, InvitesAggregateArgs>): Prisma.PrismaPromise<GetInvitesAggregateType<T>>

    /**
     * Group by Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitesGroupByArgs} args - Group by arguments.
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
      T extends InvitesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitesGroupByArgs['orderBy'] }
        : { orderBy?: InvitesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvitesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invites model
   */
  readonly fields: InvitesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invites.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inviter<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invitee<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    game<T extends GamesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GamesDefaultArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Invites model
   */
  interface InvitesFieldRefs {
    readonly id: FieldRef<"Invites", 'Int'>
    readonly createdAt: FieldRef<"Invites", 'DateTime'>
    readonly updatedAt: FieldRef<"Invites", 'DateTime'>
    readonly alias: FieldRef<"Invites", 'String'>
    readonly status: FieldRef<"Invites", 'InviteStatus'>
    readonly inviterId: FieldRef<"Invites", 'String'>
    readonly inviteeId: FieldRef<"Invites", 'String'>
    readonly gameId: FieldRef<"Invites", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Invites findUnique
   */
  export type InvitesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invites
     */
    omit?: InvitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    /**
     * Filter, which Invites to fetch.
     */
    where: InvitesWhereUniqueInput
  }

  /**
   * Invites findUniqueOrThrow
   */
  export type InvitesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invites
     */
    omit?: InvitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    /**
     * Filter, which Invites to fetch.
     */
    where: InvitesWhereUniqueInput
  }

  /**
   * Invites findFirst
   */
  export type InvitesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invites
     */
    omit?: InvitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    /**
     * Filter, which Invites to fetch.
     */
    where?: InvitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InvitesOrderByWithRelationInput | InvitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invites.
     */
    cursor?: InvitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invites.
     */
    distinct?: InvitesScalarFieldEnum | InvitesScalarFieldEnum[]
  }

  /**
   * Invites findFirstOrThrow
   */
  export type InvitesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invites
     */
    omit?: InvitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    /**
     * Filter, which Invites to fetch.
     */
    where?: InvitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InvitesOrderByWithRelationInput | InvitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invites.
     */
    cursor?: InvitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invites.
     */
    distinct?: InvitesScalarFieldEnum | InvitesScalarFieldEnum[]
  }

  /**
   * Invites findMany
   */
  export type InvitesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invites
     */
    omit?: InvitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    /**
     * Filter, which Invites to fetch.
     */
    where?: InvitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InvitesOrderByWithRelationInput | InvitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invites.
     */
    cursor?: InvitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    distinct?: InvitesScalarFieldEnum | InvitesScalarFieldEnum[]
  }

  /**
   * Invites create
   */
  export type InvitesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invites
     */
    omit?: InvitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    /**
     * The data needed to create a Invites.
     */
    data: XOR<InvitesCreateInput, InvitesUncheckedCreateInput>
  }

  /**
   * Invites createMany
   */
  export type InvitesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invites.
     */
    data: InvitesCreateManyInput | InvitesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invites createManyAndReturn
   */
  export type InvitesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invites
     */
    omit?: InvitesOmit<ExtArgs> | null
    /**
     * The data used to create many Invites.
     */
    data: InvitesCreateManyInput | InvitesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invites update
   */
  export type InvitesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invites
     */
    omit?: InvitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    /**
     * The data needed to update a Invites.
     */
    data: XOR<InvitesUpdateInput, InvitesUncheckedUpdateInput>
    /**
     * Choose, which Invites to update.
     */
    where: InvitesWhereUniqueInput
  }

  /**
   * Invites updateMany
   */
  export type InvitesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invites.
     */
    data: XOR<InvitesUpdateManyMutationInput, InvitesUncheckedUpdateManyInput>
    /**
     * Filter which Invites to update
     */
    where?: InvitesWhereInput
    /**
     * Limit how many Invites to update.
     */
    limit?: number
  }

  /**
   * Invites updateManyAndReturn
   */
  export type InvitesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invites
     */
    omit?: InvitesOmit<ExtArgs> | null
    /**
     * The data used to update Invites.
     */
    data: XOR<InvitesUpdateManyMutationInput, InvitesUncheckedUpdateManyInput>
    /**
     * Filter which Invites to update
     */
    where?: InvitesWhereInput
    /**
     * Limit how many Invites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invites upsert
   */
  export type InvitesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invites
     */
    omit?: InvitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    /**
     * The filter to search for the Invites to update in case it exists.
     */
    where: InvitesWhereUniqueInput
    /**
     * In case the Invites found by the `where` argument doesn't exist, create a new Invites with this data.
     */
    create: XOR<InvitesCreateInput, InvitesUncheckedCreateInput>
    /**
     * In case the Invites was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitesUpdateInput, InvitesUncheckedUpdateInput>
  }

  /**
   * Invites delete
   */
  export type InvitesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invites
     */
    omit?: InvitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
    /**
     * Filter which Invites to delete.
     */
    where: InvitesWhereUniqueInput
  }

  /**
   * Invites deleteMany
   */
  export type InvitesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invites to delete
     */
    where?: InvitesWhereInput
    /**
     * Limit how many Invites to delete.
     */
    limit?: number
  }

  /**
   * Invites without action
   */
  export type InvitesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invites
     */
    select?: InvitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invites
     */
    omit?: InvitesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitesInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    avatar: 'avatar',
    userName: 'userName',
    score: 'score',
    inActiveGame: 'inActiveGame',
    isTemp: 'isTemp',
    email: 'email',
    lastLoginAt: 'lastLoginAt',
    preferences: 'preferences'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const GamesScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    title: 'title',
    score: 'score',
    updatedAt: 'updatedAt',
    nextTurn: 'nextTurn',
    GameMode: 'GameMode',
    status: 'status',
    confirmChange: 'confirmChange',
    totalWords: 'totalWords',
    ticker: 'ticker'
  };

  export type GamesScalarFieldEnum = (typeof GamesScalarFieldEnum)[keyof typeof GamesScalarFieldEnum]


  export const UsersGamesScalarFieldEnum: {
    UserId: 'UserId',
    GameId: 'GameId'
  };

  export type UsersGamesScalarFieldEnum = (typeof UsersGamesScalarFieldEnum)[keyof typeof UsersGamesScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    content: 'content',
    cipher: 'cipher',
    isResolved: 'isResolved',
    resolveAttempts: 'resolveAttempts',
    gameId: 'gameId',
    senderId: 'senderId'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const InvitesScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    alias: 'alias',
    status: 'status',
    inviterId: 'inviterId',
    inviteeId: 'inviteeId',
    gameId: 'gameId'
  };

  export type InvitesScalarFieldEnum = (typeof InvitesScalarFieldEnum)[keyof typeof InvitesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'GameMode'
   */
  export type EnumGameModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameMode'>
    


  /**
   * Reference to a field of type 'GameMode[]'
   */
  export type ListEnumGameModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameMode[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'InviteStatus'
   */
  export type EnumInviteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InviteStatus'>
    


  /**
   * Reference to a field of type 'InviteStatus[]'
   */
  export type ListEnumInviteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InviteStatus[]'>
    


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


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: UuidFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    avatar?: StringFilter<"Users"> | string
    userName?: StringFilter<"Users"> | string
    score?: IntFilter<"Users"> | number
    inActiveGame?: IntNullableFilter<"Users"> | number | null
    isTemp?: BoolFilter<"Users"> | boolean
    email?: StringFilter<"Users"> | string
    lastLoginAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    preferences?: JsonNullableFilter<"Users">
    Games?: UsersGamesListRelationFilter
    messages?: MessagesListRelationFilter
    sentInvites?: InvitesListRelationFilter
    receivedInvites?: InvitesListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    avatar?: SortOrder
    userName?: SortOrder
    score?: SortOrder
    inActiveGame?: SortOrderInput | SortOrder
    isTemp?: SortOrder
    email?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    preferences?: SortOrderInput | SortOrder
    Games?: UsersGamesOrderByRelationAggregateInput
    messages?: MessagesOrderByRelationAggregateInput
    sentInvites?: InvitesOrderByRelationAggregateInput
    receivedInvites?: InvitesOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    createdAt?: DateTimeFilter<"Users"> | Date | string
    avatar?: StringFilter<"Users"> | string
    userName?: StringFilter<"Users"> | string
    score?: IntFilter<"Users"> | number
    inActiveGame?: IntNullableFilter<"Users"> | number | null
    isTemp?: BoolFilter<"Users"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    preferences?: JsonNullableFilter<"Users">
    Games?: UsersGamesListRelationFilter
    messages?: MessagesListRelationFilter
    sentInvites?: InvitesListRelationFilter
    receivedInvites?: InvitesListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    avatar?: SortOrder
    userName?: SortOrder
    score?: SortOrder
    inActiveGame?: SortOrderInput | SortOrder
    isTemp?: SortOrder
    email?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    preferences?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    avatar?: StringWithAggregatesFilter<"Users"> | string
    userName?: StringWithAggregatesFilter<"Users"> | string
    score?: IntWithAggregatesFilter<"Users"> | number
    inActiveGame?: IntNullableWithAggregatesFilter<"Users"> | number | null
    isTemp?: BoolWithAggregatesFilter<"Users"> | boolean
    email?: StringWithAggregatesFilter<"Users"> | string
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    preferences?: JsonNullableWithAggregatesFilter<"Users">
  }

  export type GamesWhereInput = {
    AND?: GamesWhereInput | GamesWhereInput[]
    OR?: GamesWhereInput[]
    NOT?: GamesWhereInput | GamesWhereInput[]
    id?: IntFilter<"Games"> | number
    createdAt?: DateTimeFilter<"Games"> | Date | string
    title?: StringFilter<"Games"> | string
    score?: IntFilter<"Games"> | number
    updatedAt?: DateTimeNullableFilter<"Games"> | Date | string | null
    nextTurn?: StringNullableFilter<"Games"> | string | null
    GameMode?: EnumGameModeFilter<"Games"> | $Enums.GameMode
    status?: EnumStatusFilter<"Games"> | $Enums.Status
    confirmChange?: StringNullableListFilter<"Games">
    totalWords?: IntNullableFilter<"Games"> | number | null
    ticker?: IntNullableFilter<"Games"> | number | null
    invites?: InvitesListRelationFilter
    Users?: UsersGamesListRelationFilter
    messages?: MessagesListRelationFilter
  }

  export type GamesOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    score?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    nextTurn?: SortOrderInput | SortOrder
    GameMode?: SortOrder
    status?: SortOrder
    confirmChange?: SortOrder
    totalWords?: SortOrderInput | SortOrder
    ticker?: SortOrderInput | SortOrder
    invites?: InvitesOrderByRelationAggregateInput
    Users?: UsersGamesOrderByRelationAggregateInput
    messages?: MessagesOrderByRelationAggregateInput
  }

  export type GamesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GamesWhereInput | GamesWhereInput[]
    OR?: GamesWhereInput[]
    NOT?: GamesWhereInput | GamesWhereInput[]
    createdAt?: DateTimeFilter<"Games"> | Date | string
    title?: StringFilter<"Games"> | string
    score?: IntFilter<"Games"> | number
    updatedAt?: DateTimeNullableFilter<"Games"> | Date | string | null
    nextTurn?: StringNullableFilter<"Games"> | string | null
    GameMode?: EnumGameModeFilter<"Games"> | $Enums.GameMode
    status?: EnumStatusFilter<"Games"> | $Enums.Status
    confirmChange?: StringNullableListFilter<"Games">
    totalWords?: IntNullableFilter<"Games"> | number | null
    ticker?: IntNullableFilter<"Games"> | number | null
    invites?: InvitesListRelationFilter
    Users?: UsersGamesListRelationFilter
    messages?: MessagesListRelationFilter
  }, "id">

  export type GamesOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    score?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    nextTurn?: SortOrderInput | SortOrder
    GameMode?: SortOrder
    status?: SortOrder
    confirmChange?: SortOrder
    totalWords?: SortOrderInput | SortOrder
    ticker?: SortOrderInput | SortOrder
    _count?: GamesCountOrderByAggregateInput
    _avg?: GamesAvgOrderByAggregateInput
    _max?: GamesMaxOrderByAggregateInput
    _min?: GamesMinOrderByAggregateInput
    _sum?: GamesSumOrderByAggregateInput
  }

  export type GamesScalarWhereWithAggregatesInput = {
    AND?: GamesScalarWhereWithAggregatesInput | GamesScalarWhereWithAggregatesInput[]
    OR?: GamesScalarWhereWithAggregatesInput[]
    NOT?: GamesScalarWhereWithAggregatesInput | GamesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Games"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Games"> | Date | string
    title?: StringWithAggregatesFilter<"Games"> | string
    score?: IntWithAggregatesFilter<"Games"> | number
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Games"> | Date | string | null
    nextTurn?: StringNullableWithAggregatesFilter<"Games"> | string | null
    GameMode?: EnumGameModeWithAggregatesFilter<"Games"> | $Enums.GameMode
    status?: EnumStatusWithAggregatesFilter<"Games"> | $Enums.Status
    confirmChange?: StringNullableListFilter<"Games">
    totalWords?: IntNullableWithAggregatesFilter<"Games"> | number | null
    ticker?: IntNullableWithAggregatesFilter<"Games"> | number | null
  }

  export type UsersGamesWhereInput = {
    AND?: UsersGamesWhereInput | UsersGamesWhereInput[]
    OR?: UsersGamesWhereInput[]
    NOT?: UsersGamesWhereInput | UsersGamesWhereInput[]
    UserId?: UuidFilter<"UsersGames"> | string
    GameId?: IntFilter<"UsersGames"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    game?: XOR<GamesScalarRelationFilter, GamesWhereInput>
  }

  export type UsersGamesOrderByWithRelationInput = {
    UserId?: SortOrder
    GameId?: SortOrder
    user?: UsersOrderByWithRelationInput
    game?: GamesOrderByWithRelationInput
  }

  export type UsersGamesWhereUniqueInput = Prisma.AtLeast<{
    UserId_GameId?: UsersGamesUserIdGameIdCompoundUniqueInput
    AND?: UsersGamesWhereInput | UsersGamesWhereInput[]
    OR?: UsersGamesWhereInput[]
    NOT?: UsersGamesWhereInput | UsersGamesWhereInput[]
    UserId?: UuidFilter<"UsersGames"> | string
    GameId?: IntFilter<"UsersGames"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    game?: XOR<GamesScalarRelationFilter, GamesWhereInput>
  }, "UserId_GameId">

  export type UsersGamesOrderByWithAggregationInput = {
    UserId?: SortOrder
    GameId?: SortOrder
    _count?: UsersGamesCountOrderByAggregateInput
    _avg?: UsersGamesAvgOrderByAggregateInput
    _max?: UsersGamesMaxOrderByAggregateInput
    _min?: UsersGamesMinOrderByAggregateInput
    _sum?: UsersGamesSumOrderByAggregateInput
  }

  export type UsersGamesScalarWhereWithAggregatesInput = {
    AND?: UsersGamesScalarWhereWithAggregatesInput | UsersGamesScalarWhereWithAggregatesInput[]
    OR?: UsersGamesScalarWhereWithAggregatesInput[]
    NOT?: UsersGamesScalarWhereWithAggregatesInput | UsersGamesScalarWhereWithAggregatesInput[]
    UserId?: UuidWithAggregatesFilter<"UsersGames"> | string
    GameId?: IntWithAggregatesFilter<"UsersGames"> | number
  }

  export type MessagesWhereInput = {
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    id?: IntFilter<"Messages"> | number
    createdAt?: DateTimeFilter<"Messages"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Messages"> | Date | string | null
    content?: StringFilter<"Messages"> | string
    cipher?: StringFilter<"Messages"> | string
    isResolved?: BoolFilter<"Messages"> | boolean
    resolveAttempts?: IntNullableFilter<"Messages"> | number | null
    gameId?: IntFilter<"Messages"> | number
    senderId?: UuidFilter<"Messages"> | string
    Game?: XOR<GamesScalarRelationFilter, GamesWhereInput>
    Sender?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type MessagesOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    content?: SortOrder
    cipher?: SortOrder
    isResolved?: SortOrder
    resolveAttempts?: SortOrderInput | SortOrder
    gameId?: SortOrder
    senderId?: SortOrder
    Game?: GamesOrderByWithRelationInput
    Sender?: UsersOrderByWithRelationInput
  }

  export type MessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    createdAt?: DateTimeFilter<"Messages"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Messages"> | Date | string | null
    content?: StringFilter<"Messages"> | string
    cipher?: StringFilter<"Messages"> | string
    isResolved?: BoolFilter<"Messages"> | boolean
    resolveAttempts?: IntNullableFilter<"Messages"> | number | null
    gameId?: IntFilter<"Messages"> | number
    senderId?: UuidFilter<"Messages"> | string
    Game?: XOR<GamesScalarRelationFilter, GamesWhereInput>
    Sender?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type MessagesOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    content?: SortOrder
    cipher?: SortOrder
    isResolved?: SortOrder
    resolveAttempts?: SortOrderInput | SortOrder
    gameId?: SortOrder
    senderId?: SortOrder
    _count?: MessagesCountOrderByAggregateInput
    _avg?: MessagesAvgOrderByAggregateInput
    _max?: MessagesMaxOrderByAggregateInput
    _min?: MessagesMinOrderByAggregateInput
    _sum?: MessagesSumOrderByAggregateInput
  }

  export type MessagesScalarWhereWithAggregatesInput = {
    AND?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    OR?: MessagesScalarWhereWithAggregatesInput[]
    NOT?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Messages"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Messages"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Messages"> | Date | string | null
    content?: StringWithAggregatesFilter<"Messages"> | string
    cipher?: StringWithAggregatesFilter<"Messages"> | string
    isResolved?: BoolWithAggregatesFilter<"Messages"> | boolean
    resolveAttempts?: IntNullableWithAggregatesFilter<"Messages"> | number | null
    gameId?: IntWithAggregatesFilter<"Messages"> | number
    senderId?: UuidWithAggregatesFilter<"Messages"> | string
  }

  export type InvitesWhereInput = {
    AND?: InvitesWhereInput | InvitesWhereInput[]
    OR?: InvitesWhereInput[]
    NOT?: InvitesWhereInput | InvitesWhereInput[]
    id?: IntFilter<"Invites"> | number
    createdAt?: DateTimeFilter<"Invites"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Invites"> | Date | string | null
    alias?: StringNullableFilter<"Invites"> | string | null
    status?: EnumInviteStatusFilter<"Invites"> | $Enums.InviteStatus
    inviterId?: UuidFilter<"Invites"> | string
    inviteeId?: UuidFilter<"Invites"> | string
    gameId?: IntFilter<"Invites"> | number
    inviter?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    invitee?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    game?: XOR<GamesScalarRelationFilter, GamesWhereInput>
  }

  export type InvitesOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    alias?: SortOrderInput | SortOrder
    status?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrder
    gameId?: SortOrder
    inviter?: UsersOrderByWithRelationInput
    invitee?: UsersOrderByWithRelationInput
    game?: GamesOrderByWithRelationInput
  }

  export type InvitesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InvitesWhereInput | InvitesWhereInput[]
    OR?: InvitesWhereInput[]
    NOT?: InvitesWhereInput | InvitesWhereInput[]
    createdAt?: DateTimeFilter<"Invites"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Invites"> | Date | string | null
    alias?: StringNullableFilter<"Invites"> | string | null
    status?: EnumInviteStatusFilter<"Invites"> | $Enums.InviteStatus
    inviterId?: UuidFilter<"Invites"> | string
    inviteeId?: UuidFilter<"Invites"> | string
    gameId?: IntFilter<"Invites"> | number
    inviter?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    invitee?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    game?: XOR<GamesScalarRelationFilter, GamesWhereInput>
  }, "id">

  export type InvitesOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    alias?: SortOrderInput | SortOrder
    status?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrder
    gameId?: SortOrder
    _count?: InvitesCountOrderByAggregateInput
    _avg?: InvitesAvgOrderByAggregateInput
    _max?: InvitesMaxOrderByAggregateInput
    _min?: InvitesMinOrderByAggregateInput
    _sum?: InvitesSumOrderByAggregateInput
  }

  export type InvitesScalarWhereWithAggregatesInput = {
    AND?: InvitesScalarWhereWithAggregatesInput | InvitesScalarWhereWithAggregatesInput[]
    OR?: InvitesScalarWhereWithAggregatesInput[]
    NOT?: InvitesScalarWhereWithAggregatesInput | InvitesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Invites"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Invites"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Invites"> | Date | string | null
    alias?: StringNullableWithAggregatesFilter<"Invites"> | string | null
    status?: EnumInviteStatusWithAggregatesFilter<"Invites"> | $Enums.InviteStatus
    inviterId?: UuidWithAggregatesFilter<"Invites"> | string
    inviteeId?: UuidWithAggregatesFilter<"Invites"> | string
    gameId?: IntWithAggregatesFilter<"Invites"> | number
  }

  export type UsersCreateInput = {
    id?: string
    createdAt?: Date | string
    avatar: string
    userName: string
    score?: number
    inActiveGame?: number | null
    isTemp?: boolean
    email: string
    lastLoginAt?: Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    Games?: UsersGamesCreateNestedManyWithoutUserInput
    messages?: MessagesCreateNestedManyWithoutSenderInput
    sentInvites?: InvitesCreateNestedManyWithoutInviterInput
    receivedInvites?: InvitesCreateNestedManyWithoutInviteeInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    avatar: string
    userName: string
    score?: number
    inActiveGame?: number | null
    isTemp?: boolean
    email: string
    lastLoginAt?: Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    Games?: UsersGamesUncheckedCreateNestedManyWithoutUserInput
    messages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    sentInvites?: InvitesUncheckedCreateNestedManyWithoutInviterInput
    receivedInvites?: InvitesUncheckedCreateNestedManyWithoutInviteeInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    inActiveGame?: NullableIntFieldUpdateOperationsInput | number | null
    isTemp?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    Games?: UsersGamesUpdateManyWithoutUserNestedInput
    messages?: MessagesUpdateManyWithoutSenderNestedInput
    sentInvites?: InvitesUpdateManyWithoutInviterNestedInput
    receivedInvites?: InvitesUpdateManyWithoutInviteeNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    inActiveGame?: NullableIntFieldUpdateOperationsInput | number | null
    isTemp?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    Games?: UsersGamesUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    sentInvites?: InvitesUncheckedUpdateManyWithoutInviterNestedInput
    receivedInvites?: InvitesUncheckedUpdateManyWithoutInviteeNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    createdAt?: Date | string
    avatar: string
    userName: string
    score?: number
    inActiveGame?: number | null
    isTemp?: boolean
    email: string
    lastLoginAt?: Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    inActiveGame?: NullableIntFieldUpdateOperationsInput | number | null
    isTemp?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    inActiveGame?: NullableIntFieldUpdateOperationsInput | number | null
    isTemp?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GamesCreateInput = {
    createdAt?: Date | string
    title?: string
    score?: number
    updatedAt?: Date | string | null
    nextTurn?: string | null
    GameMode?: $Enums.GameMode
    status?: $Enums.Status
    confirmChange?: GamesCreateconfirmChangeInput | string[]
    totalWords?: number | null
    ticker?: number | null
    invites?: InvitesCreateNestedManyWithoutGameInput
    Users?: UsersGamesCreateNestedManyWithoutGameInput
    messages?: MessagesCreateNestedManyWithoutGameInput
  }

  export type GamesUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    title?: string
    score?: number
    updatedAt?: Date | string | null
    nextTurn?: string | null
    GameMode?: $Enums.GameMode
    status?: $Enums.Status
    confirmChange?: GamesCreateconfirmChangeInput | string[]
    totalWords?: number | null
    ticker?: number | null
    invites?: InvitesUncheckedCreateNestedManyWithoutGameInput
    Users?: UsersGamesUncheckedCreateNestedManyWithoutGameInput
    messages?: MessagesUncheckedCreateNestedManyWithoutGameInput
  }

  export type GamesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTurn?: NullableStringFieldUpdateOperationsInput | string | null
    GameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    confirmChange?: GamesUpdateconfirmChangeInput | string[]
    totalWords?: NullableIntFieldUpdateOperationsInput | number | null
    ticker?: NullableIntFieldUpdateOperationsInput | number | null
    invites?: InvitesUpdateManyWithoutGameNestedInput
    Users?: UsersGamesUpdateManyWithoutGameNestedInput
    messages?: MessagesUpdateManyWithoutGameNestedInput
  }

  export type GamesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTurn?: NullableStringFieldUpdateOperationsInput | string | null
    GameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    confirmChange?: GamesUpdateconfirmChangeInput | string[]
    totalWords?: NullableIntFieldUpdateOperationsInput | number | null
    ticker?: NullableIntFieldUpdateOperationsInput | number | null
    invites?: InvitesUncheckedUpdateManyWithoutGameNestedInput
    Users?: UsersGamesUncheckedUpdateManyWithoutGameNestedInput
    messages?: MessagesUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GamesCreateManyInput = {
    id?: number
    createdAt?: Date | string
    title?: string
    score?: number
    updatedAt?: Date | string | null
    nextTurn?: string | null
    GameMode?: $Enums.GameMode
    status?: $Enums.Status
    confirmChange?: GamesCreateconfirmChangeInput | string[]
    totalWords?: number | null
    ticker?: number | null
  }

  export type GamesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTurn?: NullableStringFieldUpdateOperationsInput | string | null
    GameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    confirmChange?: GamesUpdateconfirmChangeInput | string[]
    totalWords?: NullableIntFieldUpdateOperationsInput | number | null
    ticker?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GamesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTurn?: NullableStringFieldUpdateOperationsInput | string | null
    GameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    confirmChange?: GamesUpdateconfirmChangeInput | string[]
    totalWords?: NullableIntFieldUpdateOperationsInput | number | null
    ticker?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsersGamesCreateInput = {
    user: UsersCreateNestedOneWithoutGamesInput
    game: GamesCreateNestedOneWithoutUsersInput
  }

  export type UsersGamesUncheckedCreateInput = {
    UserId: string
    GameId: number
  }

  export type UsersGamesUpdateInput = {
    user?: UsersUpdateOneRequiredWithoutGamesNestedInput
    game?: GamesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersGamesUncheckedUpdateInput = {
    UserId?: StringFieldUpdateOperationsInput | string
    GameId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersGamesCreateManyInput = {
    UserId: string
    GameId: number
  }

  export type UsersGamesUpdateManyMutationInput = {

  }

  export type UsersGamesUncheckedUpdateManyInput = {
    UserId?: StringFieldUpdateOperationsInput | string
    GameId?: IntFieldUpdateOperationsInput | number
  }

  export type MessagesCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    cipher: string
    isResolved?: boolean
    resolveAttempts?: number | null
    Game: GamesCreateNestedOneWithoutMessagesInput
    Sender: UsersCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    cipher: string
    isResolved?: boolean
    resolveAttempts?: number | null
    gameId: number
    senderId: string
  }

  export type MessagesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    cipher?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    resolveAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    Game?: GamesUpdateOneRequiredWithoutMessagesNestedInput
    Sender?: UsersUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    cipher?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    resolveAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    gameId?: IntFieldUpdateOperationsInput | number
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    cipher: string
    isResolved?: boolean
    resolveAttempts?: number | null
    gameId: number
    senderId: string
  }

  export type MessagesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    cipher?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    resolveAttempts?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MessagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    cipher?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    resolveAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    gameId?: IntFieldUpdateOperationsInput | number
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type InvitesCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    alias?: string | null
    status?: $Enums.InviteStatus
    inviter: UsersCreateNestedOneWithoutSentInvitesInput
    invitee: UsersCreateNestedOneWithoutReceivedInvitesInput
    game: GamesCreateNestedOneWithoutInvitesInput
  }

  export type InvitesUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    alias?: string | null
    status?: $Enums.InviteStatus
    inviterId: string
    inviteeId: string
    gameId: number
  }

  export type InvitesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    inviter?: UsersUpdateOneRequiredWithoutSentInvitesNestedInput
    invitee?: UsersUpdateOneRequiredWithoutReceivedInvitesNestedInput
    game?: GamesUpdateOneRequiredWithoutInvitesNestedInput
  }

  export type InvitesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    inviterId?: StringFieldUpdateOperationsInput | string
    inviteeId?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type InvitesCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    alias?: string | null
    status?: $Enums.InviteStatus
    inviterId: string
    inviteeId: string
    gameId: number
  }

  export type InvitesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
  }

  export type InvitesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    inviterId?: StringFieldUpdateOperationsInput | string
    inviteeId?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UsersGamesListRelationFilter = {
    every?: UsersGamesWhereInput
    some?: UsersGamesWhereInput
    none?: UsersGamesWhereInput
  }

  export type MessagesListRelationFilter = {
    every?: MessagesWhereInput
    some?: MessagesWhereInput
    none?: MessagesWhereInput
  }

  export type InvitesListRelationFilter = {
    every?: InvitesWhereInput
    some?: InvitesWhereInput
    none?: InvitesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsersGamesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvitesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    avatar?: SortOrder
    userName?: SortOrder
    score?: SortOrder
    inActiveGame?: SortOrder
    isTemp?: SortOrder
    email?: SortOrder
    lastLoginAt?: SortOrder
    preferences?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    score?: SortOrder
    inActiveGame?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    avatar?: SortOrder
    userName?: SortOrder
    score?: SortOrder
    inActiveGame?: SortOrder
    isTemp?: SortOrder
    email?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    avatar?: SortOrder
    userName?: SortOrder
    score?: SortOrder
    inActiveGame?: SortOrder
    isTemp?: SortOrder
    email?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    score?: SortOrder
    inActiveGame?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type EnumGameModeFilter<$PrismaModel = never> = {
    equals?: $Enums.GameMode | EnumGameModeFieldRefInput<$PrismaModel>
    in?: $Enums.GameMode[] | ListEnumGameModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameMode[] | ListEnumGameModeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameModeFilter<$PrismaModel> | $Enums.GameMode
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type GamesCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    score?: SortOrder
    updatedAt?: SortOrder
    nextTurn?: SortOrder
    GameMode?: SortOrder
    status?: SortOrder
    confirmChange?: SortOrder
    totalWords?: SortOrder
    ticker?: SortOrder
  }

  export type GamesAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    totalWords?: SortOrder
    ticker?: SortOrder
  }

  export type GamesMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    score?: SortOrder
    updatedAt?: SortOrder
    nextTurn?: SortOrder
    GameMode?: SortOrder
    status?: SortOrder
    totalWords?: SortOrder
    ticker?: SortOrder
  }

  export type GamesMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    score?: SortOrder
    updatedAt?: SortOrder
    nextTurn?: SortOrder
    GameMode?: SortOrder
    status?: SortOrder
    totalWords?: SortOrder
    ticker?: SortOrder
  }

  export type GamesSumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    totalWords?: SortOrder
    ticker?: SortOrder
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

  export type EnumGameModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameMode | EnumGameModeFieldRefInput<$PrismaModel>
    in?: $Enums.GameMode[] | ListEnumGameModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameMode[] | ListEnumGameModeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameModeWithAggregatesFilter<$PrismaModel> | $Enums.GameMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameModeFilter<$PrismaModel>
    _max?: NestedEnumGameModeFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type GamesScalarRelationFilter = {
    is?: GamesWhereInput
    isNot?: GamesWhereInput
  }

  export type UsersGamesUserIdGameIdCompoundUniqueInput = {
    UserId: string
    GameId: number
  }

  export type UsersGamesCountOrderByAggregateInput = {
    UserId?: SortOrder
    GameId?: SortOrder
  }

  export type UsersGamesAvgOrderByAggregateInput = {
    GameId?: SortOrder
  }

  export type UsersGamesMaxOrderByAggregateInput = {
    UserId?: SortOrder
    GameId?: SortOrder
  }

  export type UsersGamesMinOrderByAggregateInput = {
    UserId?: SortOrder
    GameId?: SortOrder
  }

  export type UsersGamesSumOrderByAggregateInput = {
    GameId?: SortOrder
  }

  export type MessagesCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    cipher?: SortOrder
    isResolved?: SortOrder
    resolveAttempts?: SortOrder
    gameId?: SortOrder
    senderId?: SortOrder
  }

  export type MessagesAvgOrderByAggregateInput = {
    id?: SortOrder
    resolveAttempts?: SortOrder
    gameId?: SortOrder
  }

  export type MessagesMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    cipher?: SortOrder
    isResolved?: SortOrder
    resolveAttempts?: SortOrder
    gameId?: SortOrder
    senderId?: SortOrder
  }

  export type MessagesMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    cipher?: SortOrder
    isResolved?: SortOrder
    resolveAttempts?: SortOrder
    gameId?: SortOrder
    senderId?: SortOrder
  }

  export type MessagesSumOrderByAggregateInput = {
    id?: SortOrder
    resolveAttempts?: SortOrder
    gameId?: SortOrder
  }

  export type EnumInviteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStatus | EnumInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInviteStatusFilter<$PrismaModel> | $Enums.InviteStatus
  }

  export type InvitesCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alias?: SortOrder
    status?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrder
    gameId?: SortOrder
  }

  export type InvitesAvgOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
  }

  export type InvitesMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alias?: SortOrder
    status?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrder
    gameId?: SortOrder
  }

  export type InvitesMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alias?: SortOrder
    status?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrder
    gameId?: SortOrder
  }

  export type InvitesSumOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
  }

  export type EnumInviteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStatus | EnumInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInviteStatusWithAggregatesFilter<$PrismaModel> | $Enums.InviteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInviteStatusFilter<$PrismaModel>
    _max?: NestedEnumInviteStatusFilter<$PrismaModel>
  }

  export type UsersGamesCreateNestedManyWithoutUserInput = {
    create?: XOR<UsersGamesCreateWithoutUserInput, UsersGamesUncheckedCreateWithoutUserInput> | UsersGamesCreateWithoutUserInput[] | UsersGamesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersGamesCreateOrConnectWithoutUserInput | UsersGamesCreateOrConnectWithoutUserInput[]
    createMany?: UsersGamesCreateManyUserInputEnvelope
    connect?: UsersGamesWhereUniqueInput | UsersGamesWhereUniqueInput[]
  }

  export type MessagesCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type InvitesCreateNestedManyWithoutInviterInput = {
    create?: XOR<InvitesCreateWithoutInviterInput, InvitesUncheckedCreateWithoutInviterInput> | InvitesCreateWithoutInviterInput[] | InvitesUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: InvitesCreateOrConnectWithoutInviterInput | InvitesCreateOrConnectWithoutInviterInput[]
    createMany?: InvitesCreateManyInviterInputEnvelope
    connect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
  }

  export type InvitesCreateNestedManyWithoutInviteeInput = {
    create?: XOR<InvitesCreateWithoutInviteeInput, InvitesUncheckedCreateWithoutInviteeInput> | InvitesCreateWithoutInviteeInput[] | InvitesUncheckedCreateWithoutInviteeInput[]
    connectOrCreate?: InvitesCreateOrConnectWithoutInviteeInput | InvitesCreateOrConnectWithoutInviteeInput[]
    createMany?: InvitesCreateManyInviteeInputEnvelope
    connect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
  }

  export type UsersGamesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UsersGamesCreateWithoutUserInput, UsersGamesUncheckedCreateWithoutUserInput> | UsersGamesCreateWithoutUserInput[] | UsersGamesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersGamesCreateOrConnectWithoutUserInput | UsersGamesCreateOrConnectWithoutUserInput[]
    createMany?: UsersGamesCreateManyUserInputEnvelope
    connect?: UsersGamesWhereUniqueInput | UsersGamesWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type InvitesUncheckedCreateNestedManyWithoutInviterInput = {
    create?: XOR<InvitesCreateWithoutInviterInput, InvitesUncheckedCreateWithoutInviterInput> | InvitesCreateWithoutInviterInput[] | InvitesUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: InvitesCreateOrConnectWithoutInviterInput | InvitesCreateOrConnectWithoutInviterInput[]
    createMany?: InvitesCreateManyInviterInputEnvelope
    connect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
  }

  export type InvitesUncheckedCreateNestedManyWithoutInviteeInput = {
    create?: XOR<InvitesCreateWithoutInviteeInput, InvitesUncheckedCreateWithoutInviteeInput> | InvitesCreateWithoutInviteeInput[] | InvitesUncheckedCreateWithoutInviteeInput[]
    connectOrCreate?: InvitesCreateOrConnectWithoutInviteeInput | InvitesCreateOrConnectWithoutInviteeInput[]
    createMany?: InvitesCreateManyInviteeInputEnvelope
    connect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsersGamesUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsersGamesCreateWithoutUserInput, UsersGamesUncheckedCreateWithoutUserInput> | UsersGamesCreateWithoutUserInput[] | UsersGamesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersGamesCreateOrConnectWithoutUserInput | UsersGamesCreateOrConnectWithoutUserInput[]
    upsert?: UsersGamesUpsertWithWhereUniqueWithoutUserInput | UsersGamesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsersGamesCreateManyUserInputEnvelope
    set?: UsersGamesWhereUniqueInput | UsersGamesWhereUniqueInput[]
    disconnect?: UsersGamesWhereUniqueInput | UsersGamesWhereUniqueInput[]
    delete?: UsersGamesWhereUniqueInput | UsersGamesWhereUniqueInput[]
    connect?: UsersGamesWhereUniqueInput | UsersGamesWhereUniqueInput[]
    update?: UsersGamesUpdateWithWhereUniqueWithoutUserInput | UsersGamesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsersGamesUpdateManyWithWhereWithoutUserInput | UsersGamesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsersGamesScalarWhereInput | UsersGamesScalarWhereInput[]
  }

  export type MessagesUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutSenderInput | MessagesUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutSenderInput | MessagesUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutSenderInput | MessagesUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type InvitesUpdateManyWithoutInviterNestedInput = {
    create?: XOR<InvitesCreateWithoutInviterInput, InvitesUncheckedCreateWithoutInviterInput> | InvitesCreateWithoutInviterInput[] | InvitesUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: InvitesCreateOrConnectWithoutInviterInput | InvitesCreateOrConnectWithoutInviterInput[]
    upsert?: InvitesUpsertWithWhereUniqueWithoutInviterInput | InvitesUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: InvitesCreateManyInviterInputEnvelope
    set?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    disconnect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    delete?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    connect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    update?: InvitesUpdateWithWhereUniqueWithoutInviterInput | InvitesUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: InvitesUpdateManyWithWhereWithoutInviterInput | InvitesUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: InvitesScalarWhereInput | InvitesScalarWhereInput[]
  }

  export type InvitesUpdateManyWithoutInviteeNestedInput = {
    create?: XOR<InvitesCreateWithoutInviteeInput, InvitesUncheckedCreateWithoutInviteeInput> | InvitesCreateWithoutInviteeInput[] | InvitesUncheckedCreateWithoutInviteeInput[]
    connectOrCreate?: InvitesCreateOrConnectWithoutInviteeInput | InvitesCreateOrConnectWithoutInviteeInput[]
    upsert?: InvitesUpsertWithWhereUniqueWithoutInviteeInput | InvitesUpsertWithWhereUniqueWithoutInviteeInput[]
    createMany?: InvitesCreateManyInviteeInputEnvelope
    set?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    disconnect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    delete?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    connect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    update?: InvitesUpdateWithWhereUniqueWithoutInviteeInput | InvitesUpdateWithWhereUniqueWithoutInviteeInput[]
    updateMany?: InvitesUpdateManyWithWhereWithoutInviteeInput | InvitesUpdateManyWithWhereWithoutInviteeInput[]
    deleteMany?: InvitesScalarWhereInput | InvitesScalarWhereInput[]
  }

  export type UsersGamesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsersGamesCreateWithoutUserInput, UsersGamesUncheckedCreateWithoutUserInput> | UsersGamesCreateWithoutUserInput[] | UsersGamesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersGamesCreateOrConnectWithoutUserInput | UsersGamesCreateOrConnectWithoutUserInput[]
    upsert?: UsersGamesUpsertWithWhereUniqueWithoutUserInput | UsersGamesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsersGamesCreateManyUserInputEnvelope
    set?: UsersGamesWhereUniqueInput | UsersGamesWhereUniqueInput[]
    disconnect?: UsersGamesWhereUniqueInput | UsersGamesWhereUniqueInput[]
    delete?: UsersGamesWhereUniqueInput | UsersGamesWhereUniqueInput[]
    connect?: UsersGamesWhereUniqueInput | UsersGamesWhereUniqueInput[]
    update?: UsersGamesUpdateWithWhereUniqueWithoutUserInput | UsersGamesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsersGamesUpdateManyWithWhereWithoutUserInput | UsersGamesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsersGamesScalarWhereInput | UsersGamesScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutSenderInput | MessagesUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutSenderInput | MessagesUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutSenderInput | MessagesUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type InvitesUncheckedUpdateManyWithoutInviterNestedInput = {
    create?: XOR<InvitesCreateWithoutInviterInput, InvitesUncheckedCreateWithoutInviterInput> | InvitesCreateWithoutInviterInput[] | InvitesUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: InvitesCreateOrConnectWithoutInviterInput | InvitesCreateOrConnectWithoutInviterInput[]
    upsert?: InvitesUpsertWithWhereUniqueWithoutInviterInput | InvitesUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: InvitesCreateManyInviterInputEnvelope
    set?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    disconnect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    delete?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    connect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    update?: InvitesUpdateWithWhereUniqueWithoutInviterInput | InvitesUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: InvitesUpdateManyWithWhereWithoutInviterInput | InvitesUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: InvitesScalarWhereInput | InvitesScalarWhereInput[]
  }

  export type InvitesUncheckedUpdateManyWithoutInviteeNestedInput = {
    create?: XOR<InvitesCreateWithoutInviteeInput, InvitesUncheckedCreateWithoutInviteeInput> | InvitesCreateWithoutInviteeInput[] | InvitesUncheckedCreateWithoutInviteeInput[]
    connectOrCreate?: InvitesCreateOrConnectWithoutInviteeInput | InvitesCreateOrConnectWithoutInviteeInput[]
    upsert?: InvitesUpsertWithWhereUniqueWithoutInviteeInput | InvitesUpsertWithWhereUniqueWithoutInviteeInput[]
    createMany?: InvitesCreateManyInviteeInputEnvelope
    set?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    disconnect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    delete?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    connect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    update?: InvitesUpdateWithWhereUniqueWithoutInviteeInput | InvitesUpdateWithWhereUniqueWithoutInviteeInput[]
    updateMany?: InvitesUpdateManyWithWhereWithoutInviteeInput | InvitesUpdateManyWithWhereWithoutInviteeInput[]
    deleteMany?: InvitesScalarWhereInput | InvitesScalarWhereInput[]
  }

  export type GamesCreateconfirmChangeInput = {
    set: string[]
  }

  export type InvitesCreateNestedManyWithoutGameInput = {
    create?: XOR<InvitesCreateWithoutGameInput, InvitesUncheckedCreateWithoutGameInput> | InvitesCreateWithoutGameInput[] | InvitesUncheckedCreateWithoutGameInput[]
    connectOrCreate?: InvitesCreateOrConnectWithoutGameInput | InvitesCreateOrConnectWithoutGameInput[]
    createMany?: InvitesCreateManyGameInputEnvelope
    connect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
  }

  export type UsersGamesCreateNestedManyWithoutGameInput = {
    create?: XOR<UsersGamesCreateWithoutGameInput, UsersGamesUncheckedCreateWithoutGameInput> | UsersGamesCreateWithoutGameInput[] | UsersGamesUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UsersGamesCreateOrConnectWithoutGameInput | UsersGamesCreateOrConnectWithoutGameInput[]
    createMany?: UsersGamesCreateManyGameInputEnvelope
    connect?: UsersGamesWhereUniqueInput | UsersGamesWhereUniqueInput[]
  }

  export type MessagesCreateNestedManyWithoutGameInput = {
    create?: XOR<MessagesCreateWithoutGameInput, MessagesUncheckedCreateWithoutGameInput> | MessagesCreateWithoutGameInput[] | MessagesUncheckedCreateWithoutGameInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutGameInput | MessagesCreateOrConnectWithoutGameInput[]
    createMany?: MessagesCreateManyGameInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type InvitesUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<InvitesCreateWithoutGameInput, InvitesUncheckedCreateWithoutGameInput> | InvitesCreateWithoutGameInput[] | InvitesUncheckedCreateWithoutGameInput[]
    connectOrCreate?: InvitesCreateOrConnectWithoutGameInput | InvitesCreateOrConnectWithoutGameInput[]
    createMany?: InvitesCreateManyGameInputEnvelope
    connect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
  }

  export type UsersGamesUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<UsersGamesCreateWithoutGameInput, UsersGamesUncheckedCreateWithoutGameInput> | UsersGamesCreateWithoutGameInput[] | UsersGamesUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UsersGamesCreateOrConnectWithoutGameInput | UsersGamesCreateOrConnectWithoutGameInput[]
    createMany?: UsersGamesCreateManyGameInputEnvelope
    connect?: UsersGamesWhereUniqueInput | UsersGamesWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<MessagesCreateWithoutGameInput, MessagesUncheckedCreateWithoutGameInput> | MessagesCreateWithoutGameInput[] | MessagesUncheckedCreateWithoutGameInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutGameInput | MessagesCreateOrConnectWithoutGameInput[]
    createMany?: MessagesCreateManyGameInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumGameModeFieldUpdateOperationsInput = {
    set?: $Enums.GameMode
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type GamesUpdateconfirmChangeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type InvitesUpdateManyWithoutGameNestedInput = {
    create?: XOR<InvitesCreateWithoutGameInput, InvitesUncheckedCreateWithoutGameInput> | InvitesCreateWithoutGameInput[] | InvitesUncheckedCreateWithoutGameInput[]
    connectOrCreate?: InvitesCreateOrConnectWithoutGameInput | InvitesCreateOrConnectWithoutGameInput[]
    upsert?: InvitesUpsertWithWhereUniqueWithoutGameInput | InvitesUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: InvitesCreateManyGameInputEnvelope
    set?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    disconnect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    delete?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    connect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    update?: InvitesUpdateWithWhereUniqueWithoutGameInput | InvitesUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: InvitesUpdateManyWithWhereWithoutGameInput | InvitesUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: InvitesScalarWhereInput | InvitesScalarWhereInput[]
  }

  export type UsersGamesUpdateManyWithoutGameNestedInput = {
    create?: XOR<UsersGamesCreateWithoutGameInput, UsersGamesUncheckedCreateWithoutGameInput> | UsersGamesCreateWithoutGameInput[] | UsersGamesUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UsersGamesCreateOrConnectWithoutGameInput | UsersGamesCreateOrConnectWithoutGameInput[]
    upsert?: UsersGamesUpsertWithWhereUniqueWithoutGameInput | UsersGamesUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: UsersGamesCreateManyGameInputEnvelope
    set?: UsersGamesWhereUniqueInput | UsersGamesWhereUniqueInput[]
    disconnect?: UsersGamesWhereUniqueInput | UsersGamesWhereUniqueInput[]
    delete?: UsersGamesWhereUniqueInput | UsersGamesWhereUniqueInput[]
    connect?: UsersGamesWhereUniqueInput | UsersGamesWhereUniqueInput[]
    update?: UsersGamesUpdateWithWhereUniqueWithoutGameInput | UsersGamesUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: UsersGamesUpdateManyWithWhereWithoutGameInput | UsersGamesUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: UsersGamesScalarWhereInput | UsersGamesScalarWhereInput[]
  }

  export type MessagesUpdateManyWithoutGameNestedInput = {
    create?: XOR<MessagesCreateWithoutGameInput, MessagesUncheckedCreateWithoutGameInput> | MessagesCreateWithoutGameInput[] | MessagesUncheckedCreateWithoutGameInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutGameInput | MessagesCreateOrConnectWithoutGameInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutGameInput | MessagesUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: MessagesCreateManyGameInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutGameInput | MessagesUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutGameInput | MessagesUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type InvitesUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<InvitesCreateWithoutGameInput, InvitesUncheckedCreateWithoutGameInput> | InvitesCreateWithoutGameInput[] | InvitesUncheckedCreateWithoutGameInput[]
    connectOrCreate?: InvitesCreateOrConnectWithoutGameInput | InvitesCreateOrConnectWithoutGameInput[]
    upsert?: InvitesUpsertWithWhereUniqueWithoutGameInput | InvitesUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: InvitesCreateManyGameInputEnvelope
    set?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    disconnect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    delete?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    connect?: InvitesWhereUniqueInput | InvitesWhereUniqueInput[]
    update?: InvitesUpdateWithWhereUniqueWithoutGameInput | InvitesUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: InvitesUpdateManyWithWhereWithoutGameInput | InvitesUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: InvitesScalarWhereInput | InvitesScalarWhereInput[]
  }

  export type UsersGamesUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<UsersGamesCreateWithoutGameInput, UsersGamesUncheckedCreateWithoutGameInput> | UsersGamesCreateWithoutGameInput[] | UsersGamesUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UsersGamesCreateOrConnectWithoutGameInput | UsersGamesCreateOrConnectWithoutGameInput[]
    upsert?: UsersGamesUpsertWithWhereUniqueWithoutGameInput | UsersGamesUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: UsersGamesCreateManyGameInputEnvelope
    set?: UsersGamesWhereUniqueInput | UsersGamesWhereUniqueInput[]
    disconnect?: UsersGamesWhereUniqueInput | UsersGamesWhereUniqueInput[]
    delete?: UsersGamesWhereUniqueInput | UsersGamesWhereUniqueInput[]
    connect?: UsersGamesWhereUniqueInput | UsersGamesWhereUniqueInput[]
    update?: UsersGamesUpdateWithWhereUniqueWithoutGameInput | UsersGamesUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: UsersGamesUpdateManyWithWhereWithoutGameInput | UsersGamesUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: UsersGamesScalarWhereInput | UsersGamesScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<MessagesCreateWithoutGameInput, MessagesUncheckedCreateWithoutGameInput> | MessagesCreateWithoutGameInput[] | MessagesUncheckedCreateWithoutGameInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutGameInput | MessagesCreateOrConnectWithoutGameInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutGameInput | MessagesUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: MessagesCreateManyGameInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutGameInput | MessagesUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutGameInput | MessagesUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutGamesInput = {
    create?: XOR<UsersCreateWithoutGamesInput, UsersUncheckedCreateWithoutGamesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutGamesInput
    connect?: UsersWhereUniqueInput
  }

  export type GamesCreateNestedOneWithoutUsersInput = {
    create?: XOR<GamesCreateWithoutUsersInput, GamesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GamesCreateOrConnectWithoutUsersInput
    connect?: GamesWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutGamesNestedInput = {
    create?: XOR<UsersCreateWithoutGamesInput, UsersUncheckedCreateWithoutGamesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutGamesInput
    upsert?: UsersUpsertWithoutGamesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutGamesInput, UsersUpdateWithoutGamesInput>, UsersUncheckedUpdateWithoutGamesInput>
  }

  export type GamesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<GamesCreateWithoutUsersInput, GamesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GamesCreateOrConnectWithoutUsersInput
    upsert?: GamesUpsertWithoutUsersInput
    connect?: GamesWhereUniqueInput
    update?: XOR<XOR<GamesUpdateToOneWithWhereWithoutUsersInput, GamesUpdateWithoutUsersInput>, GamesUncheckedUpdateWithoutUsersInput>
  }

  export type GamesCreateNestedOneWithoutMessagesInput = {
    create?: XOR<GamesCreateWithoutMessagesInput, GamesUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: GamesCreateOrConnectWithoutMessagesInput
    connect?: GamesWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UsersCreateWithoutMessagesInput, UsersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMessagesInput
    connect?: UsersWhereUniqueInput
  }

  export type GamesUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<GamesCreateWithoutMessagesInput, GamesUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: GamesCreateOrConnectWithoutMessagesInput
    upsert?: GamesUpsertWithoutMessagesInput
    connect?: GamesWhereUniqueInput
    update?: XOR<XOR<GamesUpdateToOneWithWhereWithoutMessagesInput, GamesUpdateWithoutMessagesInput>, GamesUncheckedUpdateWithoutMessagesInput>
  }

  export type UsersUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UsersCreateWithoutMessagesInput, UsersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMessagesInput
    upsert?: UsersUpsertWithoutMessagesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMessagesInput, UsersUpdateWithoutMessagesInput>, UsersUncheckedUpdateWithoutMessagesInput>
  }

  export type UsersCreateNestedOneWithoutSentInvitesInput = {
    create?: XOR<UsersCreateWithoutSentInvitesInput, UsersUncheckedCreateWithoutSentInvitesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSentInvitesInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutReceivedInvitesInput = {
    create?: XOR<UsersCreateWithoutReceivedInvitesInput, UsersUncheckedCreateWithoutReceivedInvitesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReceivedInvitesInput
    connect?: UsersWhereUniqueInput
  }

  export type GamesCreateNestedOneWithoutInvitesInput = {
    create?: XOR<GamesCreateWithoutInvitesInput, GamesUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: GamesCreateOrConnectWithoutInvitesInput
    connect?: GamesWhereUniqueInput
  }

  export type EnumInviteStatusFieldUpdateOperationsInput = {
    set?: $Enums.InviteStatus
  }

  export type UsersUpdateOneRequiredWithoutSentInvitesNestedInput = {
    create?: XOR<UsersCreateWithoutSentInvitesInput, UsersUncheckedCreateWithoutSentInvitesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSentInvitesInput
    upsert?: UsersUpsertWithoutSentInvitesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSentInvitesInput, UsersUpdateWithoutSentInvitesInput>, UsersUncheckedUpdateWithoutSentInvitesInput>
  }

  export type UsersUpdateOneRequiredWithoutReceivedInvitesNestedInput = {
    create?: XOR<UsersCreateWithoutReceivedInvitesInput, UsersUncheckedCreateWithoutReceivedInvitesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReceivedInvitesInput
    upsert?: UsersUpsertWithoutReceivedInvitesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutReceivedInvitesInput, UsersUpdateWithoutReceivedInvitesInput>, UsersUncheckedUpdateWithoutReceivedInvitesInput>
  }

  export type GamesUpdateOneRequiredWithoutInvitesNestedInput = {
    create?: XOR<GamesCreateWithoutInvitesInput, GamesUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: GamesCreateOrConnectWithoutInvitesInput
    upsert?: GamesUpsertWithoutInvitesInput
    connect?: GamesWhereUniqueInput
    update?: XOR<XOR<GamesUpdateToOneWithWhereWithoutInvitesInput, GamesUpdateWithoutInvitesInput>, GamesUncheckedUpdateWithoutInvitesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumGameModeFilter<$PrismaModel = never> = {
    equals?: $Enums.GameMode | EnumGameModeFieldRefInput<$PrismaModel>
    in?: $Enums.GameMode[] | ListEnumGameModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameMode[] | ListEnumGameModeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameModeFilter<$PrismaModel> | $Enums.GameMode
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type NestedEnumGameModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameMode | EnumGameModeFieldRefInput<$PrismaModel>
    in?: $Enums.GameMode[] | ListEnumGameModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameMode[] | ListEnumGameModeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameModeWithAggregatesFilter<$PrismaModel> | $Enums.GameMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameModeFilter<$PrismaModel>
    _max?: NestedEnumGameModeFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumInviteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStatus | EnumInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInviteStatusFilter<$PrismaModel> | $Enums.InviteStatus
  }

  export type NestedEnumInviteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStatus | EnumInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInviteStatusWithAggregatesFilter<$PrismaModel> | $Enums.InviteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInviteStatusFilter<$PrismaModel>
    _max?: NestedEnumInviteStatusFilter<$PrismaModel>
  }

  export type UsersGamesCreateWithoutUserInput = {
    game: GamesCreateNestedOneWithoutUsersInput
  }

  export type UsersGamesUncheckedCreateWithoutUserInput = {
    GameId: number
  }

  export type UsersGamesCreateOrConnectWithoutUserInput = {
    where: UsersGamesWhereUniqueInput
    create: XOR<UsersGamesCreateWithoutUserInput, UsersGamesUncheckedCreateWithoutUserInput>
  }

  export type UsersGamesCreateManyUserInputEnvelope = {
    data: UsersGamesCreateManyUserInput | UsersGamesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessagesCreateWithoutSenderInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    cipher: string
    isResolved?: boolean
    resolveAttempts?: number | null
    Game: GamesCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateWithoutSenderInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    cipher: string
    isResolved?: boolean
    resolveAttempts?: number | null
    gameId: number
  }

  export type MessagesCreateOrConnectWithoutSenderInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput>
  }

  export type MessagesCreateManySenderInputEnvelope = {
    data: MessagesCreateManySenderInput | MessagesCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type InvitesCreateWithoutInviterInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    alias?: string | null
    status?: $Enums.InviteStatus
    invitee: UsersCreateNestedOneWithoutReceivedInvitesInput
    game: GamesCreateNestedOneWithoutInvitesInput
  }

  export type InvitesUncheckedCreateWithoutInviterInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    alias?: string | null
    status?: $Enums.InviteStatus
    inviteeId: string
    gameId: number
  }

  export type InvitesCreateOrConnectWithoutInviterInput = {
    where: InvitesWhereUniqueInput
    create: XOR<InvitesCreateWithoutInviterInput, InvitesUncheckedCreateWithoutInviterInput>
  }

  export type InvitesCreateManyInviterInputEnvelope = {
    data: InvitesCreateManyInviterInput | InvitesCreateManyInviterInput[]
    skipDuplicates?: boolean
  }

  export type InvitesCreateWithoutInviteeInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    alias?: string | null
    status?: $Enums.InviteStatus
    inviter: UsersCreateNestedOneWithoutSentInvitesInput
    game: GamesCreateNestedOneWithoutInvitesInput
  }

  export type InvitesUncheckedCreateWithoutInviteeInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    alias?: string | null
    status?: $Enums.InviteStatus
    inviterId: string
    gameId: number
  }

  export type InvitesCreateOrConnectWithoutInviteeInput = {
    where: InvitesWhereUniqueInput
    create: XOR<InvitesCreateWithoutInviteeInput, InvitesUncheckedCreateWithoutInviteeInput>
  }

  export type InvitesCreateManyInviteeInputEnvelope = {
    data: InvitesCreateManyInviteeInput | InvitesCreateManyInviteeInput[]
    skipDuplicates?: boolean
  }

  export type UsersGamesUpsertWithWhereUniqueWithoutUserInput = {
    where: UsersGamesWhereUniqueInput
    update: XOR<UsersGamesUpdateWithoutUserInput, UsersGamesUncheckedUpdateWithoutUserInput>
    create: XOR<UsersGamesCreateWithoutUserInput, UsersGamesUncheckedCreateWithoutUserInput>
  }

  export type UsersGamesUpdateWithWhereUniqueWithoutUserInput = {
    where: UsersGamesWhereUniqueInput
    data: XOR<UsersGamesUpdateWithoutUserInput, UsersGamesUncheckedUpdateWithoutUserInput>
  }

  export type UsersGamesUpdateManyWithWhereWithoutUserInput = {
    where: UsersGamesScalarWhereInput
    data: XOR<UsersGamesUpdateManyMutationInput, UsersGamesUncheckedUpdateManyWithoutUserInput>
  }

  export type UsersGamesScalarWhereInput = {
    AND?: UsersGamesScalarWhereInput | UsersGamesScalarWhereInput[]
    OR?: UsersGamesScalarWhereInput[]
    NOT?: UsersGamesScalarWhereInput | UsersGamesScalarWhereInput[]
    UserId?: UuidFilter<"UsersGames"> | string
    GameId?: IntFilter<"UsersGames"> | number
  }

  export type MessagesUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutSenderInput, MessagesUncheckedUpdateWithoutSenderInput>
    create: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutSenderInput, MessagesUncheckedUpdateWithoutSenderInput>
  }

  export type MessagesUpdateManyWithWhereWithoutSenderInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessagesScalarWhereInput = {
    AND?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    OR?: MessagesScalarWhereInput[]
    NOT?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    id?: IntFilter<"Messages"> | number
    createdAt?: DateTimeFilter<"Messages"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Messages"> | Date | string | null
    content?: StringFilter<"Messages"> | string
    cipher?: StringFilter<"Messages"> | string
    isResolved?: BoolFilter<"Messages"> | boolean
    resolveAttempts?: IntNullableFilter<"Messages"> | number | null
    gameId?: IntFilter<"Messages"> | number
    senderId?: UuidFilter<"Messages"> | string
  }

  export type InvitesUpsertWithWhereUniqueWithoutInviterInput = {
    where: InvitesWhereUniqueInput
    update: XOR<InvitesUpdateWithoutInviterInput, InvitesUncheckedUpdateWithoutInviterInput>
    create: XOR<InvitesCreateWithoutInviterInput, InvitesUncheckedCreateWithoutInviterInput>
  }

  export type InvitesUpdateWithWhereUniqueWithoutInviterInput = {
    where: InvitesWhereUniqueInput
    data: XOR<InvitesUpdateWithoutInviterInput, InvitesUncheckedUpdateWithoutInviterInput>
  }

  export type InvitesUpdateManyWithWhereWithoutInviterInput = {
    where: InvitesScalarWhereInput
    data: XOR<InvitesUpdateManyMutationInput, InvitesUncheckedUpdateManyWithoutInviterInput>
  }

  export type InvitesScalarWhereInput = {
    AND?: InvitesScalarWhereInput | InvitesScalarWhereInput[]
    OR?: InvitesScalarWhereInput[]
    NOT?: InvitesScalarWhereInput | InvitesScalarWhereInput[]
    id?: IntFilter<"Invites"> | number
    createdAt?: DateTimeFilter<"Invites"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Invites"> | Date | string | null
    alias?: StringNullableFilter<"Invites"> | string | null
    status?: EnumInviteStatusFilter<"Invites"> | $Enums.InviteStatus
    inviterId?: UuidFilter<"Invites"> | string
    inviteeId?: UuidFilter<"Invites"> | string
    gameId?: IntFilter<"Invites"> | number
  }

  export type InvitesUpsertWithWhereUniqueWithoutInviteeInput = {
    where: InvitesWhereUniqueInput
    update: XOR<InvitesUpdateWithoutInviteeInput, InvitesUncheckedUpdateWithoutInviteeInput>
    create: XOR<InvitesCreateWithoutInviteeInput, InvitesUncheckedCreateWithoutInviteeInput>
  }

  export type InvitesUpdateWithWhereUniqueWithoutInviteeInput = {
    where: InvitesWhereUniqueInput
    data: XOR<InvitesUpdateWithoutInviteeInput, InvitesUncheckedUpdateWithoutInviteeInput>
  }

  export type InvitesUpdateManyWithWhereWithoutInviteeInput = {
    where: InvitesScalarWhereInput
    data: XOR<InvitesUpdateManyMutationInput, InvitesUncheckedUpdateManyWithoutInviteeInput>
  }

  export type InvitesCreateWithoutGameInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    alias?: string | null
    status?: $Enums.InviteStatus
    inviter: UsersCreateNestedOneWithoutSentInvitesInput
    invitee: UsersCreateNestedOneWithoutReceivedInvitesInput
  }

  export type InvitesUncheckedCreateWithoutGameInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    alias?: string | null
    status?: $Enums.InviteStatus
    inviterId: string
    inviteeId: string
  }

  export type InvitesCreateOrConnectWithoutGameInput = {
    where: InvitesWhereUniqueInput
    create: XOR<InvitesCreateWithoutGameInput, InvitesUncheckedCreateWithoutGameInput>
  }

  export type InvitesCreateManyGameInputEnvelope = {
    data: InvitesCreateManyGameInput | InvitesCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type UsersGamesCreateWithoutGameInput = {
    user: UsersCreateNestedOneWithoutGamesInput
  }

  export type UsersGamesUncheckedCreateWithoutGameInput = {
    UserId: string
  }

  export type UsersGamesCreateOrConnectWithoutGameInput = {
    where: UsersGamesWhereUniqueInput
    create: XOR<UsersGamesCreateWithoutGameInput, UsersGamesUncheckedCreateWithoutGameInput>
  }

  export type UsersGamesCreateManyGameInputEnvelope = {
    data: UsersGamesCreateManyGameInput | UsersGamesCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type MessagesCreateWithoutGameInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    cipher: string
    isResolved?: boolean
    resolveAttempts?: number | null
    Sender: UsersCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateWithoutGameInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    cipher: string
    isResolved?: boolean
    resolveAttempts?: number | null
    senderId: string
  }

  export type MessagesCreateOrConnectWithoutGameInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutGameInput, MessagesUncheckedCreateWithoutGameInput>
  }

  export type MessagesCreateManyGameInputEnvelope = {
    data: MessagesCreateManyGameInput | MessagesCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type InvitesUpsertWithWhereUniqueWithoutGameInput = {
    where: InvitesWhereUniqueInput
    update: XOR<InvitesUpdateWithoutGameInput, InvitesUncheckedUpdateWithoutGameInput>
    create: XOR<InvitesCreateWithoutGameInput, InvitesUncheckedCreateWithoutGameInput>
  }

  export type InvitesUpdateWithWhereUniqueWithoutGameInput = {
    where: InvitesWhereUniqueInput
    data: XOR<InvitesUpdateWithoutGameInput, InvitesUncheckedUpdateWithoutGameInput>
  }

  export type InvitesUpdateManyWithWhereWithoutGameInput = {
    where: InvitesScalarWhereInput
    data: XOR<InvitesUpdateManyMutationInput, InvitesUncheckedUpdateManyWithoutGameInput>
  }

  export type UsersGamesUpsertWithWhereUniqueWithoutGameInput = {
    where: UsersGamesWhereUniqueInput
    update: XOR<UsersGamesUpdateWithoutGameInput, UsersGamesUncheckedUpdateWithoutGameInput>
    create: XOR<UsersGamesCreateWithoutGameInput, UsersGamesUncheckedCreateWithoutGameInput>
  }

  export type UsersGamesUpdateWithWhereUniqueWithoutGameInput = {
    where: UsersGamesWhereUniqueInput
    data: XOR<UsersGamesUpdateWithoutGameInput, UsersGamesUncheckedUpdateWithoutGameInput>
  }

  export type UsersGamesUpdateManyWithWhereWithoutGameInput = {
    where: UsersGamesScalarWhereInput
    data: XOR<UsersGamesUpdateManyMutationInput, UsersGamesUncheckedUpdateManyWithoutGameInput>
  }

  export type MessagesUpsertWithWhereUniqueWithoutGameInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutGameInput, MessagesUncheckedUpdateWithoutGameInput>
    create: XOR<MessagesCreateWithoutGameInput, MessagesUncheckedCreateWithoutGameInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutGameInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutGameInput, MessagesUncheckedUpdateWithoutGameInput>
  }

  export type MessagesUpdateManyWithWhereWithoutGameInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutGameInput>
  }

  export type UsersCreateWithoutGamesInput = {
    id?: string
    createdAt?: Date | string
    avatar: string
    userName: string
    score?: number
    inActiveGame?: number | null
    isTemp?: boolean
    email: string
    lastLoginAt?: Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    messages?: MessagesCreateNestedManyWithoutSenderInput
    sentInvites?: InvitesCreateNestedManyWithoutInviterInput
    receivedInvites?: InvitesCreateNestedManyWithoutInviteeInput
  }

  export type UsersUncheckedCreateWithoutGamesInput = {
    id?: string
    createdAt?: Date | string
    avatar: string
    userName: string
    score?: number
    inActiveGame?: number | null
    isTemp?: boolean
    email: string
    lastLoginAt?: Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    messages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    sentInvites?: InvitesUncheckedCreateNestedManyWithoutInviterInput
    receivedInvites?: InvitesUncheckedCreateNestedManyWithoutInviteeInput
  }

  export type UsersCreateOrConnectWithoutGamesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutGamesInput, UsersUncheckedCreateWithoutGamesInput>
  }

  export type GamesCreateWithoutUsersInput = {
    createdAt?: Date | string
    title?: string
    score?: number
    updatedAt?: Date | string | null
    nextTurn?: string | null
    GameMode?: $Enums.GameMode
    status?: $Enums.Status
    confirmChange?: GamesCreateconfirmChangeInput | string[]
    totalWords?: number | null
    ticker?: number | null
    invites?: InvitesCreateNestedManyWithoutGameInput
    messages?: MessagesCreateNestedManyWithoutGameInput
  }

  export type GamesUncheckedCreateWithoutUsersInput = {
    id?: number
    createdAt?: Date | string
    title?: string
    score?: number
    updatedAt?: Date | string | null
    nextTurn?: string | null
    GameMode?: $Enums.GameMode
    status?: $Enums.Status
    confirmChange?: GamesCreateconfirmChangeInput | string[]
    totalWords?: number | null
    ticker?: number | null
    invites?: InvitesUncheckedCreateNestedManyWithoutGameInput
    messages?: MessagesUncheckedCreateNestedManyWithoutGameInput
  }

  export type GamesCreateOrConnectWithoutUsersInput = {
    where: GamesWhereUniqueInput
    create: XOR<GamesCreateWithoutUsersInput, GamesUncheckedCreateWithoutUsersInput>
  }

  export type UsersUpsertWithoutGamesInput = {
    update: XOR<UsersUpdateWithoutGamesInput, UsersUncheckedUpdateWithoutGamesInput>
    create: XOR<UsersCreateWithoutGamesInput, UsersUncheckedCreateWithoutGamesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutGamesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutGamesInput, UsersUncheckedUpdateWithoutGamesInput>
  }

  export type UsersUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    inActiveGame?: NullableIntFieldUpdateOperationsInput | number | null
    isTemp?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    messages?: MessagesUpdateManyWithoutSenderNestedInput
    sentInvites?: InvitesUpdateManyWithoutInviterNestedInput
    receivedInvites?: InvitesUpdateManyWithoutInviteeNestedInput
  }

  export type UsersUncheckedUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    inActiveGame?: NullableIntFieldUpdateOperationsInput | number | null
    isTemp?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    messages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    sentInvites?: InvitesUncheckedUpdateManyWithoutInviterNestedInput
    receivedInvites?: InvitesUncheckedUpdateManyWithoutInviteeNestedInput
  }

  export type GamesUpsertWithoutUsersInput = {
    update: XOR<GamesUpdateWithoutUsersInput, GamesUncheckedUpdateWithoutUsersInput>
    create: XOR<GamesCreateWithoutUsersInput, GamesUncheckedCreateWithoutUsersInput>
    where?: GamesWhereInput
  }

  export type GamesUpdateToOneWithWhereWithoutUsersInput = {
    where?: GamesWhereInput
    data: XOR<GamesUpdateWithoutUsersInput, GamesUncheckedUpdateWithoutUsersInput>
  }

  export type GamesUpdateWithoutUsersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTurn?: NullableStringFieldUpdateOperationsInput | string | null
    GameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    confirmChange?: GamesUpdateconfirmChangeInput | string[]
    totalWords?: NullableIntFieldUpdateOperationsInput | number | null
    ticker?: NullableIntFieldUpdateOperationsInput | number | null
    invites?: InvitesUpdateManyWithoutGameNestedInput
    messages?: MessagesUpdateManyWithoutGameNestedInput
  }

  export type GamesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTurn?: NullableStringFieldUpdateOperationsInput | string | null
    GameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    confirmChange?: GamesUpdateconfirmChangeInput | string[]
    totalWords?: NullableIntFieldUpdateOperationsInput | number | null
    ticker?: NullableIntFieldUpdateOperationsInput | number | null
    invites?: InvitesUncheckedUpdateManyWithoutGameNestedInput
    messages?: MessagesUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GamesCreateWithoutMessagesInput = {
    createdAt?: Date | string
    title?: string
    score?: number
    updatedAt?: Date | string | null
    nextTurn?: string | null
    GameMode?: $Enums.GameMode
    status?: $Enums.Status
    confirmChange?: GamesCreateconfirmChangeInput | string[]
    totalWords?: number | null
    ticker?: number | null
    invites?: InvitesCreateNestedManyWithoutGameInput
    Users?: UsersGamesCreateNestedManyWithoutGameInput
  }

  export type GamesUncheckedCreateWithoutMessagesInput = {
    id?: number
    createdAt?: Date | string
    title?: string
    score?: number
    updatedAt?: Date | string | null
    nextTurn?: string | null
    GameMode?: $Enums.GameMode
    status?: $Enums.Status
    confirmChange?: GamesCreateconfirmChangeInput | string[]
    totalWords?: number | null
    ticker?: number | null
    invites?: InvitesUncheckedCreateNestedManyWithoutGameInput
    Users?: UsersGamesUncheckedCreateNestedManyWithoutGameInput
  }

  export type GamesCreateOrConnectWithoutMessagesInput = {
    where: GamesWhereUniqueInput
    create: XOR<GamesCreateWithoutMessagesInput, GamesUncheckedCreateWithoutMessagesInput>
  }

  export type UsersCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    avatar: string
    userName: string
    score?: number
    inActiveGame?: number | null
    isTemp?: boolean
    email: string
    lastLoginAt?: Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    Games?: UsersGamesCreateNestedManyWithoutUserInput
    sentInvites?: InvitesCreateNestedManyWithoutInviterInput
    receivedInvites?: InvitesCreateNestedManyWithoutInviteeInput
  }

  export type UsersUncheckedCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    avatar: string
    userName: string
    score?: number
    inActiveGame?: number | null
    isTemp?: boolean
    email: string
    lastLoginAt?: Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    Games?: UsersGamesUncheckedCreateNestedManyWithoutUserInput
    sentInvites?: InvitesUncheckedCreateNestedManyWithoutInviterInput
    receivedInvites?: InvitesUncheckedCreateNestedManyWithoutInviteeInput
  }

  export type UsersCreateOrConnectWithoutMessagesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMessagesInput, UsersUncheckedCreateWithoutMessagesInput>
  }

  export type GamesUpsertWithoutMessagesInput = {
    update: XOR<GamesUpdateWithoutMessagesInput, GamesUncheckedUpdateWithoutMessagesInput>
    create: XOR<GamesCreateWithoutMessagesInput, GamesUncheckedCreateWithoutMessagesInput>
    where?: GamesWhereInput
  }

  export type GamesUpdateToOneWithWhereWithoutMessagesInput = {
    where?: GamesWhereInput
    data: XOR<GamesUpdateWithoutMessagesInput, GamesUncheckedUpdateWithoutMessagesInput>
  }

  export type GamesUpdateWithoutMessagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTurn?: NullableStringFieldUpdateOperationsInput | string | null
    GameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    confirmChange?: GamesUpdateconfirmChangeInput | string[]
    totalWords?: NullableIntFieldUpdateOperationsInput | number | null
    ticker?: NullableIntFieldUpdateOperationsInput | number | null
    invites?: InvitesUpdateManyWithoutGameNestedInput
    Users?: UsersGamesUpdateManyWithoutGameNestedInput
  }

  export type GamesUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTurn?: NullableStringFieldUpdateOperationsInput | string | null
    GameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    confirmChange?: GamesUpdateconfirmChangeInput | string[]
    totalWords?: NullableIntFieldUpdateOperationsInput | number | null
    ticker?: NullableIntFieldUpdateOperationsInput | number | null
    invites?: InvitesUncheckedUpdateManyWithoutGameNestedInput
    Users?: UsersGamesUncheckedUpdateManyWithoutGameNestedInput
  }

  export type UsersUpsertWithoutMessagesInput = {
    update: XOR<UsersUpdateWithoutMessagesInput, UsersUncheckedUpdateWithoutMessagesInput>
    create: XOR<UsersCreateWithoutMessagesInput, UsersUncheckedCreateWithoutMessagesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMessagesInput, UsersUncheckedUpdateWithoutMessagesInput>
  }

  export type UsersUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    inActiveGame?: NullableIntFieldUpdateOperationsInput | number | null
    isTemp?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    Games?: UsersGamesUpdateManyWithoutUserNestedInput
    sentInvites?: InvitesUpdateManyWithoutInviterNestedInput
    receivedInvites?: InvitesUpdateManyWithoutInviteeNestedInput
  }

  export type UsersUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    inActiveGame?: NullableIntFieldUpdateOperationsInput | number | null
    isTemp?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    Games?: UsersGamesUncheckedUpdateManyWithoutUserNestedInput
    sentInvites?: InvitesUncheckedUpdateManyWithoutInviterNestedInput
    receivedInvites?: InvitesUncheckedUpdateManyWithoutInviteeNestedInput
  }

  export type UsersCreateWithoutSentInvitesInput = {
    id?: string
    createdAt?: Date | string
    avatar: string
    userName: string
    score?: number
    inActiveGame?: number | null
    isTemp?: boolean
    email: string
    lastLoginAt?: Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    Games?: UsersGamesCreateNestedManyWithoutUserInput
    messages?: MessagesCreateNestedManyWithoutSenderInput
    receivedInvites?: InvitesCreateNestedManyWithoutInviteeInput
  }

  export type UsersUncheckedCreateWithoutSentInvitesInput = {
    id?: string
    createdAt?: Date | string
    avatar: string
    userName: string
    score?: number
    inActiveGame?: number | null
    isTemp?: boolean
    email: string
    lastLoginAt?: Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    Games?: UsersGamesUncheckedCreateNestedManyWithoutUserInput
    messages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    receivedInvites?: InvitesUncheckedCreateNestedManyWithoutInviteeInput
  }

  export type UsersCreateOrConnectWithoutSentInvitesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSentInvitesInput, UsersUncheckedCreateWithoutSentInvitesInput>
  }

  export type UsersCreateWithoutReceivedInvitesInput = {
    id?: string
    createdAt?: Date | string
    avatar: string
    userName: string
    score?: number
    inActiveGame?: number | null
    isTemp?: boolean
    email: string
    lastLoginAt?: Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    Games?: UsersGamesCreateNestedManyWithoutUserInput
    messages?: MessagesCreateNestedManyWithoutSenderInput
    sentInvites?: InvitesCreateNestedManyWithoutInviterInput
  }

  export type UsersUncheckedCreateWithoutReceivedInvitesInput = {
    id?: string
    createdAt?: Date | string
    avatar: string
    userName: string
    score?: number
    inActiveGame?: number | null
    isTemp?: boolean
    email: string
    lastLoginAt?: Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    Games?: UsersGamesUncheckedCreateNestedManyWithoutUserInput
    messages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    sentInvites?: InvitesUncheckedCreateNestedManyWithoutInviterInput
  }

  export type UsersCreateOrConnectWithoutReceivedInvitesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutReceivedInvitesInput, UsersUncheckedCreateWithoutReceivedInvitesInput>
  }

  export type GamesCreateWithoutInvitesInput = {
    createdAt?: Date | string
    title?: string
    score?: number
    updatedAt?: Date | string | null
    nextTurn?: string | null
    GameMode?: $Enums.GameMode
    status?: $Enums.Status
    confirmChange?: GamesCreateconfirmChangeInput | string[]
    totalWords?: number | null
    ticker?: number | null
    Users?: UsersGamesCreateNestedManyWithoutGameInput
    messages?: MessagesCreateNestedManyWithoutGameInput
  }

  export type GamesUncheckedCreateWithoutInvitesInput = {
    id?: number
    createdAt?: Date | string
    title?: string
    score?: number
    updatedAt?: Date | string | null
    nextTurn?: string | null
    GameMode?: $Enums.GameMode
    status?: $Enums.Status
    confirmChange?: GamesCreateconfirmChangeInput | string[]
    totalWords?: number | null
    ticker?: number | null
    Users?: UsersGamesUncheckedCreateNestedManyWithoutGameInput
    messages?: MessagesUncheckedCreateNestedManyWithoutGameInput
  }

  export type GamesCreateOrConnectWithoutInvitesInput = {
    where: GamesWhereUniqueInput
    create: XOR<GamesCreateWithoutInvitesInput, GamesUncheckedCreateWithoutInvitesInput>
  }

  export type UsersUpsertWithoutSentInvitesInput = {
    update: XOR<UsersUpdateWithoutSentInvitesInput, UsersUncheckedUpdateWithoutSentInvitesInput>
    create: XOR<UsersCreateWithoutSentInvitesInput, UsersUncheckedCreateWithoutSentInvitesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSentInvitesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSentInvitesInput, UsersUncheckedUpdateWithoutSentInvitesInput>
  }

  export type UsersUpdateWithoutSentInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    inActiveGame?: NullableIntFieldUpdateOperationsInput | number | null
    isTemp?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    Games?: UsersGamesUpdateManyWithoutUserNestedInput
    messages?: MessagesUpdateManyWithoutSenderNestedInput
    receivedInvites?: InvitesUpdateManyWithoutInviteeNestedInput
  }

  export type UsersUncheckedUpdateWithoutSentInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    inActiveGame?: NullableIntFieldUpdateOperationsInput | number | null
    isTemp?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    Games?: UsersGamesUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvites?: InvitesUncheckedUpdateManyWithoutInviteeNestedInput
  }

  export type UsersUpsertWithoutReceivedInvitesInput = {
    update: XOR<UsersUpdateWithoutReceivedInvitesInput, UsersUncheckedUpdateWithoutReceivedInvitesInput>
    create: XOR<UsersCreateWithoutReceivedInvitesInput, UsersUncheckedCreateWithoutReceivedInvitesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutReceivedInvitesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutReceivedInvitesInput, UsersUncheckedUpdateWithoutReceivedInvitesInput>
  }

  export type UsersUpdateWithoutReceivedInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    inActiveGame?: NullableIntFieldUpdateOperationsInput | number | null
    isTemp?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    Games?: UsersGamesUpdateManyWithoutUserNestedInput
    messages?: MessagesUpdateManyWithoutSenderNestedInput
    sentInvites?: InvitesUpdateManyWithoutInviterNestedInput
  }

  export type UsersUncheckedUpdateWithoutReceivedInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    inActiveGame?: NullableIntFieldUpdateOperationsInput | number | null
    isTemp?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    Games?: UsersGamesUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    sentInvites?: InvitesUncheckedUpdateManyWithoutInviterNestedInput
  }

  export type GamesUpsertWithoutInvitesInput = {
    update: XOR<GamesUpdateWithoutInvitesInput, GamesUncheckedUpdateWithoutInvitesInput>
    create: XOR<GamesCreateWithoutInvitesInput, GamesUncheckedCreateWithoutInvitesInput>
    where?: GamesWhereInput
  }

  export type GamesUpdateToOneWithWhereWithoutInvitesInput = {
    where?: GamesWhereInput
    data: XOR<GamesUpdateWithoutInvitesInput, GamesUncheckedUpdateWithoutInvitesInput>
  }

  export type GamesUpdateWithoutInvitesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTurn?: NullableStringFieldUpdateOperationsInput | string | null
    GameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    confirmChange?: GamesUpdateconfirmChangeInput | string[]
    totalWords?: NullableIntFieldUpdateOperationsInput | number | null
    ticker?: NullableIntFieldUpdateOperationsInput | number | null
    Users?: UsersGamesUpdateManyWithoutGameNestedInput
    messages?: MessagesUpdateManyWithoutGameNestedInput
  }

  export type GamesUncheckedUpdateWithoutInvitesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTurn?: NullableStringFieldUpdateOperationsInput | string | null
    GameMode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    confirmChange?: GamesUpdateconfirmChangeInput | string[]
    totalWords?: NullableIntFieldUpdateOperationsInput | number | null
    ticker?: NullableIntFieldUpdateOperationsInput | number | null
    Users?: UsersGamesUncheckedUpdateManyWithoutGameNestedInput
    messages?: MessagesUncheckedUpdateManyWithoutGameNestedInput
  }

  export type UsersGamesCreateManyUserInput = {
    GameId: number
  }

  export type MessagesCreateManySenderInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    cipher: string
    isResolved?: boolean
    resolveAttempts?: number | null
    gameId: number
  }

  export type InvitesCreateManyInviterInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    alias?: string | null
    status?: $Enums.InviteStatus
    inviteeId: string
    gameId: number
  }

  export type InvitesCreateManyInviteeInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    alias?: string | null
    status?: $Enums.InviteStatus
    inviterId: string
    gameId: number
  }

  export type UsersGamesUpdateWithoutUserInput = {
    game?: GamesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersGamesUncheckedUpdateWithoutUserInput = {
    GameId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersGamesUncheckedUpdateManyWithoutUserInput = {
    GameId?: IntFieldUpdateOperationsInput | number
  }

  export type MessagesUpdateWithoutSenderInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    cipher?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    resolveAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    Game?: GamesUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    cipher?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    resolveAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type MessagesUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    cipher?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    resolveAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type InvitesUpdateWithoutInviterInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    invitee?: UsersUpdateOneRequiredWithoutReceivedInvitesNestedInput
    game?: GamesUpdateOneRequiredWithoutInvitesNestedInput
  }

  export type InvitesUncheckedUpdateWithoutInviterInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    inviteeId?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type InvitesUncheckedUpdateManyWithoutInviterInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    inviteeId?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type InvitesUpdateWithoutInviteeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    inviter?: UsersUpdateOneRequiredWithoutSentInvitesNestedInput
    game?: GamesUpdateOneRequiredWithoutInvitesNestedInput
  }

  export type InvitesUncheckedUpdateWithoutInviteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    inviterId?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type InvitesUncheckedUpdateManyWithoutInviteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    inviterId?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type InvitesCreateManyGameInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    alias?: string | null
    status?: $Enums.InviteStatus
    inviterId: string
    inviteeId: string
  }

  export type UsersGamesCreateManyGameInput = {
    UserId: string
  }

  export type MessagesCreateManyGameInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    cipher: string
    isResolved?: boolean
    resolveAttempts?: number | null
    senderId: string
  }

  export type InvitesUpdateWithoutGameInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    inviter?: UsersUpdateOneRequiredWithoutSentInvitesNestedInput
    invitee?: UsersUpdateOneRequiredWithoutReceivedInvitesNestedInput
  }

  export type InvitesUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    inviterId?: StringFieldUpdateOperationsInput | string
    inviteeId?: StringFieldUpdateOperationsInput | string
  }

  export type InvitesUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    inviterId?: StringFieldUpdateOperationsInput | string
    inviteeId?: StringFieldUpdateOperationsInput | string
  }

  export type UsersGamesUpdateWithoutGameInput = {
    user?: UsersUpdateOneRequiredWithoutGamesNestedInput
  }

  export type UsersGamesUncheckedUpdateWithoutGameInput = {
    UserId?: StringFieldUpdateOperationsInput | string
  }

  export type UsersGamesUncheckedUpdateManyWithoutGameInput = {
    UserId?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesUpdateWithoutGameInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    cipher?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    resolveAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    Sender?: UsersUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    cipher?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    resolveAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    cipher?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    resolveAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    senderId?: StringFieldUpdateOperationsInput | string
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