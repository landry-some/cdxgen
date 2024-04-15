export function prepareDB(options: any): Promise<{
  sequelize: import("sequelize").Sequelize;
  Namespaces: {
    new (
      values?: import("sequelize").Optional<any, string>,
      options?: import("sequelize").BuildOptions,
    ): {
      _attributes: any;
      dataValues: any;
      _creationAttributes: any;
      isNewRecord: boolean;
      sequelize: import("sequelize").Sequelize;
      where(): object;
      getDataValue<K extends string | number | symbol>(key: K): any;
      setDataValue<K_1 extends string | number | symbol>(
        key: K_1,
        value: any,
      ): void;
      get(options?: {
        plain?: boolean;
        clone?: boolean;
      }): any;
      get<K_2 extends keyof any>(
        key: K_2,
        options?: {
          plain?: boolean;
          clone?: boolean;
        },
      ): any[K_2];
      get(
        key: string,
        options?: {
          plain?: boolean;
          clone?: boolean;
        },
      ): unknown;
      set<K_3 extends string | number | symbol>(
        key: K_3,
        value: any,
        options?: import("sequelize").SetOptions,
      ): any;
      set(keys: Partial<any>, options?: import("sequelize").SetOptions): any;
      setAttributes<K_4 extends string | number | symbol>(
        key: K_4,
        value: any,
        options?: import("sequelize").SetOptions,
      ): any;
      setAttributes(
        keys: Partial<any>,
        options?: import("sequelize").SetOptions,
      ): any;
      changed<K_5 extends keyof any>(key: K_5): boolean;
      changed<K_6 extends keyof any>(key: K_6, dirty: boolean): void;
      changed(): false | string[];
      previous(): Partial<any>;
      previous<K_7 extends string | number | symbol>(key: K_7): any;
      save(options?: import("sequelize").SaveOptions<any>): Promise<any>;
      reload(options?: import("sequelize").FindOptions<any>): Promise<any>;
      validate(
        options?: import("sequelize/types/instance-validator.js").ValidationOptions,
      ): Promise<void>;
      update<K_8 extends string | number | symbol>(
        key: K_8,
        value: any,
        options?: import("sequelize").InstanceUpdateOptions<any>,
      ): Promise<any>;
      update(
        keys: {
          [x: string]: any;
        },
        options?: import("sequelize").InstanceUpdateOptions<any>,
      ): Promise<any>;
      destroy(
        options?: import("sequelize").InstanceDestroyOptions,
      ): Promise<void>;
      restore(
        options?: import("sequelize").InstanceRestoreOptions,
      ): Promise<void>;
      increment<K_9 extends string | number | symbol>(
        fields: Partial<any> | K_9 | readonly K_9[],
        options?: import("sequelize").IncrementDecrementOptionsWithBy<any>,
      ): Promise<any>;
      decrement<K_10 extends string | number | symbol>(
        fields: Partial<any> | K_10 | readonly K_10[],
        options?: import("sequelize").IncrementDecrementOptionsWithBy<any>,
      ): Promise<any>;
      equals(other: any): boolean;
      equalsOneOf(others: readonly any[]): boolean;
      toJSON<T extends any>(): T;
      toJSON(): object;
      isSoftDeleted(): boolean;
      _model: import("sequelize").Model<any, any>;
      addHook<
        K_11 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
          M,
          TModelAttributes,
          TCreationAttributes
        >,
      >(
        hookType: K_11,
        name: string,
        fn: import("sequelize/types/hooks.js").SequelizeHooks<
          import("sequelize").Model<any, any>,
          any,
          any
        >[K_11],
      ): any;
      addHook<
        K_12 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
          M,
          TModelAttributes,
          TCreationAttributes
        >,
      >(
        hookType: K_12,
        fn: import("sequelize/types/hooks.js").SequelizeHooks<
          import("sequelize").Model<any, any>,
          any,
          any
        >[K_12],
      ): any;
      removeHook<
        K_13 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
          M,
          TModelAttributes,
          TCreationAttributes
        >,
      >(hookType: K_13, name: string): any;
      hasHook<
        K_14 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
          M,
          TModelAttributes,
          TCreationAttributes
        >,
      >(hookType: K_14): boolean;
      hasHooks<
        K_15 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
          M,
          TModelAttributes,
          TCreationAttributes
        >,
      >(hookType: K_15): boolean;
    };
    readonly tableName: string;
    readonly primaryKeyAttribute: string;
    readonly primaryKeyAttributes: readonly string[];
    readonly associations: {
      [key: string]: import("sequelize").Association<
        import("sequelize").Model<any, any>,
        import("sequelize").Model<any, any>
      >;
    };
    readonly options: import("sequelize").InitOptions<
      import("sequelize").Model<any, any>
    >;
    readonly rawAttributes: {
      [attribute: string]: import("sequelize").ModelAttributeColumnOptions<
        import("sequelize").Model<any, any>
      >;
    };
    getAttributes<M_1 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_1>,
    ): {
      readonly [Key in keyof import("sequelize").Attributes<M_1>]: import("sequelize").ModelAttributeColumnOptions<
        import("sequelize").Model<any, any>
      >;
    };
    readonly sequelize?: import("sequelize").Sequelize;
    init<
      MS extends import("sequelize").ModelStatic<
        import("sequelize").Model<any, any>
      >,
      M_2 extends InstanceType<MS>,
    >(
      this: MS,
      attributes: import("sequelize").ModelAttributes<
        M_2,
        import("sequelize").Optional<
          import("sequelize").Attributes<M_2>,
          (import("sequelize").Attributes<M_2> extends infer T_1
            ? {
                [P in keyof T_1]-?: (
                  keyof NonNullable<
                    import("sequelize").Attributes<M_2>[P]
                  > extends Exclude<
                    keyof NonNullable<import("sequelize").Attributes<M_2>[P]>,
                    unique symbol
                  >
                    ? false
                    : true
                ) extends true
                  ? P
                  : never;
              }
            : never)[keyof import("sequelize").Attributes<M_2>]
        >
      >,
      options: import("sequelize").InitOptions<M_2>,
    ): MS;
    removeAttribute(attribute: string): void;
    sync<M_3 extends import("sequelize").Model<any, any>>(
      options?: import("sequelize").SyncOptions,
    ): Promise<M_3>;
    drop(options?: import("sequelize").DropOptions): Promise<void>;
    schema<M_4 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_4>,
      schema: string,
      options?: import("sequelize").SchemaOptions,
    ): import("sequelize").ModelCtor<M_4>;
    getTableName():
      | string
      | {
          tableName: string;
          schema: string;
          delimiter: string;
        };
    scope<M_5 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_5>,
      options?:
        | string
        | import("sequelize").ScopeOptions
        | readonly (string | import("sequelize").ScopeOptions)[]
        | import("sequelize").WhereAttributeHash<M_5>,
    ): import("sequelize").ModelCtor<M_5>;
    addScope<M_6 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_6>,
      name: string,
      scope: import("sequelize").FindOptions<
        import("sequelize").Attributes<M_6>
      >,
      options?: import("sequelize").AddScopeOptions,
    ): void;
    addScope<M_7 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_7>,
      name: string,
      scope: (
        ...args: readonly any[]
      ) => import("sequelize").FindOptions<import("sequelize").Attributes<M_7>>,
      options?: import("sequelize").AddScopeOptions,
    ): void;
    findAll<M_8 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_8>,
      options?: import("sequelize").FindOptions<
        import("sequelize").Attributes<M_8>
      >,
    ): Promise<M_8[]>;
    findByPk<M_9 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_9>,
      identifier: import("sequelize").Identifier,
      options: Omit<
        import("sequelize").NonNullFindOptions<
          import("sequelize").Attributes<M_9>
        >,
        "where"
      >,
    ): Promise<M_9>;
    findByPk<M_10 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_10>,
      identifier?: import("sequelize").Identifier,
      options?: Omit<
        import("sequelize").FindOptions<import("sequelize").Attributes<M_10>>,
        "where"
      >,
    ): Promise<M_10>;
    findOne<M_11 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_11>,
      options: import("sequelize").NonNullFindOptions<
        import("sequelize").Attributes<M_11>
      >,
    ): Promise<M_11>;
    findOne<M_12 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_12>,
      options?: import("sequelize").FindOptions<
        import("sequelize").Attributes<M_12>
      >,
    ): Promise<M_12>;
    aggregate<T_2, M_13 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_13>,
      field: "*" | keyof import("sequelize").Attributes<M_13>,
      aggregateFunction: string,
      options?: import("sequelize").AggregateOptions<
        T_2,
        import("sequelize").Attributes<M_13>
      >,
    ): Promise<T_2>;
    count<M_14 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_14>,
      options: {
        attributes?: import("sequelize").FindAttributeOptions;
        logging?: boolean | ((sql: string, timing?: number) => void);
        where?: import("sequelize").WhereOptions<
          import("sequelize").Attributes<M_14>
        >;
        include?:
          | import("sequelize").Includeable
          | import("sequelize").Includeable[];
        benchmark?: boolean;
        transaction?: import("sequelize").Transaction;
        useMaster?: boolean;
        paranoid?: boolean;
        col?: string;
        distinct?: boolean;
        group: import("sequelize").GroupOption;
      },
    ): Promise<import("sequelize").GroupedCountResultItem[]>;
    count<M_15 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_15>,
      options?: Omit<
        import("sequelize").CountOptions<import("sequelize").Attributes<M_15>>,
        "group"
      >,
    ): Promise<number>;
    findAndCountAll<M_16 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_16>,
      options?: Omit<
        import("sequelize").FindAndCountOptions<
          import("sequelize").Attributes<M_16>
        >,
        "group"
      >,
    ): Promise<{
      rows: M_16[];
      count: number;
    }>;
    findAndCountAll<M_17 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_17>,
      options: {
        type?: string;
        attributes?: import("sequelize").FindAttributeOptions;
        plain?: boolean;
        logging?: boolean | ((sql: string, timing?: number) => void);
        where?: import("sequelize").WhereOptions<
          import("sequelize").Attributes<M_17>
        >;
        include?:
          | import("sequelize").Includeable
          | import("sequelize").Includeable[];
        order?: import("sequelize").Order;
        limit?: number;
        groupedLimit?: unknown;
        offset?: number;
        lock?:
          | boolean
          | import("sequelize").LOCK
          | {
              level: import("sequelize").LOCK;
              of: import("sequelize").ModelStatic<
                import("sequelize").Model<any, any>
              >;
            };
        skipLocked?: boolean;
        raw?: boolean;
        having?: import("sequelize").WhereOptions<any>;
        subQuery?: boolean;
        nest?: boolean;
        replacements?: import("sequelize").BindOrReplacements;
        bind?: import("sequelize").BindOrReplacements;
        instance?: import("sequelize").Model<any, any>;
        mapToModel?: boolean;
        retry?: import("retry-as-promised").Options;
        fieldMap?: import("sequelize").FieldMap;
        benchmark?: boolean;
        transaction?: import("sequelize").Transaction;
        useMaster?: boolean;
        paranoid?: boolean;
        indexHints?: import("sequelize").IndexHint[];
        col?: string;
        distinct?: boolean;
        group: import("sequelize").GroupOption;
      },
    ): Promise<{
      rows: M_17[];
      count: import("sequelize").GroupedCountResultItem[];
    }>;
    max<T_3 extends unknown, M_18 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_18>,
      field: keyof import("sequelize").Attributes<M_18>,
      options?: import("sequelize").AggregateOptions<
        T_3,
        import("sequelize").Attributes<M_18>
      >,
    ): Promise<T_3>;
    min<T_4 extends unknown, M_19 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_19>,
      field: keyof import("sequelize").Attributes<M_19>,
      options?: import("sequelize").AggregateOptions<
        T_4,
        import("sequelize").Attributes<M_19>
      >,
    ): Promise<T_4>;
    sum<T_5 extends unknown, M_20 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_20>,
      field: keyof import("sequelize").Attributes<M_20>,
      options?: import("sequelize").AggregateOptions<
        T_5,
        import("sequelize").Attributes<M_20>
      >,
    ): Promise<number>;
    build<M_21 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_21>,
      record?: import("sequelize/types/utils.js").MakeNullishOptional<
        M_21["_creationAttributes"]
      >,
      options?: import("sequelize").BuildOptions,
    ): M_21;
    bulkBuild<M_22 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_22>,
      records: readonly import("sequelize/types/utils.js").MakeNullishOptional<
        M_22["_creationAttributes"]
      >[],
      options?: import("sequelize").BuildOptions,
    ): M_22[];
    create<
      M_23 extends import("sequelize").Model<any, any>,
      O extends import("sequelize").CreateOptions<
        import("sequelize").Attributes<M_23>
      > = import("sequelize").CreateOptions<
        import("sequelize").Attributes<M_23>
      >,
    >(
      this: import("sequelize").ModelStatic<M_23>,
      values?: import("sequelize/types/utils.js").MakeNullishOptional<
        M_23["_creationAttributes"]
      >,
      options?: O,
    ): Promise<
      O extends
        | {
            returning: false;
          }
        | {
            ignoreDuplicates: true;
          }
        ? void
        : M_23
    >;
    findOrBuild<M_24 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_24>,
      options: import("sequelize").FindOrBuildOptions<
        import("sequelize").Attributes<M_24>,
        import("sequelize/types/utils.js").MakeNullishOptional<
          M_24["_creationAttributes"]
        >
      >,
    ): Promise<[M_24, boolean]>;
    findOrCreate<M_25 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_25>,
      options: import("sequelize").FindOrCreateOptions<
        import("sequelize").Attributes<M_25>,
        import("sequelize/types/utils.js").MakeNullishOptional<
          M_25["_creationAttributes"]
        >
      >,
    ): Promise<[M_25, boolean]>;
    findCreateFind<M_26 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_26>,
      options: import("sequelize").FindOrCreateOptions<
        import("sequelize").Attributes<M_26>,
        import("sequelize/types/utils.js").MakeNullishOptional<
          M_26["_creationAttributes"]
        >
      >,
    ): Promise<[M_26, boolean]>;
    upsert<M_27 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_27>,
      values: import("sequelize/types/utils.js").MakeNullishOptional<
        M_27["_creationAttributes"]
      >,
      options?: import("sequelize").UpsertOptions<
        import("sequelize").Attributes<M_27>
      >,
    ): Promise<[M_27, boolean]>;
    bulkCreate<M_28 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_28>,
      records: readonly import("sequelize/types/utils.js").MakeNullishOptional<
        M_28["_creationAttributes"]
      >[],
      options?: import("sequelize").BulkCreateOptions<
        import("sequelize").Attributes<M_28>
      >,
    ): Promise<M_28[]>;
    truncate<M_29 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_29>,
      options?: import("sequelize").TruncateOptions<
        import("sequelize").Attributes<M_29>
      >,
    ): Promise<void>;
    destroy<M_30 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_30>,
      options?: import("sequelize").DestroyOptions<
        import("sequelize").Attributes<M_30>
      >,
    ): Promise<number>;
    restore<M_31 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_31>,
      options?: import("sequelize").RestoreOptions<
        import("sequelize").Attributes<M_31>
      >,
    ): Promise<void>;
    update<M_32 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_32>,
      values: {
        [key in keyof import("sequelize").Attributes<M_32>]?:
          | import("sequelize/types/utils.js").Fn
          | import("sequelize/types/utils.js").Col
          | import("sequelize/types/utils.js").Literal
          | import("sequelize").Attributes<M_32>[key];
      },
      options: Omit<
        import("sequelize").UpdateOptions<import("sequelize").Attributes<M_32>>,
        "returning"
      > & {
        returning: true | (keyof import("sequelize").Attributes<M_32>)[];
      },
    ): Promise<[affectedCount: number, affectedRows: M_32[]]>;
    update<M_33 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_33>,
      values: {
        [key_1 in keyof import("sequelize").Attributes<M_33>]?:
          | import("sequelize/types/utils.js").Fn
          | import("sequelize/types/utils.js").Col
          | import("sequelize/types/utils.js").Literal
          | import("sequelize").Attributes<M_33>[key_1];
      },
      options: import("sequelize").UpdateOptions<
        import("sequelize").Attributes<M_33>
      >,
    ): Promise<[affectedCount: number]>;
    increment<M_34 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_34>,
      fields: import("sequelize").AllowReadonlyArray<
        keyof import("sequelize").Attributes<M_34>
      >,
      options: import("sequelize").IncrementDecrementOptionsWithBy<
        import("sequelize").Attributes<M_34>
      >,
    ): Promise<[affectedRows: M_34[], affectedCount?: number]>;
    increment<M_35 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_35>,
      fields: {
        [key_2 in keyof import("sequelize").Attributes<M_35>]?: number;
      },
      options: import("sequelize").IncrementDecrementOptions<
        import("sequelize").Attributes<M_35>
      >,
    ): Promise<[affectedRows: M_35[], affectedCount?: number]>;
    decrement<M_36 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_36>,
      fields: import("sequelize").AllowReadonlyArray<
        keyof import("sequelize").Attributes<M_36>
      >,
      options: import("sequelize").IncrementDecrementOptionsWithBy<
        import("sequelize").Attributes<M_36>
      >,
    ): Promise<[affectedRows: M_36[], affectedCount?: number]>;
    decrement<M_37 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_37>,
      fields: {
        [key_3 in keyof import("sequelize").Attributes<M_37>]?: number;
      },
      options: import("sequelize").IncrementDecrementOptions<
        import("sequelize").Attributes<M_37>
      >,
    ): Promise<[affectedRows: M_37[], affectedCount?: number]>;
    describe(): Promise<object>;
    unscoped<M_38 extends import("sequelize").ModelType<any, any>>(
      this: M_38,
    ): M_38;
    beforeValidate<M_39 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_39>,
      name: string,
      fn: (
        instance: M_39,
        options: import("sequelize/types/instance-validator.js").ValidationOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeValidate<M_40 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_40>,
      fn: (
        instance: M_40,
        options: import("sequelize/types/instance-validator.js").ValidationOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterValidate<M_41 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_41>,
      name: string,
      fn: (
        instance: M_41,
        options: import("sequelize/types/instance-validator.js").ValidationOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterValidate<M_42 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_42>,
      fn: (
        instance: M_42,
        options: import("sequelize/types/instance-validator.js").ValidationOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeCreate<M_43 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_43>,
      name: string,
      fn: (
        instance: M_43,
        options: import("sequelize").CreateOptions<
          import("sequelize").Attributes<M_43>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeCreate<M_44 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_44>,
      fn: (
        instance: M_44,
        options: import("sequelize").CreateOptions<
          import("sequelize").Attributes<M_44>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterCreate<M_45 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_45>,
      name: string,
      fn: (
        instance: M_45,
        options: import("sequelize").CreateOptions<
          import("sequelize").Attributes<M_45>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterCreate<M_46 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_46>,
      fn: (
        instance: M_46,
        options: import("sequelize").CreateOptions<
          import("sequelize").Attributes<M_46>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeDestroy<M_47 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_47>,
      name: string,
      fn: (
        instance: M_47,
        options: import("sequelize").InstanceDestroyOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeDestroy<M_48 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_48>,
      fn: (
        instance: M_48,
        options: import("sequelize").InstanceDestroyOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterDestroy<M_49 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_49>,
      name: string,
      fn: (
        instance: M_49,
        options: import("sequelize").InstanceDestroyOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterDestroy<M_50 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_50>,
      fn: (
        instance: M_50,
        options: import("sequelize").InstanceDestroyOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeUpdate<M_51 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_51>,
      name: string,
      fn: (
        instance: M_51,
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_51>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeUpdate<M_52 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_52>,
      fn: (
        instance: M_52,
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_52>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterUpdate<M_53 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_53>,
      name: string,
      fn: (
        instance: M_53,
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_53>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterUpdate<M_54 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_54>,
      fn: (
        instance: M_54,
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_54>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeSave<M_55 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_55>,
      name: string,
      fn: (
        instance: M_55,
        options:
          | import("sequelize").UpdateOptions<
              import("sequelize").Attributes<M_55>
            >
          | import("sequelize").SaveOptions<
              import("sequelize").Attributes<M_55>
            >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeSave<M_56 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_56>,
      fn: (
        instance: M_56,
        options:
          | import("sequelize").UpdateOptions<
              import("sequelize").Attributes<M_56>
            >
          | import("sequelize").SaveOptions<
              import("sequelize").Attributes<M_56>
            >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterSave<M_57 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_57>,
      name: string,
      fn: (
        instance: M_57,
        options:
          | import("sequelize").UpdateOptions<
              import("sequelize").Attributes<M_57>
            >
          | import("sequelize").SaveOptions<
              import("sequelize").Attributes<M_57>
            >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterSave<M_58 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_58>,
      fn: (
        instance: M_58,
        options:
          | import("sequelize").UpdateOptions<
              import("sequelize").Attributes<M_58>
            >
          | import("sequelize").SaveOptions<
              import("sequelize").Attributes<M_58>
            >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkCreate<M_59 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_59>,
      name: string,
      fn: (
        instances: M_59[],
        options: import("sequelize").BulkCreateOptions<
          import("sequelize").Attributes<M_59>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkCreate<M_60 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_60>,
      fn: (
        instances: M_60[],
        options: import("sequelize").BulkCreateOptions<
          import("sequelize").Attributes<M_60>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkCreate<M_61 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_61>,
      name: string,
      fn: (
        instances: readonly M_61[],
        options: import("sequelize").BulkCreateOptions<
          import("sequelize").Attributes<M_61>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkCreate<M_62 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_62>,
      fn: (
        instances: readonly M_62[],
        options: import("sequelize").BulkCreateOptions<
          import("sequelize").Attributes<M_62>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkDestroy<M_63 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_63>,
      name: string,
      fn: (
        options: import("sequelize").BulkCreateOptions<
          import("sequelize").Attributes<M_63>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkDestroy<M_64 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_64>,
      fn: (
        options: import("sequelize").BulkCreateOptions<
          import("sequelize").Attributes<M_64>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkDestroy<M_65 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_65>,
      name: string,
      fn: (
        options: import("sequelize").DestroyOptions<
          import("sequelize").Attributes<M_65>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkDestroy<M_66 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_66>,
      fn: (
        options: import("sequelize").DestroyOptions<
          import("sequelize").Attributes<M_66>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkUpdate<M_67 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_67>,
      name: string,
      fn: (
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_67>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkUpdate<M_68 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_68>,
      fn: (
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_68>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkUpdate<M_69 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_69>,
      name: string,
      fn: (
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_69>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkUpdate<M_70 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_70>,
      fn: (
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_70>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeFind<M_71 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_71>,
      name: string,
      fn: (
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_71>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeFind<M_72 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_72>,
      fn: (
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_72>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeCount<M_73 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_73>,
      name: string,
      fn: (
        options: import("sequelize").CountOptions<
          import("sequelize").Attributes<M_73>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeCount<M_74 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_74>,
      fn: (
        options: import("sequelize").CountOptions<
          import("sequelize").Attributes<M_74>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeFindAfterExpandIncludeAll<
      M_75 extends import("sequelize").Model<any, any>,
    >(
      this: import("sequelize").ModelStatic<M_75>,
      name: string,
      fn: (
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_75>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeFindAfterExpandIncludeAll<
      M_76 extends import("sequelize").Model<any, any>,
    >(
      this: import("sequelize").ModelStatic<M_76>,
      fn: (
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_76>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeFindAfterOptions<M_77 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_77>,
      name: string,
      fn: (
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_77>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeFindAfterOptions<M_78 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_78>,
      fn: (
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_78>
        >,
      ) => void,
    ): import("sequelize/types/hooks.js").HookReturn;
    afterFind<M_79 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_79>,
      name: string,
      fn: (
        instancesOrInstance: M_79 | readonly M_79[],
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_79>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterFind<M_80 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_80>,
      fn: (
        instancesOrInstance: M_80 | readonly M_80[],
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_80>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkSync(
      name: string,
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkSync(
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkSync(
      name: string,
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkSync(
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeSync(
      name: string,
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeSync(
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterSync(
      name: string,
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterSync(
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    hasOne<
      M_81 extends import("sequelize").Model<any, any>,
      T_6 extends import("sequelize").Model<any, any>,
    >(
      this: import("sequelize").ModelStatic<M_81>,
      target: import("sequelize").ModelStatic<T_6>,
      options?: import("sequelize").HasOneOptions,
    ): import("sequelize").HasOne<M_81, T_6>;
    belongsTo<
      M_82 extends import("sequelize").Model<any, any>,
      T_7 extends import("sequelize").Model<any, any>,
    >(
      this: import("sequelize").ModelStatic<M_82>,
      target: import("sequelize").ModelStatic<T_7>,
      options?: import("sequelize").BelongsToOptions,
    ): import("sequelize").BelongsTo<M_82, T_7>;
    hasMany<
      M_83 extends import("sequelize").Model<any, any>,
      T_8 extends import("sequelize").Model<any, any>,
    >(
      this: import("sequelize").ModelStatic<M_83>,
      target: import("sequelize").ModelStatic<T_8>,
      options?: import("sequelize").HasManyOptions,
    ): import("sequelize").HasMany<M_83, T_8>;
    belongsToMany<
      M_84 extends import("sequelize").Model<any, any>,
      T_9 extends import("sequelize").Model<any, any>,
    >(
      this: import("sequelize").ModelStatic<M_84>,
      target: import("sequelize").ModelStatic<T_9>,
      options: import("sequelize").BelongsToManyOptions,
    ): import("sequelize").BelongsToMany<M_84, T_9>;
    addHook<
      H extends import("sequelize/types/hooks.js").Hooks<
        import("sequelize").Model<any, any>,
        any,
        any
      >,
      K_16 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
        H["_model"],
        import("sequelize").Attributes<H>,
        import("sequelize").CreationAttributes<H>
      >,
    >(
      this: import("sequelize/types/hooks.js").HooksStatic<H>,
      hookType: K_16,
      name: string,
      fn: import("sequelize/types/hooks.js").SequelizeHooks<
        H["_model"],
        import("sequelize").Attributes<H>,
        import("sequelize").CreationAttributes<H>
      >[K_16],
    ): import("sequelize/types/hooks.js").HooksCtor<H>;
    addHook<
      H_1 extends import("sequelize/types/hooks.js").Hooks<
        import("sequelize").Model<any, any>,
        any,
        any
      >,
      K_17 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
        H_1["_model"],
        import("sequelize").Attributes<H_1>,
        import("sequelize").CreationAttributes<H_1>
      >,
    >(
      this: import("sequelize/types/hooks.js").HooksStatic<H_1>,
      hookType: K_17,
      fn: import("sequelize/types/hooks.js").SequelizeHooks<
        H_1["_model"],
        import("sequelize").Attributes<H_1>,
        import("sequelize").CreationAttributes<H_1>
      >[K_17],
    ): import("sequelize/types/hooks.js").HooksCtor<H_1>;
    removeHook<
      H_2 extends import("sequelize/types/hooks.js").Hooks<
        import("sequelize").Model<any, any>,
        any,
        any
      >,
    >(
      this: import("sequelize/types/hooks.js").HooksStatic<H_2>,
      hookType: keyof import("sequelize/types/hooks.js").SequelizeHooks<
        H_2["_model"],
        import("sequelize").Attributes<H_2>,
        import("sequelize").CreationAttributes<H_2>
      >,
      name: string,
    ): import("sequelize/types/hooks.js").HooksCtor<H_2>;
    hasHook<
      H_3 extends import("sequelize/types/hooks.js").Hooks<
        import("sequelize").Model<any, any>,
        any,
        any
      >,
    >(
      this: import("sequelize/types/hooks.js").HooksStatic<H_3>,
      hookType: keyof import("sequelize/types/hooks.js").SequelizeHooks<
        H_3["_model"],
        import("sequelize").Attributes<H_3>,
        import("sequelize").CreationAttributes<H_3>
      >,
    ): boolean;
    hasHooks<
      H_4 extends import("sequelize/types/hooks.js").Hooks<
        import("sequelize").Model<any, any>,
        any,
        any
      >,
    >(
      this: import("sequelize/types/hooks.js").HooksStatic<H_4>,
      hookType: keyof import("sequelize/types/hooks.js").SequelizeHooks<
        H_4["_model"],
        import("sequelize").Attributes<H_4>,
        import("sequelize").CreationAttributes<H_4>
      >,
    ): boolean;
  };
  Usages: {
    new (
      values?: import("sequelize").Optional<any, string>,
      options?: import("sequelize").BuildOptions,
    ): {
      _attributes: any;
      dataValues: any;
      _creationAttributes: any;
      isNewRecord: boolean;
      sequelize: import("sequelize").Sequelize;
      where(): object;
      getDataValue<K extends string | number | symbol>(key: K): any;
      setDataValue<K_1 extends string | number | symbol>(
        key: K_1,
        value: any,
      ): void;
      get(options?: {
        plain?: boolean;
        clone?: boolean;
      }): any;
      get<K_18 extends keyof any>(
        key: K_18,
        options?: {
          plain?: boolean;
          clone?: boolean;
        },
      ): any[K_18];
      get(
        key: string,
        options?: {
          plain?: boolean;
          clone?: boolean;
        },
      ): unknown;
      set<K_19 extends string | number | symbol>(
        key: K_19,
        value: any,
        options?: import("sequelize").SetOptions,
      ): any;
      set(keys: Partial<any>, options?: import("sequelize").SetOptions): any;
      setAttributes<K_20 extends string | number | symbol>(
        key: K_20,
        value: any,
        options?: import("sequelize").SetOptions,
      ): any;
      setAttributes(
        keys: Partial<any>,
        options?: import("sequelize").SetOptions,
      ): any;
      changed<K_21 extends keyof any>(key: K_21): boolean;
      changed<K_22 extends keyof any>(key: K_22, dirty: boolean): void;
      changed(): false | string[];
      previous(): Partial<any>;
      previous<K_7 extends string | number | symbol>(key: K_7): any;
      save(options?: import("sequelize").SaveOptions<any>): Promise<any>;
      reload(options?: import("sequelize").FindOptions<any>): Promise<any>;
      validate(
        options?: import("sequelize/types/instance-validator.js").ValidationOptions,
      ): Promise<void>;
      update<K_23 extends string | number | symbol>(
        key: K_23,
        value: any,
        options?: import("sequelize").InstanceUpdateOptions<any>,
      ): Promise<any>;
      update(
        keys: {
          [x: string]: any;
        },
        options?: import("sequelize").InstanceUpdateOptions<any>,
      ): Promise<any>;
      destroy(
        options?: import("sequelize").InstanceDestroyOptions,
      ): Promise<void>;
      restore(
        options?: import("sequelize").InstanceRestoreOptions,
      ): Promise<void>;
      increment<K_24 extends string | number | symbol>(
        fields: Partial<any> | K_24 | readonly K_24[],
        options?: import("sequelize").IncrementDecrementOptionsWithBy<any>,
      ): Promise<any>;
      decrement<K_25 extends string | number | symbol>(
        fields: Partial<any> | K_25 | readonly K_25[],
        options?: import("sequelize").IncrementDecrementOptionsWithBy<any>,
      ): Promise<any>;
      equals(other: any): boolean;
      equalsOneOf(others: readonly any[]): boolean;
      toJSON<T extends any>(): T;
      toJSON(): object;
      isSoftDeleted(): boolean;
      _model: import("sequelize").Model<any, any>;
      addHook<
        K_26 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
          M,
          TModelAttributes,
          TCreationAttributes
        >,
      >(
        hookType: K_26,
        name: string,
        fn: import("sequelize/types/hooks.js").SequelizeHooks<
          import("sequelize").Model<any, any>,
          any,
          any
        >[K_26],
      ): any;
      addHook<
        K_27 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
          M,
          TModelAttributes,
          TCreationAttributes
        >,
      >(
        hookType: K_27,
        fn: import("sequelize/types/hooks.js").SequelizeHooks<
          import("sequelize").Model<any, any>,
          any,
          any
        >[K_27],
      ): any;
      removeHook<
        K_28 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
          M,
          TModelAttributes,
          TCreationAttributes
        >,
      >(hookType: K_28, name: string): any;
      hasHook<
        K_14 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
          M,
          TModelAttributes,
          TCreationAttributes
        >,
      >(hookType: K_14): boolean;
      hasHooks<
        K_15 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
          M,
          TModelAttributes,
          TCreationAttributes
        >,
      >(hookType: K_15): boolean;
    };
    readonly tableName: string;
    readonly primaryKeyAttribute: string;
    readonly primaryKeyAttributes: readonly string[];
    readonly associations: {
      [key: string]: import("sequelize").Association<
        import("sequelize").Model<any, any>,
        import("sequelize").Model<any, any>
      >;
    };
    readonly options: import("sequelize").InitOptions<
      import("sequelize").Model<any, any>
    >;
    readonly rawAttributes: {
      [attribute: string]: import("sequelize").ModelAttributeColumnOptions<
        import("sequelize").Model<any, any>
      >;
    };
    getAttributes<M_1 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_1>,
    ): {
      readonly [Key in keyof import("sequelize").Attributes<M_1>]: import("sequelize").ModelAttributeColumnOptions<
        import("sequelize").Model<any, any>
      >;
    };
    readonly sequelize?: import("sequelize").Sequelize;
    init<
      MS extends import("sequelize").ModelStatic<
        import("sequelize").Model<any, any>
      >,
      M_2 extends InstanceType<MS>,
    >(
      this: MS,
      attributes: import("sequelize").ModelAttributes<
        M_2,
        import("sequelize").Optional<
          import("sequelize").Attributes<M_2>,
          (import("sequelize").Attributes<M_2> extends infer T_10
            ? {
                [P in keyof T_10]-?: (
                  keyof NonNullable<
                    import("sequelize").Attributes<M_2>[P]
                  > extends Exclude<
                    keyof NonNullable<import("sequelize").Attributes<M_2>[P]>,
                    unique symbol
                  >
                    ? false
                    : true
                ) extends true
                  ? P
                  : never;
              }
            : never)[keyof import("sequelize").Attributes<M_2>]
        >
      >,
      options: import("sequelize").InitOptions<M_2>,
    ): MS;
    removeAttribute(attribute: string): void;
    sync<M_3 extends import("sequelize").Model<any, any>>(
      options?: import("sequelize").SyncOptions,
    ): Promise<M_3>;
    drop(options?: import("sequelize").DropOptions): Promise<void>;
    schema<M_4 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_4>,
      schema: string,
      options?: import("sequelize").SchemaOptions,
    ): import("sequelize").ModelCtor<M_4>;
    getTableName():
      | string
      | {
          tableName: string;
          schema: string;
          delimiter: string;
        };
    scope<M_5 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_5>,
      options?:
        | string
        | import("sequelize").ScopeOptions
        | readonly (string | import("sequelize").ScopeOptions)[]
        | import("sequelize").WhereAttributeHash<M_5>,
    ): import("sequelize").ModelCtor<M_5>;
    addScope<M_6 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_6>,
      name: string,
      scope: import("sequelize").FindOptions<
        import("sequelize").Attributes<M_6>
      >,
      options?: import("sequelize").AddScopeOptions,
    ): void;
    addScope<M_7 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_7>,
      name: string,
      scope: (
        ...args: readonly any[]
      ) => import("sequelize").FindOptions<import("sequelize").Attributes<M_7>>,
      options?: import("sequelize").AddScopeOptions,
    ): void;
    findAll<M_8 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_8>,
      options?: import("sequelize").FindOptions<
        import("sequelize").Attributes<M_8>
      >,
    ): Promise<M_8[]>;
    findByPk<M_9 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_9>,
      identifier: import("sequelize").Identifier,
      options: Omit<
        import("sequelize").NonNullFindOptions<
          import("sequelize").Attributes<M_9>
        >,
        "where"
      >,
    ): Promise<M_9>;
    findByPk<M_10 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_10>,
      identifier?: import("sequelize").Identifier,
      options?: Omit<
        import("sequelize").FindOptions<import("sequelize").Attributes<M_10>>,
        "where"
      >,
    ): Promise<M_10>;
    findOne<M_11 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_11>,
      options: import("sequelize").NonNullFindOptions<
        import("sequelize").Attributes<M_11>
      >,
    ): Promise<M_11>;
    findOne<M_12 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_12>,
      options?: import("sequelize").FindOptions<
        import("sequelize").Attributes<M_12>
      >,
    ): Promise<M_12>;
    aggregate<T_2, M_13 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_13>,
      field: "*" | keyof import("sequelize").Attributes<M_13>,
      aggregateFunction: string,
      options?: import("sequelize").AggregateOptions<
        T_2,
        import("sequelize").Attributes<M_13>
      >,
    ): Promise<T_2>;
    count<M_14 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_14>,
      options: {
        attributes?: import("sequelize").FindAttributeOptions;
        logging?: boolean | ((sql: string, timing?: number) => void);
        where?: import("sequelize").WhereOptions<
          import("sequelize").Attributes<M_14>
        >;
        include?:
          | import("sequelize").Includeable
          | import("sequelize").Includeable[];
        benchmark?: boolean;
        transaction?: import("sequelize").Transaction;
        useMaster?: boolean;
        paranoid?: boolean;
        col?: string;
        distinct?: boolean;
        group: import("sequelize").GroupOption;
      },
    ): Promise<import("sequelize").GroupedCountResultItem[]>;
    count<M_15 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_15>,
      options?: Omit<
        import("sequelize").CountOptions<import("sequelize").Attributes<M_15>>,
        "group"
      >,
    ): Promise<number>;
    findAndCountAll<M_16 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_16>,
      options?: Omit<
        import("sequelize").FindAndCountOptions<
          import("sequelize").Attributes<M_16>
        >,
        "group"
      >,
    ): Promise<{
      rows: M_16[];
      count: number;
    }>;
    findAndCountAll<M_17 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_17>,
      options: {
        type?: string;
        attributes?: import("sequelize").FindAttributeOptions;
        plain?: boolean;
        logging?: boolean | ((sql: string, timing?: number) => void);
        where?: import("sequelize").WhereOptions<
          import("sequelize").Attributes<M_17>
        >;
        include?:
          | import("sequelize").Includeable
          | import("sequelize").Includeable[];
        order?: import("sequelize").Order;
        limit?: number;
        groupedLimit?: unknown;
        offset?: number;
        lock?:
          | boolean
          | import("sequelize").LOCK
          | {
              level: import("sequelize").LOCK;
              of: import("sequelize").ModelStatic<
                import("sequelize").Model<any, any>
              >;
            };
        skipLocked?: boolean;
        raw?: boolean;
        having?: import("sequelize").WhereOptions<any>;
        subQuery?: boolean;
        nest?: boolean;
        replacements?: import("sequelize").BindOrReplacements;
        bind?: import("sequelize").BindOrReplacements;
        instance?: import("sequelize").Model<any, any>;
        mapToModel?: boolean;
        retry?: import("retry-as-promised").Options;
        fieldMap?: import("sequelize").FieldMap;
        benchmark?: boolean;
        transaction?: import("sequelize").Transaction;
        useMaster?: boolean;
        paranoid?: boolean;
        indexHints?: import("sequelize").IndexHint[];
        col?: string;
        distinct?: boolean;
        group: import("sequelize").GroupOption;
      },
    ): Promise<{
      rows: M_17[];
      count: import("sequelize").GroupedCountResultItem[];
    }>;
    max<T_3 extends unknown, M_18 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_18>,
      field: keyof import("sequelize").Attributes<M_18>,
      options?: import("sequelize").AggregateOptions<
        T_3,
        import("sequelize").Attributes<M_18>
      >,
    ): Promise<T_3>;
    min<T_4 extends unknown, M_19 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_19>,
      field: keyof import("sequelize").Attributes<M_19>,
      options?: import("sequelize").AggregateOptions<
        T_4,
        import("sequelize").Attributes<M_19>
      >,
    ): Promise<T_4>;
    sum<T_5 extends unknown, M_20 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_20>,
      field: keyof import("sequelize").Attributes<M_20>,
      options?: import("sequelize").AggregateOptions<
        T_5,
        import("sequelize").Attributes<M_20>
      >,
    ): Promise<number>;
    build<M_21 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_21>,
      record?: import("sequelize/types/utils.js").MakeNullishOptional<
        M_21["_creationAttributes"]
      >,
      options?: import("sequelize").BuildOptions,
    ): M_21;
    bulkBuild<M_22 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_22>,
      records: readonly import("sequelize/types/utils.js").MakeNullishOptional<
        M_22["_creationAttributes"]
      >[],
      options?: import("sequelize").BuildOptions,
    ): M_22[];
    create<
      M_23 extends import("sequelize").Model<any, any>,
      O extends import("sequelize").CreateOptions<
        import("sequelize").Attributes<M_23>
      > = import("sequelize").CreateOptions<
        import("sequelize").Attributes<M_23>
      >,
    >(
      this: import("sequelize").ModelStatic<M_23>,
      values?: import("sequelize/types/utils.js").MakeNullishOptional<
        M_23["_creationAttributes"]
      >,
      options?: O,
    ): Promise<
      O extends
        | {
            returning: false;
          }
        | {
            ignoreDuplicates: true;
          }
        ? void
        : M_23
    >;
    findOrBuild<M_24 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_24>,
      options: import("sequelize").FindOrBuildOptions<
        import("sequelize").Attributes<M_24>,
        import("sequelize/types/utils.js").MakeNullishOptional<
          M_24["_creationAttributes"]
        >
      >,
    ): Promise<[M_24, boolean]>;
    findOrCreate<M_25 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_25>,
      options: import("sequelize").FindOrCreateOptions<
        import("sequelize").Attributes<M_25>,
        import("sequelize/types/utils.js").MakeNullishOptional<
          M_25["_creationAttributes"]
        >
      >,
    ): Promise<[M_25, boolean]>;
    findCreateFind<M_26 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_26>,
      options: import("sequelize").FindOrCreateOptions<
        import("sequelize").Attributes<M_26>,
        import("sequelize/types/utils.js").MakeNullishOptional<
          M_26["_creationAttributes"]
        >
      >,
    ): Promise<[M_26, boolean]>;
    upsert<M_27 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_27>,
      values: import("sequelize/types/utils.js").MakeNullishOptional<
        M_27["_creationAttributes"]
      >,
      options?: import("sequelize").UpsertOptions<
        import("sequelize").Attributes<M_27>
      >,
    ): Promise<[M_27, boolean]>;
    bulkCreate<M_28 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_28>,
      records: readonly import("sequelize/types/utils.js").MakeNullishOptional<
        M_28["_creationAttributes"]
      >[],
      options?: import("sequelize").BulkCreateOptions<
        import("sequelize").Attributes<M_28>
      >,
    ): Promise<M_28[]>;
    truncate<M_29 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_29>,
      options?: import("sequelize").TruncateOptions<
        import("sequelize").Attributes<M_29>
      >,
    ): Promise<void>;
    destroy<M_30 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_30>,
      options?: import("sequelize").DestroyOptions<
        import("sequelize").Attributes<M_30>
      >,
    ): Promise<number>;
    restore<M_31 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_31>,
      options?: import("sequelize").RestoreOptions<
        import("sequelize").Attributes<M_31>
      >,
    ): Promise<void>;
    update<M_32 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_32>,
      values: {
        [key in keyof import("sequelize").Attributes<M_32>]?:
          | import("sequelize/types/utils.js").Fn
          | import("sequelize/types/utils.js").Col
          | import("sequelize/types/utils.js").Literal
          | import("sequelize").Attributes<M_32>[key];
      },
      options: Omit<
        import("sequelize").UpdateOptions<import("sequelize").Attributes<M_32>>,
        "returning"
      > & {
        returning: true | (keyof import("sequelize").Attributes<M_32>)[];
      },
    ): Promise<[affectedCount: number, affectedRows: M_32[]]>;
    update<M_33 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_33>,
      values: {
        [key_1 in keyof import("sequelize").Attributes<M_33>]?:
          | import("sequelize/types/utils.js").Fn
          | import("sequelize/types/utils.js").Col
          | import("sequelize/types/utils.js").Literal
          | import("sequelize").Attributes<M_33>[key_1];
      },
      options: import("sequelize").UpdateOptions<
        import("sequelize").Attributes<M_33>
      >,
    ): Promise<[affectedCount: number]>;
    increment<M_34 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_34>,
      fields: import("sequelize").AllowReadonlyArray<
        keyof import("sequelize").Attributes<M_34>
      >,
      options: import("sequelize").IncrementDecrementOptionsWithBy<
        import("sequelize").Attributes<M_34>
      >,
    ): Promise<[affectedRows: M_34[], affectedCount?: number]>;
    increment<M_35 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_35>,
      fields: {
        [key_2 in keyof import("sequelize").Attributes<M_35>]?: number;
      },
      options: import("sequelize").IncrementDecrementOptions<
        import("sequelize").Attributes<M_35>
      >,
    ): Promise<[affectedRows: M_35[], affectedCount?: number]>;
    decrement<M_36 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_36>,
      fields: import("sequelize").AllowReadonlyArray<
        keyof import("sequelize").Attributes<M_36>
      >,
      options: import("sequelize").IncrementDecrementOptionsWithBy<
        import("sequelize").Attributes<M_36>
      >,
    ): Promise<[affectedRows: M_36[], affectedCount?: number]>;
    decrement<M_37 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_37>,
      fields: {
        [key_3 in keyof import("sequelize").Attributes<M_37>]?: number;
      },
      options: import("sequelize").IncrementDecrementOptions<
        import("sequelize").Attributes<M_37>
      >,
    ): Promise<[affectedRows: M_37[], affectedCount?: number]>;
    describe(): Promise<object>;
    unscoped<M_38 extends import("sequelize").ModelType<any, any>>(
      this: M_38,
    ): M_38;
    beforeValidate<M_39 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_39>,
      name: string,
      fn: (
        instance: M_39,
        options: import("sequelize/types/instance-validator.js").ValidationOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeValidate<M_40 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_40>,
      fn: (
        instance: M_40,
        options: import("sequelize/types/instance-validator.js").ValidationOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterValidate<M_41 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_41>,
      name: string,
      fn: (
        instance: M_41,
        options: import("sequelize/types/instance-validator.js").ValidationOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterValidate<M_42 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_42>,
      fn: (
        instance: M_42,
        options: import("sequelize/types/instance-validator.js").ValidationOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeCreate<M_43 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_43>,
      name: string,
      fn: (
        instance: M_43,
        options: import("sequelize").CreateOptions<
          import("sequelize").Attributes<M_43>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeCreate<M_44 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_44>,
      fn: (
        instance: M_44,
        options: import("sequelize").CreateOptions<
          import("sequelize").Attributes<M_44>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterCreate<M_45 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_45>,
      name: string,
      fn: (
        instance: M_45,
        options: import("sequelize").CreateOptions<
          import("sequelize").Attributes<M_45>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterCreate<M_46 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_46>,
      fn: (
        instance: M_46,
        options: import("sequelize").CreateOptions<
          import("sequelize").Attributes<M_46>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeDestroy<M_47 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_47>,
      name: string,
      fn: (
        instance: M_47,
        options: import("sequelize").InstanceDestroyOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeDestroy<M_48 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_48>,
      fn: (
        instance: M_48,
        options: import("sequelize").InstanceDestroyOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterDestroy<M_49 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_49>,
      name: string,
      fn: (
        instance: M_49,
        options: import("sequelize").InstanceDestroyOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterDestroy<M_50 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_50>,
      fn: (
        instance: M_50,
        options: import("sequelize").InstanceDestroyOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeUpdate<M_51 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_51>,
      name: string,
      fn: (
        instance: M_51,
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_51>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeUpdate<M_52 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_52>,
      fn: (
        instance: M_52,
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_52>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterUpdate<M_53 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_53>,
      name: string,
      fn: (
        instance: M_53,
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_53>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterUpdate<M_54 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_54>,
      fn: (
        instance: M_54,
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_54>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeSave<M_55 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_55>,
      name: string,
      fn: (
        instance: M_55,
        options:
          | import("sequelize").UpdateOptions<
              import("sequelize").Attributes<M_55>
            >
          | import("sequelize").SaveOptions<
              import("sequelize").Attributes<M_55>
            >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeSave<M_56 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_56>,
      fn: (
        instance: M_56,
        options:
          | import("sequelize").UpdateOptions<
              import("sequelize").Attributes<M_56>
            >
          | import("sequelize").SaveOptions<
              import("sequelize").Attributes<M_56>
            >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterSave<M_57 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_57>,
      name: string,
      fn: (
        instance: M_57,
        options:
          | import("sequelize").UpdateOptions<
              import("sequelize").Attributes<M_57>
            >
          | import("sequelize").SaveOptions<
              import("sequelize").Attributes<M_57>
            >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterSave<M_58 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_58>,
      fn: (
        instance: M_58,
        options:
          | import("sequelize").UpdateOptions<
              import("sequelize").Attributes<M_58>
            >
          | import("sequelize").SaveOptions<
              import("sequelize").Attributes<M_58>
            >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkCreate<M_59 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_59>,
      name: string,
      fn: (
        instances: M_59[],
        options: import("sequelize").BulkCreateOptions<
          import("sequelize").Attributes<M_59>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkCreate<M_60 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_60>,
      fn: (
        instances: M_60[],
        options: import("sequelize").BulkCreateOptions<
          import("sequelize").Attributes<M_60>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkCreate<M_61 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_61>,
      name: string,
      fn: (
        instances: readonly M_61[],
        options: import("sequelize").BulkCreateOptions<
          import("sequelize").Attributes<M_61>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkCreate<M_62 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_62>,
      fn: (
        instances: readonly M_62[],
        options: import("sequelize").BulkCreateOptions<
          import("sequelize").Attributes<M_62>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkDestroy<M_63 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_63>,
      name: string,
      fn: (
        options: import("sequelize").BulkCreateOptions<
          import("sequelize").Attributes<M_63>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkDestroy<M_64 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_64>,
      fn: (
        options: import("sequelize").BulkCreateOptions<
          import("sequelize").Attributes<M_64>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkDestroy<M_65 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_65>,
      name: string,
      fn: (
        options: import("sequelize").DestroyOptions<
          import("sequelize").Attributes<M_65>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkDestroy<M_66 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_66>,
      fn: (
        options: import("sequelize").DestroyOptions<
          import("sequelize").Attributes<M_66>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkUpdate<M_67 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_67>,
      name: string,
      fn: (
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_67>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkUpdate<M_68 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_68>,
      fn: (
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_68>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkUpdate<M_69 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_69>,
      name: string,
      fn: (
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_69>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkUpdate<M_70 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_70>,
      fn: (
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_70>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeFind<M_71 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_71>,
      name: string,
      fn: (
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_71>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeFind<M_72 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_72>,
      fn: (
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_72>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeCount<M_73 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_73>,
      name: string,
      fn: (
        options: import("sequelize").CountOptions<
          import("sequelize").Attributes<M_73>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeCount<M_74 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_74>,
      fn: (
        options: import("sequelize").CountOptions<
          import("sequelize").Attributes<M_74>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeFindAfterExpandIncludeAll<
      M_75 extends import("sequelize").Model<any, any>,
    >(
      this: import("sequelize").ModelStatic<M_75>,
      name: string,
      fn: (
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_75>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeFindAfterExpandIncludeAll<
      M_76 extends import("sequelize").Model<any, any>,
    >(
      this: import("sequelize").ModelStatic<M_76>,
      fn: (
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_76>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeFindAfterOptions<M_77 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_77>,
      name: string,
      fn: (
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_77>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeFindAfterOptions<M_78 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_78>,
      fn: (
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_78>
        >,
      ) => void,
    ): import("sequelize/types/hooks.js").HookReturn;
    afterFind<M_79 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_79>,
      name: string,
      fn: (
        instancesOrInstance: M_79 | readonly M_79[],
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_79>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterFind<M_80 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_80>,
      fn: (
        instancesOrInstance: M_80 | readonly M_80[],
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_80>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkSync(
      name: string,
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkSync(
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkSync(
      name: string,
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkSync(
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeSync(
      name: string,
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeSync(
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterSync(
      name: string,
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterSync(
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    hasOne<
      M_81 extends import("sequelize").Model<any, any>,
      T_6 extends import("sequelize").Model<any, any>,
    >(
      this: import("sequelize").ModelStatic<M_81>,
      target: import("sequelize").ModelStatic<T_6>,
      options?: import("sequelize").HasOneOptions,
    ): import("sequelize").HasOne<M_81, T_6>;
    belongsTo<
      M_82 extends import("sequelize").Model<any, any>,
      T_7 extends import("sequelize").Model<any, any>,
    >(
      this: import("sequelize").ModelStatic<M_82>,
      target: import("sequelize").ModelStatic<T_7>,
      options?: import("sequelize").BelongsToOptions,
    ): import("sequelize").BelongsTo<M_82, T_7>;
    hasMany<
      M_83 extends import("sequelize").Model<any, any>,
      T_8 extends import("sequelize").Model<any, any>,
    >(
      this: import("sequelize").ModelStatic<M_83>,
      target: import("sequelize").ModelStatic<T_8>,
      options?: import("sequelize").HasManyOptions,
    ): import("sequelize").HasMany<M_83, T_8>;
    belongsToMany<
      M_84 extends import("sequelize").Model<any, any>,
      T_9 extends import("sequelize").Model<any, any>,
    >(
      this: import("sequelize").ModelStatic<M_84>,
      target: import("sequelize").ModelStatic<T_9>,
      options: import("sequelize").BelongsToManyOptions,
    ): import("sequelize").BelongsToMany<M_84, T_9>;
    addHook<
      H extends import("sequelize/types/hooks.js").Hooks<
        import("sequelize").Model<any, any>,
        any,
        any
      >,
      K_16 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
        H["_model"],
        import("sequelize").Attributes<H>,
        import("sequelize").CreationAttributes<H>
      >,
    >(
      this: import("sequelize/types/hooks.js").HooksStatic<H>,
      hookType: K_16,
      name: string,
      fn: import("sequelize/types/hooks.js").SequelizeHooks<
        H["_model"],
        import("sequelize").Attributes<H>,
        import("sequelize").CreationAttributes<H>
      >[K_16],
    ): import("sequelize/types/hooks.js").HooksCtor<H>;
    addHook<
      H_1 extends import("sequelize/types/hooks.js").Hooks<
        import("sequelize").Model<any, any>,
        any,
        any
      >,
      K_17 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
        H_1["_model"],
        import("sequelize").Attributes<H_1>,
        import("sequelize").CreationAttributes<H_1>
      >,
    >(
      this: import("sequelize/types/hooks.js").HooksStatic<H_1>,
      hookType: K_17,
      fn: import("sequelize/types/hooks.js").SequelizeHooks<
        H_1["_model"],
        import("sequelize").Attributes<H_1>,
        import("sequelize").CreationAttributes<H_1>
      >[K_17],
    ): import("sequelize/types/hooks.js").HooksCtor<H_1>;
    removeHook<
      H_2 extends import("sequelize/types/hooks.js").Hooks<
        import("sequelize").Model<any, any>,
        any,
        any
      >,
    >(
      this: import("sequelize/types/hooks.js").HooksStatic<H_2>,
      hookType: keyof import("sequelize/types/hooks.js").SequelizeHooks<
        H_2["_model"],
        import("sequelize").Attributes<H_2>,
        import("sequelize").CreationAttributes<H_2>
      >,
      name: string,
    ): import("sequelize/types/hooks.js").HooksCtor<H_2>;
    hasHook<
      H_3 extends import("sequelize/types/hooks.js").Hooks<
        import("sequelize").Model<any, any>,
        any,
        any
      >,
    >(
      this: import("sequelize/types/hooks.js").HooksStatic<H_3>,
      hookType: keyof import("sequelize/types/hooks.js").SequelizeHooks<
        H_3["_model"],
        import("sequelize").Attributes<H_3>,
        import("sequelize").CreationAttributes<H_3>
      >,
    ): boolean;
    hasHooks<
      H_4 extends import("sequelize/types/hooks.js").Hooks<
        import("sequelize").Model<any, any>,
        any,
        any
      >,
    >(
      this: import("sequelize/types/hooks.js").HooksStatic<H_4>,
      hookType: keyof import("sequelize/types/hooks.js").SequelizeHooks<
        H_4["_model"],
        import("sequelize").Attributes<H_4>,
        import("sequelize").CreationAttributes<H_4>
      >,
    ): boolean;
  };
  DataFlows: {
    new (
      values?: import("sequelize").Optional<any, string>,
      options?: import("sequelize").BuildOptions,
    ): {
      _attributes: any;
      dataValues: any;
      _creationAttributes: any;
      isNewRecord: boolean;
      sequelize: import("sequelize").Sequelize;
      where(): object;
      getDataValue<K extends string | number | symbol>(key: K): any;
      setDataValue<K_1 extends string | number | symbol>(
        key: K_1,
        value: any,
      ): void;
      get(options?: {
        plain?: boolean;
        clone?: boolean;
      }): any;
      get<K_29 extends keyof any>(
        key: K_29,
        options?: {
          plain?: boolean;
          clone?: boolean;
        },
      ): any[K_29];
      get(
        key: string,
        options?: {
          plain?: boolean;
          clone?: boolean;
        },
      ): unknown;
      set<K_30 extends string | number | symbol>(
        key: K_30,
        value: any,
        options?: import("sequelize").SetOptions,
      ): any;
      set(keys: Partial<any>, options?: import("sequelize").SetOptions): any;
      setAttributes<K_31 extends string | number | symbol>(
        key: K_31,
        value: any,
        options?: import("sequelize").SetOptions,
      ): any;
      setAttributes(
        keys: Partial<any>,
        options?: import("sequelize").SetOptions,
      ): any;
      changed<K_32 extends keyof any>(key: K_32): boolean;
      changed<K_33 extends keyof any>(key: K_33, dirty: boolean): void;
      changed(): false | string[];
      previous(): Partial<any>;
      previous<K_7 extends string | number | symbol>(key: K_7): any;
      save(options?: import("sequelize").SaveOptions<any>): Promise<any>;
      reload(options?: import("sequelize").FindOptions<any>): Promise<any>;
      validate(
        options?: import("sequelize/types/instance-validator.js").ValidationOptions,
      ): Promise<void>;
      update<K_34 extends string | number | symbol>(
        key: K_34,
        value: any,
        options?: import("sequelize").InstanceUpdateOptions<any>,
      ): Promise<any>;
      update(
        keys: {
          [x: string]: any;
        },
        options?: import("sequelize").InstanceUpdateOptions<any>,
      ): Promise<any>;
      destroy(
        options?: import("sequelize").InstanceDestroyOptions,
      ): Promise<void>;
      restore(
        options?: import("sequelize").InstanceRestoreOptions,
      ): Promise<void>;
      increment<K_35 extends string | number | symbol>(
        fields: Partial<any> | K_35 | readonly K_35[],
        options?: import("sequelize").IncrementDecrementOptionsWithBy<any>,
      ): Promise<any>;
      decrement<K_36 extends string | number | symbol>(
        fields: Partial<any> | K_36 | readonly K_36[],
        options?: import("sequelize").IncrementDecrementOptionsWithBy<any>,
      ): Promise<any>;
      equals(other: any): boolean;
      equalsOneOf(others: readonly any[]): boolean;
      toJSON<T extends any>(): T;
      toJSON(): object;
      isSoftDeleted(): boolean;
      _model: import("sequelize").Model<any, any>;
      addHook<
        K_37 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
          M,
          TModelAttributes,
          TCreationAttributes
        >,
      >(
        hookType: K_37,
        name: string,
        fn: import("sequelize/types/hooks.js").SequelizeHooks<
          import("sequelize").Model<any, any>,
          any,
          any
        >[K_37],
      ): any;
      addHook<
        K_38 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
          M,
          TModelAttributes,
          TCreationAttributes
        >,
      >(
        hookType: K_38,
        fn: import("sequelize/types/hooks.js").SequelizeHooks<
          import("sequelize").Model<any, any>,
          any,
          any
        >[K_38],
      ): any;
      removeHook<
        K_39 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
          M,
          TModelAttributes,
          TCreationAttributes
        >,
      >(hookType: K_39, name: string): any;
      hasHook<
        K_14 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
          M,
          TModelAttributes,
          TCreationAttributes
        >,
      >(hookType: K_14): boolean;
      hasHooks<
        K_15 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
          M,
          TModelAttributes,
          TCreationAttributes
        >,
      >(hookType: K_15): boolean;
    };
    readonly tableName: string;
    readonly primaryKeyAttribute: string;
    readonly primaryKeyAttributes: readonly string[];
    readonly associations: {
      [key: string]: import("sequelize").Association<
        import("sequelize").Model<any, any>,
        import("sequelize").Model<any, any>
      >;
    };
    readonly options: import("sequelize").InitOptions<
      import("sequelize").Model<any, any>
    >;
    readonly rawAttributes: {
      [attribute: string]: import("sequelize").ModelAttributeColumnOptions<
        import("sequelize").Model<any, any>
      >;
    };
    getAttributes<M_1 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_1>,
    ): {
      readonly [Key in keyof import("sequelize").Attributes<M_1>]: import("sequelize").ModelAttributeColumnOptions<
        import("sequelize").Model<any, any>
      >;
    };
    readonly sequelize?: import("sequelize").Sequelize;
    init<
      MS extends import("sequelize").ModelStatic<
        import("sequelize").Model<any, any>
      >,
      M_2 extends InstanceType<MS>,
    >(
      this: MS,
      attributes: import("sequelize").ModelAttributes<
        M_2,
        import("sequelize").Optional<
          import("sequelize").Attributes<M_2>,
          (import("sequelize").Attributes<M_2> extends infer T_11
            ? {
                [P in keyof T_11]-?: (
                  keyof NonNullable<
                    import("sequelize").Attributes<M_2>[P]
                  > extends Exclude<
                    keyof NonNullable<import("sequelize").Attributes<M_2>[P]>,
                    unique symbol
                  >
                    ? false
                    : true
                ) extends true
                  ? P
                  : never;
              }
            : never)[keyof import("sequelize").Attributes<M_2>]
        >
      >,
      options: import("sequelize").InitOptions<M_2>,
    ): MS;
    removeAttribute(attribute: string): void;
    sync<M_3 extends import("sequelize").Model<any, any>>(
      options?: import("sequelize").SyncOptions,
    ): Promise<M_3>;
    drop(options?: import("sequelize").DropOptions): Promise<void>;
    schema<M_4 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_4>,
      schema: string,
      options?: import("sequelize").SchemaOptions,
    ): import("sequelize").ModelCtor<M_4>;
    getTableName():
      | string
      | {
          tableName: string;
          schema: string;
          delimiter: string;
        };
    scope<M_5 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_5>,
      options?:
        | string
        | import("sequelize").ScopeOptions
        | readonly (string | import("sequelize").ScopeOptions)[]
        | import("sequelize").WhereAttributeHash<M_5>,
    ): import("sequelize").ModelCtor<M_5>;
    addScope<M_6 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_6>,
      name: string,
      scope: import("sequelize").FindOptions<
        import("sequelize").Attributes<M_6>
      >,
      options?: import("sequelize").AddScopeOptions,
    ): void;
    addScope<M_7 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_7>,
      name: string,
      scope: (
        ...args: readonly any[]
      ) => import("sequelize").FindOptions<import("sequelize").Attributes<M_7>>,
      options?: import("sequelize").AddScopeOptions,
    ): void;
    findAll<M_8 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_8>,
      options?: import("sequelize").FindOptions<
        import("sequelize").Attributes<M_8>
      >,
    ): Promise<M_8[]>;
    findByPk<M_9 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_9>,
      identifier: import("sequelize").Identifier,
      options: Omit<
        import("sequelize").NonNullFindOptions<
          import("sequelize").Attributes<M_9>
        >,
        "where"
      >,
    ): Promise<M_9>;
    findByPk<M_10 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_10>,
      identifier?: import("sequelize").Identifier,
      options?: Omit<
        import("sequelize").FindOptions<import("sequelize").Attributes<M_10>>,
        "where"
      >,
    ): Promise<M_10>;
    findOne<M_11 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_11>,
      options: import("sequelize").NonNullFindOptions<
        import("sequelize").Attributes<M_11>
      >,
    ): Promise<M_11>;
    findOne<M_12 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_12>,
      options?: import("sequelize").FindOptions<
        import("sequelize").Attributes<M_12>
      >,
    ): Promise<M_12>;
    aggregate<T_2, M_13 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_13>,
      field: "*" | keyof import("sequelize").Attributes<M_13>,
      aggregateFunction: string,
      options?: import("sequelize").AggregateOptions<
        T_2,
        import("sequelize").Attributes<M_13>
      >,
    ): Promise<T_2>;
    count<M_14 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_14>,
      options: {
        attributes?: import("sequelize").FindAttributeOptions;
        logging?: boolean | ((sql: string, timing?: number) => void);
        where?: import("sequelize").WhereOptions<
          import("sequelize").Attributes<M_14>
        >;
        include?:
          | import("sequelize").Includeable
          | import("sequelize").Includeable[];
        benchmark?: boolean;
        transaction?: import("sequelize").Transaction;
        useMaster?: boolean;
        paranoid?: boolean;
        col?: string;
        distinct?: boolean;
        group: import("sequelize").GroupOption;
      },
    ): Promise<import("sequelize").GroupedCountResultItem[]>;
    count<M_15 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_15>,
      options?: Omit<
        import("sequelize").CountOptions<import("sequelize").Attributes<M_15>>,
        "group"
      >,
    ): Promise<number>;
    findAndCountAll<M_16 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_16>,
      options?: Omit<
        import("sequelize").FindAndCountOptions<
          import("sequelize").Attributes<M_16>
        >,
        "group"
      >,
    ): Promise<{
      rows: M_16[];
      count: number;
    }>;
    findAndCountAll<M_17 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_17>,
      options: {
        type?: string;
        attributes?: import("sequelize").FindAttributeOptions;
        plain?: boolean;
        logging?: boolean | ((sql: string, timing?: number) => void);
        where?: import("sequelize").WhereOptions<
          import("sequelize").Attributes<M_17>
        >;
        include?:
          | import("sequelize").Includeable
          | import("sequelize").Includeable[];
        order?: import("sequelize").Order;
        limit?: number;
        groupedLimit?: unknown;
        offset?: number;
        lock?:
          | boolean
          | import("sequelize").LOCK
          | {
              level: import("sequelize").LOCK;
              of: import("sequelize").ModelStatic<
                import("sequelize").Model<any, any>
              >;
            };
        skipLocked?: boolean;
        raw?: boolean;
        having?: import("sequelize").WhereOptions<any>;
        subQuery?: boolean;
        nest?: boolean;
        replacements?: import("sequelize").BindOrReplacements;
        bind?: import("sequelize").BindOrReplacements;
        instance?: import("sequelize").Model<any, any>;
        mapToModel?: boolean;
        retry?: import("retry-as-promised").Options;
        fieldMap?: import("sequelize").FieldMap;
        benchmark?: boolean;
        transaction?: import("sequelize").Transaction;
        useMaster?: boolean;
        paranoid?: boolean;
        indexHints?: import("sequelize").IndexHint[];
        col?: string;
        distinct?: boolean;
        group: import("sequelize").GroupOption;
      },
    ): Promise<{
      rows: M_17[];
      count: import("sequelize").GroupedCountResultItem[];
    }>;
    max<T_3 extends unknown, M_18 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_18>,
      field: keyof import("sequelize").Attributes<M_18>,
      options?: import("sequelize").AggregateOptions<
        T_3,
        import("sequelize").Attributes<M_18>
      >,
    ): Promise<T_3>;
    min<T_4 extends unknown, M_19 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_19>,
      field: keyof import("sequelize").Attributes<M_19>,
      options?: import("sequelize").AggregateOptions<
        T_4,
        import("sequelize").Attributes<M_19>
      >,
    ): Promise<T_4>;
    sum<T_5 extends unknown, M_20 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_20>,
      field: keyof import("sequelize").Attributes<M_20>,
      options?: import("sequelize").AggregateOptions<
        T_5,
        import("sequelize").Attributes<M_20>
      >,
    ): Promise<number>;
    build<M_21 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_21>,
      record?: import("sequelize/types/utils.js").MakeNullishOptional<
        M_21["_creationAttributes"]
      >,
      options?: import("sequelize").BuildOptions,
    ): M_21;
    bulkBuild<M_22 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_22>,
      records: readonly import("sequelize/types/utils.js").MakeNullishOptional<
        M_22["_creationAttributes"]
      >[],
      options?: import("sequelize").BuildOptions,
    ): M_22[];
    create<
      M_23 extends import("sequelize").Model<any, any>,
      O extends import("sequelize").CreateOptions<
        import("sequelize").Attributes<M_23>
      > = import("sequelize").CreateOptions<
        import("sequelize").Attributes<M_23>
      >,
    >(
      this: import("sequelize").ModelStatic<M_23>,
      values?: import("sequelize/types/utils.js").MakeNullishOptional<
        M_23["_creationAttributes"]
      >,
      options?: O,
    ): Promise<
      O extends
        | {
            returning: false;
          }
        | {
            ignoreDuplicates: true;
          }
        ? void
        : M_23
    >;
    findOrBuild<M_24 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_24>,
      options: import("sequelize").FindOrBuildOptions<
        import("sequelize").Attributes<M_24>,
        import("sequelize/types/utils.js").MakeNullishOptional<
          M_24["_creationAttributes"]
        >
      >,
    ): Promise<[M_24, boolean]>;
    findOrCreate<M_25 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_25>,
      options: import("sequelize").FindOrCreateOptions<
        import("sequelize").Attributes<M_25>,
        import("sequelize/types/utils.js").MakeNullishOptional<
          M_25["_creationAttributes"]
        >
      >,
    ): Promise<[M_25, boolean]>;
    findCreateFind<M_26 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_26>,
      options: import("sequelize").FindOrCreateOptions<
        import("sequelize").Attributes<M_26>,
        import("sequelize/types/utils.js").MakeNullishOptional<
          M_26["_creationAttributes"]
        >
      >,
    ): Promise<[M_26, boolean]>;
    upsert<M_27 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_27>,
      values: import("sequelize/types/utils.js").MakeNullishOptional<
        M_27["_creationAttributes"]
      >,
      options?: import("sequelize").UpsertOptions<
        import("sequelize").Attributes<M_27>
      >,
    ): Promise<[M_27, boolean]>;
    bulkCreate<M_28 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_28>,
      records: readonly import("sequelize/types/utils.js").MakeNullishOptional<
        M_28["_creationAttributes"]
      >[],
      options?: import("sequelize").BulkCreateOptions<
        import("sequelize").Attributes<M_28>
      >,
    ): Promise<M_28[]>;
    truncate<M_29 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_29>,
      options?: import("sequelize").TruncateOptions<
        import("sequelize").Attributes<M_29>
      >,
    ): Promise<void>;
    destroy<M_30 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_30>,
      options?: import("sequelize").DestroyOptions<
        import("sequelize").Attributes<M_30>
      >,
    ): Promise<number>;
    restore<M_31 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_31>,
      options?: import("sequelize").RestoreOptions<
        import("sequelize").Attributes<M_31>
      >,
    ): Promise<void>;
    update<M_32 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_32>,
      values: {
        [key in keyof import("sequelize").Attributes<M_32>]?:
          | import("sequelize/types/utils.js").Fn
          | import("sequelize/types/utils.js").Col
          | import("sequelize/types/utils.js").Literal
          | import("sequelize").Attributes<M_32>[key];
      },
      options: Omit<
        import("sequelize").UpdateOptions<import("sequelize").Attributes<M_32>>,
        "returning"
      > & {
        returning: true | (keyof import("sequelize").Attributes<M_32>)[];
      },
    ): Promise<[affectedCount: number, affectedRows: M_32[]]>;
    update<M_33 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_33>,
      values: {
        [key_1 in keyof import("sequelize").Attributes<M_33>]?:
          | import("sequelize/types/utils.js").Fn
          | import("sequelize/types/utils.js").Col
          | import("sequelize/types/utils.js").Literal
          | import("sequelize").Attributes<M_33>[key_1];
      },
      options: import("sequelize").UpdateOptions<
        import("sequelize").Attributes<M_33>
      >,
    ): Promise<[affectedCount: number]>;
    increment<M_34 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_34>,
      fields: import("sequelize").AllowReadonlyArray<
        keyof import("sequelize").Attributes<M_34>
      >,
      options: import("sequelize").IncrementDecrementOptionsWithBy<
        import("sequelize").Attributes<M_34>
      >,
    ): Promise<[affectedRows: M_34[], affectedCount?: number]>;
    increment<M_35 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_35>,
      fields: {
        [key_2 in keyof import("sequelize").Attributes<M_35>]?: number;
      },
      options: import("sequelize").IncrementDecrementOptions<
        import("sequelize").Attributes<M_35>
      >,
    ): Promise<[affectedRows: M_35[], affectedCount?: number]>;
    decrement<M_36 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_36>,
      fields: import("sequelize").AllowReadonlyArray<
        keyof import("sequelize").Attributes<M_36>
      >,
      options: import("sequelize").IncrementDecrementOptionsWithBy<
        import("sequelize").Attributes<M_36>
      >,
    ): Promise<[affectedRows: M_36[], affectedCount?: number]>;
    decrement<M_37 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_37>,
      fields: {
        [key_3 in keyof import("sequelize").Attributes<M_37>]?: number;
      },
      options: import("sequelize").IncrementDecrementOptions<
        import("sequelize").Attributes<M_37>
      >,
    ): Promise<[affectedRows: M_37[], affectedCount?: number]>;
    describe(): Promise<object>;
    unscoped<M_38 extends import("sequelize").ModelType<any, any>>(
      this: M_38,
    ): M_38;
    beforeValidate<M_39 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_39>,
      name: string,
      fn: (
        instance: M_39,
        options: import("sequelize/types/instance-validator.js").ValidationOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeValidate<M_40 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_40>,
      fn: (
        instance: M_40,
        options: import("sequelize/types/instance-validator.js").ValidationOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterValidate<M_41 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_41>,
      name: string,
      fn: (
        instance: M_41,
        options: import("sequelize/types/instance-validator.js").ValidationOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterValidate<M_42 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_42>,
      fn: (
        instance: M_42,
        options: import("sequelize/types/instance-validator.js").ValidationOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeCreate<M_43 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_43>,
      name: string,
      fn: (
        instance: M_43,
        options: import("sequelize").CreateOptions<
          import("sequelize").Attributes<M_43>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeCreate<M_44 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_44>,
      fn: (
        instance: M_44,
        options: import("sequelize").CreateOptions<
          import("sequelize").Attributes<M_44>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterCreate<M_45 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_45>,
      name: string,
      fn: (
        instance: M_45,
        options: import("sequelize").CreateOptions<
          import("sequelize").Attributes<M_45>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterCreate<M_46 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_46>,
      fn: (
        instance: M_46,
        options: import("sequelize").CreateOptions<
          import("sequelize").Attributes<M_46>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeDestroy<M_47 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_47>,
      name: string,
      fn: (
        instance: M_47,
        options: import("sequelize").InstanceDestroyOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeDestroy<M_48 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_48>,
      fn: (
        instance: M_48,
        options: import("sequelize").InstanceDestroyOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterDestroy<M_49 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_49>,
      name: string,
      fn: (
        instance: M_49,
        options: import("sequelize").InstanceDestroyOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterDestroy<M_50 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_50>,
      fn: (
        instance: M_50,
        options: import("sequelize").InstanceDestroyOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeUpdate<M_51 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_51>,
      name: string,
      fn: (
        instance: M_51,
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_51>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeUpdate<M_52 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_52>,
      fn: (
        instance: M_52,
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_52>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterUpdate<M_53 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_53>,
      name: string,
      fn: (
        instance: M_53,
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_53>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterUpdate<M_54 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_54>,
      fn: (
        instance: M_54,
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_54>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeSave<M_55 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_55>,
      name: string,
      fn: (
        instance: M_55,
        options:
          | import("sequelize").UpdateOptions<
              import("sequelize").Attributes<M_55>
            >
          | import("sequelize").SaveOptions<
              import("sequelize").Attributes<M_55>
            >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeSave<M_56 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_56>,
      fn: (
        instance: M_56,
        options:
          | import("sequelize").UpdateOptions<
              import("sequelize").Attributes<M_56>
            >
          | import("sequelize").SaveOptions<
              import("sequelize").Attributes<M_56>
            >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterSave<M_57 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_57>,
      name: string,
      fn: (
        instance: M_57,
        options:
          | import("sequelize").UpdateOptions<
              import("sequelize").Attributes<M_57>
            >
          | import("sequelize").SaveOptions<
              import("sequelize").Attributes<M_57>
            >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterSave<M_58 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_58>,
      fn: (
        instance: M_58,
        options:
          | import("sequelize").UpdateOptions<
              import("sequelize").Attributes<M_58>
            >
          | import("sequelize").SaveOptions<
              import("sequelize").Attributes<M_58>
            >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkCreate<M_59 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_59>,
      name: string,
      fn: (
        instances: M_59[],
        options: import("sequelize").BulkCreateOptions<
          import("sequelize").Attributes<M_59>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkCreate<M_60 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_60>,
      fn: (
        instances: M_60[],
        options: import("sequelize").BulkCreateOptions<
          import("sequelize").Attributes<M_60>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkCreate<M_61 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_61>,
      name: string,
      fn: (
        instances: readonly M_61[],
        options: import("sequelize").BulkCreateOptions<
          import("sequelize").Attributes<M_61>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkCreate<M_62 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_62>,
      fn: (
        instances: readonly M_62[],
        options: import("sequelize").BulkCreateOptions<
          import("sequelize").Attributes<M_62>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkDestroy<M_63 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_63>,
      name: string,
      fn: (
        options: import("sequelize").BulkCreateOptions<
          import("sequelize").Attributes<M_63>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkDestroy<M_64 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_64>,
      fn: (
        options: import("sequelize").BulkCreateOptions<
          import("sequelize").Attributes<M_64>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkDestroy<M_65 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_65>,
      name: string,
      fn: (
        options: import("sequelize").DestroyOptions<
          import("sequelize").Attributes<M_65>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkDestroy<M_66 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_66>,
      fn: (
        options: import("sequelize").DestroyOptions<
          import("sequelize").Attributes<M_66>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkUpdate<M_67 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_67>,
      name: string,
      fn: (
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_67>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkUpdate<M_68 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_68>,
      fn: (
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_68>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkUpdate<M_69 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_69>,
      name: string,
      fn: (
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_69>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkUpdate<M_70 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_70>,
      fn: (
        options: import("sequelize").UpdateOptions<
          import("sequelize").Attributes<M_70>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeFind<M_71 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_71>,
      name: string,
      fn: (
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_71>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeFind<M_72 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_72>,
      fn: (
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_72>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeCount<M_73 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_73>,
      name: string,
      fn: (
        options: import("sequelize").CountOptions<
          import("sequelize").Attributes<M_73>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeCount<M_74 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_74>,
      fn: (
        options: import("sequelize").CountOptions<
          import("sequelize").Attributes<M_74>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeFindAfterExpandIncludeAll<
      M_75 extends import("sequelize").Model<any, any>,
    >(
      this: import("sequelize").ModelStatic<M_75>,
      name: string,
      fn: (
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_75>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeFindAfterExpandIncludeAll<
      M_76 extends import("sequelize").Model<any, any>,
    >(
      this: import("sequelize").ModelStatic<M_76>,
      fn: (
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_76>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeFindAfterOptions<M_77 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_77>,
      name: string,
      fn: (
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_77>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeFindAfterOptions<M_78 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_78>,
      fn: (
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_78>
        >,
      ) => void,
    ): import("sequelize/types/hooks.js").HookReturn;
    afterFind<M_79 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_79>,
      name: string,
      fn: (
        instancesOrInstance: M_79 | readonly M_79[],
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_79>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterFind<M_80 extends import("sequelize").Model<any, any>>(
      this: import("sequelize").ModelStatic<M_80>,
      fn: (
        instancesOrInstance: M_80 | readonly M_80[],
        options: import("sequelize").FindOptions<
          import("sequelize").Attributes<M_80>
        >,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkSync(
      name: string,
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeBulkSync(
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkSync(
      name: string,
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterBulkSync(
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeSync(
      name: string,
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    beforeSync(
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterSync(
      name: string,
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    afterSync(
      fn: (
        options: import("sequelize").SyncOptions,
      ) => import("sequelize/types/hooks.js").HookReturn,
    ): void;
    hasOne<
      M_81 extends import("sequelize").Model<any, any>,
      T_6 extends import("sequelize").Model<any, any>,
    >(
      this: import("sequelize").ModelStatic<M_81>,
      target: import("sequelize").ModelStatic<T_6>,
      options?: import("sequelize").HasOneOptions,
    ): import("sequelize").HasOne<M_81, T_6>;
    belongsTo<
      M_82 extends import("sequelize").Model<any, any>,
      T_7 extends import("sequelize").Model<any, any>,
    >(
      this: import("sequelize").ModelStatic<M_82>,
      target: import("sequelize").ModelStatic<T_7>,
      options?: import("sequelize").BelongsToOptions,
    ): import("sequelize").BelongsTo<M_82, T_7>;
    hasMany<
      M_83 extends import("sequelize").Model<any, any>,
      T_8 extends import("sequelize").Model<any, any>,
    >(
      this: import("sequelize").ModelStatic<M_83>,
      target: import("sequelize").ModelStatic<T_8>,
      options?: import("sequelize").HasManyOptions,
    ): import("sequelize").HasMany<M_83, T_8>;
    belongsToMany<
      M_84 extends import("sequelize").Model<any, any>,
      T_9 extends import("sequelize").Model<any, any>,
    >(
      this: import("sequelize").ModelStatic<M_84>,
      target: import("sequelize").ModelStatic<T_9>,
      options: import("sequelize").BelongsToManyOptions,
    ): import("sequelize").BelongsToMany<M_84, T_9>;
    addHook<
      H extends import("sequelize/types/hooks.js").Hooks<
        import("sequelize").Model<any, any>,
        any,
        any
      >,
      K_16 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
        H["_model"],
        import("sequelize").Attributes<H>,
        import("sequelize").CreationAttributes<H>
      >,
    >(
      this: import("sequelize/types/hooks.js").HooksStatic<H>,
      hookType: K_16,
      name: string,
      fn: import("sequelize/types/hooks.js").SequelizeHooks<
        H["_model"],
        import("sequelize").Attributes<H>,
        import("sequelize").CreationAttributes<H>
      >[K_16],
    ): import("sequelize/types/hooks.js").HooksCtor<H>;
    addHook<
      H_1 extends import("sequelize/types/hooks.js").Hooks<
        import("sequelize").Model<any, any>,
        any,
        any
      >,
      K_17 extends keyof import("sequelize/types/hooks.js").SequelizeHooks<
        H_1["_model"],
        import("sequelize").Attributes<H_1>,
        import("sequelize").CreationAttributes<H_1>
      >,
    >(
      this: import("sequelize/types/hooks.js").HooksStatic<H_1>,
      hookType: K_17,
      fn: import("sequelize/types/hooks.js").SequelizeHooks<
        H_1["_model"],
        import("sequelize").Attributes<H_1>,
        import("sequelize").CreationAttributes<H_1>
      >[K_17],
    ): import("sequelize/types/hooks.js").HooksCtor<H_1>;
    removeHook<
      H_2 extends import("sequelize/types/hooks.js").Hooks<
        import("sequelize").Model<any, any>,
        any,
        any
      >,
    >(
      this: import("sequelize/types/hooks.js").HooksStatic<H_2>,
      hookType: keyof import("sequelize/types/hooks.js").SequelizeHooks<
        H_2["_model"],
        import("sequelize").Attributes<H_2>,
        import("sequelize").CreationAttributes<H_2>
      >,
      name: string,
    ): import("sequelize/types/hooks.js").HooksCtor<H_2>;
    hasHook<
      H_3 extends import("sequelize/types/hooks.js").Hooks<
        import("sequelize").Model<any, any>,
        any,
        any
      >,
    >(
      this: import("sequelize/types/hooks.js").HooksStatic<H_3>,
      hookType: keyof import("sequelize/types/hooks.js").SequelizeHooks<
        H_3["_model"],
        import("sequelize").Attributes<H_3>,
        import("sequelize").CreationAttributes<H_3>
      >,
    ): boolean;
    hasHooks<
      H_4 extends import("sequelize/types/hooks.js").Hooks<
        import("sequelize").Model<any, any>,
        any,
        any
      >,
    >(
      this: import("sequelize/types/hooks.js").HooksStatic<H_4>,
      hookType: keyof import("sequelize/types/hooks.js").SequelizeHooks<
        H_4["_model"],
        import("sequelize").Attributes<H_4>,
        import("sequelize").CreationAttributes<H_4>
      >,
    ): boolean;
  };
}>;
export function catalogMavenDeps(
  dirPath: any,
  purlsJars: any,
  Namespaces: any,
  options?: {},
): Promise<void>;
export function catalogGradleDeps(
  dirPath: any,
  purlsJars: any,
  Namespaces: any,
): Promise<void>;
export function createAndStoreSlice(
  purl: any,
  purlsJars: any,
  Usages: any,
  options?: {},
): Promise<any>;
export function createSlice(
  purlOrLanguage: any,
  filePath: any,
  sliceType?: string,
  options?: {},
): {
  tempDir: any;
  slicesFile: any;
  atomFile: any;
};
export function purlToLanguage(purl: any, filePath: any): string;
export function initFromSbom(
  components: any,
  language: any,
): {
  purlLocationMap: {};
  purlImportsMap: {};
};
export function analyzeProject(
  dbObjMap: any,
  options: any,
): Promise<{
  atomFile: any;
  usagesSlicesFile: any;
  dataFlowSlicesFile: any;
  reachablesSlicesFile: any;
  purlLocationMap: {};
  servicesMap: {};
  dataFlowFrames: {};
  tempDir: any;
  userDefinedTypesMap: {};
  cryptoComponents: any[];
  cryptoGeneratePurls: {};
}>;
export function parseObjectSlices(
  language: any,
  usageSlice: any,
  dbObjMap: any,
  servicesMap?: {},
  purlLocationMap?: {},
  purlImportsMap?: {},
): Promise<{}>;
export function parseSliceUsages(
  language: string,
  userDefinedTypesMap: any,
  slice: any,
  dbObjMap: any,
  purlLocationMap: any,
  purlImportsMap: any,
): Promise<void>;
export function isFilterableType(
  language: any,
  userDefinedTypesMap: any,
  typeFullName: any,
): boolean;
export function detectServicesFromUsages(
  language: string,
  slice: any,
  servicesMap?: any,
): any[];
export function detectServicesFromUDT(
  language: string,
  userDefinedTypes: any[],
  servicesMap: any,
): void;
export function constructServiceName(language: any, slice: any): string;
export function extractEndpoints(language: any, code: any): any;
export function createEvinseFile(sliceArtefacts: any, options: any): any;
export function collectDataFlowFrames(
  language: string,
  userDefinedTypesMap: any,
  dataFlowSlice: any,
  dbObjMap: any,
  purlLocationMap: any,
  purlImportsMap: any,
): Promise<{}>;
export function collectReachableFrames(
  language: string,
  reachablesSlice: any,
): {
  dataFlowFrames: {};
  cryptoComponents: {
    type: string;
    name: any;
    "bom-ref": any;
    description: any;
    cryptoProperties: {
      assetType: string;
      oid: any;
    };
  }[];
  cryptoGeneratePurls: {};
};
export function framePicker(dfFrames: any[]): any;
export function simplifyType(typeFullName: string): string;
export function getClassTypeFromSignature(
  language: any,
  typeFullName: any,
): string;
//# sourceMappingURL=evinser.d.ts.map
