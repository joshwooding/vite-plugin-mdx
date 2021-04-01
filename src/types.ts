import type { Plugin as VitePlugin } from 'vite'
import type { Pluggable } from 'unified'
import mdx from '@mdx-js/mdx'

type RemarkPlugin = Pluggable
type RehypePlugin = Pluggable

export interface MdxOptions
  extends Omit<mdx.Options, 'remarkPlugins' | 'rehypePlugins'> {
  remarkPlugins?: Readonly<RemarkPlugin>[]
  rehypePlugins?: Readonly<RehypePlugin>[]
}

export interface MdxPlugin extends VitePlugin {
  mdxOptions: MdxOptions & {
    // Plugin arrays always exist when accessed by Vite plugin.
    remarkPlugins: RemarkPlugin[]
    rehypePlugins: RehypePlugin[]
  }
}