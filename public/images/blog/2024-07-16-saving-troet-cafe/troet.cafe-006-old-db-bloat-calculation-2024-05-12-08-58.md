Ergebnis aus der live (*alten*) troet.cafe-Datenbank:
```
  current_database   | schemaname |                  tablename                  | tbloat | wastedbytes |                             iname                              | ibloat | wastedibytes 
---------------------+------------+---------------------------------------------+--------+-------------+----------------------------------------------------------------+--------+--------------
 mastodon_production | public     | statuses                                    |    3.4 | 17757954048 | index_statuses_local_20190824                                  |    0.1 |            0
 mastodon_production | public     | statuses                                    |    3.4 | 17757954048 | index_statuses_public_20200119                                 |    0.7 |            0
 mastodon_production | public     | statuses                                    |    3.4 | 17757954048 | index_statuses_on_uri                                          |    1.8 |   3339927552
 mastodon_production | public     | statuses                                    |    3.4 | 17757954048 | index_statuses_on_reblog_of_id_and_account_id                  |    0.6 |            0
 mastodon_production | public     | statuses                                    |    3.4 | 17757954048 | index_statuses_on_in_reply_to_id                               |    0.5 |            0
 mastodon_production | public     | statuses                                    |    3.4 | 17757954048 | index_statuses_on_in_reply_to_account_id                       |    0.4 |            0
 mastodon_production | public     | statuses                                    |    3.4 | 17757954048 | index_statuses_on_deleted_at                                   |   80.1 |     75784192
 mastodon_production | public     | statuses                                    |    3.4 | 17757954048 | index_statuses_on_account_id                                   |    0.4 |            0
 mastodon_production | public     | statuses                                    |    3.4 | 17757954048 | statuses_pkey                                                  |    0.5 |            0
 mastodon_production | public     | statuses                                    |    3.4 | 17757954048 | index_statuses_20190820                                        |    0.8 |            0
 mastodon_production | public     | media_attachments                           |    2.3 |  2287239168 | index_media_attachments_on_status_id                           |    0.4 |            0
 mastodon_production | public     | media_attachments                           |    2.3 |  2287239168 | media_attachments_pkey                                         |    0.3 |            0
 mastodon_production | public     | media_attachments                           |    2.3 |  2287239168 | index_media_attachments_on_account_id_and_status_id            |    0.2 |            0
 mastodon_production | public     | media_attachments                           |    2.3 |  2287239168 | index_media_attachments_on_scheduled_status_id                 |    0.0 |        16384
 mastodon_production | public     | media_attachments                           |    2.3 |  2287239168 | index_media_attachments_on_shortcode                           |    0.1 |            0
 mastodon_production | public     | conversations                               |    4.0 |  2194956288 | index_conversations_on_uri                                     |   14.8 |   2446860288
 mastodon_production | public     | conversations                               |    4.0 |  2194956288 | conversations_pkey                                             |    2.5 |    729309184
 mastodon_production | public     | mentions                                    |    5.7 |  1631313920 | index_mentions_on_account_id_and_status_id                     |    3.8 |    732635136
 mastodon_production | public     | mentions                                    |    5.7 |  1631313920 | mentions_pkey                                                  |    2.9 |    490061824
 mastodon_production | public     | mentions                                    |    5.7 |  1631313920 | index_mentions_on_status_id                                    |    2.9 |    497549312
 mastodon_production | public     | status_stats                                |    4.4 |  1180319744 | status_stats_pkey                                              |    2.0 |    282484736
 mastodon_production | public     | status_stats                                |    4.4 |  1180319744 | index_status_stats_on_status_id                                |    2.2 |    326664192
 mastodon_production | public     | status_edits                                |    4.4 |  1166090240 | index_status_edits_on_account_id                               |    0.2 |            0
 mastodon_production | public     | status_edits                                |    4.4 |  1166090240 | index_status_edits_on_status_id                                |    0.3 |            0
 mastodon_production | public     | status_edits                                |    4.4 |  1166090240 | status_edits_pkey                                              |    0.3 |            0
 mastodon_production | public     | statuses_tags                               |    3.9 |  1036673024 | index_statuses_tags_on_status_id                               |    5.6 |    655589376
 mastodon_production | public     | statuses_tags                               |    3.9 |  1036673024 | index_statuses_tags_on_tag_id_and_status_id                    |    7.6 |    925425664
 mastodon_production | public     | preview_cards                               |    1.1 |   999317504 | index_preview_cards_on_url                                     |    0.4 |            0
 mastodon_production | public     | preview_cards                               |    1.1 |   999317504 | preview_cards_pkey                                             |    0.1 |            0
 mastodon_production | public     | preview_cards_statuses                      |    1.6 |   613253120 | index_preview_cards_statuses_on_status_id_and_preview_card_id  |    1.2 |    143630336
 mastodon_production | public     | favourites                                  |    2.0 |   451256320 | index_favourites_on_status_id                                  |    0.8 |            0
 mastodon_production | public     | favourites                                  |    2.0 |   451256320 | index_favourites_on_account_id_and_status_id                   |    1.4 |    137101312
 mastodon_production | public     | favourites                                  |    2.0 |   451256320 | favourites_pkey                                                |    0.7 |            0
 mastodon_production | public     | favourites                                  |    2.0 |   451256320 | index_favourites_on_account_id_and_id                          |    1.4 |    146407424
 mastodon_production | public     | accounts                                    |    1.3 |   421167104 | index_accounts_on_uri                                          |    0.1 |            0
 mastodon_production | public     | accounts                                    |    1.3 |   421167104 | search_index                                                   |    0.1 |            0
 mastodon_production | public     | accounts                                    |    1.3 |   421167104 | index_accounts_on_username_and_domain_lower                    |    0.1 |            0
 mastodon_production | public     | accounts                                    |    1.3 |   421167104 | index_accounts_on_url                                          |    0.1 |            0
 mastodon_production | public     | accounts                                    |    1.3 |   421167104 | accounts_pkey                                                  |    0.0 |            0
 mastodon_production | public     | accounts                                    |    1.3 |   421167104 | index_accounts_on_moved_to_account_id                          |    0.0 |            0
 mastodon_production | public     | notifications                               |    1.2 |   248315904 | index_notifications_on_account_id_and_id_and_type              |    0.9 |            0
 mastodon_production | public     | notifications                               |    1.2 |   248315904 | index_notifications_on_activity_id_and_activity_type           |    0.7 |            0
 mastodon_production | public     | notifications                               |    1.2 |   248315904 | index_notifications_on_from_account_id                         |    0.4 |            0
 mastodon_production | public     | notifications                               |    1.2 |   248315904 | notifications_pkey                                             |    0.4 |            0
 mastodon_production | public     | follows                                     |    1.5 |   142753792 | follows_pkey                                                   |    0.2 |            0
 mastodon_production | public     | follows                                     |    1.5 |   142753792 | index_follows_on_account_id_and_target_account_id              |    0.3 |            0
 mastodon_production | public     | follows                                     |    1.5 |   142753792 | index_follows_on_target_account_id                             |    0.2 |            0
 mastodon_production | public     | tags                                        |    1.3 |   115695616 | tags_pkey                                                      |    0.3 |            0
 mastodon_production | public     | tags                                        |    1.3 |   115695616 | index_tags_on_name_lower_btree                                 |    0.8 |            0
 mastodon_production | public     | oauth_applications                          |    1.2 |    40951808 | index_oauth_applications_on_uid                                |    0.3 |            0
 mastodon_production | public     | oauth_applications                          |    1.2 |    40951808 | oauth_applications_pkey                                        |    0.1 |            0
 mastodon_production | public     | oauth_applications                          |    1.2 |    40951808 | index_oauth_applications_on_owner_id_and_owner_type            |    0.1 |            0
 mastodon_production | public     | poll_votes                                  |    2.4 |    29827072 | poll_votes_pkey                                                |    0.4 |            0
 mastodon_production | public     | poll_votes                                  |    2.4 |    29827072 | index_poll_votes_on_poll_id                                    |    0.4 |            0
 mastodon_production | public     | poll_votes                                  |    2.4 |    29827072 | index_poll_votes_on_account_id                                 |    0.5 |            0
 mastodon_production | public     | oauth_access_tokens                         |    1.3 |    26345472 | index_oauth_access_tokens_on_token                             |    0.7 |            0
 mastodon_production | public     | oauth_access_tokens                         |    1.3 |    26345472 | oauth_access_tokens_pkey                                       |    0.2 |            0
 mastodon_production | public     | oauth_access_tokens                         |    1.3 |    26345472 | index_oauth_access_tokens_on_resource_owner_id                 |    0.6 |            0
 mastodon_production | public     | oauth_access_tokens                         |    1.3 |    26345472 | index_oauth_access_tokens_on_refresh_token                     |    0.0 |         8192
 mastodon_production | public     | account_stats                               |    1.2 |    21766144 | index_account_stats_on_account_id                              |    0.3 |            0
 mastodon_production | public     | account_stats                               |    1.2 |    21766144 | account_stats_pkey                                             |    0.3 |            0
 mastodon_production | public     | status_pins                                 |   25.0 |    19292160 | status_pins_pkey                                               |   22.4 |     13148160
 mastodon_production | public     | status_pins                                 |   25.0 |    19292160 | index_status_pins_on_account_id_and_status_id                  |    7.4 |      3940352
 mastodon_production | public     | status_pins                                 |   25.0 |    19292160 | index_status_pins_on_status_id                                 |    6.5 |      3407872
 mastodon_production | public     | index_accounts_on_username_and_domain_lower |    1.2 |    16900096 | ?                                                              |    0.0 |            0
 mastodon_production | public     | polls                                       |    5.4 |    15851520 | index_polls_on_account_id                                      |    0.6 |            0
 mastodon_production | public     | polls                                       |    5.4 |    15851520 | index_polls_on_status_id                                       |    0.8 |            0
 mastodon_production | public     | polls                                       |    5.4 |    15851520 | polls_pkey                                                     |    0.8 |            0
 mastodon_production | public     | bookmarks                                   |    6.1 |    13074432 | index_bookmarks_on_account_id_and_status_id                    |    3.3 |      4562944
 mastodon_production | public     | bookmarks                                   |    6.1 |    13074432 | bookmarks_pkey                                                 |    2.0 |      2015232
 mastodon_production | public     | bookmarks                                   |    6.1 |    13074432 | index_bookmarks_on_status_id                                   |    2.7 |      3309568
 mastodon_production | public     | login_activities                            |    1.7 |    10551296 | login_activities_pkey                                          |    0.3 |            0
 mastodon_production | public     | login_activities                            |    1.7 |    10551296 | index_login_activities_on_user_id                              |    0.3 |            0
 mastodon_production | public     | index_tags_on_name_lower_btree              |    1.1 |    10436608 | ?                                                              |    0.0 |            0
 mastodon_production | public     | session_activations                         |    2.5 |     8110080 | session_activations_pkey                                       |    0.4 |            0
 mastodon_production | public     | session_activations                         |    2.5 |     8110080 | index_session_activations_on_user_id                           |    0.3 |            0
 mastodon_production | public     | session_activations                         |    2.5 |     8110080 | index_session_activations_on_session_id                        |    0.7 |            0
 mastodon_production | public     | session_activations                         |    2.5 |     8110080 | index_session_activations_on_access_token_id                   |    0.4 |            0
 mastodon_production | public     | users                                       |    1.5 |     6225920 | index_users_on_account_id                                      |    0.2 |            0
 mastodon_production | public     | users                                       |    1.5 |     6225920 | index_users_on_role_id                                         |    2.0 |         8192
 mastodon_production | public     | users                                       |    1.5 |     6225920 | index_users_on_reset_password_token                            |    0.9 |            0
 mastodon_production | public     | users                                       |    1.5 |     6225920 | index_users_on_email                                           |    0.4 |            0
 mastodon_production | public     | users                                       |    1.5 |     6225920 | users_pkey                                                     |    0.2 |            0
 mastodon_production | public     | users                                       |    1.5 |     6225920 | index_users_on_confirmation_token                              |    0.4 |            0
 mastodon_production | public     | users                                       |    1.5 |     6225920 | index_users_on_created_by_application_id                       |    0.2 |            0
 mastodon_production | public     | custom_emojis                               |    1.1 |     6062080 | custom_emojis_pkey                                             |    0.1 |            0
 mastodon_production | public     | custom_emojis                               |    1.1 |     6062080 | index_custom_emojis_on_shortcode_and_domain                    |    0.3 |            0
 mastodon_production | public     | web_settings                                |    1.2 |     5939200 | index_web_settings_on_user_id                                  |    0.0 |            0
 mastodon_production | public     | web_settings                                |    1.2 |     5939200 | web_settings_pkey                                              |    0.0 |            0
 mastodon_production | public     | featured_tags                               |    1.2 |     5521408 | index_featured_tags_on_account_id_and_tag_id                   |    0.5 |            0
 mastodon_production | public     | featured_tags                               |    1.2 |     5521408 | featured_tags_pkey                                             |    0.5 |            0
 mastodon_production | public     | web_push_subscriptions                      |    1.2 |     5193728 | index_web_push_subscriptions_on_access_token_id                |    0.1 |            0
 mastodon_production | public     | web_push_subscriptions                      |    1.2 |     5193728 | index_web_push_subscriptions_on_user_id                        |    0.1 |            0
 mastodon_production | public     | web_push_subscriptions                      |    1.2 |     5193728 | web_push_subscriptions_pkey                                    |    0.2 |            0
 mastodon_production | public     | blocks                                      |    1.6 |     4431872 | index_blocks_on_target_account_id                              |    0.4 |            0
 mastodon_production | public     | blocks                                      |    1.6 |     4431872 | index_blocks_on_account_id_and_target_account_id               |    0.5 |            0
 mastodon_production | public     | blocks                                      |    1.6 |     4431872 | blocks_pkey                                                    |    0.3 |            0
 mastodon_production | public     | account_conversations                       |    1.3 |     3686400 | index_unique_conversations                                     |    0.9 |            0
 mastodon_production | public     | account_conversations                       |    1.3 |     3686400 | account_conversations_pkey                                     |    0.2 |            0
 mastodon_production | public     | account_conversations                       |    1.3 |     3686400 | index_account_conversations_on_conversation_id                 |    0.3 |            0
 mastodon_production | public     | settings                                    |    1.1 |     2392064 | settings_pkey                                                  |    0.3 |            0
 mastodon_production | public     | settings                                    |    1.1 |     2392064 | index_settings_on_thing_type_and_thing_id_and_var              |    0.7 |            0
 mastodon_production | public     | announcement_mutes                          |    2.1 |     1138688 | index_announcement_mutes_on_announcement_id                    |    0.6 |            0
 mastodon_production | public     | announcement_mutes                          |    2.1 |     1138688 | announcement_mutes_pkey                                        |    0.5 |            0
 mastodon_production | public     | announcement_mutes                          |    2.1 |     1138688 | index_announcement_mutes_on_account_id_and_announcement_id     |    0.9 |            0
 mastodon_production | public     | account_domain_blocks                       |    7.2 |      958464 | index_account_domain_blocks_on_account_id_and_domain           |    3.3 |       278528
 mastodon_production | public     | account_domain_blocks                       |    7.2 |      958464 | account_domain_blocks_pkey                                     |    1.3 |        40960
 mastodon_production | public     | markers                                     |    1.3 |      819200 | markers_pkey                                                   |    0.4 |            0
 mastodon_production | public     | markers                                     |    1.3 |      819200 | index_markers_on_user_id_and_timeline                          |    0.6 |            0
 mastodon_production | public     | pghero_space_stats                          |    1.0 |      761856 | index_pghero_space_stats_on_database_and_captured_at           |    0.4 |            0
 mastodon_production | public     | pghero_space_stats                          |    1.0 |      761856 | pghero_space_stats_pkey                                        |    0.3 |            0
 mastodon_production | public     | follow_requests                             |    1.3 |      630784 | index_follow_requests_on_account_id_and_target_account_id      |    0.7 |            0
 mastodon_production | public     | follow_requests                             |    1.3 |      630784 | follow_requests_pkey                                           |    2.7 |      2842624
 mastodon_production | public     | list_accounts                               |    1.6 |      614400 | index_list_accounts_on_follow_id                               |    0.6 |            0
 mastodon_production | public     | list_accounts                               |    1.6 |      614400 | index_list_accounts_on_account_id_and_list_id                  |    0.8 |            0
 mastodon_production | public     | list_accounts                               |    1.6 |      614400 | list_accounts_pkey                                             |    0.6 |            0
 mastodon_production | public     | list_accounts                               |    1.6 |      614400 | index_list_accounts_on_list_id_and_account_id                  |    0.8 |            0
 mastodon_production | public     | instances                                   |    1.3 |      524288 | index_instances_on_domain                                      |    1.7 |       983040
 mastodon_production | public     | account_warnings                            |    3.1 |      450560 | account_warnings_pkey                                          |    0.4 |            0
 mastodon_production | pg_catalog | pg_attribute                                |    1.3 |      253952 | pg_attribute_relid_attnum_index                                |    0.3 |            0
 mastodon_production | pg_catalog | pg_attribute                                |    1.3 |      253952 | pg_attribute_relid_attnam_index                                |    0.4 |            0
 mastodon_production | public     | account_summaries                           |    1.1 |      212992 | index_account_summaries_on_account_id                          |    0.9 |            0
 mastodon_production | public     | status_trends                               |    3.0 |      196608 | index_status_trends_on_account_id                              |   39.2 |      2818048
 mastodon_production | public     | status_trends                               |    3.0 |      196608 | status_trends_pkey                                             |   37.4 |      2686976
 mastodon_production | public     | status_trends                               |    3.0 |      196608 | index_status_trends_on_status_id                               |   34.1 |      2441216
 mastodon_production | public     | account_moderation_notes                    |    2.6 |      188416 | account_moderation_notes_pkey                                  |    0.6 |            0
 mastodon_production | public     | tag_follows                                 |    1.1 |      180224 | index_tag_follows_on_account_id_and_tag_id                     |    0.9 |            0
 mastodon_production | public     | tag_follows                                 |    1.1 |      180224 | index_tag_follows_on_tag_id                                    |    0.7 |            0
 mastodon_production | public     | tag_follows                                 |    1.1 |      180224 | tag_follows_pkey                                               |    0.5 |            0
 mastodon_production | public     | preview_card_trends                         |    3.6 |      172032 | index_preview_card_trends_on_preview_card_id                   |   29.2 |      1384448
 mastodon_production | public     | preview_card_trends                         |    3.6 |      172032 | preview_card_trends_pkey                                       |   24.7 |      1163264
 mastodon_production | public     | announcement_reactions                      |    1.4 |      163840 | index_announcement_reactions_on_account_id_and_announcement_id |    0.9 |            0
 mastodon_production | public     | announcement_reactions                      |    1.4 |      163840 | index_announcement_reactions_on_announcement_id                |    0.6 |            0
 mastodon_production | public     | announcement_reactions                      |    1.4 |      163840 | announcement_reactions_pkey                                    |    0.5 |            0
 mastodon_production | public     | follow_recommendations                      |    1.1 |      163840 | index_follow_recommendations_on_account_id                     |    0.3 |            0
 mastodon_production | public     | announcement_reactions                      |    1.4 |      163840 | index_announcement_reactions_on_custom_emoji_id                |    0.8 |            0
 mastodon_production | pg_catalog | pg_depend                                   |    1.3 |      155648 | pg_depend_depender_index                                       |    1.6 |       212992
 mastodon_production | public     | reports                                     |    1.2 |      155648 | index_reports_on_assigned_account_id                           |    2.0 |         8192
 mastodon_production | public     | reports                                     |    1.2 |      155648 | index_reports_on_target_account_id                             |    0.2 |            0
 mastodon_production | public     | reports                                     |    1.2 |      155648 | index_reports_on_action_taken_by_account_id                    |    0.2 |            0
 mastodon_production | public     | reports                                     |    1.2 |      155648 | reports_pkey                                                   |    0.2 |            0
 mastodon_production | pg_catalog | pg_depend                                   |    1.3 |      155648 | pg_depend_reference_index                                      |    1.5 |       196608
 mastodon_production | public     | account_deletion_requests                   |    9.5 |      139264 | account_deletion_requests_pkey                                 |   10.0 |        73728
 mastodon_production | public     | account_deletion_requests                   |    9.5 |      139264 | index_account_deletion_requests_on_account_id                  |   12.0 |        90112
 mastodon_production | public     | canonical_email_blocks                      |    2.3 |      122880 | canonical_email_blocks_pkey                                    |    0.5 |            0
 mastodon_production | public     | canonical_email_blocks                      |    2.3 |      122880 | index_canonical_email_blocks_on_reference_account_id           |    0.5 |            0
 mastodon_production | public     | canonical_email_blocks                      |    2.3 |      122880 | index_canonical_email_blocks_on_canonical_email_hash           |    1.3 |        24576
 mastodon_production | public     | account_notes                               |    1.1 |      114688 | account_notes_pkey                                             |    0.2 |            0
 mastodon_production | public     | account_notes                               |    1.1 |      114688 | index_account_notes_on_account_id_and_target_account_id        |    0.3 |            0
 mastodon_production | pg_catalog | pg_class                                    |    1.4 |       73728 | pg_class_tblspc_relfilenode_index                              |    0.4 |            0
 mastodon_production | pg_catalog | pg_class                                    |    1.4 |       73728 | pg_class_oid_index                                             |    0.4 |            0
 mastodon_production | pg_catalog | pg_class                                    |    1.4 |       73728 | pg_class_relname_nsp_index                                     |    1.2 |        32768
 mastodon_production | public     | custom_filter_keywords                      |    1.1 |       49152 | index_custom_filter_keywords_on_custom_filter_id               |    0.5 |            0
 mastodon_production | public     | custom_filter_keywords                      |    1.1 |       49152 | custom_filter_keywords_pkey                                    |    0.5 |            0
 mastodon_production | public     | unavailable_domains                         |    1.0 |       49152 | unavailable_domains_pkey                                       |    0.5 |            0
 mastodon_production | public     | unavailable_domains                         |    1.0 |       49152 | index_unavailable_domains_on_domain                            |    1.1 |       147456
 mastodon_production | public     | scheduled_statuses                          |    1.7 |       32768 | index_scheduled_statuses_on_account_id                         |    0.4 |            0
 mastodon_production | public     | scheduled_statuses                          |    1.7 |       32768 | scheduled_statuses_pkey                                        |    0.4 |            0
 mastodon_production | public     | mutes                                       |    1.0 |       32768 | index_mutes_on_account_id_and_target_account_id                |    0.9 |            0
 mastodon_production | public     | mutes                                       |    1.0 |       32768 | mutes_pkey                                                     |    0.6 |            0
 mastodon_production | public     | mutes                                       |    1.0 |       32768 | index_mutes_on_target_account_id                               |    0.7 |            0
 mastodon_production | pg_catalog | pg_description                              |    1.1 |       32768 | pg_description_o_c_o_index                                     |    0.7 |            0
 mastodon_production | public     | backups                                     |    4.0 |       24576 | backups_pkey                                                   |    2.0 |         8192
 mastodon_production | public     | custom_filter_statuses                      |    2.5 |       24576 | custom_filter_statuses_pkey                                    |    2.0 |         8192
 mastodon_production | public     | custom_filter_statuses                      |    2.5 |       24576 | index_custom_filter_statuses_on_status_id                      |    2.0 |         8192
 mastodon_production | public     | custom_filter_statuses                      |    2.5 |       24576 | index_custom_filter_statuses_on_custom_filter_id               |    2.0 |         8192
 mastodon_production | public     | lists                                       |    1.1 |       24576 | lists_pkey                                                     |    0.6 |            0
 mastodon_production | public     | lists                                       |    1.1 |       24576 | index_lists_on_account_id                                      |    0.5 |            0
 mastodon_production | pg_catalog | pg_type                                     |    1.1 |       16384 | pg_type_typname_nsp_index                                      |    0.6 |            0
 mastodon_production | public     | account_migrations                          |    1.2 |       16384 | index_account_migrations_on_target_account_id                  |    0.5 |            0
 mastodon_production | public     | domain_blocks                               |    1.5 |       16384 | index_domain_blocks_on_domain                                  |    0.7 |            0
 mastodon_production | public     | account_migrations                          |    1.2 |       16384 | index_account_migrations_on_account_id                         |    0.7 |            0
 mastodon_production | pg_catalog | pg_collation                                |    1.1 |       16384 | pg_collation_oid_index                                         |    0.2 |            0
 mastodon_production | pg_catalog | pg_collation                                |    1.1 |       16384 | pg_collation_name_enc_nsp_index                                |    0.3 |            0
 mastodon_production | pg_catalog | pg_type                                     |    1.1 |       16384 | pg_type_oid_index                                              |    0.4 |            0
 mastodon_production | pg_catalog | pg_index                                    |    1.2 |       16384 | pg_index_indrelid_index                                        |    0.4 |            0
 mastodon_production | public     | domain_blocks                               |    1.5 |       16384 | domain_blocks_pkey                                             |    0.7 |            0
 mastodon_production | pg_catalog | pg_index                                    |    1.2 |       16384 | pg_index_indexrelid_index                                      |    0.4 |            0
 mastodon_production | public     | account_migrations                          |    1.2 |       16384 | account_migrations_pkey                                        |    0.6 |            0
 mastodon_production | pg_catalog | pg_operator                                 |    1.1 |        8192 | pg_operator_oprname_l_r_n_index                                |    0.5 |            0
 mastodon_production | pg_catalog | pg_amop                                     |    1.2 |        8192 | pg_amop_fam_strat_index                                        |    1.3 |         8192
 mastodon_production | public     | appeals                                     |    1.3 |        8192 | index_appeals_on_account_warning_id                            |    0.7 |            0
 mastodon_production | pg_catalog | pg_amop                                     |    1.2 |        8192 | pg_amop_opr_fam_index                                          |    1.3 |         8192
 mastodon_production | pg_catalog | pg_operator                                 |    1.1 |        8192 | pg_operator_oid_index                                          |    0.4 |            0
 mastodon_production | pg_catalog | pg_opclass                                  |    1.5 |        8192 | pg_opclass_oid_index                                           |    1.0 |            0
 mastodon_production | pg_catalog | pg_opclass                                  |    1.5 |        8192 | pg_opclass_am_name_nsp_index                                   |    1.0 |            0
 mastodon_production | public     | appeals                                     |    1.3 |        8192 | index_appeals_on_account_id                                    |    0.7 |            0
 mastodon_production | public     | appeals                                     |    1.3 |        8192 | appeals_pkey                                                   |    0.7 |            0
 mastodon_production | public     | announcements                               |    2.0 |        8192 | announcements_pkey                                             |    2.0 |         8192
 mastodon_production | public     | admin_action_logs                           |    1.0 |        8192 | index_admin_action_logs_on_target_type_and_target_id           |    0.5 |            0
 mastodon_production | public     | admin_action_logs                           |    1.0 |        8192 | index_admin_action_logs_on_account_id                          |    0.3 |            0
 mastodon_production | public     | admin_action_logs                           |    1.0 |        8192 | admin_action_logs_pkey                                         |    0.3 |            0
 mastodon_production | public     | accounts_tags                               |    1.0 |        8192 | index_accounts_tags_on_tag_id_and_account_id                   |    1.1 |        40960
 mastodon_production | public     | accounts_tags                               |    1.0 |        8192 | index_accounts_tags_on_account_id_and_tag_id                   |    1.2 |        49152
 mastodon_production | pg_catalog | pg_conversion                               |    1.5 |        8192 | pg_conversion_oid_index                                        |    1.0 |            0
 mastodon_production | pg_catalog | pg_conversion                               |    1.5 |        8192 | pg_conversion_name_nsp_index                                   |    1.0 |            0
 mastodon_production | pg_catalog | pg_conversion                               |    1.5 |        8192 | pg_conversion_default_index                                    |    1.0 |            0
 mastodon_production | public     | custom_filters                              |    1.0 |        8192 | custom_filters_pkey                                            |    0.3 |            0
 mastodon_production | public     | appeals                                     |    1.3 |        8192 | index_appeals_on_rejected_by_account_id                        |    1.0 |            0
 mastodon_production | public     | appeals                                     |    1.3 |        8192 | index_appeals_on_approved_by_account_id                        |    2.0 |         8192
 mastodon_production | public     | account_aliases                             |    1.1 |        8192 | index_account_aliases_on_account_id                            |    0.5 |            0
 mastodon_production | public     | account_aliases                             |    1.1 |        8192 | account_aliases_pkey                                           |    0.5 |            0
 mastodon_production | pg_catalog | pg_amproc                                   |    1.3 |        8192 | pg_amproc_oid_index                                            |    2.0 |        16384
 mastodon_production | pg_catalog | pg_amproc                                   |    1.3 |        8192 | pg_amproc_fam_proc_index                                       |    2.0 |        16384
 mastodon_production | pg_catalog | pg_amop                                     |    1.2 |        8192 | pg_amop_oid_index                                              |    1.0 |            0
 mastodon_production | pg_catalog | pg_pltemplate                               |    1.0 |           0 | pg_pltemplate_name_index                                       |    2.0 |         8192
 mastodon_production | pg_catalog | pg_opfamily                                 |    1.0 |           0 | pg_opfamily_oid_index                                          |    1.0 |            0
 mastodon_production | pg_catalog | pg_opfamily                                 |    1.0 |           0 | pg_opfamily_am_name_nsp_index                                  |    1.0 |            0
 mastodon_production | pg_catalog | pg_namespace                                |    1.0 |           0 | pg_namespace_oid_index                                         |    0.5 |            0
 mastodon_production | pg_catalog | pg_namespace                                |    1.0 |           0 | pg_namespace_nspname_index                                     |    1.0 |            0
 mastodon_production | pg_catalog | pg_language                                 |    1.0 |           0 | pg_language_oid_index                                          |    2.0 |         8192
 mastodon_production | pg_catalog | pg_language                                 |    1.0 |           0 | pg_language_name_index                                         |    2.0 |         8192
 mastodon_production | pg_catalog | pg_init_privs                               |    1.0 |           0 | pg_init_privs_o_c_o_index                                      |    1.0 |            0
 mastodon_production | pg_catalog | pg_extension                                |    1.0 |           0 | pg_extension_name_index                                        |    2.0 |         8192
 mastodon_production | pg_catalog | pg_extension                                |    1.0 |           0 | pg_extension_oid_index                                         |    2.0 |         8192
 mastodon_production | pg_catalog | pg_database                                 |    1.0 |           0 | pg_database_oid_index                                          |    2.0 |         8192
 mastodon_production | pg_catalog | pg_database                                 |    1.0 |           0 | pg_database_datname_index                                      |    2.0 |         8192
 mastodon_production | pg_catalog | pg_constraint                               |    0.9 |           0 | pg_constraint_oid_index                                        |    0.4 |            0
 mastodon_production | pg_catalog | pg_constraint                               |    0.9 |           0 | pg_constraint_contypid_index                                   |    0.4 |            0
 mastodon_production | pg_catalog | pg_constraint                               |    0.9 |           0 | pg_constraint_conrelid_index                                   |    0.4 |            0
 mastodon_production | pg_catalog | pg_constraint                               |    0.9 |           0 | pg_constraint_conname_nsp_index                                |    1.0 |            0
 mastodon_production | pg_catalog | pg_cast                                     |    1.0 |           0 | pg_cast_source_target_index                                    |    2.0 |         8192
 mastodon_production | pg_catalog | pg_cast                                     |    1.0 |           0 | pg_cast_oid_index                                              |    2.0 |         8192
 mastodon_production | pg_catalog | pg_authid                                   |    1.0 |           0 | pg_authid_oid_index                                            |    2.0 |         8192
 mastodon_production | public     | tombstones                                  |    0.9 |           0 | tombstones_pkey                                                |    0.2 |            0
 mastodon_production | public     | tombstones                                  |    0.9 |           0 | index_tombstones_on_account_id                                 |    0.2 |            0
 mastodon_production | public     | tombstones                                  |    0.9 |           0 | index_tombstones_on_uri                                        |    1.1 |    276119552
 mastodon_production | public     | webauthn_credentials                        |    1.0 |           0 | index_webauthn_credentials_on_external_id                      |    1.0 |            0
 mastodon_production | public     | webauthn_credentials                        |    1.0 |           0 | index_webauthn_credentials_on_user_id                          |    1.0 |            0
 mastodon_production | public     | user_roles                                  |    1.0 |           0 | user_roles_pkey                                                |    2.0 |         8192
 mastodon_production | pg_catalog | pg_authid                                   |    1.0 |           0 | pg_authid_rolname_index                                        |    2.0 |         8192
 mastodon_production | pg_catalog | pg_auth_members                             |    1.0 |           0 | pg_auth_members_member_role_index                              |    2.0 |         8192
 mastodon_production | pg_catalog | pg_auth_members                             |    1.0 |           0 | pg_auth_members_role_member_index                              |    2.0 |         8192
 mastodon_production | pg_catalog | pg_attrdef                                  |    1.0 |           0 | pg_attrdef_oid_index                                           |    0.3 |            0
 mastodon_production | pg_catalog | pg_attrdef                                  |    1.0 |           0 | pg_attrdef_adrelid_adnum_index                                 |    0.3 |            0
 mastodon_production | pg_catalog | pg_am                                       |    1.0 |           0 | pg_am_oid_index                                                |    2.0 |         8192
 mastodon_production | pg_catalog | pg_am                                       |    1.0 |           0 | pg_am_name_index                                               |    2.0 |         8192
 mastodon_production | public     | webauthn_credentials                        |    1.0 |           0 | webauthn_credentials_pkey                                      |    1.0 |            0
 mastodon_production | public     | email_domain_blocks                         |    1.0 |           0 | index_email_domain_blocks_on_domain                            |    2.0 |         8192
 mastodon_production | public     | email_domain_blocks                         |    1.0 |           0 | email_domain_blocks_pkey                                       |    2.0 |         8192
 mastodon_production | pg_catalog | pg_aggregate                                |    1.0 |           0 | pg_aggregate_fnoid_index                                       |    1.0 |            0
 mastodon_production | public     | custom_emoji_categories                     |    1.0 |           0 | index_custom_emoji_categories_on_name                          |    2.0 |         8192
 mastodon_production | public     | custom_emoji_categories                     |    1.0 |           0 | custom_emoji_categories_pkey                                   |    2.0 |         8192
 mastodon_production | public     | imports                                     |    1.0 |           0 | imports_pkey                                                   |    2.0 |         8192
 mastodon_production | public     | conversation_mutes                          |    1.0 |           0 | index_conversation_mutes_on_account_id_and_conversation_id     |    1.7 |        16384
 mastodon_production | public     | conversation_mutes                          |    1.0 |           0 | conversation_mutes_pkey                                        |    1.3 |         8192
 mastodon_production | public     | invites                                     |    0.9 |           0 | invites_pkey                                                   |    0.7 |            0
 mastodon_production | public     | invites                                     |    0.9 |           0 | index_invites_on_code                                          |    0.8 |            0
 mastodon_production | public     | ip_blocks                                   |    1.0 |           0 | ip_blocks_pkey                                                 |    2.0 |         8192
 mastodon_production | public     | ip_blocks                                   |    1.0 |           0 | index_ip_blocks_on_ip                                          |    2.0 |         8192
 mastodon_production | public     | ar_internal_metadata                        |    1.0 |           0 | ar_internal_metadata_pkey                                      |    2.0 |         8192
 mastodon_production | public     | account_warning_presets                     |    1.0 |           0 | account_warning_presets_pkey                                   |    2.0 |         8192
 mastodon_production | public     | account_statuses_cleanup_policies           |    0.9 |           0 | index_account_statuses_cleanup_policies_on_account_id          |    0.6 |            0
 mastodon_production | public     | account_statuses_cleanup_policies           |    0.9 |           0 | account_statuses_cleanup_policies_pkey                         |    0.6 |            0
 mastodon_production | public     | account_pins                                |    1.0 |           0 | index_account_pins_on_account_id_and_target_account_id         |    2.0 |         8192
 mastodon_production | public     | account_pins                                |    1.0 |           0 | account_pins_pkey                                              |    2.0 |         8192
 mastodon_production | public     | oauth_access_grants                         |    1.0 |           0 | oauth_access_grants_pkey                                       |   10.0 |        73728
 mastodon_production | public     | oauth_access_grants                         |    1.0 |           0 | index_oauth_access_grants_on_resource_owner_id                 |   12.0 |        90112
 mastodon_production | public     | oauth_access_grants                         |    1.0 |           0 | index_oauth_access_grants_on_token                             |   30.0 |       237568
 mastodon_production | pg_catalog | pg_ts_template                              |    1.0 |           0 | pg_ts_template_oid_index                                       |    2.0 |         8192
 mastodon_production | pg_catalog | pg_ts_template                              |    1.0 |           0 | pg_ts_template_tmplname_index                                  |    2.0 |         8192
 mastodon_production | pg_catalog | pg_ts_parser                                |    1.0 |           0 | pg_ts_parser_oid_index                                         |    2.0 |         8192
 mastodon_production | pg_catalog | pg_ts_parser                                |    1.0 |           0 | pg_ts_parser_prsname_index                                     |    2.0 |         8192
 mastodon_production | pg_catalog | pg_ts_dict                                  |    1.0 |           0 | pg_ts_dict_oid_index                                           |    2.0 |         8192
 mastodon_production | pg_catalog | pg_ts_dict                                  |    1.0 |           0 | pg_ts_dict_dictname_index                                      |    2.0 |         8192
 mastodon_production | pg_catalog | pg_ts_config_map                            |    1.0 |           0 | pg_ts_config_map_index                                         |    2.0 |        16384
 mastodon_production | pg_catalog | pg_ts_config                                |    1.0 |           0 | pg_ts_config_oid_index                                         |    2.0 |         8192
 mastodon_production | pg_catalog | pg_ts_config                                |    1.0 |           0 | pg_ts_config_cfgname_index                                     |    2.0 |         8192
 mastodon_production | pg_catalog | pg_trigger                                  |    1.0 |           0 | pg_trigger_oid_index                                           |    0.5 |            0
 mastodon_production | pg_catalog | pg_trigger                                  |    1.0 |           0 | pg_trigger_tgrelid_tgname_index                                |    0.8 |            0
 mastodon_production | public     | preview_card_providers                      |    0.8 |           0 | preview_card_providers_pkey                                    |    0.7 |            0
 mastodon_production | public     | preview_card_providers                      |    0.8 |           0 | index_preview_card_providers_on_domain                         |    1.3 |         8192
 mastodon_production | pg_catalog | pg_trigger                                  |    1.0 |           0 | pg_trigger_tgconstraint_index                                  |    0.5 |            0
 mastodon_production | pg_catalog | pg_tablespace                               |    1.0 |           0 | pg_tablespace_spcname_index                                    |    2.0 |         8192
 mastodon_production | pg_catalog | pg_tablespace                               |    1.0 |           0 | pg_tablespace_oid_index                                        |    2.0 |         8192
 mastodon_production | pg_catalog | pg_shdescription                            |    1.0 |           0 | pg_shdescription_o_c_index                                     |    2.0 |         8192
 mastodon_production | pg_catalog | pg_shdepend                                 |    1.0 |           0 | pg_shdepend_reference_index                                    |    2.0 |         8192
 mastodon_production | public     | report_notes                                |    1.0 |           0 | report_notes_pkey                                              |    1.0 |            0
 mastodon_production | pg_catalog | pg_shdepend                                 |    1.0 |           0 | pg_shdepend_depender_index                                     |    2.0 |         8192
 mastodon_production | pg_catalog | pg_sequence                                 |    1.0 |           0 | pg_sequence_seqrelid_index                                     |    2.0 |         8192
 mastodon_production | pg_catalog | pg_rewrite                                  |    1.0 |           0 | pg_rewrite_rel_rulename_index                                  |    0.2 |            0
 mastodon_production | pg_catalog | pg_rewrite                                  |    1.0 |           0 | pg_rewrite_oid_index                                           |    0.2 |            0
 mastodon_production | public     | rules                                       |    1.0 |           0 | rules_pkey                                                     |    2.0 |         8192
 mastodon_production | public     | schema_migrations                           |    1.0 |           0 | schema_migrations_pkey                                         |    2.0 |        16384
 mastodon_production | public     | search_index                                |    0.9 |           0 | ?                                                              |    0.0 |            0
 mastodon_production | pg_catalog | pg_range                                    |    1.0 |           0 | pg_range_rngtypid_index                                        |    2.0 |         8192
 mastodon_production | pg_catalog | pg_proc                                     |    1.0 |           0 | pg_proc_proname_args_nsp_index                                 |    0.4 |            0
 mastodon_production | pg_catalog | pg_proc                                     |    1.0 |           0 | pg_proc_oid_index                                              |    0.2 |            0
(288)
```


