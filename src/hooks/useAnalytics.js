import { useCallback } from 'react';
import { supabase } from '../lib/supabaseClient';

export const useAnalytics = () => {
  const trackPageView = useCallback(async (path) => {
    try {
      if (!import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY === 'Sua_Chave_Anon_Aqui') return;

      await supabase
        .from('page_views')
        .insert([{ path }]);
    } catch (error) {
      console.warn('Analytics error:', error);
    }
  }, []);

  const trackResize = useCallback(async (width, height, format) => {
    try {
      if (!import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY === 'Sua_Chave_Anon_Aqui') return;

      await supabase
        .from('image_resizes')
        .insert([{ width, height, format }]);
    } catch (error) {
      console.warn('Analytics error:', error);
    }
  }, []);

  return { trackPageView, trackResize };
};