Dieser Befehl wurde entnommen aus dem [PostgreSQL-Wiki](https://wiki.postgresql.org/wiki/Show_database_bloat).

```
echo "SELECT
  current_database(), schemaname, tablename, /*reltuples::bigint, relpages::bigint, otta,*/
  ROUND((CASE WHEN otta=0 THEN 0.0 ELSE sml.relpages::float/otta END)::numeric,1) AS tbloat,
  CASE WHEN relpages < otta THEN 0 ELSE bs*(sml.relpages-otta)::BIGINT END AS wastedbytes,
  iname, /*ituples::bigint, ipages::bigint, iotta,*/
  ROUND((CASE WHEN iotta=0 OR ipages=0 THEN 0.0 ELSE ipages::float/iotta END)::numeric,1) AS ibloat,
  CASE WHEN ipages < iotta THEN 0 ELSE bs*(ipages-iotta) END AS wastedibytes
FROM (
  SELECT
    schemaname, tablename, cc.reltuples, cc.relpages, bs,
    CEIL((cc.reltuples*((datahdr+ma-
      (CASE WHEN datahdr%ma=0 THEN ma ELSE datahdr%ma END))+nullhdr2+4))/(bs-20::float)) AS otta,
    COALESCE(c2.relname,'?') AS iname, COALESCE(c2.reltuples,0) AS ituples, COALESCE(c2.relpages,0) AS ipages,
    COALESCE(CEIL((c2.reltuples*(datahdr-12))/(bs-20::float)),0) AS iotta -- very rough approximation, assumes all cols
  FROM (
    SELECT
      ma,bs,schemaname,tablename,
      (datawidth+(hdr+ma-(case when hdr%ma=0 THEN ma ELSE hdr%ma END)))::numeric AS datahdr,
      (maxfracsum*(nullhdr+ma-(case when nullhdr%ma=0 THEN ma ELSE nullhdr%ma END))) AS nullhdr2
    FROM (
      SELECT
        schemaname, tablename, hdr, ma, bs,
        SUM((1-null_frac)*avg_width) AS datawidth,
        MAX(null_frac) AS maxfracsum,
        hdr+(
          SELECT 1+count(*)/8
          FROM pg_stats s2
          WHERE null_frac<>0 AND s2.schemaname = s.schemaname AND s2.tablename = s.tablename
        ) AS nullhdr
      FROM pg_stats s, (
        SELECT
          (SELECT current_setting('block_size')::numeric) AS bs,
          CASE WHEN substring(v,12,3) IN ('8.0','8.1','8.2') THEN 27 ELSE 23 END AS hdr,
          CASE WHEN v ~ 'mingw32' THEN 8 ELSE 4 END AS ma
        FROM (SELECT version() AS v) AS foo
      ) AS constants
      GROUP BY 1,2,3,4,5
    ) AS foo
  ) AS rs
  JOIN pg_class cc ON cc.relname = rs.tablename
  JOIN pg_namespace nn ON cc.relnamespace = nn.oid AND nn.nspname = rs.schemaname AND nn.nspname <> 'information_schema'
  LEFT JOIN pg_index i ON indrelid = cc.oid
  LEFT JOIN pg_class c2 ON c2.oid = i.indexrelid
) AS sml
ORDER BY wastedbytes DESC;" | psql -d mastodon_production > bloat
```

